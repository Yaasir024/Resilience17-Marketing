<template>
    <section id="section-2" class="">
        <div class="bg-rm-light flex flex-wrap pt-[56px] pl-[20px] xs:pl-[35px] md:pl-[64px] relative">
            <div class="pb-[120px] flex-full lg:flex-50%">
                <h2 class="text-[45px] md:text-[72px] leading-[56px] md:leading-[63px] tracking-[0.01em] max-w-[640px] font-bold font-manuka italic">
                    Resilience17 helps
                    visionary African founders
                    build the next generation
                    of future-altering innovation
                </h2>
                <p class="text-[18px] md:text-[20px] leading-[24px] md:leading-[29px] font-medium tracking-[0.01em] max-w-[590px] mt-[24px]">
                    We know firsthand how lonely and difficult it gets in an unknown terrain with low visibility, lack of
                    infrastructure, almost zero support, and limited access to funding.
                    With us, you can overcome almost anything. 
                </p>
            </div>
            <div class="flex-full lg:flex-50% flex md:hidden lg:flex items-end xs:pl-[80px]">
                <div class="relative">

                    <div class="slide pb-[30px] z-[2] relative">
    
                        <img src="@/assets/images/home/section-2/hand.svg" alt="" class="z-[2]">
                        <img src="@/assets/images/home/section-2/shadow.svg" alt="" class="absolute bottom-[-42px] lg:bottom-[-33px] right-[1px] z-[2]">
                    </div>
                    <img src="@/assets/images/home/section-2/plane-1.svg" alt="" class="absolute top-[155px] right-[-40px] z-[3]">
                    <img src="@/assets/images/home/section-2/plane-2.svg" alt="" class="absolute top-[192px] right-[-56px] z-[3]">
                    <img src="@/assets/images/home/section-2/plane-3.svg" alt="" class="absolute top-[208px] right-[-13px] z-[1]">
                    <img src="@/assets/images/home/section-2/cloud-right.svg" alt="" class="absolute bottom-[65px] right-[-65px] z-[3]">
                    <img src="@/assets/images/home/section-2/cloud-left.svg" alt="" class="absolute bottom-[100px] left-[34px] ">
                </div>

            </div>
            <img src="@/assets/images/home/section-2/btm-left.svg" alt="" class="absolute left-0 bottom-0">
            <img src="@/assets/images/home/section-2/btm-right.svg" alt="" class="absolute right-0 bottom-0">
        </div>
        <img src="@/assets/images/home/section-2/terrain.svg" alt="" class="w-full">

    </section>
</template>

<style scoped>
@keyframes slideUpDown {
  0% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px); /* Adjust the number of pixels for the downward slide */
  }
  50% {
    transform: translateY(-20px); /* Pause at the bottom position */
  }
  90% {
    transform: translateY(0); /* Pause at the top position before restarting */
  }
  100% {
    transform: translateY(0);
  }
}
.slide {
    animation: slideUpDown 5s ease-in-out infinite;
}
</style>