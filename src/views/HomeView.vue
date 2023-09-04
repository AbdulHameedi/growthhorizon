<script>
import { defineComponent } from 'vue'
import Footer from '../components/Footer.vue';
import ScrollToTop from '../components/ScrollToTop.vue';
import Navbar from '../components/Navbar.vue';
import RegisterFooter from '../components/RegisterFooter.vue';
import Blog from '../components/Blog.vue';
import HeroSection from '../components/HeroSection.vue';

export default defineComponent({
  components :{
    Footer,
    ScrollToTop,
    Navbar,
    RegisterFooter,
    Blog,
    HeroSection
},
})
</script>
<template>
  <Navbar />
  <HeroSection />
  <ScrollToTop />
  <Blog />
  <RegisterFooter />
  <Footer />
</template>