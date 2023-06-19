<script setup>
import { ref, computed } from 'vue'

import { scrollTo } from '@/composables/useScrollToSection'

const currentYear = computed(() => {
    const date = new Date();
    return date.getFullYear();
})
</script>

<template>
    <footer class="bg-rm-yellow pt-[64px] xs:pt-[40px] px-[20px] xs:px-[45px] sm:px-[64px]">
        <div class="w-full xl:flex justify-between items-start ">
            <div class="xl:w-[360px] xl:shrink-0 mb-12 xl:mb-0 hidden xs:block">

                <img src="@/assets/logo/logo-full.svg" alt="" class="">
            </div>
            <div class="w-full xl:pl-[64px]">
                <div class="flex flex-wrap">
                    <div class="flex-full md:flex-50% md:pr-[16px] mb-[62px] xs:mb-8 md:mb-0">
                        <div class="w-full pt-[12px] border-t border-rm-dark">
                            <h3 class="text-lg leading-[23px] tracking-[0.04em] font-bold uppercase">inquiries</h3>
                            
                            <div class="mt-[12px]">
                                <a href="mailto:forward@resilience17.africa"
                                    class="text-[20px] leading-[29px] tracking-[0.01em] underline">
                                    forward@resilience17.africa
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="flex-full md:flex-50% md:pl-[16px]">
                        <div class="w-full pt-[12px] border-t border-rm-dark">
                            <h3 class="text-lg leading-[23px] tracking-[0.04em] font-bold uppercase">connect with us</h3>
                            <div class="mt-[8px] flex items-center justify-between xs:justify-normal">
                                <a href="#" class="xs:mr-[20px] text-[20px] leading-[29px] tracking-[0.01em]">
                                    Twitter
                                </a>
                                <a href="#" class="xs:mr-[20px] text-[20px] leading-[29px] tracking-[0.01em]">
                                    LinkedIn
                                </a>
                                <a href="#" class="text-[20px] leading-[29px] tracking-[0.01em]">
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap mt-[40px]">
                </div>
                <div class="flex-full md:pl-[16px] flex justify-between items-end xs:justify-end mt-[140px] xs:mt-8 md:mt-0">
                    <img src="@/assets/logo/logo-full.svg" alt="" class="block xs:hidden">
                    <button class="text-base leading-[21px] tracking-[-0.02em]  flex items-center" @click="scrollTo('hero')">
                        <span class="font-bold">Back to top</span>
                        <svg class="ml-2" width="14" height="15" viewBox="0 0 14 15" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.75 6.25L1.62063 7.14375L6.375 2.40625L6.375 15H7.625L7.625 2.40625L12.3581 7.14375L13.25 6.25L7 0L0.75 6.25Z"
                                fill="#000609" />
                        </svg>

                    </button>
                </div>
            </div>
        </div>
        <div class="mt-[16px] xs:mt-[80px] py-[12px] border-t border-rm-dark flex items-center justify-between">
            <span class="text-[14px] leading-[17px] tracking-[0.02em]">{{ currentYear }}, Resilience17</span>
            <span class="text-[14px] leading-[17px] tracking-[0.02em]">Design, <a href="https://www.linkedin.com/in/usman-amusat/" class="underline">Amusat Usman</a></span>
        </div>
    </footer>
</template>