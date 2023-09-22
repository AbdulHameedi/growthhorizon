<script>
import { defineComponent } from 'vue'
import TestimonialCard from './TestimonialCard.vue';
import RegisterFooter from './RegisterFooter.vue';
import Footer from './Footer.vue';

export default defineComponent({
    components: {
        TestimonialCard,
        RegisterFooter,
        Footer
    }
})
</script>
<template>
    <section>
        <div class="bg-[url('../assets/bg-section.jpg')] bg-center">
            <div class="bg-feature bg-[url('../assets/featured-bg.webp')] h-[390px] flex flex-col gap-3 pl-20 justify-center text-white max-[1312px]:px-[1rem]">
                <h2 class="font-bold text-5xl max-[541px]:text-4xl max-[375px]:text-3xl">Discover the impact of Growth Horizon</h2>
                <div class="flex items-center gap-3">
                    <router-link to="/"><p class="hover:text-gray-400 cursor-pointer">HOME</p></router-link>
                    <p>/</p>
                    <p>TESTIMONIAL</p>
                </div>
            </div>
            <div class="px-[5.5rem] max-[1312px]:px-[1rem] grid grid-cols-3 py-20 gap-4 max-[880px]:grid-cols-2 max-[636px]:grid-cols-1" data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out">
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </div>
        </div>
        <RegisterFooter />
        <Footer />
    </section>
</template>