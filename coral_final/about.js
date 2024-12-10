const margin = {top: 200, right: 150, bottom: 70, left: 70};
        const width = 900 - margin.left - margin.right;
        const height = 700 - margin.top - margin.bottom;

        function createAndAnimateChart() {

            // Create SVG
            const svg = d3.select("#chart")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", `translate(${margin.left},${margin.top})`);

        svg.append("text")
            .attr("x", width / 2)
            .attr("y", -margin.top / 2)
            .attr("text-anchor", "middle")
            .attr("fill", "#626262")
            .attr("font-family", "Cormorant Garamond")
            .attr("font-size", "20px")
            .attr("font-style", "italic")
            .attr("font-weight", 700)
            .attr("letter-spacing", "4px")
            .text("DAILY SEA SURFACE TEMPERATURE 60°S-60°N");

        // Parse date and SST
        const parseDate = d3.timeParse("%Y-%m-%d");
        const formatMonth = d3.timeFormat("%b");

        // Function to get decade
        const getDecade = year => Math.floor(year / 10) * 10;

        svg.append("text")
        .attr("x", 70)  // Set x to 0 to align with the left edge of the chart
        .attr("text-anchor", "start")  // Align text to start from this point
        .attr("y", height + margin.bottom - 10)
        .attr("text-anchor", "middle")
        .attr("fill", "#626262")
        .attr("font-family", "Work Sans")
        .style("padding-left", "20px")
        .attr("font-size", "10px")
        .attr("font-weight", 400)
        .text("Data: ERA5 1979-2023 Credit: C3S/ECMWF");

        // Load and process data
        d3.csv("sea-temp.csv").then(data => {
            data.forEach(d => {
                d.date = parseDate(d.date);
                d.sst = +d.sst;
                d.year = d.date.getFullYear();
                d.month = d.date.getMonth();
                d.decade = getDecade(d.year);
            });

            // Group data by year and month
            const groupedData = d3.group(data, d => d.year, d => d.month);

            // Calculate average temperature for each month and year
            const averagedData = Array.from(groupedData, ([year, months]) => ({
                year: +year,
                decade: getDecade(+year),
                temperatures: Array.from(months, ([month, values]) => ({
                    month: +month,
                    avgTemp: d3.mean(values, d => d.sst)
                }))
            })).sort((a, b) => a.year - b.year);

            // Set up scales
            const xScale = d3.scaleBand()
                .domain(d3.range(12))
                .range([0, width])
                .padding(0.1);

            const yScale = d3.scaleLinear()
                .domain([d3.min(averagedData, d => d3.min(d.temperatures, t => t.avgTemp)),
                         d3.max(averagedData, d => d3.max(d.temperatures, t => t.avgTemp))])
                .range([height, 0]);

                const colorScale = d3.scaleOrdinal()
                .domain([1970, 1980, 1990, 2000, 2010, 2020])
                .range(['#E6E6E6', '#999999', '#696564', '#534E4E', '#3F3A3A', '#2C2627']);


            // Create line generator
            const line = d3.line()
                .x(d => xScale(d.month) + xScale.bandwidth() / 2)
                .y(d => yScale(d.avgTemp));

            // Draw lines with animation
            averagedData.forEach((yearData, index) => {
                const path = svg.append("path")
                    .datum(yearData.temperatures)
                    .attr("fill", "none")
                    .attr("stroke", colorScale(yearData.decade))
                    .attr("stroke-width", 1)
                    .attr("opacity", 0.5)
                    .attr("d", line);

                const totalLength = path.node().getTotalLength();

                path.attr("stroke-dasharray", totalLength)
                    .attr("stroke-dashoffset", totalLength)
                    .transition()
                    .duration(1000)
                    .delay(index * 100)
                    .ease(d3.easeLinear)
                    .attr("stroke-dashoffset", 0);
            });

            // Add x-axis
            svg.append("g")
                .attr("transform", `translate(0,${height})`)
                .call(d3.axisBottom(xScale).tickFormat(i => formatMonth(new Date(2020, i, 1))));

            // Add y-axis
            svg.append("g")
                .call(d3.axisLeft(yScale));

            // Add labels
            svg.append("text")
                .attr("x", width / 2)
                .attr("y", height + 40)
                .style("text-anchor", "middle")
                .text("Month");

            svg.append("text")
                .attr("transform", "rotate(-90)")
                .attr("x", -height / 2)
                .attr("y", -40)
                .style("text-anchor", "middle")
                .text("Temperature (°C)");

            // Add legend
            const legend = svg.append("g")
                .attr("transform", `translate(${width + 20}, 0)`);

            [1970, 1980, 1990, 2000, 2010, 2020].forEach((year, i) => {
                legend.append("rect")
                    .attr("x", 0)
                    .attr("y", i * 20)
                    .attr("width", 10)
                    .attr("height", 10)
                    .attr("fill", colorScale(year));

                legend.append("text")
                    .attr("x", 20)
                    .attr("y", i * 20 + 9)
                    .text(year + "s")
                    .attr("font-family", "Work Sans")
                    .style("font-size", "12px");
            });
        });
    }