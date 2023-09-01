<script>
import { defineComponent } from 'vue'
import Footer from '../components/Footer.vue';
import ScrollToTop from '../components/ScrollToTop.vue';
import Navbar from '../components/Navbar.vue';
import RegisterFooter from '../components/RegisterFooter.vue';

export default defineComponent({
  components :{
    Footer,
    ScrollToTop,
    Navbar,
    RegisterFooter
},
})
</script>
<template>
  <Navbar />
  <ScrollToTop />
  <RegisterFooter />
  <Footer />
</template>