const dataByRegion = {
    'main-hawaiian-islands': {
        availableYears: [2013, 2016, 2019],
        data: {
            2019: {
                bleaching: [
                    { group: 'Leptastrea', prevalence: 22.64, disease: 4.86 },
                    { group: 'Montipora', prevalence: 17.56, disease: 0.48 },
                    { group: 'Pocillopora', prevalence: 12.43, disease: 4.04 },
                    { group: 'Cyphastrea', prevalence: 12.23, disease: 0 },
                    { group: 'Leptoseris', prevalence: 6.04, disease: 0 },
                    { group: 'Pavona', prevalence: 0.87, disease: 3.99 },
                    { group: 'Porites', prevalence: 0.56, disease: 3.71 },
                ],
                all_corals_disease: 2.57
            },
            2016: {
                bleaching: [
                    { group: 'Fungia', prevalence: 21.41, disease: 0 },
                    { group: 'Montipora', prevalence: 15.76, disease: 0.23 },
                    { group: 'Pocillopora', prevalence: 8.06, disease: 2.08 },
                    { group: 'Psammocora', prevalence: 7.88, disease: 0 },
                    { group: 'Leptastrea', prevalence: 2.43, disease: 2.36 },
                    { group: 'Cyphastrea', prevalence: 2.26, disease: 0 },
                    { group: 'Porites', prevalence: 1.62, disease: 2.07 },
                    { group: 'Pavona', prevalence: 1.00, disease: 3.13 }
                ],
                all_corals_disease: 1.39
            },
            2013: {
                bleaching: [
                    { group: 'Montipora', prevalence: 2.83, disease: 0.60 },
                    { group: 'Pocillopora', prevalence: 2.38, disease: 0.82 },
                    { group: 'Psammocora', prevalence: 1.26, disease: 0 },
                    { group: 'Porites', prevalence: 0.22, disease: 0.92 },
                    { group: 'Pavona', prevalence: 0.10, disease: 1.62 }
                ],
                all_corals_disease: 0.79
            }
        }
    },
    'american-samoa': {
        availableYears: [2015, 2018],
        data: {
            2018: {
                bleaching: [
                    { group: 'Hydnophora', prevalence: 5.17, disease: 2.44 },
                    { group: 'Pocillopora', prevalence: 3.76, disease: 2.17 },
                    { group: 'Favites', prevalence: 2.36, disease: 0 },
                    { group: 'Galaxea', prevalence: 0.35, disease: 0 },
                    { group: 'Montipora', prevalence: 0.15, disease: 1.03 },
                    { group: 'Fungia', prevalence: 0.11, disease: 0 },
                    { group: 'Favia', prevalence: 0.06, disease: 0.49 }
                ],
                all_corals_disease: 1.02
            },
            2015: {
                bleaching: [
                    { group: 'Caulastrea', prevalence: 45.22, disease: 0 },
                    { group: 'Isopora', prevalence: 24.42, disease: 0.87 },
                    { group: 'Coeloseris', prevalence: 18.10, disease: 0 },
                    { group: 'Montastraea', prevalence: 15.37, disease: 0.41 },
                    { group: 'unidentified corals', prevalence: 11.54, disease: 0 },
                    { group: 'Leptoria', prevalence: 10.55, disease: 0 },
                    { group: 'Stylophora', prevalence: 10.49, disease: 0 },
                    { group: 'Leptoseris', prevalence: 8.49, disease: 0.92 },
                    { group: 'Cycloseris', prevalence: 6.60, disease: 2.89 },
                    { group: 'Pocillopora', prevalence: 6.46, disease: 0.66 },
                    { group: 'Pavona', prevalence: 6.33, disease: 0.65 },
                    { group: 'Porites', prevalence: 6.30, disease: 0.58 },
                    { group: 'Coscinaraea', prevalence: 5.63, disease: 0.06 },
                    { group: 'Fungia', prevalence: 5.56, disease: 0.30 },
                    { group: 'Galaxea', prevalence: 4.82, disease: 0 },
                    { group: 'Acanthastrea', prevalence: 4.45, disease: 0 },
                    { group: 'Hydnophora', prevalence: 3.97, disease: 1.05 },
                    { group: 'Acropora', prevalence: 3.82, disease: 0.70 },
                    { group: 'Platygyra', prevalence: 3.60, disease: 0.74 },
                    { group: 'Leptastrea', prevalence: 3.54, disease: 0.01 },
                    { group: 'Astreopora', prevalence: 2.91, disease: 0.38 },
                    { group: 'Favia', prevalence: 2.63, disease: 0.03 },
                    { group: 'Lobophyllia', prevalence: 2.39, disease: 0 },
                    { group: 'Goniastrea', prevalence: 1.96, disease: 0.22 },
                    { group: 'Stylocoeniella', prevalence: 1.89, disease: 1.13 },
                    { group: 'Psammocora', prevalence: 1.66, disease: 0.65 },
                    { group: 'Favites', prevalence: 1.54, disease: 0.61 },
                    { group: 'Turbinaria', prevalence: 1.29, disease: 0 },
                    { group: 'Merulina', prevalence: 1.26, disease: 0 },
                    { group: 'Montipora', prevalence: 1.18, disease: 0.99 },
                    { group: 'Echinopora', prevalence: 1.05, disease: 2.02 },
                    { group: 'Cyphastrea', prevalence: 0.64, disease: 2.09 },
                    { group: 'Pachyseris', prevalence: 0.54, disease: 0 }
                ],
                all_corals_disease: 0.50
            },
        }
    },
    'guam': {
        availableYears: [2014, 2017],
        data: {
            2017: {
                bleaching: [
                    { group: 'Turbinaria', prevalence: 15.23, disease: 0 },
                    { group: 'Astreopora', prevalence: 6.60, disease: 0.79 },
                    { group: 'Montipora', prevalence: 5.06, disease: 3.52 },
                    { group: 'Goniastrea', prevalence: 5.04, disease: 0.51 },
                    { group: 'Favites', prevalence: 4.62, disease: 17.44 },
                    { group: 'Phymastrea', prevalence: 4.08, disease: 2.04 },
                    { group: 'Platygyra', prevalence: 2.99, disease: 2.65 },
                    { group: 'Psammocora', prevalence: 2.43, disease: 0 },
                    { group: 'Pavona', prevalence: 2.07, disease: 3.37 },
                    { group: 'Cyphastrea', prevalence: 1.84, disease: 2.30 },
                    { group: 'Pocillopora', prevalence: 1.84, disease: 0.79 },
                    { group: 'Favia', prevalence: 1.78, disease: 0.15 },
                    { group: 'Goniopora', prevalence: 1.62, disease: 0 },
                    { group: 'Porites', prevalence: 1.03, disease: 3.87 },
                    { group: 'Leptastrea', prevalence: 0.71, disease: 0 },
                    { group: 'Acropora', prevalence: 0.68, disease: 1.10 }
                ],
                all_corals_disease: 1.87
            },
            2014: {
                bleaching: [
                    { group: 'Stylophora', prevalence: 11.36, disease: 3.17 },
                    { group: 'Pocillopora', prevalence: 2.93, disease: 1.17 },
                    { group: 'Pavona', prevalence: 1.76, disease: 2.93 },
                    { group: 'Platygyra', prevalence: 1.48, disease: 0 },
                    { group: 'Psammocora', prevalence: 1.19, disease: 1.39 },
                    { group: 'Cyphastrea', prevalence: 0.70, disease: 0.44 },
                    { group: 'Montastraea', prevalence: 0.50, disease: 0.15 },
                    { group: 'Galaxea', prevalence: 0.41, disease: 0.91 },
                    { group: 'Porites', prevalence: 0.26, disease: 2.13 },
                    { group: 'Astreopora', prevalence: 0.18, disease: 0.06 }
                ],
                all_corals_disease: 0.98
            },
        }
    },
    'northern-mariana-islands': {
        availableYears: [2014, 2017],
        data: {
            2017: {
                bleaching: [
                    { group: 'Plesiastrea', prevalence: 20.72, disease: 0 },
                    { group: 'Turbinaria', prevalence: 17.77, disease: 0 },
                    { group: 'Stylophora', prevalence: 8.80, disease: 0.78 },
                    { group: 'Astreopora', prevalence: 6.74, disease: 0.40 },
                    { group: 'Astrea', prevalence: 6.35, disease: 0.90 },
                    { group: 'Cyphastrea', prevalence: 5.30, disease: 4.85 },
                    { group: 'Pocillopora', prevalence: 4.38, disease: 2.20 },
                    { group: 'Montipora', prevalence: 3.97, disease: 1.11 },
                    { group: 'Isopora', prevalence: 3.88, disease: 0 },
                    { group: 'Platygyra', prevalence: 3.68, disease: 0.88 },
                    { group: 'Stylocoeniella', prevalence: 2.23, disease: 1.31 },
                    { group: 'Acropora', prevalence: 1.69, disease: 0.96 },
                    { group: 'Goniastrea', prevalence: 1.37, disease: 1.56 },
                    { group: 'Psammocora', prevalence: 1.36, disease: 3.26 },
                    { group: 'Phymastrea', prevalence: 1.00, disease: 0 },
                    { group: 'Porites', prevalence: 0.85, disease: 2.23 },
                    { group: 'Echinopora', prevalence: 0.72, disease: 1.81 },
                    { group: 'Leptoria', prevalence: 0.65, disease: 0.35 },
                    { group: 'Leptastrea', prevalence: 0.61, disease: 0.35 },
                    { group: 'Pavona', prevalence: 0.50, disease: 2.41 },
                    { group: 'Favia', prevalence: 0.31, disease: 0.16 },
                    { group: 'Leptoseris', prevalence: 0.25, disease: 9.20 },
                    { group: 'Galaxea', prevalence: 0.04, disease: 0.67 }
                ],
                all_corals_disease: 1.42
            },
            2014: {
                bleaching: [
                    { group: 'Pocillopora', prevalence: 2.59, disease: 0.61 },
                    { group: 'Stylophora', prevalence: 1.82, disease: 1.78 },
                    { group: 'Montipora', prevalence: 1.15, disease: 0.82 },
                    { group: 'Pavona', prevalence: 0.27, disease: 3.10 },
                    { group: 'Acropora', prevalence: 0.24, disease: 0.04 },
                    { group: 'Galaxea', prevalence: 0.23, disease: 0 },
                    { group: 'Cyphastrea', prevalence: 0.20, disease: 2.92 },
                    { group: 'Astreopora', prevalence: 0.09, disease: 0.13 },
                    { group: 'Psammocora', prevalence: 0.08, disease: 0.59 },
                    { group: 'Favia', prevalence: 0.01, disease: 0.06 }
                ],
                all_corals_disease: 0.77
            },
        }
    },
    'northwest-hawaiian-islands': {
        availableYears: [2013, 2016, 2017],
        data: {
            2017: {
                bleaching: [
                    { group: 'Montipora', prevalence: 33.64, disease: 0.77 },
                    { group: 'Pocillopora', prevalence: 28.46, disease: 0.37 },
                    { group: 'Cyphastrea', prevalence: 11.16, disease: 0 },
                    { group: 'Pavona', prevalence: 8.85, disease: 0.68 },
                    { group: 'Psammocora', prevalence: 5.82, disease: 0 },
                    { group: 'Porites', prevalence: 4.41, disease: 3.97 },
                    { group: 'Leptastrea', prevalence: 3.97, disease: 0 },
                    { group: 'Acropora', prevalence: 1.46, disease: 0 }
                ],
                all_corals_disease: 2.4
            },
            2016: {
                bleaching: [
                    { group: 'Montipora', prevalence: 12.69, disease: 1.47 },
                    { group: 'Fungia', prevalence: 12.12, disease: 0 },
                    { group: 'Pocillopora', prevalence: 6.71, disease: 0.63 },
                    { group: 'Leptastrea', prevalence: 0.83, disease: 0 },
                    { group: 'Acropora', prevalence: 0.79, disease: 0.57 },
                    { group: 'Cyphastrea', prevalence: 0.60, disease: 1.77 },
                    { group: 'Porites', prevalence: 0.44, disease: 3.16 },
                    { group: 'Pavona', prevalence: 0.40, disease: 0.90 },
                    { group: 'Psammocora', prevalence: 0.25, disease: 0 }
                ],
                all_corals_disease: 2.23
            },
            2013: {
                bleaching: [
                    { group: 'Montipora', prevalence: 9.82, disease: 1.12 },
                    { group: 'Pocillopora', prevalence: 8.25, disease: 1.97 },
                    { group: 'Cyphastrea', prevalence: 5.10, disease: 0 },
                    { group: 'Porites', prevalence: 2.09, disease: 3.84 },
                    { group: 'Leptastrea', prevalence: 1.62, disease: 3.27 },
                    { group: 'Pavona', prevalence: 0.74, disease: 0.07 },
                    { group: 'Acropora', prevalence: 0.59, disease: 1.67 }
                ],
                all_corals_disease: 2.3
            }
        }
    }
};      
      
      
      const positions = [
        { top: "63.9%", left: "71.2%" },//fungia main hawaiian islands
        { top: "54.9%", left: "19%" },//stylophora guam
        { top: "8.6%", left: "64%" },//cyphastrea northwest hawaiian
        { top: "0%", left: "60%" },//montipora northwest hawaiian
        { top: "10.2%", left: "4.7%" }, //turbinaria  mariana
        { top: "22.5%", left: "49%" },//pocillopora northwest hawaiian
        { top: "54.9%", left: "75.94%" },//leptoseris hawaii
        { top: "55%", left: "56.3%" },//isopora samoa
        { top: "64%", left: "42.7%" },//caulastrea samoa
        { top: "89%", left: "19.5%" },//astreoporaguam
        { top: "24.2%", left: "19%" },//stylophora mariana
        { top: "36.7%", left: "93.4%" },//montipora hawaii
        { top: "64%", left: "47.4%" },//monastraea samoa
        { top: "81.9%", left: "71.1%" },//coeloseris samoa
        { top: "27.8%", left: "88.5%" },//pocillopora hawaii
        { top: "64%", left: "4.9%" },//turbinaria guam
        { top: "19.4%", left: "9.8%" }, //plesiastrea mariana
        { top: "82.2%", left: "24.6%" },//montipora guam
        { top: "14%", left: "53%" }, //fungia northwest mariana
      ];

      const imgs = document.querySelectorAll(".img");

      gsap.set(".img", {
        top: "45%",
        left: "50%",
        transform: "translate(-50%, -50%) scale(0)",
      });

      gsap.from("p", {
        y: 150,
        ease: "power4.inOut",
        duration: 1,
        stagger: {
          amount: 0.15,
        },
        delay: 0.5,
      });

      

      gsap.to(".img", {
        scale: 1,
        width: "500px",
        height: "500px",
        stagger: 0.15,
        duration: 0.85,
        ease: "power2.out",
        delay: 1,
        onComplete: scatterAndShrink,
      });

      gsap.to("p", {
        top: "40px",
        ease: "power4.inOut",
        duration: 1,
        stagger: {
          amount: 0.15,
        },
        delay: 3,
        onComplete: () => {
          document.querySelector(".header").remove();
        },
      });

      gsap.from("a", {
        y: 20,
        opacity: 0,
        ease: "power2.out",
        duration: 1,
        stagger: {
          amount: 0.15,
        },
        delay: 4,
      });

      function scatterAndShrink() {
        gsap.to(".img", {
          top: (i) => positions[i].top,
          left: (i) => positions[i].left,
          transform: "none",
          width: "75px",
          height: "75px",
          opacity: 0.1,
          stagger: 0.075,
          duration: 0.75,
          ease: "power2.out",
          onComplete: () => {
            // Fade in overlay text
            gsap.to(".overlay-text .main-title", {
              opacity: 1,
              duration: 0.5,
              ease: "power2.out"
            });
            gsap.to(".overlay-text .subtitle", {
              opacity: 1,
              duration: 0.5,
              delay: 0.2,
              ease: "power2.out"
            });
            gsap.to(".overlay-text .disclaimer", {
              opacity: 1,
              duration: 0.5,
              delay: 0.4,
              ease: "power2.out"
            });
      
            // Make the entire screen clickable
            document.body.style.cursor = "pointer"; // Indicate interactivity
            document.body.addEventListener("click", handleClick);
      
            function handleClick() {
              // Reset image and fade out overlay text
              gsap.to(".img", {
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
              });
              gsap.to(".overlay-text .main-title, .overlay-text .subtitle, .overlay-text .disclaimer", {
                opacity: 0,
                duration: 0.5,
                ease: "power2.out"
              });
      
              // Remove click event listener to prevent multiple triggers
              document.body.style.cursor = "default"; // Reset cursor
              document.body.removeEventListener("click", handleClick);
            }
          }
        });
      }
      
      document.addEventListener('DOMContentLoaded', () => {
        const imgs = document.querySelectorAll('.img');
        
        imgs.forEach((img, index) => {
          const tooltip = document.createElement('div');
          tooltip.classList.add('tooltip');
          img.appendChild(tooltip);
          
          // Get coral name from image source
          const coralName = img.querySelector('img').src.split('/').pop().split('.')[0];
          
          // Get region from data attribute
          const region = img.dataset.region;
          
          // Find matching data for this specific coral and region
          let matchingData = null;
          if (dataByRegion[region]) {
            Object.keys(dataByRegion[region].data).forEach(year => {
              const bleachingData = dataByRegion[region].data[year].bleaching;
              const coralMatch = bleachingData.find(coral => 
                coral.group.toLowerCase() === coralName.toLowerCase()
              );
              
              if (coralMatch) {
                // Take the most recent year's data
                if (!matchingData || parseInt(year) > parseInt(matchingData.year)) {
                  matchingData = {
                    region: region,
                    year: year,
                    prevalence: coralMatch.prevalence,
                    group: coralMatch.group
                  };
                }
              }
            });
          }
          
          // Set tooltip content
          if (matchingData) {
            tooltip.innerHTML = `
              <div class="coral-name">${matchingData.group} (${matchingData.region})</div>
              <div class="coral-details">${matchingData.prevalence.toFixed(1)}% Bleaching (${matchingData.year})</div>
            `;
          } else {
            tooltip.innerHTML = `
              <div class="coral-name">No data available</div>
            `;
          }
          
          // Hover effects
          img.addEventListener('mouseenter', (e) => {
            // Add black outline
            img.style.outline = '3px solid black';
            
            // Show tooltip
            tooltip.style.opacity = '1';
            tooltip.style.top = '100%';
            tooltip.style.left = '0';
            
            // Dim other images
            imgs.forEach(otherImg => {
              if (otherImg !== img) {
                otherImg.style.opacity = '0.1';
              }
            });
            
            // Highlight similar corals
            imgs.forEach(otherImg => {
              const otherCoralName = otherImg.querySelector('img').src.split('/').pop().split('.')[0];
              if (otherCoralName.toLowerCase() === coralName.toLowerCase()) {
                otherImg.style.outline = '3px solid black';
                otherImg.style.opacity = '1';
              }
            });
          });
          
          img.addEventListener('mouseleave', () => {
            // Remove black outline
            img.style.outline = 'none';
            
            // Hide tooltip
            tooltip.style.opacity = '0';
            
            // Restore other images
            imgs.forEach(otherImg => {
              otherImg.style.opacity = '1';
              otherImg.style.outline = 'none';
            });
          });
        });
      });

      document.addEventListener('DOMContentLoaded', () => {
        const imgs = document.querySelectorAll('.img');
        const modal = document.getElementById('coral-modal');
        const modalCloseBtn = document.getElementById('modal-close-btn');
        const modalRegion = document.querySelector('.modal-region');
        const modalImage = document.querySelector('.modal-image');
        const modalCoralName = document.querySelector('.modal-coral-name');
        const modalCoralDescription = document.querySelector('.modal-coral-description');
        const coralImageChart = document.querySelector('.coral-image-chart');
      
      
      
        const coralDescriptions = {
          'Fungia': 'Fungia is a genus of large, solitary mushroom coral known for its distinctive round or oval shape. These corals are often free-living and can move slightly across the seafloor.',
          'Stylophora': 'Stylophora is a branching coral genus with compact, closely packed branches. They are typically found in shallow reef environments and play a crucial role in reef ecosystem structure.',
          'Cyphastrea': 'Cyphastrea is a genus of small polyped massive corals with a bumpy or rounded surface texture. They are often found in deeper reef areas and can survive in various light conditions.',
          'Montipora': 'Montipora is one of the most diverse coral genera, featuring encrusting, plate-like, or branching growth forms. They are known for their intricate surface textures and important role in reef ecosystems.',
          'Turbinaria': 'Turbinaria is a genus of massive or encrusting corals with unique cup-like or scroll-like structures. They are often found in areas with moderate water movement.',
          'Pocillopora': 'Pocillopora, also known as cauliflower coral, is a fast-growing, branching coral species. They are often one of the first corals to colonize new reef areas.',
          'Leptoseris': 'Leptoseris is a genus of thin, plate-like corals often found in deeper, low-light reef environments. They have intricate, delicate growth patterns.',
          'Acropora': 'Acropora is a genus of branching corals known for its fast growth and vibrant colors. They are key reef builders and provide habitat for numerous marine species.',
          'Acanthastrea': 'Acanthastrea is a genus of large polyped stony corals with striking patterns and colors. They are often found in deeper reef environments or areas with moderate light.',
          'Astrea': 'Astrea is a genus of massive, dome-shaped corals with prominent ridges and valleys. They are resilient and can survive in a range of reef habitats.',
          'Astreopora': 'Astreopora is a genus of encrusting or dome-shaped corals with a rough surface texture. They are commonly found in shallow to moderate depths.',
          'Caulastrea': 'Caulastrea, also known as candy cane coral, is a genus of large-polyped corals with tubular structures. They are popular in aquariums and thrive in calm, shallow waters.',
          'Coeloseris': 'Coeloseris is a genus of smooth, dome-shaped corals with finely textured surfaces. They are typically found in calm reef environments.',
          'Coscinaraea': 'Coscinaraea is a genus of encrusting or massive corals with small, uniform polyps. They are hardy and can adapt to various environmental conditions.',
          'Cycloseris': 'Cycloseris is a genus of solitary, free-living mushroom corals. They are known for their round, disk-like shapes and adaptability to low-light environments.',
          'Echinopora': 'Echinopora is a genus of fast-growing corals with thin plates or branches covered in prominent corallites. They thrive in areas with good water flow.',
          'Favites': 'Favites is a genus of brain corals with closely packed, shared corallite walls. They are slow-growing but highly resilient to environmental changes.',
          'Favia': 'Favia is a genus of massive, dome-shaped brain corals with well-defined corallite walls. They are a common and important part of reef ecosystems.',
          'Galaxea': 'Galaxea is a genus of small polyped corals with sharp, spike-like corallites. They are aggressive and can extend stinging sweeper tentacles.',
          'Goniastrea': 'Goniastrea is a genus of brain corals with intricate patterns and valleys. They are commonly found in shallow reef areas.',
          'Goniopora': 'Goniopora, also known as flowerpot coral, is a genus of corals with long, flower-like polyps. They are often found in calm lagoons or reef flats.',
          'Hydnophora': 'Hydnophora is a genus of massive or encrusting corals with sharp, protruding skeletal structures. They are aggressive and can dominate reef areas.',
          'Isopora': 'Isopora is a genus of branching corals closely related to Acropora. They are robust and thrive in areas with strong water movement.',
          'Leptastrea': 'Leptastrea is a genus of small polyped encrusting corals with fine, intricate patterns. They are adaptable to a range of light and depth conditions.',
          'Leptoria': 'Leptoria is a genus of brain corals with deep valleys and ridges. They are slow-growing but form significant reef structures.',
          'Lobophyllia': 'Lobophyllia, or lobed brain coral, is a genus of large polyped corals with fleshy, vibrant lobes. They are often found in calm, shallow waters.',
          'Merulina': 'Merulina is a genus of plating or encrusting corals with distinct meandering ridges and valleys. They are common in shallow reef environments.',
          'Montastraea': 'Montastraea is a genus of massive, boulder-like corals with small polyps. They are important reef builders in the Caribbean and Indo-Pacific.',
          'Pachyseris': 'Pachyseris, or elephant skin coral, is a genus of plating corals with a unique, ridged texture. They are often found in deeper, low-light areas.',
          'Pavona': 'Pavona, also known as lettuce coral, is a genus of corals with thin, leaf-like structures. They are fast-growing and thrive in areas with strong water flow.',
          'Phymastrea': 'Phymastrea is a genus of massive, dome-shaped corals with well-defined corallite walls. They are commonly found in shallow reef habitats.',
          'Platygyra': 'Platygyra, or maze coral, is a genus of brain corals with intricate, maze-like patterns. They are slow-growing but highly resilient.',
          'Plesiastrea': 'Plesiastrea is a genus of massive corals with small, uniform corallites. They are often found in calm, shallow reef environments.',
          'Porites': 'Porites is a genus of massive or branching corals known for their resilience and ability to survive in harsh conditions. They are key reef builders.',
          'Psammocora': 'Psammocora, or sandpaper coral, is a genus of encrusting or plating corals with a fine, granular texture. They thrive in areas with moderate water flow.',
          'Stylocoeniella': 'Stylocoeniella is a genus of small polyped encrusting corals with closely packed corallites. They are often found in shallow, high-energy reef zones.',        
        };
      
        function formatRegionName(region) {
    return region.replace(/-/g, ' ').toUpperCase();
  }

  // Function to open the modal
  function openModal(img) {
    const coralName = img.querySelector('img').src.split('/').pop().split('.')[0];
    const region = img.dataset.region;
    let matchingData = null;

    if (dataByRegion[region]) {
      Object.keys(dataByRegion[region].data).forEach(year => {
        const bleachingData = dataByRegion[region].data[year].bleaching;
        const coralMatch = bleachingData.find(coral => coral.group.toLowerCase() === coralName.toLowerCase());
        if (coralMatch) {
          if (!matchingData || parseInt(year) > parseInt(matchingData.year)) {
            matchingData = { region: region, year: year, prevalence: coralMatch.prevalence, group: coralMatch.group };
          }
        }
      });
    }

    modalRegion.textContent = formatRegionName(matchingData.region);
    modalImage.src = img.querySelector('img').src;
    modalCoralName.textContent = matchingData.group;
    modalCoralDescription.textContent = coralDescriptions[matchingData.group];

    // Clear existing coral images chart
    coralImageChart.innerHTML = '';

    // Generate coral images chart
    if (dataByRegion[region]) {
      Object.keys(dataByRegion[region].data).forEach(year => {
        const bleachingData = dataByRegion[region].data[year].bleaching;
        const sortedCorals = bleachingData.sort((a, b) => a.prevalence - b.prevalence);

        const yearRow = document.createElement('div');
        yearRow.classList.add('year-row');

        const yearLabel = document.createElement('div');
        yearLabel.classList.add('year-label');
        yearLabel.textContent = year;
        yearRow.appendChild(yearLabel);

        sortedCorals.forEach(coral => {
          const coralImageSmall = document.createElement('img');
          coralImageSmall.classList.add('coral-image-small');
          coralImageSmall.src = `./images/${coral.group.toLowerCase()}.jpg`;
          coralImageSmall.dataset.coralGroup = coral.group;
          coralImageSmall.dataset.region = region;
          coralImageSmall.dataset.year = year;
          coralImageSmall.dataset.prevalence = coral.prevalence;

          // Add event listener to small coral image
          coralImageSmall.addEventListener('click', (e) => {
            const clickedCoral = e.target;
            const coralName = clickedCoral.dataset.coralGroup;
            const region = clickedCoral.dataset.region;
            const year = clickedCoral.dataset.year;
            const prevalence = clickedCoral.dataset.prevalence;

            modalImage.src = `./images/${coralName.toLowerCase()}.jpg`;
            modalCoralName.textContent = coralName;
            modalCoralDescription.textContent = coralDescriptions[coralName] || `No description available for ${coralName}`;
          });

          yearRow.appendChild(coralImageSmall);
        });

        coralImageChart.appendChild(yearRow);
      });
    }

    modal.style.display = 'block';
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = 'none';
  }

  // Add event listeners to images
  imgs.forEach(img => {
    img.addEventListener('click', () => {
      openModal(img);
    });
  });

  // Add event listener to close button
  modalCloseBtn.addEventListener('click', closeModal);
});