<script>
import { defineComponent } from 'vue'
import UserAccount from './UserAccount.vue';

export default defineComponent({
    components: {
        UserAccount
    },
    data(){
        return{
            useraccount: false
        }
    }
})
</script>
<template>
    <div v-if="useraccount == false" class="signup-container w-full h-screen flex justify-between px-40  max-[968px]:px-4 items-center max-[968px]:justify-center overflow-y-auto">
        <div class="max-[968px]:hidden">
            <div class="flex items-center gap-2">
                <img class="w-[60px] h-[60px]" src="../assets/logo.svg" alt="">
                <p class="text-white text-xl font-semibold">Growth Horizon</p>
            </div>
            <p class="text-[#28B79A]">Create an account</p>
        </div>
        <div class="flex justify-between flex-col bg-white shadow-md rounded-md w-[350px] py-8 h-[520px]" data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out">
            <div>
                <div class="px-4 items-center gap-2 mb-4 hidden  max-[968px]:flex">
                    <img class="w-[40px] h-[40px]" src="../assets/logo.svg" alt="">
                    <p class="text-md text-[#0D0D3F] font-semibold">Growth Horizon</p>
                </div>
                <p class="text-2xl font-semibold text-[#0D0D3F] mb-2 px-8 max-[968px]:px-4">Select an account</p>
                <div class="flex items-center mb-8 gap-1 text-red500 text-[#28B79A] px-8 max-[968px]:px-4 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Zm-8-80V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0Zm20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"/></svg>
                    <p class="text-sm">Read more about the process</p>
                </div>
                <div class="flex flex-col">
                    <div class="border-b py-4 hover:bg-gray-200 cursor-pointer" @click="useraccount = true">
                        <div class="flex justify-between items-center px-8 max-[968px]:px-4">
                            <div class="flex items-center gap-1">
                                <svg class="text-[#28B79A]" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.1.775-3.913T4.9 4.9L12 12V2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
                                <p>User Account <small class="text-[#28B79A]">Free*</small></p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="currentColor" d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887q.375-.375.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75q0 .375-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1q-.375-.375-.375-.888t.375-.887L14.475 12Z"/></svg> 
                        </div>
                    </div>
                    <div class="border-b py-4 hover:bg-gray-200 cursor-pointer">
                        <div class="flex justify-between items-center px-8 max-[968px]:px-4">
                            <div class="flex items-center gap-1">
                                <svg class="text-[#28B79A]" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.1.775-3.913T4.9 4.9L12 12V2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
                                <p>User Account <small class="text-[#28B79A]">Premium*</small></p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="currentColor" d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887q.375-.375.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75q0 .375-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1q-.375-.375-.375-.888t.375-.887L14.475 12Z"/></svg> 
                        </div>
                    </div>
                    <div class="border-b py-4 hover:bg-gray-200 cursor-pointer">
                        <div class="flex justify-between items-center px-8 max-[968px]:px-4">
                            <div class="flex items-center gap-1">
                                <svg class="text-[#0D0D3F]" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.1.775-3.913T4.9 4.9L12 12V2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
                                <p>Advertiser</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="currentColor" d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887q.375-.375.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75q0 .375-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1q-.375-.375-.375-.888t.375-.887L14.475 12Z"/></svg> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="px-8 max-[968px]:px-4 py-4">
                <p class="text-[#0D0D3F] text-sm font-semibold">Already own an account? <span class="text-[#28B79A] cursor-pointer hover:underline">Sign in</span></p>
            </div>
        </div>
    </div>
    <UserAccount v-if="useraccount == true" data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out"/>
</template>
<style>
    .signup-container{
        background: linear-gradient(45deg, #0D0D3F 50%, #EDEDF4);
    }
</style>
