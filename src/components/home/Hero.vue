<template>
    <section class="min-h-screen bg-rm-green">
        <div class="w-full pb-[240px] relative">
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
                <nav class="hidden md:block lg:hidden w-full">
                    <ul class="flex items-center justify-between">
                        <li class="   mr-2 flex-1">
                            <RouterLink to="/">
                                <div
                                    class="pt-[12px] text-[20px] leading-[24px] tracking-[-0.01em] font-bold border-t border-t-rm-dark w-full ">
                                    R17 Vision</div>
                            </RouterLink>
                        </li>
                        <li class="  mr-2 flex-1">
                            <RouterLink to="/">
                                <div
                                    class="pt-[12px] text-[20px] leading-[24px] tracking-[-0.01em] font-bold border-t border-t-rm-dark w-full ">
                                    Approach</div>
                            </RouterLink>
                        </li>
                        <li class="mr-2 flex-1">
                            <RouterLink to="/">
                                <div
                                    class="pt-[12px] text-[20px] leading-[24px] tracking-[-0.01em] font-bold border-t border-t-rm-dark w-full ">
                                    Portfolio</div>
                            </RouterLink>
                        </li>
                        <li class=" flex-1">
                            <RouterLink to="/">
                                <div
                                    class="pt-[12px] text-[20px] leading-[24px] tracking-[-0.01em] font-bold border-t border-r border-rm-dark w-full ">
                                    Apply Now</div>
                            </RouterLink>
                        </li>
                    </ul>
                </nav>
            </header>

            <div
                class="mt-[80px] px-[80px] xl:px-[116px] text-[150px] xl:text-[180px] 2xl:text-[240px] leading-[170px] xl:leading-[192px] tracking-[0.01em] text-center font-extrabold font-manuka italic">
                Backing Africa’s
                Venture Forward
            </div>
            <img src="@/assets/images/home/hero/cloud-left.svg" alt=""
                class="h-[69px] w-[412px] absolute right-0 bottom-[235px]">
            <img src="@/assets/images/home/hero/scroll.svg" alt="" class="absolute right-[72px] bottom-[140px]">
            <img src="@/assets/images/home/hero/plane-right.svg" alt="" class="absolute left-[168px] bottom-[1px] z-[3]">
            <img src="@/assets/images/home/hero/big-plane.svg" alt="" class="absolute left-0 bottom-[-15px] z-[2]">
            <img src="@/assets/images/home/hero/plane-left.svg" alt="" class="absolute left-[1px] bottom-[175px] z-[1]">
        </div>
        <div class="text-[24px] leading-[31px] tracing-[0.02em] font-bold uppercase bg-rm-light-2 flex z-[5]">
            <div class="py-[14px] px-[24px]">NEWS</div>
            <div class="marquee-container relative w-full">
                <div class="marquee flex justify-around">
                    <span class="">r17 leads $30m investment in pade hcm, with sequoia and y-combinator</span>
                    <span class="">r17 leads $30m investment in pade hcm, with sequoia and y-combinator</span>
                </div>
                <div class="marquee marquee2 flex justify-around">
                    <span class="">r17 leads $30m investment in pade hcm, with sequoia and y-combinator</span>
                    <span class="">r17 leads $30m investment in pade hcm, with sequoia and y-combinator</span>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
.marquee-container {
    height: 30px;
    overflow: hidden;
    line-height: 30px;
}

.marquee {
    top: 20%;
    left: 100%;
    /* width: 100%; */
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    animation: marquee 30s linear
}

.marquee2 {
    animation-delay: 15s;
}

@keyframes marquee {
    0% {
        left: 100%;
    }

    100% {
        left: -100%
    }
}</style>