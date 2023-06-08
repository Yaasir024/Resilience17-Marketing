<script setup>
const data = [
    {
        id: '1',
        tag: 'insurance',
        name: 'Cassava Insurance',
        excerpt: 'Facilitating an emerging future of insurance you enjoy.',
    },
    {
        id: '2',
        tag: 'fintech',
        name: 'flutterwave',
        excerpt: 'We help banks and businesses build secure and seamless payments solutions for their customers.',
    },
    {
        id: '3',
        tag: 'HR TECH',
        name: 'pade HCM',
        excerpt: 'Building robust employee onboarding and reward systems for companies.',
    },
    {
        id: '4',
        tag: 'investments',
        name: 'bamboo',
        excerpt: 'On a mission to democratize access to investment opportunities for Africans',
    },
    {
        id: '5',
        tag: 'insurance',
        name: 'Cassava Insurance',
        excerpt: 'Facilitating an emerging future of insurance you enjoy.',
    },
    {
        id: '6',
        tag: 'healthcare',
        name: 'remedial health',
        excerpt: 'Improving quality of life in Africa',
    },
    {
        id: '7',
        tag: 'HR TECH',
        name: 'pade HCM',
        excerpt: 'Building robust employee onboarding and reward systems for companies.',
    },
    {
        id: '8',
        tag: 'healthcare',
        name: 'remedial health',
        excerpt: 'Improving quality of life in Africa',
    },
    {
        id: '9',
        tag: 'fintech',
        name: 'flutterwave',
        excerpt: 'We help banks and businesses build secure and seamless payments solutions for their customers.',
    },
]
</script>


<template>
    <section class="flex flex-wrap">
        <div class="card flex-full md:flex-50% lg:flex-33.33% px-[34px] xs:px-[48px] sm:px-[64px] py-[40px] border border-rm-light-2 bg-rm-light hover:bg-rm-green relative"
            v-for="item in data" :key="item.id">
            <svg class="arrow absolute top-[12px] right-[12px] opacity-0" width="24" height="24" viewBox="0 0 42 42"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1V5H34.18L1 38.18L3.82 41L37 7.82V33H41V1H9Z" fill="#000609" stroke="#000609"
                    stroke-width="0.6" />
            </svg>
            <h4 class="text-[18px] leading-[23px] tracking-[0.04em] font-bold uppercase">{{ item.tag }}</h4>
            <h2 class="mt-6 sm:mt-[16px] text-[48px] sm:text-[64px] leading-[52px] sm:leading-[65px] tracking-[0.02em] font-medium font-manuka capitalize">{{
                item.name }}</h2>
            <p class="mt-[75px] sm:mt-[120px] text-[20px] leading-[32px] tracking-[0.01em]">{{ item.excerpt }}</p>
        </div>
    </section>
</template>

<style scoped>
.card:hover .arrow {
    opacity: 1;
}
</style>