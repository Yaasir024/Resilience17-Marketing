<template>
    <section class="section flex flex-wrap">
        <div class="flex-full lg:flex-50% xs:pt-[56px] flex flex-col-reverse xs:flex-col justify-between bg-rm-dark">
            <div class="px-[20px] xs:px-[45px] sm::px-[64px] mb-[24px] xs:mb-28 lg:mb-0 ">
                <h1
                    class="text-[96px] 2xl:text-[104px] leading-[84px] md:leading-[92px] tracking-[0.01em] font-extrabold max-w-[350px] font-manuka text-rm-green xs:text-rm-light">
                    Spotting an
                    R17 Founder</h1>
                <p class="mt-[24px] text-[28px] leading-[36px] tracking-[0.01em] text-rm-light-2">What we look for to
                    invest.</p>
            </div>
            <img src="@/assets/images/home/pattern-sec7.svg" alt="" class="mb-[64px] xs:mb-0 w-full">
        </div>
        <div class="flex-full lg:flex-50%">
            <div class="bg-rm-yellow px-[20px] xs:px-[45px] sm:px-[64px] pt-[80px] pb-[60px] flex flex-wrap gap-y-[60px]">
                <div class="w-full sm:flex-50% lg:pr-[22px]">

                    <div class="border-t border-rm-dark pt-[20px]">
                        <h3 class="text-[24px] leading-[31px] tracking-[-0.01em] font-bold capitalize">Domain Knowledge</h3>
                        <p class="mt-[24px] text-base leading-[28px] tracking-[0.02em]">
                            At R17, we value founders who possess deep domain knowledge. Your industry insights give you an
                            innovative edge.
                        </p>
                    </div>
                </div>
                <div class="w-full sm:flex-50% lg:pl-[22px]">

                    <div class="border-t border-rm-dark pt-[20px]">
                        <h3 class="text-[24px] leading-[31px] tracking-[-0.01em] font-bold capitalize">Audacity of Vision
                        </h3>
                        <p class="mt-[24px] text-base leading-[28px] tracking-[0.02em]">
                            Dare to dream big. We celebrate visionary founders that seek to reshape markets and industries.
                        </p>
                    </div>
                </div>
                <div class="w-full sm:flex-50% lg:pr-[22px]">
                    <div class="flex-50% border-t border-rm-dark pt-[20px]">
                        <h3 class="text-[24px] leading-[31px] tracking-[-0.01em] font-bold capitalize">Founders’ Fit</h3>
                        <p class="mt-[24px] text-base leading-[28px] tracking-[0.02em]">
                            We seek founders who can complement each other's strengths, communicate, share a common purpose,
                            and
                            thrive best in collaborative environments.
                        </p>
                    </div>

                </div>
                <div class="w-full sm:flex-50% lg:pl-[22px]">
                    <div class="flex-50% border-t border-rm-dark pt-[20px]">
                        <h3 class="text-[24px] leading-[31px] tracking-[-0.01em] font-bold capitalize">Tenacity to Execute
                        </h3>
                        <p class="mt-[24px] text-base leading-[28px] tracking-[0.02em]">
                            Execution is key, and at R17, we applaud founders with unwavering determination. We admire your
                            grit, and unwavering commitment to turning vision into action.
                        </p>
                    </div>

                </div>
            </div>
            <div
                class="btm-card bg-rm-light xs:bg-rm-dark px-[20px] xs:px-[45px] sm:px-[64px] pt-[56px] pb-[64px] xs:hover:bg-rm-yellow">
                <p class="small-txt text-[20px] leading-[32px] font-medium text-rm-dark xs:text-rm-light-2">Ready to go from
                    idea to unicorn and beyond?</p>
                <div
                    class="arr-section flex md:items-center justify-between flex-col-reverse md:flex-row border-t border-t-rm-dark xs:border-t-rm-light pt-[12px] mt-[40px]">
                    <h3
                        class="big-txt text-[64px] leading-[65px] tracking-[0.02em] text-rm-dark xs:text-rm-light font-manuka">
                        Venture forward with us</h3>
                    <svg class="arrow h-[32px] sm:h-[42px] w-[32px] sm:w-[42px] mb-[24px] md:mb-0 ml-auto md:ml-0"
                        viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 1V5H34.18L1 38.18L3.82 41L37 7.82V33H41V1H9Z" fill="#E5E5DB" stroke="#E5E5DB"
                            stroke-width="0.6" />
                    </svg>

                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@media only screen and (min-width: 600px) {

    .btm-card:hover .small-txt {
        color: #000609;
    }
    
    .btm-card:hover .big-txt {
        color: #000609;
    }
    
    .btm-card:hover .arr-section {
        border-top-color: #000609;
    }
    
    .btm-card:hover .arrow path {
        fill: #000609;
        stroke: #000609;
    }
}

@media only screen and (max-width: 600px) {
    .btm-card .arrow path {
        fill: #000609;
        stroke: #000609;
    }
}

.btm-card .arrow {
    transform-origin: top right;
    transition: all .3s ease-in-out;
}

.btm-card:hover .arrow {
    transform: scale(0.8);
}</style>