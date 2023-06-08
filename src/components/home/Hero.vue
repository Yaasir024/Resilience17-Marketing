<script setup>
import { ref, computed } from 'vue'

import { scrollTo } from '@/composables/useScrollToSection'
</script>

<template>
    <section id="hero" class="min-h-screen bg-rm-green relative">
        <div class="w-full pb-[300px] relative">
            <header class="pt-[40px] px-[45px] md:px-[64px]  flex flex-col lg:flex-row justify-between items-start">
                <div class="logo flex mb-5 lg:mb-0">
                    <img src="@/assets/logo/icon.svg" alt="" class="mr-[8px]">
                    <img src="@/assets/logo/text.svg" alt="" class="">
                </div>
                <nav class="hidden lg:block max-w-[400px]">
                    <ul class="">
                        <div class="flex gap-x-[32px] mb-[24px]">

                            <li class="  ">
                                <RouterLink to="/">
                                    <div
                                        class="pt-[12px] text-[20px] leading-[24px] tracking-[-0.01em] font-bold border-t border-t-rm-dark w-full min-w-[185px]">
                                        R17 Vision</div>
                                </RouterLink>
                            </li>
                            <li class="  ">
                                <RouterLink to="/">
                                    <div
                                        class="pt-[12px] text-[20px] leading-[24px] tracking-[-0.01em] font-bold border-t border-t-rm-dark w-full min-w-[185px]">
                                        Approach</div>
                                </RouterLink>
                            </li>
                        </div>
                        <div class="flex gap-x-[32px] mb-[24px]">

                            <li class="">
                                <RouterLink to="/">
                                    <div
                                        class="pt-[12px] text-[20px] leading-[24px] tracking-[-0.01em] font-bold border-t border-t-rm-dark w-full min-w-[185px]">
                                        Portfolio</div>
                                </RouterLink>
                            </li>
                            <li class="">
                                <RouterLink to="/">
                                    <div
                                        class="pt-[12px] text-[20px] leading-[24px] tracking-[-0.01em] font-bold border-t border-r border-rm-dark w-full min-w-[185px]">
                                        Apply Now</div>
                                </RouterLink>
                            </li>
                        </div>
                    </ul>
                </nav>
            </header>

            <div
                class="mt-[70px] px-[40px] md:px-[65px] lg:px-[80px] xl:px-[116px] text-[58px] xs:text-[92px] md:text-[120px] lg:text-[150px] xl:text-[180px] 2xl:text-[240px] leading-[70px] xs:leading-[100px] lg:leading-[170px] xl:leading-[192px] tracking-[0.01em] text-center font-extrabold font-manuka italic">
                Backing Africa’s
                Venture Forward
            </div>
            <img src="@/assets/images/home/hero/cloud-left.svg" alt=""
                class="h-[45px] lg:h-[69px] w-[300px] lg:w-[412px] absolute right-0 bottom-[180px] lg:bottom-[235px]">
            <img src="@/assets/images/home/hero/scroll.svg" alt=""
                class="absolute right-[72px] bottom-[140px] cursor-pointer" @click="scrollTo('section-2')">
        </div>
        <img src="@/assets/images/home/hero/plane-right.svg" alt="" class="absolute left-[168px] bottom-[38px] z-[3] hidden md:block">
        <img src="@/assets/images/home/hero/big-plane.svg" alt="" class="absolute left-0 bottom-[35px] z-[2] h-[308px] w-[247px] hidden md:block">
        <img src="@/assets/images/home/hero/plane-left.svg" alt="" class="absolute left-[1px] bottom-[240px] z-[1] hidden md:block">
        <div
            class="absolute bottom-0 left-0 right-0 text-[24px] leading-[31px] tracing-[0.02em] font-bold uppercase bg-rm-light-2 flex z-10">
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
    animation: scroll-x 20s linear infinite;
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
</style>