<template>
    <div class="w-full h-screen flex max-[368px]:p-0">
        <div class="relative w-[90%] md:w-[40%] mx-auto h-full flex flex-col gap-20 py-20 lg:px-20 md:px-8 px-6" style="box-shadow: 1px 1px 9px rgb(187, 187, 187), -1px -1px 9px rgb(187, 187, 187);">
            <div class="space-y-10" data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out">
                <div class="space-y-4">
                    <div class="flex flex-col items-center w-full cursor-pointer">
                        <img src="../assets/logo.svg" width="40" alt="Logo">
                        <p class="text-[#0D0D3F] text-xl font-bold">GrowthHorizon</p>
                    </div>
                </div>
                <form @submit.prevent="SignIn" class="flex flex-col gap-6">
                    <input v-model="email" class="border w-full border-[#28B79A] px-6 py-4 outline-none" placeholder="Email" type="email" name="email" id="">
                    <input v-model="password" class="border w-full border-[#28B79A] px-6 py-4 outline-none" placeholder="Password" type="password" name="password" id="">
                    <p class="text-red-400 italic">{{ errorMessage }}</p>
                    <button class="m-auto bg-[#28B79A] py-4 px-20 max-[868px]:px-14 rounded-[80px] w-fit text-white font-semibold cursor-pointer" type="submit">
                        <span v-if="loading">Loading ...</span>
                        <span v-else>Sign in</span>
                    </button>
                </form>
            </div>
            <div class="flex flex-col items-center">
                <p>Don't have an account? <router-link to="/signup" class="text-[#28B79A]">Sign Up</router-link></p>
            </div>

            <div @click="showChatSpace = true" class="absolute flex items-center justify-center md:hidden cursor-pointer bottom-8 right-[20px] bg-[#28B79A] w-[70px] h-[70px]" style="border-bottom-left-radius: 10px; border-bottom-right-radius: 100px; border-top-left-radius: 100px; border-top-right-radius: 100px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="white" d="M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8m5 9v-2h-2v2h2m-4 0v-2h-2v2h2m-4 0v-2H7v2h2Z"/></svg>
            </div>
            <div  :class="!showChatSpace ? 'hidden' : 'block'" class="overflow-auto md:hidden rounded-xl w-full h-screen absolute top-0 left-0 right-0 mx-auto" >
                <div class="bg-[#0D0D3F] h-[30vh] w-full space-y-4 px-8 py-10">
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col items-center cursor-pointer">
                            <img src="../assets/logo.svg" width="40" alt="Logo">
                            <p class="text-white text-xl font-bold">GrowthHorizon</p>
                        </div>
                        <svg @click="showChatSpace = false" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="white" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6l1.41-1.41z"/></svg>
                    </div>
                    <p class="text-white text-sm">Hello there 👋 We'd love to serve you someday</p>
                </div>
                <div class="h-[70vh] w-full bg-white relative">
                    <div class="w-[90%] shadow-xl space-y-6 bg-white absolute top-[-15px] rounded-lg mx-auto left-0 right-0 flex flex-col items-center py-4">
                        <p class="text-[#0D0D3F] font-semibold">chat with us on any of these channels</p>
                        <div class="space-y-3">
                            <a href="https://web.facebook.com/profile.php?id=61551899071724">
                            <div class="social-media transition-all duration-500 hover:shadow-xl flex gap-4 cursor-pointer items-center border border-[#2196F3] rounded-lg w-[150px] p-[5px]">
                               <div class="bg-[#2196F3] text-white transition-all duration-500 rounded-lg p-[5px]"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32"><path fill="currentColor" d="m23.446 18l.889-5.791h-5.557V8.451c0-1.584.776-3.129 3.265-3.129h2.526V.392S22.277.001 20.085.001c-4.576 0-7.567 2.774-7.567 7.795v4.414H7.431v5.791h5.087v14h6.26v-14z"/></svg></div>
                               <p class="text-md font-semibold text-[#2196F3]"  >Facebook</p>
                            </div>
                            </a>
                            <div class="social-media transition-all duration-500 hover:shadow-xl flex gap-4 cursor-pointer items-center border border-green-500 rounded-lg w-[150px] p-[5px]">
                               <div class="bg-green-500 transition-all text-white duration-500 rounded-lg p-[5px]"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#akarIconsWhatsappFill0)"><path fill="currentColor" fill-rule="evenodd" d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967c-.272-.099-.47-.148-.669.15c-.198.296-.767.966-.94 1.164c-.174.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.019-.458.13-.606c.134-.133.297-.347.446-.52c.149-.174.198-.298.297-.497c.1-.198.05-.371-.025-.52c-.074-.149-.668-1.612-.916-2.207c-.241-.579-.486-.5-.668-.51c-.174-.008-.372-.01-.57-.01c-.198 0-.52.074-.792.372c-.273.297-1.04 1.016-1.04 2.479c0 1.462 1.064 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487c.71.306 1.263.489 1.694.625c.712.227 1.36.195 1.872.118c.57-.085 1.758-.719 2.006-1.413c.247-.694.247-1.289.173-1.413c-.074-.124-.272-.198-.57-.347Zm-5.422 7.403h-.004a9.87 9.87 0 0 1-5.032-1.378l-.36-.214l-3.742.982l.999-3.648l-.235-.374a9.861 9.861 0 0 1-1.511-5.26c.002-5.45 4.436-9.884 9.889-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.892 6.993c-.002 5.45-4.436 9.885-9.884 9.885Zm8.412-18.297A11.815 11.815 0 0 0 11.992 0C5.438 0 .102 5.335.1 11.892a11.864 11.864 0 0 0 1.587 5.945L0 24l6.304-1.654a11.881 11.881 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.821 11.821 0 0 0-3.48-8.413" clip-rule="evenodd"/></g><defs><clipPath id="akarIconsWhatsappFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg></div>
                               <p class="text-md font-semibold text-green-500">Whatsapp</p>
                            </div>
                            <a href="https://www.instagram.com/gh_growthhorizon/" target="_blank">
                            <div class="social-media transition-all duration-500 hover:shadow-xl flex gap-4 cursor-pointer items-center border border-red-500 rounded-lg w-[150px] p-[5px]">
                               <div class="bg-red-500 transition-all text-white duration-500 rounded-lg p-[5px]"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z"/></svg></div>
                               <p class="text-md font-semibold text-red-500">Instagram</p>
                            </div>
                            </a>
                        </div>
                    </div>
                    <p class="absolute bottom-0 left-0 right-0 w-fit mx-auto text-[11px]">Powered by <span class="font-bold">GrowthHorizon</span></p>
                </div>
            </div>
        </div>

        <div class="w-[70%] md:w-[60%] md:block hidden relative" data-aos="fade-down" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out">
            <img class="h-full fixed top-0 w-full" src="../assets/image-footer-4.jpg" alt="">
            <div @click="showChatSpace = true" class="absolute flex items-center justify-center cursor-pointer bottom-8 right-[60px] bg-[#28B79A] w-[70px] h-[70px]" style="border-bottom-left-radius: 10px; border-bottom-right-radius: 100px; border-top-left-radius: 100px; border-top-right-radius: 100px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="white" d="M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8m5 9v-2h-2v2h2m-4 0v-2h-2v2h2m-4 0v-2H7v2h2Z"/></svg>
            </div>
            <div :class="!showChatSpace ? 'hidden' : 'block'" class="overflow-hidden rounded-xl w-[400px] absolute bottom-8 right-[60px]" >
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
                        <p class="text-[#0D0D3F] font-semibold">Chat with us on any of these channels</p>
                        <div class="space-y-3">
                            <a href="https://web.facebook.com/profile.php?id=61551899071724">
                            <div class="social-media transition-all duration-500 hover:shadow-xl flex gap-4 cursor-pointer items-center border border-[#2196F3] rounded-lg w-[150px] p-[5px]">
                               <div class="bg-[#2196F3] transition-all text-white duration-500 rounded-lg p-[5px]"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32"><path fill="currentColor" d="m23.446 18l.889-5.791h-5.557V8.451c0-1.584.776-3.129 3.265-3.129h2.526V.392S22.277.001 20.085.001c-4.576 0-7.567 2.774-7.567 7.795v4.414H7.431v5.791h5.087v14h6.26v-14z"/></svg></div>
                               <p class="text-md font-semibold text-[#2196F3]">Facebook</p>
                            </div>
                            </a>
                            <div class="social-media transition-all duration-500 hover:shadow-xl flex gap-4 cursor-pointer items-center border border-green-500 rounded-lg w-[150px] p-[5px]">
                               <div class="bg-green-500 transition-all text-white duration-500 rounded-lg p-[5px]"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#akarIconsWhatsappFill0)"><path fill="currentColor" fill-rule="evenodd" d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967c-.272-.099-.47-.148-.669.15c-.198.296-.767.966-.94 1.164c-.174.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.019-.458.13-.606c.134-.133.297-.347.446-.52c.149-.174.198-.298.297-.497c.1-.198.05-.371-.025-.52c-.074-.149-.668-1.612-.916-2.207c-.241-.579-.486-.5-.668-.51c-.174-.008-.372-.01-.57-.01c-.198 0-.52.074-.792.372c-.273.297-1.04 1.016-1.04 2.479c0 1.462 1.064 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487c.71.306 1.263.489 1.694.625c.712.227 1.36.195 1.872.118c.57-.085 1.758-.719 2.006-1.413c.247-.694.247-1.289.173-1.413c-.074-.124-.272-.198-.57-.347Zm-5.422 7.403h-.004a9.87 9.87 0 0 1-5.032-1.378l-.36-.214l-3.742.982l.999-3.648l-.235-.374a9.861 9.861 0 0 1-1.511-5.26c.002-5.45 4.436-9.884 9.889-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.892 6.993c-.002 5.45-4.436 9.885-9.884 9.885Zm8.412-18.297A11.815 11.815 0 0 0 11.992 0C5.438 0 .102 5.335.1 11.892a11.864 11.864 0 0 0 1.587 5.945L0 24l6.304-1.654a11.881 11.881 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.821 11.821 0 0 0-3.48-8.413" clip-rule="evenodd"/></g><defs><clipPath id="akarIconsWhatsappFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg></div>
                               <p class="text-md font-semibold text-green-500">Whatsapp</p>
                            </div>
                            <a href="https://www.instagram.com/gh_growthhorizon/">
                            <div class="social-media transition-all duration-500 hover:shadow-xl flex gap-4 cursor-pointer items-center border border-red-500 rounded-lg w-[150px] p-[5px]">
                               <div class="bg-red-500 transition-all text-white duration-500 rounded-lg p-[5px]"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z"/></svg></div>
                               <p class="text-md font-semibold text-red-500">Instagram</p>
                            </div>
                            </a>
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
                showChatSpace: false,
                loading: false
            }
        },
        methods:{
           async SignIn(){
            this.loading = true;
                let result = await axios.get(`https://dbgrowthhorizon.onrender.com/userSignin?email=${this.email}&password=${this.password}`)
                {
                    if (result.status == 200 && result.data.length > 0) {
                        localStorage.setItem("user-info", JSON.stringify(result.data[0]))   
                        this.$router.push('/dashboard')
                    }
                    else{
                        this.errorMessage = 'User is not found';
                        this.loading = false
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