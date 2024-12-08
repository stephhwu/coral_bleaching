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
        if (!img.classList.contains('hover-enabled')) return;
        // Add black outline
        img.style.outline = '2px solid black';
        
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
        if (!img.classList.contains('hover-enabled')) return;
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
// function openModal(img) {
// const coralName = img.querySelector('img').src.split('/').pop().split('.')[0];
// const region = img.dataset.region;
// let matchingData = null;

// if (dataByRegion[region]) {
//   Object.keys(dataByRegion[region].data).forEach(year => {
//     const bleachingData = dataByRegion[region].data[year].bleaching;
//     const coralMatch = bleachingData.find(coral => coral.group.toLowerCase() === coralName.toLowerCase());
//     if (coralMatch) {
//       if (!matchingData || parseInt(year) > parseInt(matchingData.year)) {
//         matchingData = { region: region, year: year, prevalence: coralMatch.prevalence, group: coralMatch.group };
//       }
//     }
//   });
// }

// modalRegion.textContent = formatRegionName(matchingData.region);
// modalImage.src = img.querySelector('img').src;
// modalCoralName.textContent = matchingData.group;
// modalCoralDescription.textContent = coralDescriptions[matchingData.group];

// // Clear existing coral images chart
// coralImageChart.innerHTML = '';

// // Generate coral images chart
// if (dataByRegion[region]) {
//   Object.keys(dataByRegion[region].data).forEach(year => {
//     const bleachingData = dataByRegion[region].data[year].bleaching;
//     const sortedCorals = bleachingData.sort((a, b) => a.prevalence - b.prevalence);

//     const yearRow = document.createElement('div');
//     yearRow.classList.add('year-row');

//     const yearLabel = document.createElement('div');
//     yearLabel.classList.add('year-label');
//     yearLabel.textContent = year;
//     yearRow.appendChild(yearLabel);

//     sortedCorals.forEach(coral => {
//       const coralImageSmall = document.createElement('img');
//       coralImageSmall.classList.add('coral-image-small');
//       coralImageSmall.src = `./images/${coral.group.toLowerCase()}.jpg`;
//       coralImageSmall.dataset.coralGroup = coral.group;
//       coralImageSmall.dataset.region = region;
//       coralImageSmall.dataset.year = year;
//       coralImageSmall.dataset.prevalence = coral.prevalence;

//       // Add event listener to small coral image
//       coralImageSmall.addEventListener('click', (e) => {
//         const clickedCoral = e.target;
//         const coralName = clickedCoral.dataset.coralGroup;
//         const region = clickedCoral.dataset.region;
//         const year = clickedCoral.dataset.year;
//         const prevalence = clickedCoral.dataset.prevalence;

//         modalImage.src = `./images/${coralName.toLowerCase()}.jpg`;
//         modalCoralName.textContent = coralName;
//         modalCoralDescription.textContent = coralDescriptions[coralName] || `No description available for ${coralName}`;
//       });

//       yearRow.appendChild(coralImageSmall);
//     });

//     coralImageChart.appendChild(yearRow);
//   });
// }

