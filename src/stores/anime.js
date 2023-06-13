import { ref, computed, onMounted } from "vue";
import { defineStore } from "pinia";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

export const useAnime = defineStore("anime", () => {
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia();
  // mm.add("(min-width: 1024px)", () => {
  //     console.log('desktop')
  //     ScrollTrigger.create({
  //         trigger:".approach",
  //         start:"top top",
  //         end:"bottom bottom",
  //         pin:".left-approach"
  //     })
  // })





  function setupScrollAnimation() {
    const sections = document.querySelectorAll(".section");
  
    sections.forEach((section, index) => {
      const sectionHeight = section.clientHeight;
  
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "bottom bottom",
          end: () => `+=${sectionHeight}`,
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });
    });
  }

  // onMounted(() => {
  //   setupScrollAnimation();
  // });


  onMounted(() => {
    // const sections = gsap.utils.toArray(".section");
    // console.log(sections);

  //   ScrollTrigger.create({
  //     trigger: "#hero",
  //     start: "top top",
  //     end: "bottom bottom",
  //     pin: "#section-2"
  // })

  

    // let tops = sections.map((section) =>
    //   ScrollTrigger.create({ trigger: section, start: "bottom bottom" })
    // );

    // sections.forEach((section, i) => {
    //   ScrollTrigger.create({
    //     trigger: section,
    //     start: () =>
    //       section.offsetHeight < window.innerHeight
    //         ? "bottom bottom"
    //         : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
    //     pin: true,
    //     pinSpacing: false,
    //   });
    // });

    // sections.forEach((section, index) => {
    //   const trigger = index === 0 ? section : sections[index - 1];

    //   gsap.to(section, {
    //     scrollTrigger: {
    //       trigger,
    //       start: 'top top',
    //       end: 'bottom top',
    //       pin: true,
    //       pinSpacing: false
    //     }
    //   });
    // });
  });

  return { mm };
});
