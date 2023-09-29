<script>
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  data(){
    return{
      email: ''
    }
  },
  methods: {
    async onSubmit(){
      if(this.email == ''){
        alert('Field is empty')
      }else{
        let result = await axios.post("https://dbgrowthhorizon.onrender.com/newsletter" , {
          email: this.email
        })
        if(result.status == 201){
          alert('Submitted');
          this.email = ''
        }
      }
    }
  }
})
</script>
<template>
    <div data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out">
        <div class="bg-[#0D0D3F] px-[5.5rem] max-[1312px]:px-[1rem]"> 
          <div class="flex justify-between items-center py-10 border-b border-gray-700 max-[892px]:justify-center">
            <div class="flex items-center gap-4 max-[892px]:hidden">
                <svg class="text-[#2E3AA5]" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16"><path fill="currentColor" d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2H4Zm10 4.267l.47.25A1 1 0 0 1 15 5.4v.817l-1 .6v-2.55Zm-1 3.15l-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.417Zm-11-.6l-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267v2.55Zm13 .566v5.734l-4.778-2.867L15 7.383Zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083l6.965 4.18ZM1 13.116V7.383l4.778 2.867L1 13.117Z"/></svg>
                <p class="text-white font-semibold text-xl">contact.growthhorizon@gmail.com</p>
            </div>
            <div class="flex flex-col items-center">
                <img src="../assets/logo.svg" width="25px" height="25px" alt="">
                <p class="text-white font-semibold text-2xl">GrowthHorizon</p>
            </div>
            <div class="flex items-center gap-2 max-[892px]:hidden">
                <p class="text-white font-semibold text-xl">+234 901 646 1891</p>
                <svg class="text-[#2E3AA5]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linejoin="round"><circle cx="12" cy="12" r="9" stroke-linecap="round" stroke-width="2"/><path stroke-width="3" d="M12 16h.01v.01H12z"/><path stroke-linecap="round" stroke-width="2" d="M10.586 7.586c.39-.39.9-.585 1.41-.586a1.991 1.991 0 0 1 1.418.586c.39.39.586.902.586 1.414a1.99 1.99 0 0 1-.586 1.414a1.993 1.993 0 0 1-1.418.586L12 12"/></g></svg>
            </div>
          </div>
          <div class="grid grid-cols-4 py-20 gap-10 max-[1204px]:grid-cols-2 max-[892px]:grid-cols-1">
            <div>
                <p class="text-white text-2xl font-semibold mb-4">Explore</p>
                <div class="text-gray-500 text-md font-semibold flex flex-col gap-3 cursor-pointer">
                    <p class="hover:text-white transition duration-500">About Us</p>
                    <p class="hover:text-white transition duration-500">Testimonials</p>
                    <p class="hover:text-white transition duration-500">Register</p>
                    <p class="hover:text-white transition duration-500">Contact</p>
                    <p class="hover:text-white transition duration-500">Latest News</p>
                </div>
            </div>
            <div class="flex flex-col gap-3 text-gray-500 text-md font-semibold">
                <p class="text-white text-2xl font-semibold">Contact</p>
                <p>123 Digital Avenue, Online Business Headquarters</p>
                <p>Mon – Sat: 12:00am to 12:00pm Sun: Closed</p>
                <div class="flex items-center gap-2 text-white">
                  <a href="https://www.instagram.com/gh_growthhorizon/" target="_blank"><p class="bg-[#181855] rounded-[50%] p-3 hover:bg-[#28B79A] hover:scale-x-[-1]"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z"/></svg></p></a>
                  <a href="https://web.facebook.com/profile.php?id=61551899071724" target="_blank"><p class="bg-[#181855] rounded-[50%] p-3 hover:bg-[#28B79A] hover:scale-x-[-1]"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M13.001 19.938a8.001 8.001 0 0 0-1-15.938a8 8 0 0 0-1 15.938V14h-2v-2h2v-1.654c0-1.337.14-1.822.4-2.311A2.725 2.725 0 0 1 12.537 6.9c.382-.205.857-.328 1.687-.381c.329-.021.755.005 1.278.08v1.9h-.5c-.917 0-1.296.043-1.522.164a.728.728 0 0 0-.314.314c-.12.226-.164.45-.164 1.368V12h2.5l-.5 2h-2v5.938Zm-1 2.062c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10Z"/></svg></p></a>
                  <a href="mailto:contact.growthhorizon@gmail.com"><p class="bg-[#181855] rounded-[50%] p-3 hover:bg-[#28B79A] hover:scale-x-[-1]"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"/></svg></p></a>
                  <a href="https://chat.whatsapp.com/EdJgy1T5BaVHRrQxjmRWXP" target="_blank"><p class="bg-[#181855] rounded-[50%] p-3 hover:bg-[#28B79A] hover:scale-x-[-1]"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#akarIconsWhatsappFill0)"><path fill="currentColor" fill-rule="evenodd" d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967c-.272-.099-.47-.148-.669.15c-.198.296-.767.966-.94 1.164c-.174.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.019-.458.13-.606c.134-.133.297-.347.446-.52c.149-.174.198-.298.297-.497c.1-.198.05-.371-.025-.52c-.074-.149-.668-1.612-.916-2.207c-.241-.579-.486-.5-.668-.51c-.174-.008-.372-.01-.57-.01c-.198 0-.52.074-.792.372c-.273.297-1.04 1.016-1.04 2.479c0 1.462 1.064 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487c.71.306 1.263.489 1.694.625c.712.227 1.36.195 1.872.118c.57-.085 1.758-.719 2.006-1.413c.247-.694.247-1.289.173-1.413c-.074-.124-.272-.198-.57-.347Zm-5.422 7.403h-.004a9.87 9.87 0 0 1-5.032-1.378l-.36-.214l-3.742.982l.999-3.648l-.235-.374a9.861 9.861 0 0 1-1.511-5.26c.002-5.45 4.436-9.884 9.889-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.892 6.993c-.002 5.45-4.436 9.885-9.884 9.885Zm8.412-18.297A11.815 11.815 0 0 0 11.992 0C5.438 0 .102 5.335.1 11.892a11.864 11.864 0 0 0 1.587 5.945L0 24l6.304-1.654a11.881 11.881 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.821 11.821 0 0 0-3.48-8.413" clip-rule="evenodd"/></g><defs><clipPath id="akarIconsWhatsappFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg></p></a>
                </div>
            </div>
            <div>
              <p class="text-white text-2xl font-semibold mb-4">Gallery</p>
              <div class="grid grid-cols-3 gap-2">
                <img class="rounded-md w-[75px] h-[70px]" src="../assets/news04-370x320.webp" alt="news-1">
                <img class="rounded-md w-[75px] h-[70px]" src="../assets/news04-370x320.webp" alt="news-2">
                <img class="rounded-md w-[75px] h-[70px]" src="../assets/news03-370x320.webp" alt="news-3">
                <img class="rounded-md w-[75px] h-[70px]" src="../assets/business-insurance.webp" alt="business-1">
                <img class="rounded-md w-[75px] h-[70px]" src="../assets/news03-370x320.webp" alt="news-4">
                <img class="rounded-md w-[75px] h-[70px]" src="../assets/business-insurance.webp" alt="business-2">
              </div>
            </div>
            <div>
              <p class="text-white text-xl font-semibold mb-4">Transforming digital activity into tangible rewards</p>
              <p class="mb-4 text-gray-500 text-md font-semibold">Subscribe our newsletter</p>
              <form @submit.prevent="onSubmit">
                <div class="flex items-center">
                  <input class="p-4 rounded-l-md outline-none max-[1204px]:w-full" type="email" placeholder="Email address" v-model="email">
                  <button type="submit" class="bg-[#28B79A] rounded-r-md p-[1.2rem] text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M435.9 64.9l-367.1 160c-6.5 3.1-6.3 12.4.3 15.3l99.3 56.1c5.9 3.3 13.2 2.6 18.3-1.8l195.8-168.8c1.3-1.1 4.4-3.2 5.6-2 1.3 1.3-.7 4.3-1.8 5.6L216.9 320.1c-4.7 5.3-5.4 13.1-1.6 19.1l64.9 104.1c3.2 6.3 12.3 6.2 15.2-.2L447.2 76c3.3-7.2-4.2-14.5-11.3-11.1z" fill="currentColor"/></svg></button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="bg-[#0B0B3A] p-8 max-[892px]:border-t max-[892px]:border-gray-700 max-[892px]:p-4 max-[892px]:text-sm">
          <p class="text-center text-gray-500 font-semibold">&copy; All Copyright 2023 by <a href="#" class="hover:text-white transition duration-500">Growth Horizon Developer Team</a></p>
        </div>
    </div>
</template>