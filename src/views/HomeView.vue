<script setup>
import { useAnime } from "../stores/anime"

import Hero from "../components/home/Hero.vue"
import Section2 from "../components/home/Section2.vue"
import Section3 from "../components/home/Section3.vue"
import Section4 from "../components/home/Section4.vue"
import Section5 from "../components/home/Section5.vue"
import Section6 from "../components/home/Section6.vue"
import Section7 from "../components/home/Section7.vue"
import Section8 from "../components/home/Section8.vue"

const useAnimation = useAnime()
</script>

<template>
  <main class="">
    <Hero />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />
    <Section8 />
  </main>
</template>
