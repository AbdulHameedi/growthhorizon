<script>
import { defineComponent } from 'vue';
import Footer from './Footer.vue';
import RegisterFooter from './RegisterFooter.vue';
import UserProcess from './UserProcess.vue';
import AdvertiserProcess from './AdvertiserProcess.vue';

export default defineComponent({
    data(){
        return{
            isComponent: 'UserProcess'
        }
    },
    components: {
        Footer,
        RegisterFooter,
        UserProcess,
        AdvertiserProcess
    }
})
</script>
<template>
    <section>
        <div class="bg-gradient-to-l from-[#0D0D3F] to-[#26486B]">
            <!-- bg-feature -->
            <div class="bg-feature bg-[url('../assets/featured-bg.webp')] bg-center h-[390px] flex flex-col gap-3 pl-20 justify-center text-white max-[1312px]:px-[1rem]">
                <h2 class="font-bold text-6xl">Process</h2>
                <div class="flex items-center gap-3">
                    <router-link to="/"><p class="hover:text-gray-400 cursor-pointer">HOME</p></router-link>
                    <p>/</p>
                    <p>PROCESS</p>
                </div>
            </div>
            <!-- processes-section -->
            <div class="p-20 max-[1072px]:px-[1rem]">
                <div class="flex flex-col gap-3 items-center mb-20">
                    <p class="text-5xl font-semibold text-white text-center max-[341px]:text-4xl">How it Works</p>
                    <p class="mb-8 font-semibold text-gray-200 text-center">Current option: 
                        <b v-if="isComponent == 'UserProcess'" class="text-green-600 tracking-wider">User <small>*Free</small></b>
                        <b v-else class="text-green-600 tracking-wider">Advertiser</b>
                    </p>
                    <div class="cursor-pointer w-[450px] max-[517px]:w-full text-xl font-semibold bg-gray-200 rounded-md p-1 flex gap-2 items-center">
                        <p class="w-[50%] p-2 text-center rounded-md hover:bg-white" @click="isComponent = 'AdvertiserProcess'" :class="isComponent == 'AdvertiserProcess' && 'bg-white'">Advertiser</p>
                        <p class="w-[50%] p-2  rounded-md px-6 hover:bg-white" @click="isComponent = 'UserProcess'" :class="isComponent == 'UserProcess' && 'bg-white'">User</p>
                    </div> 
                </div>
                <!-- processes -->
                <Component :is="isComponent" />
            </div>
            <div class="bg-white w-full bg-[url('../assets/bg-section.jpg')] p-20 max-[1072px]:px-[1rem] bg-center" data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out">
                <p class="text-5xl text-[#0D0D3F] font-semibold mb-2 max-[425px]:text-4xl">You must know</p>
                <p class="font-semibold">Current option:
                    <b v-if="isComponent == 'UserProcess'" class="text-[#0D0D3F]">User</b>
                    <b v-else class="text-[#0D0D3F]">Advertiser</b>
                </p>
                <!-- user -->
                <div class="md:p-5 pt-5 grid md:grid-cols-2 md:gap-4 grid-cols-1 gap-10 p-2">
                    <div class="flex flex-col gap-3" v-if="isComponent == 'UserProcess'">
                        <div class="flex gap-3 items-center">
                            <p class="w-fit bg-green-300 text-[#28B79A] p-2 textwhite rounded-[50%]"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25L4 24Z" clip-rule="evenodd"/></svg></p>
                            <p class="font-semibold">You earn your income without paying any dime</p>
                        </div>
                        <div class="flex gap-3 items-center">
                            <p class="w-fit bg-green-300 text-[#28B79A] p-2 textwhite rounded-[50%]"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25L4 24Z" clip-rule="evenodd"/></svg></p>
                            <p class="font-semibold">Your facebook profile should be at least 1 year old</p>
                        </div>
                        <div class="flex gap-3 items-center">
                            <p class="w-fit bg-green-300 text-[#28B79A] p-2 rounded-[50%]"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25L4 24Z" clip-rule="evenodd"/></svg></p>
                            <p class="font-semibold">Withdrawal form is opened in the third weekend of the month</p>
                        </div>
                        <div class="flex gap-3 items-center">
                            <p class="w-fit bg-green-300 text-[#28B79A] p-2 rounded-[50%]"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25L4 24Z" clip-rule="evenodd"/></svg></p>
                            <p class="font-semibold">N50.00 is earned per post</p>
                        </div>
                        <div class="flex gap-3 items-center">
                            <p class="w-fit bg-green-300 text-[#28B79A] p-2 rounded-[50%]"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25L4 24Z" clip-rule="evenodd"/></svg></p>
                            <p class="font-semibold">Posts may be unavailable once in a while</p>
                        </div>
                        <div class="flex gap-3 items-center">
                            <p class="w-fit bg-green-300 text-[#28B79A] p-2 rounded-[50%]"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25L4 24Z" clip-rule="evenodd"/></svg></p>
                            <p class="font-semibold">Must be between the ages of 16 and 40</p>
                        </div>
                        <div class="flex gap-3 items-center">
                            <p class="w-fit bg-green-300 text-[#28B79A] p-2 rounded-[50%]"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25L4 24Z" clip-rule="evenodd"/></svg></p>
                            <p class="font-semibold">You <b>must</b> withdraw your earnings when the withdrawal form is available</p>
                        </div>
                        <router-link to="/signup"><button class="w-fit p-3 px-6 rounded-md border border-green-500 mt-8 transition duration-500 hover:bg-green-400 hover:text-white">Apply Now</button></router-link>
                    </div>
                    <!-- advertiser -->
                    <div class="flex flex-col gap-3" v-else>
                        <div class="flex gap-3 items-center">
                            <p class="w-fit bg-green-300 text-[#28B79A] p-2 textwhite rounded-[50%]"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25L4 24Z" clip-rule="evenodd"/></svg></p>
                            <p class="font-semibold">Payments should be made prior to filling the signup data</p>
                        </div>
                        <div class="flex gap-3 items-center">
                            <p class="w-fit bg-green-300 text-[#28B79A] p-2 rounded-[50%]"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25L4 24Z" clip-rule="evenodd"/></svg></p>
                            <p class="font-semibold">The link field should be an available link online to the ad(s) you desire to grow</p>
                        </div>
                        <div class="flex gap-3 items-center">
                            <p class="w-fit bg-green-300 text-[#28B79A] p-2 rounded-[50%]"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25L4 24Z" clip-rule="evenodd"/></svg></p>
                            <p class="font-semibold">You may be an advertiser and a user earning at the same time</p>
                        </div>
                        <div class="flex gap-3 items-center">
                            <p class="w-fit bg-green-300 text-[#28B79A] p-2 rounded-[50%]"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25L4 24Z" clip-rule="evenodd"/></svg></p>
                            <p class="font-semibold">Must be between the ages of 14 and 40 </p>
                        </div>
                        <div class="flex gap-3 items-center">
                            <p class="w-fit bg-green-300 text-[#28B79A] p-2 rounded-[50%]"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25L4 24Z" clip-rule="evenodd"/></svg></p>
                            <p class="font-semibold">Must be between the ages of 16 and 40 </p>
                        </div>
                        <router-link to="/signup"><button class="w-fit p-3 px-6 rounded-md border border-green-500 mt-8 transition duration-500 hover:bg-green-400 hover:text-white">Apply Now</button></router-link>
                    </div>
                    <div>
                        <img class="w-full rounded-md h-full" src="../assets/offer-meeting.jpeg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <RegisterFooter />
        <Footer />
    </section>  
</template>
<style>
.bg-feature{
    clip-path: polygon(0% 0%, 100% 0, 100% 75%, 50% 100%, 0 75%);
}
</style>