// modal.style.display = 'block';
// }
function openModal(img) {
  const coralName = img.querySelector('img').src.split('/').pop().split('.')[0]; // Extract coral name
  const region = img.dataset.region; // Extract region
  let matchingData = null;

  // Find matching data for the coral and region
  if (dataByRegion[region]) {
    Object.keys(dataByRegion[region].data).forEach((year) => {
      const bleachingData = dataByRegion[region].data[year].bleaching;
      const coralMatch = bleachingData.find(
        (coral) => coral.group.toLowerCase() === coralName.toLowerCase()
      );
      if (coralMatch) {
        if (!matchingData || parseInt(year) > parseInt(matchingData.year)) {
          matchingData = {
            region: region,
            year: year,
            prevalence: coralMatch.prevalence,
            group: coralMatch.group,
          };
        }
      }
    });
  }

  // Update modal text fields
  modalRegion.textContent = formatRegionName(matchingData.region);
  modalCoralName.textContent = matchingData.group;
  modalCoralDescription.textContent =
    coralDescriptions[matchingData.group] ||
    `No description available for ${matchingData.group}`;

  // ** Set Before and After Images for Slider ** //
  document.querySelector(
    '.before-image'
  ).style.backgroundImage = `url('./colored-coral/${coralName}.jpg')`; // Before image (colored coral)
  document.querySelector(
    '.after-image'
  ).style.backgroundImage = `url('./images/${coralName}.jpg')`; // After image (bleached coral)

  // Clear and generate coral images chart
  coralImageChart.innerHTML = '';

  if (dataByRegion[region]) {
    Object.keys(dataByRegion[region].data).forEach((year) => {
      const bleachingData = dataByRegion[region].data[year].bleaching;
      const sortedCorals = bleachingData.sort(
        (a, b) => a.prevalence - b.prevalence
      );

      const yearRow = document.createElement('div');
      yearRow.classList.add('year-row');

      const yearLabel = document.createElement('div');
      yearLabel.classList.add('year-label');
      yearLabel.textContent = year;
      yearRow.appendChild(yearLabel);

      sortedCorals.forEach((coral) => {
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

          // Update before/after images dynamically
          document.querySelector(
            '.before-image'
          ).style.backgroundImage = `url('./colored-coral/${coralName.toLowerCase()}.jpg')`;
          document.querySelector(
            '.after-image'
          ).style.backgroundImage = `url('./images/${coralName.toLowerCase()}.jpg')`;

          modalCoralName.textContent = coralName;
          modalCoralDescription.textContent =
            coralDescriptions[coralName] ||
            `No description available for ${coralName}`;
        });

        yearRow.appendChild(coralImageSmall);
      });

      coralImageChart.appendChild(yearRow);
    });
  }

  modal.style.display = 'block'; // Display modal
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

document.addEventListener('DOMContentLoaded', () => {
  const aboutModal = document.getElementById('about-modal');
  const aboutBtn = document.getElementById('about-btn');
  const aboutModalCloseBtn = document.getElementById('about-modal-close-btn');

  // Function to open the about modal
  function openAboutModal() {
    aboutModal.style.display = 'block';
  }

  // Function to close the about modal
  function closeAboutModal() {
    aboutModal.style.display = 'none';
  }

  // Add event listeners
  aboutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openAboutModal();
  });

  aboutModalCloseBtn.addEventListener('click', closeAboutModal);
});

document.addEventListener('DOMContentLoaded', () => {
  const sliderWrapper = document.querySelector('.before-after-wrapper');
  const handle = document.querySelector('.handle');
  const beforeImageWrapper = document.querySelector('.before-image-wrapper');

  if (!sliderWrapper || !handle || !beforeImageWrapper) return; // Ensure elements exist

  let isDragging = false;

  // Function to handle mouse/touch start
  const startDragging = (e) => {
    isDragging = true;
    document.addEventListener('mousemove', dragHandle);
    document.addEventListener('touchmove', dragHandle, { passive: false });
    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('touchend', stopDragging);
  };

  // Function to handle dragging
  const dragHandle = (e) => {
    if (!isDragging) return;

    // Determine cursor/touch position
    const wrapperRect = sliderWrapper.getBoundingClientRect();
    const cursorPosition = e.type.includes('mouse')
      ? e.clientX
      : e.touches[0].clientX;

    // Calculate new handle position
    let newLeft = cursorPosition - wrapperRect.left;
    newLeft = Math.max(0, Math.min(wrapperRect.width, newLeft)); // Clamp within bounds

    // Update handle and before image wrapper width
    handle.style.left = `${newLeft}px`;
    beforeImageWrapper.style.width = `${newLeft}px`;
  };

  // Function to stop dragging
  const stopDragging = () => {
    isDragging = false;
    document.removeEventListener('mousemove', dragHandle);
    document.removeEventListener('touchmove', dragHandle);
    document.removeEventListener('mouseup', stopDragging);
    document.removeEventListener('touchend', stopDragging);
  };

  // Attach event listeners to the handle
  handle.addEventListener('mousedown', startDragging);
  handle.addEventListener('touchstart', startDragging);
});
