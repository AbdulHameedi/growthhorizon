<script>
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>
<template>
    <div class="relative h-screen bg-[url('../assets/guy.webp')] w-full flex justify-end bg-no-repeat bg-left overflow-y-auto">
        <p class="overlay absolute h-screen bg-gradient-to-r from-[#2E3BA6] to-white top-0 left-0 w-full opacity-60"></p>
        <div class="bg-white shadow-md p-8 w-[400px] relative z-20" >
            <p class="mb-7 text-[#0D0D3F] text-3xl font-bold">Sign Up</p>
            <div class="flex flex-col gap-3 mb-4">
                <div class="flex flex-col">
                    <label class="text-[#0D0D3F] font-semibold" for="name">Username</label>
                    <input  class="outline-none border-b py-2 placeholder:text-gray-400" type="text" id="name" placeholder="Name...">
                </div>
                <div class="flex flex-col">
                    <label class="text-[#0D0D3F] font-semibold" for="email">Email</label>
                    <input  class="outline-none border-b py-2 placeholder:text-gray-400" type="email" id="email" placeholder="Email address...">
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-[#0D0D3F] font-semibold" for="Age">Age Range</label>
                    <select class="border p-2">
                        <option value="<16">Below 16</option>
                        <option value="<25">Below 25</option>
                        <option value=">25">Above 25</option>
                    </select>
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-[#0D0D3F] font-semibold" for="interest">Interest</label>
                    <textarea class="outline-none border p-2" name="" id="" cols="30" rows="5" placeholder="Why you want to join ..."></textarea>
                </div>
                <div class="flex gap-2">
                    <input type="checkbox">
                    <label class="text-[#0D0D3F] font-semibold">I have read the <span class="hover:underline">processes</span></label>
                </div>
            </div>
            <div>
                <button class="w-full rounded-md bg-[#28B79A] py-3 text-white hover:bg-[#2A90A0] transition duration-500">Sign up</button>
            </div>
        </div>
    </div>
</template>