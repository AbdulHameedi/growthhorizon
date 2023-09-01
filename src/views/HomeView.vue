<script>
import { defineComponent } from 'vue'
import Footer from '../components/Footer.vue';
import ScrollToTop from '../components/ScrollToTop.vue';
import Navbar from '../components/Navbar.vue';

export default defineComponent({
  components :{
    Footer,
    ScrollToTop,
    Navbar
},
  data(){
    return{

    }
  }
})
</script>
<template>
  <Navbar />
  <ScrollToTop />
  <Footer />
</template>