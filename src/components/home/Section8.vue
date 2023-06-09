<script setup>
import Newsletter from "@/components/home/Newsletter.vue"
import Footer from "@/components/home/Footer.vue"
</script>

<template>
    <section class="section">
        <div class="flex flex-wrap bg-rm-light-2">
            <div class="flex-full lg:flex-50%">
                <div class="card px-[50px] sm:px-[64px] pt-[40px] sm:pt-[56px] pb-[42px] sm:pb-[64px] border border-rm-light hover:bg-rm-green">
                    <h2 class="text-[50px] xs:text-[64px] leading-[60px] xs:leading-[65px] tracking-[0.02em] font-medium font-manuka">Latest news</h2>
                    <div class="arrow-container mt-[60px] flex items-center justify-start transition-all duration-300 ease-in-out">
                        <svg class="arrow" width="50" height="42" viewBox="0 0 50 42" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M29 1L26.14 3.786L41.3 19H1V23H41.3L26.14 38.146L29 41L49 21L29 1Z" fill="#E5E5DB"
                                stroke="#E5E5DB" stroke-width="0.6" />
                        </svg>

                    </div>
                </div>
                <div class="card px-[50px] sm:px-[64px] pt-[40px] sm:pt-[56px] pb-[42px] sm:pb-[64px] border border-rm-light hover:bg-rm-green">
                    <h2 class="text-[50px] xs:text-[64px] leading-[60px] xs:leading-[65px] tracking-[0.02em] font-medium font-manuka">Resources</h2>
                    <div class="arrow-container mt-[60px] flex items-center justify-start transition-all duration-300 ease-in-out">
                        <svg class="arrow" width="50" height="42" viewBox="0 0 50 42" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M29 1L26.14 3.786L41.3 19H1V23H41.3L26.14 38.146L29 41L49 21L29 1Z" fill="#E5E5DB"
                                stroke="#E5E5DB" stroke-width="0.6" />
                        </svg>

                    </div>
                </div>
            </div>
            <div class="flex-full lg:flex-[50%]">
                <div class="card px-[50px] sm:px-[64px] pt-[40px] sm:pt-[200px] pb-[42px] sm:pb-[64px] border border-rm-light hover:bg-rm-green">
                    <h2 class="text-[50px] xs:text-[64px] leading-[60px] xs:leading-[65px] tracking-[0.02em] font-medium font-manuka">See open positions</h2>
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
/* .arrow-container */
.arrow {
    transition: all .2s ease-in-out;
}
.card:hover .arrow {
    transform: translateX(calc(100vw - 200px));
}

@media only screen and (min-width: 1024px) {
    .card:hover .arrow {
        transform: translateX(calc(50vw - 200px));
    }
}
</style>