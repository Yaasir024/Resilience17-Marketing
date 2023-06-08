import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ScrollTrigger } from 'gsap/all'
import { gsap } from 'gsap'

export const useAnime = defineStore('anime', () => {
    gsap.registerPlugin(ScrollTrigger)
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
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { mm, doubleCount, increment }
})
