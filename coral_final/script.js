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
            document.body.style.cursor = "pointer";
            document.body.addEventListener("click", handleClick);
      
            function handleClick() {
              // Reset image opacity and fade out overlay text
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
      
              // Add hover-enabled class to all images
              document.querySelectorAll(".img").forEach(img => {
                img.classList.add("hover-enabled");
              });
      
              // Reset cursor and remove click listener
              document.body.style.cursor = "default";
              document.body.removeEventListener("click", handleClick);
            }
          }
        });
      }