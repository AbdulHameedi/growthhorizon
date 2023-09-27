<template>
    <div class="w-full h-screen flex max-[368px]:p-0 ">
        <div class="relative w-[90%] md:w-[40%] mx-auto h-full flex flex-col gap-20 py-20 px-6" style="box-shadow: 1px 1px 9px rgb(187, 187, 187), -1px -1px 9px rgb(187, 187, 187);">
            <div class="space-y-10">
                <div class="space-y-4">
                    <div class="flex flex-col items-center w-full cursor-pointer">
                        <img src="../assets/logo.svg" width="25" alt="Logo">
                        <p class="text-[#0D0D3F] text-xl font-bold">GrowthHorizon</p>
                    </div>
                    <!-- <p class="text-lg text-center">Please select your account type to login</p> -->
                </div>
    
                <div class="flex w-full justify-center">
                    <div>
                        <!-- <p class="text-lg">User</p> -->
                    </div>
                    <!-- <div>
                        <p>Advertiser</p>
                    </div> -->
                </div>
    
                <form @submit.prevent="SignIn" class="flex flex-col items-center gap-6">
                    <input v-model="email" class="border w-full border-[#28B79A] px-6 py-4 outline-none" placeholder="Email" type="email" name="email" id="">
                    <input v-model="password" class="border w-full border-[#28B79A] px-6 py-4 outline-none" placeholder="Password" type="password" name="password" id="">
                    <p class="text-red-400">{{ errorMessage }}</p>
                    <input class="bg-[#28B79A] py-4 px-20 max-[868px]:px-14 rounded-[80px] w-fit text-white font-semibold cursor-pointer " type="submit" value="Sign In" @click="SignIn">
                </form>
            </div>
            <div class="flex flex-col items-center">
                <p>Don't have an account? <router-link to="/signup" class="text-[#28B79A]">Sign Up</router-link></p>
                <p class="text-[#28B79A]">Forgot Password?</p>
            </div>

            <div @click="showChatSpace = true" class="absolute md:hidden cursor-pointer bottom-8 right-[20px] bg-[#28B79A] w-[70px] h-[70px]" style="border-bottom-left-radius: 10px; border-bottom-right-radius: 100px; border-top-left-radius: 100px; border-top-right-radius: 100px;"></div>
            <div :class="!showChatSpace ? 'hidden' : 'block'" class="overflow-auto md:hidden rounded-xl w-full h-screen absolute top-0 left-0 right-0 mx-auto">
                <div class="bg-[#0D0D3F] h-[30vh] w-full space-y-4 px-8 py-10 ">
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col items-center cursor-pointer">
                            <img src="../assets/logo.svg" width="25" alt="Logo">
                            <p class="text-white text-xl font-bold">GrowthHorizon</p>
                        </div>
                        <svg @click="showChatSpace = false" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="white" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"/></svg>
                    </div>
                    <p class="text-white text-sm">Hello there 👋 We'd love to serve you someday</p>
                </div>
                <div class="h-[70vh] w-full bg-white relative">
                    <div class="w-[90%] shadow-xl space-y-6 bg-white absolute top-[-15px] rounded-lg mx-auto left-0 right-0 flex flex-col items-center py-4">
                        <p class="text-[#0D0D3F] font-semibold">chat with us on any of these channels</p>
                        <div>
                            <div class="social-media transition-all duration-500 hover:shadow-xl flex gap-4 cursor-pointer items-center border border-[#2196F3] rounded-lg w-[150px] p-[5px]">
                               <div class="bg-[#2196F3] transition-all duration-500 rounded-lg p-[5px]"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="white" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"/></svg></div>
                               <p class="text-md font-semibold text-[#2196F3]">Facebook</p>
                            </div>
                            
                        </div>
                    </div>
                    <p class="absolute bottom-0 left-0 right-0 w-fit mx-auto text-[11px]">Powered by <span class="font-bold">GrowthHorizon</span></p>
                </div>
            </div>
        </div>

        <div class="w-[70%] md:w-[60%] md:block hidden relative">
            <img class="h-full fixed top-0 w-full" src="../assets/image-footer-4.jpg" alt="">
            <div @click="showChatSpace = true" class="absolute cursor-pointer bottom-8 right-[60px] bg-[#28B79A] w-[70px] h-[70px]" style="border-bottom-left-radius: 10px; border-bottom-right-radius: 100px; border-top-left-radius: 100px; border-top-right-radius: 100px;"></div>
            <div :class="!showChatSpace ? 'hidden' : 'block'" class="overflow-hidden rounded-xl w-[400px] absolute bottom-8 right-[60px]">
                <div class="bg-[#0D0D3F] space-y-4 px-8 py-10 ">
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col items-center cursor-pointer">
                            <img src="../assets/logo.svg" width="25" alt="Logo">
                            <p class="text-white text-xl font-bold">GrowthHorizon</p>
                        </div>
                        <svg @click="showChatSpace = false" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="white" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"/></svg>
                    </div>
                    <p class="text-white text-sm">Hello there 👋 We would love to serve you someday</p>
                </div>
                <div class="h-[400px] bg-white relative">
                    <div class="w-[90%] shadow-xl space-y-6 bg-white absolute top-[-15px] rounded-lg mx-auto left-0 right-0 flex flex-col items-center py-4">
                        <p class="text-[#0D0D3F] font-semibold">chat with us on any of these channels</p>
                        <div>
                            <div class="social-media transition-all duration-500 hover:shadow-xl flex gap-4 cursor-pointer items-center border border-[#2196F3] rounded-lg w-[150px] p-[5px]">
                               <div class="bg-[#2196F3] transition-all duration-500 rounded-lg p-[5px]"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="white" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"/></svg></div>
                               <p class="text-md font-semibold text-[#2196F3]">Facebook</p>
                            </div>
                        </div>
                    </div>
                    <p class="absolute bottom-0 left-0 right-0 w-fit mx-auto text-[11px]">Powered by <span class="font-bold">GrowthHorizon</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import axios from 'axios'
    export default defineComponent({
        data(){
            return{
                email: '',
                password: '',
                errorMessage: '',
                showChatSpace: false
            }
        },
        methods:{
           async SignIn(){

                let result = await axios.get(`https://dbgrowthhorizon.onrender.com/userSignin?email=${this.email}`)
                {
                    if (result.status == 200 && result.data.length > 0) {
                         localStorage.setItem("user-info", JSON.stringify(result.data))   
                        this.$router.push('/dashboard')
                    }
                    else{
                        this.errorMessage = 'you never sign up werey'
                    }
                }
                
            }
        }
    })
</script>

<style>
.social-media:hover{
    background-color: #2196F3;
    transition: all 500ms ease-in-out;
    transform: translateY(-8px);
}
.social-media:hover p{
    color: white;
    transition: all 500ms ease-in-out;
}
</style>