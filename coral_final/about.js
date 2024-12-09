        const margin = {top: 70, right: 150, bottom: 40, left: 60};
        const width = 900 - margin.left - margin.right;
        const height = 800 - margin.top - margin.bottom;

        const svg = d3.select("#chart")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        const parseDate = d3.timeParse("%Y-%m-%d");

        const tooltip = d3.select("body")
            .append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        d3.csv("sea-temp.csv").then(function(rawData) {
            const data = rawData.filter(d => {
                const parsedDate = parseDate(d.date);
                return parsedDate !== null && !isNaN(+d.sst);
            }).map(d => {
                const parsedDate = parseDate(d.date);
                return {
                    date: parsedDate,
                    sst: +d.sst,
                    year: parsedDate.getFullYear(),
                    decade: Math.floor(parsedDate.getFullYear() / 10) * 10 + "s",
                    status: d.status
                };
            });

            // Get year range for x-axis
            const yearStart = new Date(data[0].date.getFullYear(), 0, 1);
            const yearEnd = new Date(data[0].date.getFullYear(), 11, 31);

            const x = d3.scaleTime()
                .domain([yearStart, yearEnd])
                .range([0, width]);

            const y = d3.scaleLinear()
                .domain([19.4, 21.2])
                .range([height, 0]);

            svg.append("g")
                .attr("class", "axis")
                .attr("transform", `translate(0,${height})`)
                .call(d3.axisBottom(x)
                    .tickFormat(d3.timeFormat("%b")));

            // Add Y axis
            svg.append("g")
                .attr("class", "axis")
                .call(d3.axisLeft(y));

            // Group data by decade
            const nestedData = d3.group(data, d => d.decade);

            // Color scale for decades
            const colorScale = d3.scaleOrdinal()
                .domain(['2020s', '2010s', '2000s', '1990s', '1980s', '1970s'])
                .range(['#464646', '#646464', '#828282', '#A0A0A0', '#BEBEBE', '#D9D9D9']);

            // Create line generator that properly handles dates across years
   // Create line generator that properly handles dates across years
const line = d3.line()
.x(d => {
    const normalizedDate = new Date(yearStart.getFullYear(), 
                                  d.date.getMonth(), 
                                  d.date.getDate());
    return x(normalizedDate);
})
.y(d => y(d.sst))
.defined(d => !isNaN(d.sst) && d.sst !== 0 && d.sst >= 19.4 && d.sst <= 21.2) // Add range check
.curve(d3.curveLinear); // Use linear interpolation

// Add the lines for each decade
nestedData.forEach((values, decade) => {
// First, sort and filter the values to ensure valid data points
const validData = Array.from(values)
    .sort((a, b) => a.date - b.date)
    .filter(d => !isNaN(d.sst) && d.sst !== 0 && d.sst >= 19.4 && d.sst <= 21.2);

// Create segments when there are gaps of more than 1 day
const segments = [];
let currentSegment = [validData[0]];

for (let i = 1; i < validData.length; i++) {
    const daysDiff = (validData[i].date - validData[i-1].date) / (1000 * 60 * 60 * 24);
    
    if (daysDiff > 1) {
        if (currentSegment.length > 0) {
            segments.push(currentSegment);
        }
        currentSegment = [];
    }
    currentSegment.push(validData[i]);
}

if (currentSegment.length > 0) {
    segments.push(currentSegment);
}

// Draw each continuous segment
segments.forEach(segment => {
    if (segment && segment.length > 1) {  // Only draw if we have at least 2 points
        svg.append("path")
            .datum(segment)
            .attr("fill", "none")
            .attr("stroke", colorScale(decade))
            .attr("stroke-width", decade === '2020s' ? 2 : 1)
            .attr("d", line);
    }
});
});

            // Add legend
            const legend = svg.append("g")
                .attr("font-family", "sans-serif")
                .attr("font-size", 10)
                .attr("text-anchor", "start")
                .selectAll("g")
                .data(colorScale.domain().reverse())
                .enter().append("g")
                .attr("transform", (d, i) => `translate(${width + 10},${i * 20 + 20})`);

            legend.append("rect")
                .attr("x", 0)
                .attr("width", 19)
                .attr("height", 19)
                .attr("fill", colorScale);

            legend.append("text")
                .attr("x", 24)
                .attr("y", 9.5)
                .attr("dy", "0.32em")
                .text(d => d)
                .style("fill", "#000");

            // Add title
            svg.append("text")
                .attr("x", width / 2)
                .attr("y", -margin.top / 2)
                .attr("text-anchor", "middle")
                .style("font-size", "16px")
                .style("fill", "#000")
                .style("font-family", "Cormorant Garamond")

                .text("Daily Sea Surface Temperature 60°S-60°N");
        }).catch(error => {
            console.error("Error loading or processing data:", error);
        });