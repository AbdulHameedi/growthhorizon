<script>
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
    data(){
        return{
            name: '',
            email: '',
            message: '',
            loading: false
        }
    },
    methods: {
        async onSubmit(){
            if(this.name == '' && this.email == '' && this.message == ''){
                alert('Empty fields')
            }else{
                this.loading = true;
                let result = await axios.post("https://dbgrowthhorizon.onrender.com/contact" , {
                    name: this.name,
                    email: this.email,
                    message: this.message
                });
                if(result.status == 201){
                    this.loading = false;
                    alert('Submitted');
                    this.name = '',
                    this.email =  '',
                    this.message =  ''
                }
            }
        }
    }
})
</script>
<template>
    <div id="contact" data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out" class="w-full bg-[url('../assets/bg-section.jpg')] flex max-[850px]:flex-col bg-center">
        <div class="w-[50%] max-[850px]:w-full">
            <img class="contact-img h-full" src="../assets/img-morph1.webp" alt="">
        </div>
        <div class="py-20 px-20 pl-10 w-[50%] max-[1312px]:px-[1rem] max-[850px]:w-full">
            <div class="mb-8">
                <img class="w-[16px] h-[16px]" src="../assets/logo.svg" alt="">
                <p class="text-gray-400 font-semibold mb-1">WE ARE HERE TO LISTEN</p>
                <p class="text-[#0D0D3F] text-4xl font-bold">We value your feedback and inquiries</p>
            </div>
            <form @submit.prevent="onSubmit">
                <div class="flex flex-col gap-3">
                    <input class="w-full bg-white p-4 rounded-md outline-none" placeholder="Full name" type="text" v-model="name">
                    <input class="w-full bg-white p-4 rounded-md outline-none" type="email" placeholder="Email address" v-model="email">
                    <textarea class="p-4 mb-6 rounded-md outline-none" cols="30" rows="5" placeholder="Type your message ..." v-model="message"></textarea>
                    <button type="submit" class="bg-[#2E3BA6] text-white rounded-md text-lg font-semibold px-[4rem] py-4 w-fit hover:bg-[#0D0D3F] transition duration-500">
                        <span v-if="loading">Please wait ...</span>
                        <span v-else>Submit</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<style>
.contact-img{
    clip-path: polygon(0 0, 100% 0, 80% 50%, 100% 100%, 0 100%, 0% 61%, 0% 38%);
}
</style>