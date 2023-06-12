<script setup>
import { ref, computed } from 'vue'

import { scrollTo } from '@/composables/useScrollToSection'
import { useClickOutside } from '@/composables/useClickOutside'

const showMobileNav = ref(false)
const mobileNav = ref(null)

useClickOutside(mobileNav, () => {
    showMobileNav.value = false
})

const scroll = (section) => {
    showMobileNav.value = false
    scrollTo(section)
}

const currentYear = computed(() => {
    const date = new Date();
    return date.getFullYear();
})

</script>

<template>
    <section id="hero" class="section h-screen bg-rm-green relative">
        <div class="w-full pb-[300px] relative">
            <header
                class="pt-[18px] sm:pt-[40px] px-[20px] sm:px-[30px] md:px-[64px]  flex justify-between items-center lg:items-start">
                <div class="logo hidden sm:flex mb-5 lg:mb-0 ">
                    <img src="@/assets/logo/icon.svg" alt="" class="mr-[8px]">
                    <img src="@/assets/logo/text.svg" alt="" class="">
                </div>
                <img src="@/assets/logo/full-min.svg" alt="" class="block sm:hidden">
                <nav class="hidden sm:block max-w-[400px]">
                    <ul class="">
                        <div class="flex gap-x-[32px] mb-[12px]">

                            <li class="  ">
                                <div class="pt-[10px] text-[20px] leading-[24px] tracking-[-0.01em] font-bold border-t-2 border-t-rm-dark w-full min-w-[140px] lg:min-w-[185px] cursor-pointer"
                                    @click="scrollTo('section-2')">
                                    R17 Vision</div>
                            </li>
                            <li class="  ">
                                <div class="pt-[10px] text-[20px] leading-[24px] tracking-[-0.01em] font-bold border-t-2 border-t-rm-dark w-full min-w-[140px] lg:min-w-[185px] cursor-pointer"
                                    @click="scrollTo('approach')">
                                    Approach</div>
                            </li>
                        </div>
                        <div class="flex gap-x-[32px] ">

                            <li class="">
                                <div class="pt-[10px] text-[20px] leading-[24px] tracking-[-0.01em] font-bold border-t-2 border-t-rm-dark w-full min-w-[140px] lg:min-w-[185px] cursor-pointer"
                                    @click="scrollTo('portfolio')">
                                    Portfolio</div>
                            </li>
                            <li class="">
                                <a href="#">
                                    <div
                                        class="pt-[10px] text-[20px] leading-[24px] tracking-[-0.01em] font-bold border-t-2 border-r-2 border-rm-dark w-full min-w-[140px] lg:min-w-[185px] flex items-center justify-between">
                                        <span class="font-bold">Apply Now </span>
                                        <svg class="mr-2" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M3.5 0.5V2H12.9425L0.5 14.4425L1.5575 15.5L14 3.0575V12.5H15.5V0.5H3.5Z"
                                                fill="#000609" stroke="#000609" stroke-width="0.6" />
                                        </svg>

                                    </div>
                                </a>
                            </li>
                        </div>
                    </ul>
                </nav>
                <div class="block sm:hidden reative" ref="mobileNav">
                    <button class="" @click="showMobileNav = !showMobileNav">
                        <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.375 0.833344C1.14294 0.833344 0.920376 0.925531 0.756281 1.08962C0.592187 1.25372 0.5 1.47628 0.5 1.70834C0.5 1.94041 0.592187 2.16297 0.756281 2.32706C0.920376 2.49116 1.14294 2.58334 1.375 2.58334H20.625C20.8571 2.58334 21.0796 2.49116 21.2437 2.32706C21.4078 2.16297 21.5 1.94041 21.5 1.70834C21.5 1.47628 21.4078 1.25372 21.2437 1.08962C21.0796 0.925531 20.8571 0.833344 20.625 0.833344H1.375ZM1.375 5.50001C1.14294 5.50001 0.920376 5.5922 0.756281 5.75629C0.592187 5.92039 0.5 6.14295 0.5 6.37501C0.5 6.60707 0.592187 6.82963 0.756281 6.99373C0.920376 7.15782 1.14294 7.25001 1.375 7.25001H20.625C20.8571 7.25001 21.0796 7.15782 21.2437 6.99373C21.4078 6.82963 21.5 6.60707 21.5 6.37501C21.5 6.14295 21.4078 5.92039 21.2437 5.75629C21.0796 5.5922 20.8571 5.50001 20.625 5.50001H1.375ZM0.5 11.0417C0.5 10.8096 0.592187 10.5871 0.756281 10.423C0.920376 10.2589 1.14294 10.1667 1.375 10.1667H20.625C20.8571 10.1667 21.0796 10.2589 21.2437 10.423C21.4078 10.5871 21.5 10.8096 21.5 11.0417C21.5 11.2737 21.4078 11.4963 21.2437 11.6604C21.0796 11.8245 20.8571 11.9167 20.625 11.9167H1.375C1.14294 11.9167 0.920376 11.8245 0.756281 11.6604C0.592187 11.4963 0.5 11.2737 0.5 11.0417ZM1.375 14.8333C1.14294 14.8333 0.920376 14.9255 0.756281 15.0896C0.592187 15.2537 0.5 15.4763 0.5 15.7083C0.5 15.9404 0.592187 16.163 0.756281 16.3271C0.920376 16.4912 1.14294 16.5833 1.375 16.5833H20.625C20.8571 16.5833 21.0796 16.4912 21.2437 16.3271C21.4078 16.163 21.5 15.9404 21.5 15.7083C21.5 15.4763 21.4078 15.2537 21.2437 15.0896C21.0796 14.9255 20.8571 14.8333 20.625 14.8333H1.375Z"
                                fill="#000609" />
                        </svg>
                    </button>
                    <transition name="nav">
                        <div class="fixed h-[calc(100vh-60px)] sm:h-[calc(100vh-100px)] flex flex-col justify-between bottom-0 left-0 right-0 bg-rm-dark z-50"
                            v-if="showMobileNav">
                            <ul class="px-[20px]">
                                <li class="py-[30px] text-[34px] leading-[39px] tracking-[-0.01em] font-bold text-rm-light border-b border-[#545440] cursor-pointer"
                                    @click="scroll('section-2')">R17 Vision</li>
                                <li class="py-[30px] text-[34px] leading-[39px] tracking-[-0.01em] font-bold text-rm-light border-b border-[#545440] cursor-pointer"
                                    @click="scroll('approach')">Approach</li>
                                <li class="py-[30px] text-[34px] leading-[39px] tracking-[-0.01em] font-bold text-rm-light border-b border-[#545440] cursor-pointer"
                                    @click="scroll('portfolio')">Portfolio</li>
                                <li class="text-[34px] leading-[39px] tracking-[-0.01em] font-bold text-rm-light border-b border-[#545440] cursor-pointer"
                                    @click="scroll('portfolio')">
                                    <a href="#" class="py-[30px] flex items-center justify-between">
                                        <span class="font-bold">Apply Now </span>
                                        <svg class="mr-2" width="20" height="20" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M3.5 0.5V2H12.9425L0.5 14.4425L1.5575 15.5L14 3.0575V12.5H15.5V0.5H3.5Z"
                                                fill="#E5E5DB" stroke="#E5E5DB" stroke-width="0.6" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                            <div class="border-t border-[#545440]">
                                <div class="pt-[16px] px-[20px] pb-[24px] w-full">
                                    <h2
                                        class="text-[48px] leading-[49px] tracking-[0.02em] font-medium font-manuka text-rm-light-2 ">
                                        Subscribe to
                                        our newsletter</h2>
                                    <div class="mt-[24px] w-full bg-rm-light p-1.5 ">
                                        <form @submit.prevent class="flex">
                                            <input type="text" placeholder="Email address"
                                                class="w-full px-[24px] text-[20px] leading-[26px] xs:leading-[31px] bg-transparent border-none outline-none font-medium text-rm-dark">
                                            <button type="submit"
                                                class="text-[20px] leading-[26px] tracking-[-0.01em] p-[16px]  bg-rm-dark flex items-center text-rm-light"><span
                                                    class="">Submit</span> <svg
                                                    class="arrow ml-[16px] w-[18px] xs:w-[24px] h-[16px] xs:h-[20px] "
                                                    viewBox="0 0 50 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M29 1L26.14 3.786L41.3 19H1V23H41.3L26.14 38.146L29 41L49 21L29 1Z"
                                                        fill="#E5E5DB" stroke="#E5E5DB" stroke-width="0.6" />
                                                </svg></button>
                                        </form>
                                    </div>
                                    <p
                                        class="mt-[16px] text-base leading-[21px] tracking-[0.01em] font-bold text-rm-brown-2">
                                        Please include an @ in
                                        the email address</p>
                                </div>
                                <div class="bg-rm-yellow">
                                    <div
                                        class="px-[20px] py-[16px] flex items-center justify-between border-b border-rm-dark">
                                        <a href="#" class="text-lg leading-[23px] tracking-[0.01em]">
                                            Twitter
                                        </a>
                                        <a href="#" class="text-lg leading-[23px] tracking-[0.01em]">
                                            LinkedIn
                                        </a>
                                        <a href="#" class="text-lg leading-[23px] tracking-[0.01em]">
                                            Instagram
                                        </a>
                                    </div>
                                    <div class="px-[20px] py-[12px] flex items-center justify-between">
                                        <span class="text-[14px] leading-[17px] tracking-[0.02em]">{{ currentYear }},
                                            Resilience17</span>
                                        <span class="text-[14px] leading-[17px] tracking-[0.02em]">Design, <span
                                                class="underline">Studio
                                                Mbari</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </transition>
                </div>
            </header>

            <div
                class="mt-[55px] px-[34px] md:px-[65px] lg:px-[80px] 3xl:px-[220px] text-[144px] lg:text-[150px] xl:text-[195px] 2xl:text-[220px] leading-[121px] xl:leading-[150px] 2xl:leading-[175px] tracking-[0.01em] text-center font-[900] font-manuka  relative overflow-hidden">
                Backing Africa<span class="font-dm-sans">’</span>s
                Venture Forward
                <img src="@/assets/images/home/hero/cloud-left.svg" alt=""
                    class="h-[69px] w-[412px] absolute right-[-180px] xs:right-[-100px] sm:right-0 bottom-[-20px] lg:bottom-[-27px]">
                <img src="@/assets/images/home/hero/scroll.svg" alt=""
                    class="absolute right-[100px] bottom-[-115px] cursor-pointer hidden sm:block"
                    @click="scrollTo('section-2')">
            </div>
        </div>
        <img src="@/assets/images/home/hero/plane-cloud-right.svg" alt=""
            class="absolute left-[195px] bottom-[205px] z-[3] hidden md:block">
        <img src="@/assets/images/home/hero/plane-right.svg" alt=""
            class="absolute left-[155px] bottom-[38px] z-[3] hidden md:block">
        <img src="@/assets/images/home/hero/big-plane.svg" alt=""
            class="absolute left-0 bottom-[35px] z-[2] h-[250px] w-[240px] hidden md:block">
        <img src="@/assets/images/home/hero/plane-left.svg" alt=""
            class="absolute left-[1px] bottom-[175px] z-[1] hidden md:block">
        <img src="@/assets/images/home/hero/plane-cloud-left.svg" alt=""
            class="absolute left-[1px] bottom-[120px] z-[1] hidden md:block">
        <div
            class="absolute bottom-0 left-0 right-0 text-xl xs:text-[24px] leading-[26px] sm:leading-[31px] tracing-[0.02em] font-bold uppercase bg-rm-light-2 flex z-10">
            <div class="py-[14px] px-[15px] sm:px-[24px] font-bold">NEWS</div>
            <div class="marquee w-full">
                <div class="marquee__group">
                    <span class="font-bold">r17 leads $30m investment in pade hcm, with sequoia and y-combinator</span>
                    <span class="mx-[12px]"><svg width="18" height="12" viewBox="0 0 18 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6L0 0H12L18 6L12 12H0L6 6Z" fill="#000609" />
                        </svg>
                    </span>
                    <span class="font-bold">r17 leads $30m investment in pade hcm, with sequoia and y-combinator</span>
                </div>
                <div aria-hidden="true" class="marquee__group">
                    <span class="font-bold">r17 leads $30m investment in pade hcm, with sequoia and y-combinator</span>
                    <span class="mx-[12px]"><svg width="18" height="12" viewBox="0 0 18 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6L0 0H12L18 6L12 12H0L6 6Z" fill="#000609" />
                        </svg>
                    </span>
                    <span class="font-bold">r17 leads $30m investment in pade hcm, with sequoia and y-combinator</span>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
.marquee {
    display: flex;
    overflow: hidden;
    user-select: none;
    gap: 12px;
    mask-image: linear-gradient(var(to bottom, to right),
            hsl(0 0% 0% / 0),
            hsl(0 0% 0% / 1) 20%,
            hsl(0 0% 0% / 1) 80%,
            hsl(0 0% 0% / 0));
}

.marquee__group {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 12px;
    min-width: 100%;
    animation: scroll-x 22s linear infinite;
}

.marquee--vertical {
    --mask-direction: to bottom;
}

.marquee--vertical,
.marquee--vertical .marquee__group {
    flex-direction: column;
}

.marquee--vertical .marquee__group {
    animation-name: scroll-y;
}

.marquee--reverse .marquee__group {
    animation-direction: reverse;
    animation-delay: -3s;
}

@keyframes scroll-x {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(calc(-100% - 12px));
    }
}

/* Nav Animation */
.nav-enter-active,
.nav-leave-active {
    transition: all 0.4s ease;
}

.nav-enter-from,
.nav-leave-to {
    transform: translateX(100%);
}
</style>