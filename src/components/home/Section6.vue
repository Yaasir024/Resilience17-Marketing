<script setup>
const data = [
    {
        id: '1',
        tag: 'Healthcare',
        name: 'Iwosan Hospitals',
        excerpt: 'Primary health care facility providing 24-hour emergency services.',
        href: 'https://www.lagoonhospitals.com/',
    },
    {
        id: '2',
        tag: 'HR TECH',
        name: 'pade HCM',
        excerpt: 'End-to-end people operations software for the new world of work.',
        href: 'https://www.padehcm.com/',
    },
    {
        id: '3',
        tag: 'real estate',
        name: 'Small Small',
        excerpt: 'A smart way to pay rent and make real estate purchases flexibly.',
        href: 'https://smallsmall.com/',
    },
    {
        id: '4',
        tag: 'hr tech',
        name: 'Bento Labs',
        excerpt: 'Reimagining salaries, benefits & HRM for employers and employees across Africa, wherever work happens.',
        href: 'https://bento.africa/',
    },
    {
        id: '5',
        tag: 'fintech',
        name: 'Klump',
        excerpt: 'Building infrastructure for flexible payment plans for everyone.',
        href: 'https://useklump.com/',
    },
    {
        id: '6',
        tag: 'fintech',
        name: 'Carrot',
        excerpt: 'Helping businesses and their customers access a line of credit collateralized by their assets.',
        href: 'https://www.carrotcredit.com/',
    },
    {
        id: '7',
        tag: 'education',
        name: 'Altschool',
        excerpt: 'Earn a diploma in high-in-demand tech skills at an affordable cost.',
        href: 'https://www.altschoolafrica.com/',
    },
    {
        id: '8',
        tag: 'fintech',
        name: 'Lipa Later',
        excerpt: 'Affordable and flexible monthly installments payments at 500+ stores across Africa.',
        href: 'https://lipalater.com/',
    },
    {
        id: '9',
        tag: 'capital',
        name: 'Greycroft',
        excerpt: 'Leading venture capital firm focused on investments in the Internet and mobile markets.',
        href: 'https://www.greycroft.com/',
    },
]
</script>


<template>
    <section id="portfolio" class="section">
        <div class="bg-rm-dark ">
            <img src="@/assets/images/home/pattern-sec6-mobile.svg" alt="" class="mb-[64px] w-full block xs:hidden">
            <div class="flex flex-col lg:flex-row lg:items-end justify-between py-[56px] px-[20px] xs:px-[45px] sm:px-[64px] lg:px-0 md:px-[64px]">
                <h1
                    class="pl-0 lg:pl-[64px] text-[96px] md:text-[104px] leading-[84px] md:leading-[92px] tracking-[0.01em] font-extrabold font-manuka text-rm-green">
                    Portfolio
                    Features</h1>
                <div class="mt-[24px] lg:mt-0 lg:flex-33.33% lg:flex">
                    <p
                        class="text-[18px] leading-[29px] tracking-[0.01em] font-medium text-rm-light text-left max-w-[310px] sm:max-w-[300px] lg:max-w-[320px]">
                        Backing bold, visionary founders that strive to move Africa forward.</p>
                    
                </div>
            </div>

        </div>
        <div class="flex flex-wrap">
            <div class="card flex-full md:flex-50% lg:flex-33.33% border border-rm-light-2 bg-rm-light hover:bg-rm-green relative"
                v-for="item in data" :key="item.id">
                <a :href="item.href" target="_blank">
                    <div class="px-[20px] xs:px-[45px] sm:px-[64px] py-[40px] ">
                        <svg class="arrow absolute top-[12px] right-[12px] xs:opacity-0" width="24" height="24"
                            viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 12L20 16H45.18L12 49.18L14.82 52L48 18.82V44L52 40V12H24Z" fill="#000609"
                                stroke="#000609" stroke-width="0.6" />
                        </svg>
    
    
                        <h4 class="text-[18px] leading-[23px] tracking-[0.04em] font-bold uppercase">{{ item.tag }}</h4>
                        <h2 class="mt-[16px] text-[64px] leading-[65px] tracking-[0.02em] font-medium font-manuka capitalize">{{
                            item.name }}</h2>
                        <p class="mt-[120px] text-[20px] leading-[32px] tracking-[0.01em]">{{ item.excerpt }}</p>
                    </div>
    
                </a>
            </div>
        </div>
    </section>
</template>

<!-- <svg class="arrow absolute top-[12px] right-[12px] xs:opacity-0" width="24" height="24" viewBox="0 0 42 42"
    fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 1V5H34.18L1 38.18L3.82 41L37 7.82V33H41V1H9Z" fill="#000609" stroke="#000609"
        stroke-width="0.6" />
</svg> -->
<style scoped>
.arrow {
    transform-origin: top right;
    transition: all .3s ease;
}

.card:hover .arrow {
    opacity: 1;
    transform: scale(1.2);
}</style>