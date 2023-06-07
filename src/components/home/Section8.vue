<script setup>
import Newsletter from "@/components/home/Newsletter.vue"
import Footer from "@/components/home/Footer.vue"
</script>

<template>
    <section>
        <div class="flex bg-rm-light-2">
            <div class="flex-50%">
                <div class="card px-[64px] pt-[56px] pb-[64px] border border-rm-light hover:bg-rm-green">
                    <h2 class="text-[64px] leading-[65px] tracking-[0.02em] font-medium font-manuka">Latest news</h2>
                    <div class="arrow-container mt-[60px] flex items-center justify-start transition-all duration-300 ease-in-out">
                        <svg class="arrow" width="50" height="42" viewBox="0 0 50 42" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M29 1L26.14 3.786L41.3 19H1V23H41.3L26.14 38.146L29 41L49 21L29 1Z" fill="#E5E5DB"
                                stroke="#E5E5DB" stroke-width="0.6" />
                        </svg>

                    </div>
                </div>
                <div class="card px-[64px] pt-[56px] pb-[64px] border border-rm-light hover:bg-rm-green">
                    <h2 class="text-[64px] leading-[65px] tracking-[0.02em] font-medium font-manuka">Resources</h2>
                    <div class="arrow-container mt-[60px] flex items-center justify-start transition-all duration-300 ease-in-out">
                        <svg class="arrow" width="50" height="42" viewBox="0 0 50 42" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M29 1L26.14 3.786L41.3 19H1V23H41.3L26.14 38.146L29 41L49 21L29 1Z" fill="#E5E5DB"
                                stroke="#E5E5DB" stroke-width="0.6" />
                        </svg>

                    </div>
                </div>
            </div>
            <div class="flex-[50%]">
                <div class="card px-[64px] pt-[200px] pb-[64px] border border-rm-light hover:bg-rm-green">
                    <h2 class="text-[64px] leading-[65px] tracking-[0.02em] font-medium font-manuka">See open positions</h2>
                    <div class="arrow-container mt-[60px] flex items-center justify-start transition-all duration-300 ease-in-out">
                        <svg class="arrow" width="50" height="42" viewBox="0 0 50 42" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M29 1L26.14 3.786L41.3 19H1V23H41.3L26.14 38.146L29 41L49 21L29 1Z" fill="#E5E5DB"
                                stroke="#E5E5DB" stroke-width="0.6" />
                        </svg>

                    </div>
                </div>
            </div>
        </div>
        <Newsletter />
        <Footer />
    </section>
</template>

<style scoped>
.card:hover .arrow-container {
    justify-content: flex-end;
}
.card:hover .arrow path {
    fill: #000609;
    stroke: #000609;
}
</style>