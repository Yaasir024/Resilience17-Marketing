<script setup>
import { ref, computed } from 'vue'

import { scrollTo } from '@/composables/useScrollToSection'

const currentYear = computed(() => {
    const date = new Date();
    return date.getFullYear();
})
</script>

<template>
    <footer class="bg-rm-yellow pt-[40px] px-[30px] xs:px-[45px] sm:px-[64px]">
        <div class="w-full xl:flex justify-between items-start ">
            <div class="xl:w-[360px] xl:shrink-0 mb-12 xl:mb-0">

                <img src="@/assets/logo/logo-full.svg" alt="" class="">
            </div>
            <div class="w-full xl:pl-[64px]">
                <div class="flex flex-wrap">
                    <div class="flex-full md:flex-50% md:pr-[16px] mb-8 md:mb-0">
                        <div class="w-full pt-[12px] border-t border-rm-dark">
                            <h3 class="text-lg leading-[23px] tracking-[0.04em] font-bold uppercase">where</h3>
                            <div class="mt-[8px]">
                                <h3 class="text-[20px] leading-[29px] tracking-[0.01em] font-bold">Nigeria</h3>
                                <p class="text-[20px] leading-[29px] tracking-[0.01em]">
                                    No. 8, Adebisi Awolola, Ikoyi
                                </p>
                            </div>
                            <div class="mt-[12px]">
                                <h3 class="text-[20px] leading-[29px] tracking-[0.01em] font-bold">United Kingdom</h3>
                                <p class="text-[20px] leading-[29px] tracking-[0.01em]">
                                    34th Fl, Barbrook Towers, 23dr34, London
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex-full md:flex-50% md:pl-[16px] mb-8 md:mb-0">
                        <div class="w-full pt-[12px] border-t border-rm-dark">
                            <h3 class="text-lg leading-[23px] tracking-[0.04em] font-bold uppercase">inquiries</h3>
                            <div class="mt-[8px]">
                                <p class="text-[20px] leading-[29px] tracking-[0.01em]">
                                    +234 (807) 763 9342
                                </p>
                            </div>
                            <div class="mt-[12px]">
                                <p class="text-[20px] leading-[29px] tracking-[0.01em]">
                                    +44 (020) 7946 0999
                                </p>
                            </div>
                            <div class="mt-[12px]">
                                <a href="mailto:forward@resilience17.africa"
                                    class="text-[20px] leading-[29px] tracking-[0.01em] underline">
                                    forward@resilience17.africa
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap mt-[40px]">
                    <div class="flex-full mb:flex-50% mb:pr-[16px]">
                        <div class="w-full pt-[12px] border-t border-rm-dark">
                            <h3 class="text-lg leading-[23px] tracking-[0.04em] font-bold uppercase">connect with us</h3>
                            <div class="mt-[8px] flex">
                                <a href="#" class="mr-[20px] text-[20px] leading-[29px] tracking-[0.01em]">
                                    Twitter
                                </a>
                                <a href="#" class="mr-[20px] text-[20px] leading-[29px] tracking-[0.01em]">
                                    LinkedIn
                                </a>
                                <a href="#" class="text-[20px] leading-[29px] tracking-[0.01em]">
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="flex-full mb:flex-50% mb:pl-[16px] flex justify-end mt-8 mb:mt-0">
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
        </div>
        <div class="mt-[80px] py-[12px] border-t border-rm-dark flex items-center justify-between">
            <span class="text-[14px] leading-[17px] tracking-[0.02em]">{{ currentYear }}, Resilience17</span>
            <span class="text-[14px] leading-[17px] tracking-[0.02em]">Design, <span class="underline">Studio
                    Mbari</span></span>
        </div>
    </footer>
</template>