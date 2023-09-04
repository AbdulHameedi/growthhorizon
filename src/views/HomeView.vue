<script>
import { defineComponent } from 'vue'
import Footer from '../components/Footer.vue';
import ScrollToTop from '../components/ScrollToTop.vue';
import Navbar from '../components/Navbar.vue';
import RegisterFooter from '../components/RegisterFooter.vue';
import Blog from '../components/Blog.vue';
import Contact from '../components/Contact.vue';
import Ratings from '../components/Ratings.vue';
import Testimonials from '../components/Testimonials.vue';

export default defineComponent({
  components :{
    Footer,
    ScrollToTop,
    Navbar,
    RegisterFooter,
    Blog,
    Contact,
    Ratings,
    Testimonials
},
})
</script>
<template>
  <Navbar />
  <ScrollToTop />
  <Testimonials />
  <Ratings />
  <Contact />
  <Blog />
  <RegisterFooter />
  <Footer />
</template>