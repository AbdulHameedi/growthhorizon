<script>
import { defineComponent } from 'vue'
import Footer from '../components/Footer.vue';
import ScrollToTop from '../components/ScrollToTop.vue';
import RegisterFooter from '../components/RegisterFooter.vue';

export default defineComponent({
  components :{
    Footer,
    ScrollToTop,
    RegisterFooter
  },
  data(){
    return{

    }
  }
})
</script>
<template>
  <ScrollToTop />
  <RegisterFooter />
  <Footer />
</template>