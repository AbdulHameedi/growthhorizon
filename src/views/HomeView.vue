<script>
import { defineComponent } from 'vue'
import Footer from '../components/Footer.vue';
import ScrollToTop from '../components/ScrollToTop.vue';

export default defineComponent({
  components :{
    Footer,
    ScrollToTop
  },
  data(){
    return{

    }
  }
})
</script>
<template>
  <ScrollToTop />
  <Footer />
</template>