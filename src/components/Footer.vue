<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data(){
    return{

    }
  }
})
</script>
<template>
    <div>
        <div class="bg-[#0D0D3F] px-[5.5rem]"> 
          <div class="flex justify-between items-center py-10 border-b border-gray-700">
            <div class="flex items-center gap-4">
                <svg class="text-[#2E3AA5]" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16"><path fill="currentColor" d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2H4Zm10 4.267l.47.25A1 1 0 0 1 15 5.4v.817l-1 .6v-2.55Zm-1 3.15l-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.417Zm-11-.6l-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267v2.55Zm13 .566v5.734l-4.778-2.867L15 7.383Zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083l6.965 4.18ZM1 13.116V7.383l4.778 2.867L1 13.117Z"/></svg>
                <p class="text-white font-semibold text-xl">info@company.com</p>
            </div>
            <div class="flex flex-col items-center">
                <img src="../assets/logo.svg" width="30px" height="30px" alt="">
                <p class="text-white font-semibold text-2xl">Surince</p>
            </div>
            <div class="flex items-center gap-2">
                <p class="text-white font-semibold text-xl">-223 333 333 33</p>
                <svg class="text-[#2E3AA5]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linejoin="round"><circle cx="12" cy="12" r="9" stroke-linecap="round" stroke-width="2"/><path stroke-width="3" d="M12 16h.01v.01H12z"/><path stroke-linecap="round" stroke-width="2" d="M10.586 7.586c.39-.39.9-.585 1.41-.586a1.991 1.991 0 0 1 1.418.586c.39.39.586.902.586 1.414a1.99 1.99 0 0 1-.586 1.414a1.993 1.993 0 0 1-1.418.586L12 12"/></g></svg>
            </div>
          </div>
          <div class="grid grid-cols-4">
            <div>
                <p>Explore</p>
                <div>
                    <p>About Us</p>
                    <p>Testimonials</p>
                    <p>Register</p>
                    <p>Contact</p>
                    <p>Latest News</p>
                </div>
            </div>
            <div>
                <p>Contact</p>
                <p>88 Broklyn Golden Road Street, New York. USA</p>
                <p></p>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div></div>
    </div>
</template>