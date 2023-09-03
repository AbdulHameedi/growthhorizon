<script>
import { defineComponent } from 'vue';

export default defineComponent({

})
</script>
<template>
    <div data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out" class="px-[5.5rem] py-[3rem] max-[1312px]:px-[1rem]">
        <div class="px-10 max-[1136px]:py-8 max-[1136px]:px-4 rounded-md bg-[url('../assets/bg-section-1.webp')] w-full flex justify-between items-center  max-[1136px]:flex-col  max-[1136px]:items-start  max-[1136px]:gap-8">
            <div class="flex items-center gap-6 max-[595px]:flex-col max-[595px]:items-start">
                <div class="flex items-center">
                    <div class="mt-[-7rem] max-[1136px]:hidden">
                        <img src="../assets/girl.webp" alt="">
                    </div>
                    <div class="bg-[#28B79A] text-white w-fit h-fit rounded-[50%] p-5 relative ml-[-2.5rem]  max-[1136px]:ml-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 36 36"><path fill="currentColor" d="m33.48 29.63l-6.74-17.81a2 2 0 0 0-2.58-1.16L21 11.85V8.92A1.92 1.92 0 0 0 19.08 7H14V4.92A1.92 1.92 0 0 0 12.08 3H5a2 2 0 0 0-2 2v27a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V19.27l5 13.21a1 1 0 0 0 1.29.58l5.61-2.14a1 1 0 0 0 .58-1.29ZM12 8.83V31H5V5h7ZM19 31h-5V9h5Zm8.51-.25l-6.38-16.83l3.74-1.42l6.39 16.83Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                    </div>
                </div>
                <div class="">
                    <p class="text-gray-400 font-semibold text-sm tracking-wider">JOIN THE COMMUNITY</p>
                    <p class="text-5xl text-white font-semibold max-[1248px]:text-4xl">Activate your Profile</p>
                </div>
            </div>
            <div>
                <button class="bg-white text-[#0D0D3F] rounded-md text-lg font-semibold px-[3rem] py-4 hover:bg-[#0D0D3F] hover:text-white transition duration-500">Get Started</button>
            </div>
        </div>
    </div>
</template>