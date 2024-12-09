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
      'Fungia': 'Fungia is a genus of large, solitary mushroom coral known for its distinctive round or oval shape. These free-living corals can slowly reposition themselves on the seafloor to access better conditions. However, during coral bleaching events, elevated sea temperatures cause them to expel the symbiotic algae (zooxanthellae) they rely on for nutrition. Without these algae, Fungia corals experience reduced energy intake, slower growth, and are more susceptible to disease and mortality if conditions do not improve.',
      
      'Stylophora': 'Stylophora is a branching coral genus with closely packed, stubby branches commonly found in shallow, sunlit reef zones. As critical contributors to reef complexity, they provide shelter and habitat for numerous reef organisms. Yet, Stylophora are particularly vulnerable to bleaching: when stressed by warmer waters, they lose their zooxanthellae, leading to weakened skeletons, reduced reproductive success, and higher mortality rates. Prolonged or severe bleaching events can result in significant declines in Stylophora populations and diminished structural integrity of the reef.',
      
      'Cyphastrea': 'Cyphastrea corals have small polyps and form massive or encrusting colonies with a subtly bumpy surface. They often inhabit deeper or more shaded reef areas and can tolerate a range of light levels. Nonetheless, bleaching disrupts their symbiotic relationship with algae, impairing their primary energy source. This loss leads to slower calcification, diminished growth, and heightened vulnerability to disease. Although considered relatively hardy, repeated bleaching events weaken Cyphastrea’s resilience and can contribute to long-term population declines.',
      
      'Montipora': 'Montipora is one of the most diverse coral genera, ranging from encrusting plates to delicate branching forms. They play crucial roles in reef ecosystems by providing habitats and contributing to reef framework. However, Montipora are sensitive to bleaching and can lose tissue when stressed by elevated temperatures. This tissue loss not only compromises their role in reef building but also impairs their recovery after bleaching events. Persistent bleaching can erode Montipora populations, reducing overall reef diversity and stability.',
      
      'Turbinaria': 'Turbinaria corals form distinctive cup-like or scroll-like structures, often occurring in areas with moderate water flow. While they contribute to the three-dimensional complexity of reefs, bleaching deprives them of their algal symbionts, shrinking their energy reserves. This energy deficit leads to slower growth and poorer health. Over repeated bleaching events, Turbinaria’s structural role diminishes, and their ability to keep pace with changing reef conditions weakens, potentially altering community composition.',
      
      'Pocillopora': 'Pocillopora, known as cauliflower coral, are fast-growing, branching species often pioneering new reef areas. Their rapid growth and ability to colonize disturbed sites make them important for reef recovery. However, Pocillopora are highly susceptible to bleaching. Elevated temperatures cause them to blanch and lose their symbionts, halting their growth and reproduction. If bleaching persists, entire Pocillopora stands can be lost, undermining the reef’s capacity to recover from disturbances.',
      
      'Leptoseris': 'Leptoseris corals are thin, plate-like species typically found in deeper or low-light reef zones. Their delicate, intricate patterns allow them to efficiently utilize limited light. But bleaching reduces their ability to photosynthesize effectively, stripping away the symbiotic algae they depend on. This energy shortfall hinders their slow growth and can result in partial or total colony mortality. As bleaching events increase, Leptoseris populations may struggle to maintain their niche in deeper reef habitats.',
      
      'Acropora': 'Acropora corals are branching species known for their vibrant colors and fast growth, making them vital reef builders that create habitats for numerous marine organisms. Unfortunately, they are among the most bleaching-sensitive genera. When water temperatures rise, Acropora expel their zooxanthellae, often leading to rapid tissue loss and mass mortality. Such bleaching events severely undermine the structural complexity, biodiversity, and resilience of coral reefs worldwide.',
      
      'Acanthastrea': 'Acanthastrea corals have large polyps and striking colors, often inhabiting moderate-light or slightly deeper reef areas. They rely on zooxanthellae for a significant portion of their energy. Bleaching events cause them to lose their rich pigmentation and become energy-starved, leading to reduced growth and reproductive output. If recovery is prolonged, once-healthy Acanthastrea colonies may succumb to disease or predation, further diminishing their presence in affected reefs.',
      
      'Astrea': 'Astrea corals form massive, dome-shaped colonies with distinct ridges and valleys. Although generally robust, even these hardy corals suffer under bleaching conditions. Without their symbiotic algae, Astrea corals struggle to maintain calcification and fend off diseases. Over time, successive bleaching events erode their resilience, making it harder for them to withstand environmental stresses and fulfill their role as stable reef builders.',
      
      'Astreopora': 'Astreopora corals produce encrusting or dome-shaped colonies with a rough texture. Found at shallow to moderate depths, they contribute to the reef’s structural complexity. Bleaching disrupts their energy intake by removing symbionts, weakening growth and reducing overall fitness. If bleaching conditions persist, entire Astreopora colonies may decline, altering local habitat availability for other marine species.',
      
      'Caulastrea': 'Caulastrea, commonly known as candy cane coral, feature large tubular polyps and thrive in calm, shallow waters. In stable conditions, they are hardy and popular among aquarists. Yet, bleaching events rob them of their vibrant appearance and crucial energy supply. This hinders their polyp extension and feeding ability, resulting in stunted growth and potential tissue recession. As bleaching intensifies globally, Caulastrea populations may dwindle in affected regions.',
      
      'Coeloseris': 'Coeloseris corals form smooth, dome-shaped colonies with finely textured surfaces in tranquil reef environments. When bleaching occurs, they lose their zooxanthellae, cutting off a key energy source. This leads to slower growth, increased susceptibility to pathogens, and a diminished capacity for recovery. Repeated bleaching events can push Coeloseris populations to decline, reducing their role in reef stabilization.',
      
      'Coscinaraea': 'Coscinaraea corals produce encrusting or massive colonies with small, uniform polyps. Their adaptability allows them to persist under variable conditions. However, bleaching disrupts this adaptability by stripping away their algae. The resulting energy deficit translates into weakened skeletal growth, reduced reproductive success, and heightened disease vulnerability. Over multiple bleaching events, even these hardy corals struggle to maintain their populations.',
      
      'Cycloseris': 'Cycloseris, solitary mushroom corals, are known for their round, disk-like shapes and their ability to thrive in lower-light conditions. Yet, bleaching undermines their resilience. By losing algae, they lose a vital energy source, making it harder to recover from disturbances such as sedimentation or partial damage. Persistent bleaching can lead to reduced survival and lower overall biodiversity on the seafloor.',
      
      'Echinopora': 'Echinopora corals grow quickly and form thin plates or branching colonies with prominent corallites, thriving in areas of good water flow. During bleaching, they lose their primary energy production mechanism. This slows their growth, reduces their structural contribution to the reef, and can result in partial mortality. With repeated bleaching episodes, Echinopora populations face challenges in recolonizing and stabilizing reef habitats.',
      
      'Favites': 'Favites, a genus of brain corals, grow slowly but are known for their resilience. Yet, bleaching still impacts them by disrupting their symbiotic partnerships and limiting energy intake. Without sufficient energy, Favites corals experience slower calcification, reduced reproductive success, and increased susceptibility to disease. Although hardy, chronic bleaching can weaken their long-term survival and role in sustaining reef frameworks.',
      
      'Favia': 'Favia corals, also brain-like in appearance, have well-defined corallite walls and are integral to reef ecosystems. Bleaching events impede their growth and skeletal strength by depriving them of the algae necessary for efficient energy production. Over time, repeated bleaching leads to weaker colonies, diminished reef-building capacity, and a reduced ability to compete with other benthic organisms.',
      
      'Galaxea': 'Galaxea corals have small polyps with spike-like corallites and can be aggressive, extending stinging tentacles to fend off competitors. Bleaching robs them of their vibrant energy source, diminishing their vigor and defensive capabilities. As their energy reserves dwindle, these once-aggressive corals become more susceptible to overgrowth by algae or encroachment by other coral species, potentially altering local reef dynamics.',
      
      'Goniastrea': 'Goniastrea corals, with their intricate patterns and valleys, are commonly found in shallow reef environments. Bleaching removes their energy-producing algae, slowing their growth and making them more prone to disease. Without adequate energy, Goniastrea’s role in building and maintaining complex reef habitats diminishes over time, especially if bleaching events become more frequent.',
      
      'Goniopora': 'Goniopora, the flowerpot coral, is known for its long, flower-like polyps that sway in gentle currents. Under bleaching stress, they expel their zooxanthellae, leading to reduced polyp extension and feeding capacity. As a result, colonies suffer energy deficits that impede tissue maintenance and reproduction. Chronic bleaching can erode Goniopora populations, harming the reef’s overall biodiversity and aesthetic value.',
      
      'Hydnophora': 'Hydnophora corals, with their sharp skeletal protrusions, often dominate reef areas through aggressive tactics. Yet, bleaching strips away their competitive edge by eliminating their primary energy source. Weakened colonies are less capable of defending territory, which can lead to shifts in reef community composition. Over time, recurrent bleaching reduces Hydnophora’s prevalence and role in shaping local reef structure.',
      
      'Isopora': 'Isopora corals, closely related to Acropora, are robust and flourish in areas with strong water movement. However, like their relatives, they are prone to bleaching when water temperatures rise. Losing their algae disrupts their rapid growth and reduces skeletal density. Repeated bleaching episodes hinder their ability to rebound, diminishing their contribution to reef complexity and stability.',
      
      'Leptastrea': 'Leptastrea corals have small polyps and form encrusting colonies with intricate patterns. Their adaptability allows them to inhabit a range of light and depth conditions. Still, bleaching eliminates their algae-derived energy, slowing growth and reducing resilience. As bleaching events increase, Leptastrea’s capacity to maintain healthy colonies and fulfill its ecological roles declines.',
      
      'Leptoria': 'Leptoria corals, characterized by deep valleys and ridges, are slow-growing reef builders. Their gradual accumulation of skeletal mass contributes to long-term reef stability. Yet, bleaching disrupts this process by cutting off their primary energy supply, halting calcification and making colonies vulnerable to physical damage. Persistent bleaching can compromise Leptoria’s structural contributions to the reef.',
      
      'Lobophyllia': 'Lobophyllia corals, or lobed brain corals, have large, fleshy polyps and are often found in calm, shallow waters. Bleaching drains their vibrant coloration and energy reserves. Without adequate energy, Lobophyllia colonies struggle to grow and reproduce, reducing their long-term viability. Over time, bleaching events diminish their role as shelter providers and contributors to reef complexity.',
      
      'Merulina': 'Merulina corals form plating or encrusting colonies with meandering ridges and valleys, often populating shallow reef environments. Bleaching interrupts their energy intake, impairing calcification and tissue repair. Recurrent bleaching can lead to partial colony mortality or slow recovery, weakening Merulina’s role in building and maintaining diverse reef topographies.',
      
      'Montastraea': 'Montastraea (now often classified within Orbicella) are massive, boulder-like corals historically regarded as key reef builders, especially in the Caribbean. They support complex reef communities. Bleaching, however, destabilizes these once-stalwart colonies by reducing their algae and the energy they provide. Over time, bleaching-induced stress can cause extensive tissue loss and compromise Montastraea’s critical structural and ecological functions.',
      
      'Pachyseris': 'Pachyseris, or elephant skin coral, form plating colonies with a distinct ridged texture, often in deeper or lower-light areas. When bleaching occurs, their limited light environment amplifies stress, as they lose the primary energy source their algae provide. This results in slowed growth and heightened susceptibility to disease and mortality. In repeated bleaching events, Pachyseris colonies may fail to recover, shifting species composition in affected reef zones.',
      
      'Pavona': 'Pavona, known as lettuce coral, produce thin, leaf-like structures and excel in areas with robust water flow. Bleaching disrupts their swift growth and energy acquisition. Starved of algae, Pavona colonies cannot maintain their usual growth rates or repair damage effectively. Over multiple bleaching episodes, these once-productive corals may become scarce, hampering the reef’s resilience and ability to recover from disturbances.',
      
      'Phymastrea': 'Phymastrea corals form massive, dome-shaped colonies with well-defined corallite walls in shallow reef habitats. When bleached, they lose essential energy inputs from algae, slowing their calcification and making them more vulnerable to disease and predation. Persistent bleaching pressure erodes Phymastrea’s structural and ecological contributions to the reef ecosystem.',
      
      'Platygyra': 'Platygyra, or maze coral, have distinctive, maze-like patterns and are known for their slow growth and resilience. Yet, even these hardy corals suffer under bleaching stress. Deprived of algae, their energy stores dwindle, halting calcification and making colonies prone to partial mortality. Over time, repeated bleaching reduces Platygyra’s presence, diminishing the reef’s structural variety and stability.',
      
      'Plesiastrea': 'Plesiastrea corals build massive colonies with small, uniform corallites, often inhabiting calm, shallow environments. Bleaching severs their vital energy supply, reducing growth, reproduction, and resilience. Continuous bleaching events erode their populations, altering the balance of species and potentially impacting local reef community dynamics.',
      
      'Porites': 'Porites corals form massive or branching colonies known for their resilience and tolerance of harsher conditions. They are key reef builders, often persisting where others fail. However, prolonged bleaching still takes a toll. Over time, the loss of zooxanthellae impedes their slow but steady calcification, lowers their overall health, and increases susceptibility to disease. Repeated bleaching episodes gradually weaken even these stalwart reef architects.',
      
      'Psammocora': 'Psammocora, sometimes called sandpaper coral due to their granular texture, form encrusting or plating colonies in moderate water flow areas. Although adaptable, bleaching impairs their energy production, reducing growth and resilience. Persistent bleaching lowers Psammocora populations, diminishing their role in stabilizing reef substrates and facilitating coral community succession.',
      
      'Stylocoeniella': 'Stylocoeniella corals are small-polyped and encrusting, forming closely packed colonies in shallow, high-energy reef zones. Bleaching interrupts their symbiosis, depleting their energy reserves and slowing colony expansion. With repeated bleaching stress, Stylocoeniella populations may decline, affecting the reef’s capacity to withstand strong currents and maintain structural complexity.',
  };
  
  
    function formatRegionName(region) {
return region.replace(/-/g, ' ').toUpperCase();
}

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

    // Add a chart title
  const chartTitle = document.createElement('div');
  chartTitle.classList.add('chart-title');
  chartTitle.textContent = 'Additional Bleached Corals Nearby';
  coralImageChart.appendChild(chartTitle);

  // Add a chart arrow with labels
  const chartArrow = document.createElement('div');
  chartArrow.classList.add('chart-arrow');


  // Create the arrow line
  const arrow = document.createElement('div');
  arrow.classList.add('arrow');
  chartArrow.appendChild(arrow);

   // Create the "Less bleached" label
   const labelLeft = document.createElement('span');
   labelLeft.classList.add('label', 'left');
   labelLeft.textContent = 'Less bleached';
   chartArrow.appendChild(labelLeft);

  // Create the "Most bleached" label
  const labelRight = document.createElement('span');
  labelRight.classList.add('label', 'right');
  labelRight.textContent = 'Most bleached';
  chartArrow.appendChild(labelRight);

  // Append the chart arrow to the coralImageChart container
  coralImageChart.appendChild(chartArrow);


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

      sortedCorals.slice(0, 10).forEach((coral) => {
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
