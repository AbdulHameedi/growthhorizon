<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data(){
        return{
            feedbackBox: false
        }
    }

})
</script>
<template>
    <section>
        <header class="px-5 border-b pb-3">
            <div class="flex justify-between py-5">
                <div class="flex items-center gap-2">
                    <img class="w-[30px] h-[30px]" src="../assets/logo.svg" alt="logo">
                    <p class="text-[#0D0D3F] font-semibold uppercase">Growth Horizon</p>
                </div>
                <div class="flex items-center gap-4 text-gray-600">
                    <div class="relative">
                        <p @click="feedbackBox = !feedbackBox" class="w-fit border p-1 px-2 rounded-md hover:bg-gray-100 cursor-pointer">Feedback</p>
                        <div v-if="feedbackBox" class="absolute shadow-sm right-[-2rem] top-[2.5rem] h-[200px] bg-white border rounded-md z-20">
                            <div class="p-2 h-[75%] bg-white">
                                <textarea class="rounded-md p-2 placeholder:text-gray-600 border outline-none focus:border-black" name="" id="" cols="40" rows="4" placeholder="Your feedback..."></textarea>
                            </div>
                            <div class="p-2 h-[25%] bg-gray-100 flex justify-end">
                                <button class="w-fit bg-[#0D0D3F] rounded-md text-white p-1 px-3">Send</button>
                            </div>
                        </div>
                    </div>
                    <a href="#">Help</a>
                    <div class="relative">
                        <p class="w-fit border rounded-[50%] p-1 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/></svg></p>
                        <div class="absolute">

                        </div>
                    </div>
                    <div class="relative">
                        <p class="w-fit p-1 bg-[#0D0D3F] text-white rounded-[50%]"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M12 5.9a2.1 2.1 0 1 1 0 4.2a2.1 2.1 0 0 1 0-4.2m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/></svg></p>
                        <div class="absolute">

                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center text-gray-600 cursor-pointer">
                <p class="hover:bg-gray-200 hover:text-black p-1 px-3 rounded-md transition duration-300">Project</p>
                <p class="hover:bg-gray-200 hover:text-black p-1 px-3 rounded-md transition duration-300">Deployments</p>
                <p class="hover:bg-gray-200 hover:text-black p-1 px-3 rounded-md transition duration-300">Analytics</p>
                <p class="hover:bg-gray-200 hover:text-black p-1 px-3 rounded-md transition duration-300">Speed Insights</p>
                <p class="hover:bg-gray-200 hover:text-black p-1 px-3 rounded-md transition duration-300">Logs</p>
                <p class="hover:bg-gray-200 hover:text-black p-1 px-3 rounded-md transition duration-300">Storage</p>
                <p class="hover:bg-gray-200 hover:text-black p-1 px-3 rounded-md transition duration-300">Settings</p>
            </div>
        </header>
    </section>
</template>