<script setup>
import { ref, onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/all'
import { gsap } from 'gsap'
gsap.registerPlugin(ScrollTrigger)
let mm = gsap.matchMedia();
// onMounted(() => {
//     mm.add("(min-width: 1024px)", () => {
//         // console.log('desktop')
//         ScrollTrigger.create({
//             trigger: "#approach",
//             start: "top top",
//             end: "bottom bottom",
//             pin: "#left-approach"
//         })
//     })

// })

</script>

<template>
    <section id="approach" class="approach section  lg:flex bg-rm-light">
        <div id="left-approach"
            class="left-approach lg:sticky lg:top-0 bg-rm-light w-full lg:w-[50%]  pt-[64px] flex flex-col justify-between md:h-screen">
            <div class="px-[20px] xs:px-[45px] sm:px-[64px] mb-[64px] sm:mb-6 md:mb-0">
                <h1
                    class="cursor-light text-[96px] md:text-[104px] leading-[84px] sm:leading-[92px] tracking-[0.01em] font-extrabold font-manuka">
                    The R17 Approach
                </h1>
                <h1 class="text-[28px] leading-[36px] tracking-[0.01em] font-medium mt-[24px] max-w-[260px] 3xs:max-w-full">
                    All round support, beyond funding.
                </h1>
            </div>
            <img src="@/assets/images/home/section-4/pattern.svg" alt="" class="w-full hidden sm:block">
        </div>
        <div id="right-approach" class="cursor-light w-full lg:w-[50%]">
            <div
                class="pt-[40px] sm:pt-[70px] px-[20px] xs:px-[45px] sm:px-[64px] pb-[80px] sm:pb-10 bg-rm-dark md:min-h-[475px] border-b border-[#545440]">
                <img src="@/assets/images/home/section-4/funding.svg" alt="" class="h-[96px] w-[96px]">
                <h3 class="text-[64px] leading-[65px] tracking-[0.05em] mt-[24px] text-rm-green font-manuka">Funding</h3>
                <p class="text-[20px] leading-[34px] tracking-[0.01em] mt-[24px] text-rm-light-2 max-w-[460px]">
                    We offer robust funding options to unlock your startup’s potential. We believe in investing in visionary
                    founders venturing forward for Africa.
                </p>

            </div>
            <div
                class="pt-[40px] sm:pt-[64px] px-[20px] xs:px-[45px] sm:px-[64px] pb-[80px] sm:pb-10 bg-rm-dark md:min-h-[475px] border-b border-[#545440]">
                <img src="@/assets/images/home/section-4/advisory.svg" alt="" class="h-[96px] w-[96px]">
                <h3 class="text-[64px] leading-[65px] tracking-[0.05em] mt-[24px] text-rm-yellow font-manuka">Advisory</h3>
                <p class="text-[20px] leading-[34px] tracking-[0.01em] mt-[24px] text-rm-light-2 max-w-[460px]">
                    Tap into an extensive network of key individuals across Africa’s ecosystem; offering invaluable
                    insights, guidance, and mentorship. A robust ally system for the unique needs of our market.
                </p>

            </div>
            <div
                class="pt-[40px] sm:pt-[64px] px-[20px] xs:px-[45px] sm:px-[64px] pb-[80px] sm:pb-10 bg-rm-dark md:min-h-[475px] border-b border-[#545440]">
                <img src="@/assets/images/home/section-4/talent.svg" alt="" class="h-[96px] w-[96px]">
                <h3 class="text-[64px] leading-[65px] tracking-[0.05em] mt-[24px] text-rm-brown font-manuka">Talent</h3>
                <p class="text-[20px] leading-[34px] tracking-[0.01em] mt-[24px] text-rm-light-2 max-w-[460px]">
                    We connect you with a curated network of top-tier talent. From across the continent and beyond, we help
                    you find the right people who share your passion and drive.
                </p>

            </div>
            <div
                class="last-card cursor-dark pt-[48px] sm:pt-[56px] px-[20px] xs:px-[45px] sm:px-[64px] flex flex-col justify-between md:min-h-[470px] xs:hover:bg-rm-yellow">
                <p class="text-[20px] leading-[32px] font-medium mb-[80px] md:mb-0">
                    Ready to go from idea to unicorn and beyond?
                </p>
                <div
                    class="flex md:items-center justify-between flex-col-reverse md:flex-row border-t border-t-rm-dark pt-[12px] pb-[64px]">
                    <h3
                        class="text-[56px] 3xs:text-[64px] leading-[65px] tracking-[0.01em] 3xs:tracking-[0.02em] text-rm-dark font-medium font-manuka mt-[24px] md:mt-0">
                        Venture forward with
                        us</h3>
                    <svg class="arrow h-[26px] 3xs:h-[32px] sm:h-[42px] w-[26px] 3xs:w-[32px] sm:w-[42px] ml-auto md:ml-0"
                        viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12L20 16H45.18L12 49.18L14.82 52L48 18.82V44L52 40V12H24Z" fill="#000609"
                            stroke="#000609" stroke-width="0.6" />
                    </svg>


                </div>

            </div>
        </div>
    </section>
</template>
<!-- <svg class="arrow h-[26px] 3xs:h-[32px] sm:h-[42px] w-[26px] 3xs:w-[32px] sm:w-[42px] ml-auto md:ml-0" viewBox="0 0 42 42"
    fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 1V5H34.18L1 38.18L3.82 41L37 7.82V33H41V1H9Z" fill="#000609" stroke="#000609"
        stroke-width="0.6" />
</svg> -->

<style scoped>
.last-card .arrow {
    transform-origin: top right;
    transition: all .3s ease-in-out;
}

.last-card:hover .arrow {
    transform: scale(0.8);
}
</style>