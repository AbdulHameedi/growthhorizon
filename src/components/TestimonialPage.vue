<script>
import { defineComponent } from 'vue'
import TestimonialCard from './TestimonialCard.vue';
import RegisterFooter from './RegisterFooter.vue';
import Footer from './Footer.vue';
import Navbar from './Navbar.vue';

export default defineComponent({
    components: {
        TestimonialCard,
        RegisterFooter,
        Footer,
        Navbar
    }
})
</script>   
<template>
    <section>
        <Navbar display="hidden" navColor="bg-[url('../assets/bg-white.png')]"/>
        <div class="bg-[url('../assets/bg-section.jpg')] bg-center">
            <div class="bg-feature bg-[url('../assets/featured-bg.webp')] bg-center h-[390px] flex flex-col gap-3 pl-20 justify-center text-white max-[1312px]:px-[1rem]">
                <h2 class="font-bold text-5xl max-[541px]:text-4xl max-[375px]:text-3xl">Discover the impact of Growth Horizon</h2>
                <div class="flex items-center gap-3">
                    <router-link to="/"><p class="hover:text-gray-400 cursor-pointer">HOME</p></router-link>
                    <p>/</p>
                    <p>TESTIMONIAL</p>
                </div>
            </div>
            <div class="px-[5.5rem] max-[1312px]:px-[1rem] grid grid-cols-3 py-20 gap-4 max-[880px]:grid-cols-2 max-[636px]:grid-cols-1" data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out">
                <TestimonialCard name="Taiwo Balkis" job="Self Employed" testimony="Growth Horizon provides a unique opportunity for businesses to connect with a highly engaged user base. It's an effective and cost-efficient way to boost brand awareness and conversions."/>
                <TestimonialCard name="Hammed Sanni" job="Student" testimony="Finally, a platform that rewards me for being an active social media user! Growth Horizon has allowed me to turn my online presence into a source of income."/>
                <TestimonialCard name="Elevated Excellence Elementary" job="Youtube Channel" testimony="We've tried many advertising platforms, but Growth Horizon stands out. The quality of engagement is remarkable, and the ability to set specific campaign goals ensures we get the results we want."/>
                <TestimonialCard name="Fawaz Makinde" job="Student" testimony="I was skeptical at first, but Growth Horizon is the real deal. I've earned a substantial amount just by sharing ads. This platform has changed the game for me."/>
            </div>
        </div>
        <RegisterFooter />
        <Footer />
    </section>
</template>