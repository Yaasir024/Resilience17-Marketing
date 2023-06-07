<template>
    <section class="bg-rm-dark flex">
        <img src="@/assets/images/home/newsletter-pattern.svg" alt="" class="">
        <div class="pt-[48px] px-[64px] pb-[42px] w-full">
            <h2 class="text-[64px] leading-[65px] tracking-[0.02em] font-medium font-manuka text-rm-light-2">Subscribe to
                our newsletter</h2>
            <div class="mt-[24px] w-full bg-rm-light p-2 ">
                <form @submit.prevent class="flex">
                    <input type="text" placeholder="Email address"
                        class="w-full px-[24px] text-[24px] leading-[31px] bg-transparent border-none outline-none font-medium text-rm-dark">
                    <button type="submit"
                        class="text-[24px] leading-[31px] tracking-[-0.01em] px-[24px] py-[18px] bg-rm-dark flex items-center text-rm-light"><span
                            class="">Submit</span> <svg class="arrow ml-[16px]" width="24" height="20" viewBox="0 0 50 42" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M29 1L26.14 3.786L41.3 19H1V23H41.3L26.14 38.146L29 41L49 21L29 1Z" fill="#E5E5DB"
                                stroke="#E5E5DB" stroke-width="0.6" />
                        </svg></button>
                </form>
            </div>
            <p class="mt-[20px] text-base leading-[21px] tracking-[0.01em] font-bold text-rm-brown-2">Please include an @ in the email address</p>
    </div>
</section></template>