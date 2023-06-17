import { ref, computed, onMounted } from "vue";
import { defineStore } from "pinia";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

export const useAnime = defineStore("anime", () => {
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia();

  let tl = gsap.timeline({ defaults: { opacity: 0, ease: "none" } });

  // , "-=0.2"
  const heroAnimate = () => {
    gsap.set("body", { overflow: "hidden" });
    gsap.set("#hero", {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 100,
    });
    gsap.set("#hero-logo-text", { scale: 6, y: 100, transformOrigin: "left" });
    tl
      // .from("#demo", {ease:"linear", autoAlpha:0})
      .from("#hero-init-btm", { y: -80, autoAlpha: 1, duration: 3 })
      .from("#hero-logo-text", { y: 200, duration: 2 }, "<")
      .to("#hero-init-btm", { y: 80, autoAlpha: 0, duration: 1.5 }, "+=4")
      .to(
        "#hero-logo-text",
        { y: 0, scale: 1, autoAlpha: 1, duration: 0.5 },
        "<"
      )
      .from("#hero-nav-links", { x: 100, width: 100, duration: 0.6 }, "<")
      .from("#hero-logo-icon", { x: -50, duration: 0.5 }, "<")
      .from("#hero-main-text", { y: -100, duration: 0.4 }, "<")
      .from("#hero-marquee", { y: 100, duration: 0.5 }, "<")
      .from("#hero-text-cloud", { x: 80, y: -10, duration: 1 }, "-=0.2")
      .from(
        "#hero-plane-big-illust",
        { x: -80, y: 100, rotate: 10, duration: 1 },
        "+=0.2"
      )
      .from(
        "#hero-plane-right-illust",
        { y: 100, rotate: -10, duration: 1 },
        "<"
      )
      .from("#hero-plane-left-illust", { x: -80, rotate: 10, duration: 1 }, "<")
      .from("#hero-cloud-illust", { scale: 0.2, duration: 0.3 }, "+=0.01")
      .to("#hero", { position: "relative", autoAlpha: 1 }, "+=0.5")
      .to(
        "body",
        { overflow: "auto", autoAlpha: 1, onComplete: stopAnimation },
        "<"
      ).then(() => {

        console.log("done");
        tl = null; // Stop the animation
      })
  };
  const stopAnimation = () => {
    if (tl) {
    }
  };

  onMounted(() => {
    mm.add("(min-width: 1024px)", () => {
      heroAnimate();
    });

    mm.add("(min-width: 1024px)", () => {
      console.log("desktop");
      ScrollTrigger.create({
        trigger: ".approach",
        start: "top top",
        end: "bottom bottom",
        pin: ".left-approach",
      });
    });
  });

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
  // () => `+=${sectionHeight}`

  onMounted(() => {
    setupScrollAnimation();
  });

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
