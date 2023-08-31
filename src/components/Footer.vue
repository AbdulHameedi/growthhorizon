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
        <div class="bg-[#0D0D3F] px-[5.5rem] max-[1312px]:px-[1rem]"> 
          <div class="flex justify-between items-center py-10 border-b border-gray-700 max-[892px]:justify-center">
            <div class="flex items-center gap-4 max-[892px]:hidden">
                <svg class="text-[#2E3AA5]" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16"><path fill="currentColor" d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2H4Zm10 4.267l.47.25A1 1 0 0 1 15 5.4v.817l-1 .6v-2.55Zm-1 3.15l-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.417Zm-11-.6l-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267v2.55Zm13 .566v5.734l-4.778-2.867L15 7.383Zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083l6.965 4.18ZM1 13.116V7.383l4.778 2.867L1 13.117Z"/></svg>
                <p class="text-white font-semibold text-xl">growthhorizon@gmail.com</p>
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
                <p>88 Broklyn Golden Road Street, New York. USA</p>
                <p>Mon – Sat: 8:00am to 6:00pm Sun: Closed</p>
                <div class="flex items-center gap-2 text-white">
                  <p class="bg-[#181855] rounded-[50%] p-3 hover:bg-[#28B79A] hover:scale-x-[-1]"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M8 2H1l8.26 11.014L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886L8 2Zm9 18L5 4h2l12 16h-2Z"/></svg></p>
                  <p class="bg-[#181855] rounded-[50%] p-3 hover:bg-[#28B79A] hover:scale-x-[-1]"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M13.001 19.938a8.001 8.001 0 0 0-1-15.938a8 8 0 0 0-1 15.938V14h-2v-2h2v-1.654c0-1.337.14-1.822.4-2.311A2.725 2.725 0 0 1 12.537 6.9c.382-.205.857-.328 1.687-.381c.329-.021.755.005 1.278.08v1.9h-.5c-.917 0-1.296.043-1.522.164a.728.728 0 0 0-.314.314c-.12.226-.164.45-.164 1.368V12h2.5l-.5 2h-2v5.938Zm-1 2.062c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10Z"/></svg></p>
                  <p class="bg-[#181855] rounded-[50%] p-3 hover:bg-[#28B79A] hover:scale-x-[-1]"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"/></svg></p>
                  <p class="bg-[#181855] rounded-[50%] p-3 hover:bg-[#28B79A] hover:scale-x-[-1]"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="currentColor" d="M5 3c0 1.062-.71 1.976-2.001 1.976C1.784 4.976 1 4.114 1 3.052C1 1.962 1.76 1 3 1s1.976.91 2 2zM1 19V6h4v13H1zm6-8.556c0-1.545-.051-2.836-.102-3.951h3.594l.178 1.723h.076c.506-.811 1.746-2 3.822-2C17.1 6.216 19 7.911 19 11.558V19h-4v-6.861c0-1.594-.607-2.81-2-2.81c-1.062 0-1.594.86-1.873 1.569c-.102.254-.127.608-.127.963V19H7v-8.556z"/></svg></p>
                </div>
            </div>
            <div>
              <p class="text-white text-2xl font-semibold mb-4">Contact</p>
              <div class="grid grid-cols-3 gap-2">
                <img class="rounded-md" src="../assets/image-footer-3.jpg" alt="">
                <img class="rounded-md" src="../assets/news04-370x320.webp" alt="">
                <img class="rounded-md" src="../assets/news03-370x320.webp" alt="">
                <img class="rounded-md" src="../assets/business-insurance.webp" alt="">
                <img class="rounded-md" src="../assets/image-footer-4.jpg" alt="">
                <img class="rounded-md" src="../assets/business-insurance.webp" alt="">
              </div>
            </div>
            <div>
              <p class="text-white text-xl font-semibold mb-4">Transforming digital activity into tangible rewards</p>
              <p class="mb-4 text-gray-500 text-md font-semibold">Subscribe our newsletter</p>
              <form>
                <div class="flex items-center">
                  <input class="p-4 rounded-l-md outline-none max-[1204px]:w-full" type="email" placeholder="Email address">
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