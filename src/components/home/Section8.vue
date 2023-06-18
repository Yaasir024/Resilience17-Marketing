<script setup>
import Newsletter from "@/components/home/Newsletter.vue"
import Footer from "@/components/home/Footer.vue"

const news = [
    {
        id: '1',
        outlet: 'the guardian',
        headline: 'Lagoon Hospital Announces Flutterwave CEO, Agboola as Director',
        link: 'https://guardian.ng/news/lagoon-hospital-announces-flutterwave-ceo-agboola-as-director/'
    },
    {
        id: '2',
        outlet: 'punch news',
        headline: 'Olugbenga GB Agboola Invests in Lagoon Hospital, Aims to Provide Specialist Medical Care',
        link: 'https://punchng.com/olugbenga-gb-agboola-invests-in-lagoon-hospital/?amp'
    },
    {
        id: '3',
        outlet: 'disrupt africa',
        headline: 'Nigerian HR Tech Startup Pade HCM Raises $500k Pre-Seed Funding',
        link: 'https://disrupt-africa.com/2023/02/14/nigerian-hr-tech-startup-pade-hcm-raises-500k-pre-seed-funding/'
    },
]
</script>

<template>
    <section class="section">
        <div class="flex flex-wrap bg-rm-light-2">
            <div class="flex-full lg:flex-50% bg-rm-brown-2">
                <div
                    class="card px-[20px] xs:px-[45px] sm:px-[64px] pt-[40px] sm:pt-[56px] pb-[42px] sm:pb-[64px] border border-rm-light bg-rm-light-2 hover:bg-rm-green lg:min-h-[450px]">
                    <h2 class="text-[56px] 3xs:text-[64px] leading-[65px] tracking-[0.02em] font-medium font-manuka">Latest
                        news</h2>
                    <div
                        class="arrow-container mt-[60px] flex items-center justify-start transition-all duration-300 ease-in-out">

                        <svg class="arrow" width="64" height="64" viewBox="0 0 64 64" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M39 14.7861L33.14 14.7863L48.3 30.0003H8V34.0003H48.3L33.14 49.1463L39 49.1461L56 32.0003L39 14.7861Z"
                                fill="#E5E5DB" stroke="#E5E5DB" stroke-width="0.6" />
                        </svg>

                    </div>
                </div>
            </div>
            <div class="flex-full lg:flex-[50%]">
                <a :href="nw.link" target="_blank" v-for="nw in news" :key="nw.id" class="block">
                    <div class="pt-[40px] pb-[56px] px-[20px] xs:px-[45px] sm:px-[64px]  border border-rm-light bg-rm-light-2  hover:bg-rm-green">
                        <div class="flex items-center">
                            <span class="text-[14px] leading-[18px] font-bold tracking-[0.06em] uppercase">{{ nw.outlet
                            }}</span>
                            <svg class="ml-[8px]" width="12" height="12" viewBox="0 0 12 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 1L3 2H9.295L1 10.295L1.705 11L10 2.705V9L11 8V1H4Z" fill="#000609"
                                    stroke="#000609" stroke-width="0.6" />
                            </svg>

                        </div>
                        <div class="mt-[16px]">
                            <span class="text-[24px] leading-[35px] font-medium capitalize">
                                {{ nw.headline }}
                            </span>
                        </div>
                    </div>
                </a>
                <div class=""></div>
                <div class="card px-[20px] xs:px-[45px] sm:px-[64px] pt-[40px] sm:pt-[200px] pb-[42px] sm:pb-[64px] border border-rm-light hover:bg-rm-green"
                    v-if="false">
                    <h2 class="text-[56px] 3xs:text-[64px] leading-[65px] tracking-[0.02em] font-medium font-manuka">See
                        open positions</h2>
                    <div
                        class="arrow-container mt-[60px] flex items-center justify-start transition-all duration-300 ease-in-out">

                        <svg class="arrow" width="64" height="64" viewBox="0 0 64 64" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M39 14.7861L33.14 14.7863L48.3 30.0003H8V34.0003H48.3L33.14 49.1463L39 49.1461L56 32.0003L39 14.7861Z"
                                fill="#E5E5DB" stroke="#E5E5DB" stroke-width="0.6" />
                        </svg>

                    </div>
                </div>
            </div>
        </div>
        <Newsletter />
        <Footer />
    </section>
</template>

<style scoped>
/* .arrow-container */
.arrow {
    transition: all .2s ease-in-out;
}

.card:hover .arrow {
    transform: translateX(calc(100vw - 120px));
}

@media only screen and (min-width: 640px) {
    .card:hover .arrow {
        transform: translateX(calc(100vw - 200px));
    }

}

.card:hover .arrow path {
    fill: #000609;
    stroke: #000609;
}

@media only screen and (min-width: 1024px) {
    .card:hover .arrow {
        transform: translateX(calc(50vw - 200px));
    }
}
</style>