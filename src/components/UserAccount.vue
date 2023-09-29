 <script>
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
    data(){
        return{
            username: '',
            email: '',
            confirmEmail: '',
            ageRange: '',
            interest: '',
            errorEmail: false,
            errorName: false,
            errorConfirmEmail: false,
            errorAge: false,
            errorInterest: false,
            processes: '',
            loading: false,
            successMessage: false,
            usedEmail: false
        }
    },
    methods: {
        validateEmail(){
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)){
                this.errorEmail = false
            }else{
                this.errorEmail = true
            }
        },
        validateConfirmEmail(){
            if(this.confirmEmail !== this.email){
                this.errorConfirmEmail = true
            }else{
                this.errorConfirmEmail = false
            }
        },
        validateName(){
            if(this.username == ''){
                this.errorName = true
            }else{
                this.errorName = false
            }
        },
        validateAge(){
            if(this.ageRange == ''){
                this.errorAge = true
            }else{
                this.errorAge = false
            }
        },
        validateInterest(){
            if(this.interest == ''){
                this.errorInterest = true
            }else{
                this.errorInterest = false
            }
        },
        validateProcesses(){
            if(this.processes == false){
                this.errorProcesses = true
            }else{
                this.errorProcesses = false
            }
        },
        async onSubmit(){
            this.validateEmail()
            this.validateConfirmEmail()
            this.validateInterest()
            this.validateAge()
            this.validateName()
            this.validateProcesses()
            if(!this.errorName && !this.errorAge && !this.errorEmail && !this.errorConfirmEmail && !this.errorInterest && !this.errorProcesses){
                this.loading = true
                let getResult = await axios.get(
                    `https://dbgrowthhorizon.onrender.com/userSignup?email=${this.email}`
                    )
                    if(getResult.status == 200 && getResult.data.length > 0){
                        this.usedEmail = true
                        this.loading = false
                    }else{
                    let result = await axios.post("https://dbgrowthhorizon.onrender.com/userSignup" , {
                        username: this.username,
                        email: this.email,
                        ageRange: this.ageRange,
                        interest: this.interest
                    });
                    console.log(result)
                    if(result.status == 201){
                        this.successMessage = true
                    }
                }
            }
        }
    },
    watch: {
        username(){
            if(this.username !== ''){
                this.errorName = false
            }
        },
        interest(){
            if(this.interest !== ''){
                this.errorInterest = false
            }
        },
        ageRange(){
            if(this.ageRange !== ''){
                this.errorAge = false
            }
        },
        email(){
            if(this.email !== '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'){
                this.errorEmail = false
            }
        },
        confirmEmail(){
            if(this.confirmEmail == this.email){
                this.errorConfirmEmail = false
            }
        },
        processes(){
            if(this.processes == true){
                this.errorProcesses = false
            }
        }
    }
})
</script>
<template>
    <div class="relative h-screen bg-[url('../assets/guy.webp')] w-full flex justify-end bg-no-repeat bg-left overflow-y-auto">
        <p class="overlay absolute h-screen bg-gradient-to-r from-[#2E3BA6] to-white top-0 left-0 w-full opacity-60"></p>
        <form @submit.prevent="onSubmit" class="bg-white shadow-md p-8 w-[400px] relative z-20 overflow-y-auto" v-if="!successMessage">
            <div>
                <p class="mb-7 text-[#0D0D3F] text-3xl font-bold">Sign Up</p>
                <div class="flex flex-col gap-4 mb-4">
                    <div class="flex flex-col gap-2">
                        <label class="text-[#0D0D3F] font-semibold" for="name">Username</label>
                        <input 
                            v-model="username"
                            class="transition duration-500 focus:border-[#0D0D3F] outline-none border py-2 placeholder:text-gray-400"
                            type="text"
                            id="name" >
                        <small class="text-red-500 italic" v-if="errorName">This field is required</small>
                    </div>
                    <div class="flex flex-col">
                        <label class="text-[#0D0D3F] font-semibold" for="email">Email</label>
                        <input 
                            v-model="email"
                            class="transition duration-500 focus:border-[#0D0D3F] outline-none border py-2 placeholder:text-gray-400"
                            type="email"
                            id="email">
                        <small class="text-red-500 italic" v-if="errorEmail">Invalid Email</small>
                        <small class="text-red-500 italic" v-if="usedEmail">Email is already registered</small>
                    </div>
                    <div class="flex flex-col">
                        <label class="text-[#0D0D3F] font-semibold" for="email">Confirm Email</label>
                        <input
                             v-model="confirmEmail"
                             class="transition duration-500 focus:border-[#0D0D3F] outline-none border py-2 placeholder:text-gray-400"
                             type="email"
                             id="email">
                        <small class="text-red-500 italic" v-if="errorConfirmEmail">Emails do not match</small>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="text-[#0D0D3F] font-semibold" for="Age">Age Range</label>
                        <select class="border p-2 rounded-md" v-model="ageRange">
                            <option disabled>--Select</option>
                            <option value="<16">Below 16</option>
                            <option value="<25">Below 25</option>
                            <option value=">25">Above 25</option>
                        </select>
                        <small class="text-red-500 italic" v-if="errorAge">This field is required</small>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="text-[#0D0D3F] font-semibold" for="interest">Interest</label>
                        <textarea 
                        v-model="interest" 
                        class="transition duration-500 focus:border-[#0D0D3F] outline-none border p-2 rounded-md" 
                        name="" id="" 
                        cols="30" rows="5" 
                        placeholder="Why you want to join ..."></textarea>
                        <small class="text-red-500 italic" v-if="errorInterest">This field is required</small>
                    </div>
                    <div>
                        <div class="flex gap-2 items-center">
                            <input
                                v-model="processes"
                                type="checkbox"
                                id="checkbox">
                            <label for="checkbox" class="text-[#0D0D3F] font-semibold">I have read the <router-link to="/process"><span class="hover:underline text-green-600">processes</span></router-link></label>
                        </div>
                        <small class="text-red-500 italic" v-if="errorProcesses">Processes must be read</small>
                    </div>
                </div>
                <div>
                    <button type="submit" value="submit" class="w-full rounded-md  py-3 text-white hover:bg-[#15c4a1] transition duration-500" :class="loading? 'bg-[#6bcfbb]': 'bg-[#28B79A]'">
                        <span v-if="loading">Please wait ...</span>
                        <span v-else>Sign up</span>
                    </button>
                </div>
            </div>
        </form>
        <div v-else class="relative z-20 overflow-y-auto p-4 bg-white shadow-xl flex justify-center items-center">
            <div class="flex items-center flex-col gap-5 bg-white shadow-xl p-4 py-[4rem] rounded-md">
                <p class="text-[#28B79A] border-[3px] rounded-[50%] p-2 border-l-[#28B79A] border-t-[#28B79A] border-b-[#28B79A] w-fit"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25L4 24Z" clip-rule="evenodd"/></svg></p>
                <p class="text-4xl text-[#0D0D3F] font-semibold">Thank you</p>
                <p class="text-center max-w-[420px] text-[#0D0D3F font-semibold">A mail will be sent to your email address. Please ensure to check the spam box incase you can't find it in your inbox</p>
                <router-link to="/"><p class="w-[180px] text-center p-3 bg-[#28B79A] text-white rounded-sm hover:bg-[#15c4a1] cursor-pointer">Return to homepage</p></router-link>
            </div>
        </div>
    </div>
</template>