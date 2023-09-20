<script>
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
    data(){
        return{
            fieldPosition: 0,
            name: '',
            email: '',
            confirmEmail: '',
            website: '',
            businessType: '',
            tel: '',
            address: '',
            validity: '',
            engagementType: '',
            link: '',
            reachGoal: '',
            paymentMethod: '',
            accountName: '',
            transactionDate: '',
            requiredField: false,
            loading: false

        }
    },
    methods: {
        nextPosition(){
            this.fieldPosition++
            if(this.fieldPosition == 4){
                if(this.name == '' || this.email == '' || this.confirmEmail !== this.email || this.businessType == '' || this.tel == '' || this.address == '' || this.engagementType == '' || this.link == '' || this.reachGoal == '' || this.paymentMethod == '' || this.accountName == '' || this.transactionDate == '' || this.validity == ''){
                    this.fieldPosition--
                    this.requiredField = true
                }
            }
        },
        prevPosition(){
            this.fieldPosition--
            this.requiredField = false
        },
        async onSubmit(){
            this.loading = true
            let result = await axios.post("https://dbgrowthhorizon.onrender.com/advertiser" , {
                name: this.name,
                email: this.email,
                website: this.website,
                businessType: this.businessType,
                number: this.tel,
                address: this.address,
                engagementType: this.engagementType,
                validity: this.validity,
                link: this.link,
                reachGoal: this.reachGoal,
                paymentMethod: this.paymentMethod,
                accountName: this.accountName,
                transactionDate: this.transactionDate,
            });
            if(result.status == 201){
                this.fieldPosition = 5
            }else{
                this.loading = false
            }
        }
    }
})
</script>
<template>
    <div class="relative h-screen bg-[url('../assets/guy.webp')] w-full flex justify-end bg-no-repeat bg-left overflow-y-auto">
        <p class="overlay absolute h-screen bg-gradient-to-r from-[#2E3BA6] to-white top-0 left-0 w-full opacity-60"></p>
        <div class="bg-white shadow-xl p-8 w-fit relative z-20 overflow-y-auto max-[399px]:p-4" v-if="fieldPosition < 5">
            <p v-if="requiredField" class="absolute text-center top-0 w-full bg-red-300 text-white left-[-1px]">Fill in the required fields</p>
            <p class="mb-7 text-[#0D0D3F] text-3xl font-bold">Sign Up</p>
            <div class="flex items-center gap-3 mb-10 justify-between max-[399px]:gap-2">
                <div class="flex flex-col items-center gap-2 relative">
                    <p class="text-[#0D0D3F] font-semibold max-[399px]:text-sm">Account</p>
                    <p v-if="fieldPosition == 0" class="w-fit bg-[#28B79A] p-2 text-white rounded-[50%]"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25L4 24Z" clip-rule="evenodd"/></svg></p>
                    <p class="border rounded-[50%] border-[#0D0D3F] px-[0.7rem] py-[0.3rem] text-sm w-fit" v-else>1</p>
                    <p class="absolute w-[30px] rounded-md h-[3px] bg-[#0D0D3F] max-[399px]:w-[18px] max-[399px]:right-[-10px] right-[-20px] bottom-[20%]"></p>
                </div>
                <div class="flex flex-col items-center gap-2 relative">
                    <p class="text-[#0D0D3F] font-semibold max-[399px]:text-sm">Contact</p>
                    <p v-if="fieldPosition == 1" class="w-fit bg-[#28B79A] p-2 text-white rounded-[50%]"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25L4 24Z" clip-rule="evenodd"/></svg></p>
                    <p class="border rounded-[50%] border-[#0D0D3F] px-[0.7rem] py-[0.3rem] text-sm w-fit" v-else>2</p>
                    <p class="absolute w-[30px] rounded-md h-[3px] bg-[#0D0D3F] max-[399px]:w-[18px] max-[399px]:right-[-10px] right-[-20px] bottom-[20%]"></p>
                </div>
                <div class="flex flex-col items-center gap-2 relative">
                    <p class="text-[#0D0D3F] font-semibold max-[399px]:text-sm">Campaign</p>
                    <p v-if="fieldPosition == 2" class="w-fit bg-[#28B79A] p-2 text-white rounded-[50%]"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25L4 24Z" clip-rule="evenodd"/></svg></p>
                    <p class="border rounded-[50%] border-[#0D0D3F] px-[0.7rem] py-[0.3rem] text-sm w-fit" v-else>3</p>
                    <p class="absolute w-[30px] rounded-md h-[3px] bg-[#0D0D3F] max-[399px]:w-[20px] max-[399px]:right-[-10px] right-[-20px] bottom-[20%]"></p>
                </div>
                <div class="flex flex-col items-center gap-2 relative">
                    <p class="text-[#0D0D3F] font-semibold max-[399px]:text-sm">Payment</p>
                    <p v-if="fieldPosition == 3" class="w-fit bg-[#28B79A] p-2 text-white rounded-[50%]"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25L4 24Z" clip-rule="evenodd"/></svg></p>
                    <p class="border rounded-[50%] border-[#0D0D3F] px-[0.7rem] py-[0.3rem] text-sm w-fit" v-else>4</p>
                    <p class="absolute w-[30px] rounded-md h-[3px] bg-[#0D0D3F] max-[399px]:w-[20px] max-[399px]:right-[-10px] right-[-20px] bottom-[20%]"></p>
                </div>
                <div class="flex flex-col items-center gap-2">
                    <p class="text-[#0D0D3F] font-semibold max-[399px]:text-sm">Review</p>
                    <p v-if="fieldPosition == 4" class="w-fit bg-[#28B79A] p-2 text-white rounded-[50%]"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25L4 24Z" clip-rule="evenodd"/></svg></p>
                    <p class="border rounded-[50%] border-[#0D0D3F] px-[0.7rem] py-[0.3rem] text-sm w-fit" v-else>5</p>
                </div>
            </div>
            <div class="flex flex-col gap-4 mb-6" v-if="fieldPosition == 0" data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out">
                <p class="text-[#0D0D3F] text-xl font-semibold">Account Information:</p>
                <div class="flex flex-col gap-2">
                    <label class="text-[#0D0D3F] font-semibold" for="name">Company / Individual Name</label>
                    <input v-model="name"  class="transition duration-500 focus:border-[#0D0D3F] outline-none border py-2 placeholder:text-gray-400" type="text" id="name" >
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-[#0D0D3F] font-semibold" for="email">Email</label>
                    <input v-model="email"  class="transition duration-500 focus:border-[#0D0D3F] outline-none border py-2 placeholder:text-gray-400" type="email" id="email">
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-[#0D0D3F] font-semibold" for="confirm-email">Confirm Email</label>
                    <input v-model="confirmEmail" class="transition duration-500 focus:border-[#0D0D3F] outline-none border py-2 placeholder:text-gray-400" type="email" id="confirm-email">
                </div>
            </div>
            <div class="flex flex-col gap-4 mb-6" v-if="fieldPosition == 1" data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out">
                <p class="text-[#0D0D3F] text-xl font-semibold">Contact Details:</p>
                <div class="flex flex-col gap-2">
                    <label class="text-[#0D0D3F] font-semibold" for="website">Website <small>optional*</small></label>
                    <input v-model="website" class="transition duration-500 focus:border-[#0D0D3F] outline-none border py-2 placeholder:text-gray-400" type="text" id="website" >
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-[#0D0D3F] font-semibold" for="business-type">Business Type</label>
                    <select class="border py-2 rounded-md text-gray-700 outline-none" id="business-type" v-model="businessType">
                        <option disabled class="text-[15px]">--Select</option>
                        <option value="Individual Brand" class="text-[15px]">Individual Brand</option>
                        <option value="Company" class="text-[15px]">Company</option>
                        <option value="Company" class="text-[15px]">School</option>
                        <option value="Others" class="text-[15px]">Others</option>
                    </select>
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-[#0D0D3F] font-semibold" for="number">Phone Number</label>
                    <input v-model="tel" class="transition duration-500 focus:border-[#0D0D3F] outline-none border py-2 placeholder:text-gray-400" type="name" id="number">
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-[#0D0D3F] font-semibold" for="address">Address</label>
                    <input v-model="address" class="transition duration-500 focus:border-[#0D0D3F] outline-none border py-2 placeholder:text-gray-400" type="name" id="address">
                </div>
            </div>
            <div class="flex flex-col gap-4 mb-6" v-if="fieldPosition == 2" data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out">
                <p class="text-[#0D0D3F] text-xl font-semibold">Campaign Preferences:</p>
                <div class="flex flex-col gap-2">
                    <label class="text-[#0D0D3F] font-semibold" for="engagement-type">Engagement Type</label>
                    <select v-model="engagementType" class="border py-2 rounded-md text-gray-700 outline-none" id="engagement-type">
                        <option disabled class="text-[15px]">--Select</option>
                        <option value="Ad Shares" class="text-[15px]">Ad Shares</option>
                        <option value="Social Media Grow" class="text-[15px]">Social Media Grow</option>
                    </select>
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-[#0D0D3F] font-semibold" for="validity">Validity</label>
                    <select v-model="validity" class="border py-2 rounded-md text-gray-700 outline-none" id="validity">
                        <option disabled class="text-[15px]">--Select</option>
                        <option value="3 days" class="text-[15px]">3 days</option>
                        <option value="5 days" class="text-[15px]">5 days</option>
                        <option value="1 week" class="text-[15px]">1 week</option>
                    </select>
                </div>
                <div class="flex flex-col gap-2">   
                    <label class="text-[#0D0D3F] font-semibold" for="link">Link</label>
                    <input v-model="link" class="transition duration-500 focus:border-[#0D0D3F] outline-none border py-2 placeholder:text-gray-400" type="text" id="link">
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-[#0D0D3F] font-semibold" for="reach-goal">Reach Goal</label>
                    <input v-model="reachGoal" placeholder="1000..." class="transition duration-500 focus:border-[#0D0D3F] outline-none border py-2 placeholder:text-gray-400" type="text" id="reach-goal">
                </div>
            </div>
            <div class="flex flex-col gap-4 mb-6" v-if="fieldPosition == 3" data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out">
                <p class="text-[#0D0D3F] text-xl font-semibold">Payment Receipt:</p>
                <div class="flex flex-col gap-2">
                    <label class="text-[#0D0D3F] font-semibold" for="payment">Payment Method</label>
                    <input v-model="paymentMethod" placeholder="Transfer, USSD..." class="transition duration-500 focus:border-[#0D0D3F] outline-none border py-2 placeholder:text-gray-400" type="text" id="payment">
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-[#0D0D3F] font-semibold" for="account-name">Account Name</label>
                    <input v-model="accountName" class="transition duration-500 focus:border-[#0D0D3F] outline-none border py-2 placeholder:text-gray-400" type="text" id="account-name">
                </div>
                <div class="flex flex-col gap-2">
                    <label class="text-[#0D0D3F] font-semibold" for="transaction-date">Transaction Date</label>
                    <input v-model="transactionDate" class="transition duration-500 focus:border-[#0D0D3F] outline-none border py-2 placeholder:text-gray-400" type="text" id="transaction-date">
                </div>
            </div>
            <div class="flex flex-col gap-4 mb-6" v-if="fieldPosition == 4" data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out">
                <p class="text-[#0D0D3F] text-xl font-semibold">Review and Confirm:</p>
                <div class="border p-3 border-[#28B79A] rounded-sm">
                    <div class="flex gap-5 text-[#0D0D3F] font-semibold mb-4">
                        <p class="uppercase border-b">Name:</p>
                        <p>{{ name }}</p>
                    </div>
                    <div class="flex gap-5 text-[#0D0D3F] font-semibold mb-4">
                        <p class="uppercase border-b">Email:</p>
                        <p>{{ email }}</p>
                    </div>
                    <div class="flex gap-5 text-[#0D0D3F] font-semibold mb-4">
                        <p class="uppercase border-b">Website:</p>
                        <p>{{ website }}</p>
                    </div>
                    <div class="flex gap-5 text-[#0D0D3F] font-semibold mb-4">
                        <p class="uppercase border-b">Business Type:</p>
                        <p>{{ businessType }}</p>
                    </div>
                    <div class="flex gap-5 text-[#0D0D3F] font-semibold mb-4">
                        <p class="uppercase border-b">Phone Number:</p>
                        <p>{{ tel }}</p>
                    </div>
                    <div class="flex gap-5 text-[#0D0D3F] font-semibold mb-4">
                        <p class="uppercase border-b">Address:</p>
                        <p>{{ address }}</p>
                    </div>
                    <div class="flex gap-5 text-[#0D0D3F] font-semibold mb-4">
                        <p class="uppercase border-b">Engagement Type:</p>
                        <p>{{ engagementType }}</p>
                    </div>
                    <div class="flex gap-5 text-[#0D0D3F] font-semibold mb-4">
                        <p class="uppercase border-b">Link:</p>
                        <p>{{ link }}</p>
                    </div>
                    <div class="flex gap-5 text-[#0D0D3F] font-semibold mb-4">
                        <p class="uppercase border-b">Reach Goal:</p>
                        <p>{{ reachGoal }}</p>
                    </div>
                    <div class="flex gap-5 text-[#0D0D3F] font-semibold mb-4">
                        <p class="uppercase border-b">Payment Method:</p>
                        <p>{{ paymentMethod }}</p>
                    </div>
                    <div class="flex gap-5 text-[#0D0D3F] font-semibold mb-4">
                        <p class="uppercase border-b">Account Name:</p>
                        <p>{{ accountName }}</p>
                    </div>
                    <div class="flex gap-5 text-[#0D0D3F] font-semibold mb-4">
                        <p class="uppercase border-b">Transaction Date:</p>
                        <p>{{ transactionDate }}</p>
                    </div>
                </div>
            </div>
            <div class="w-full justify-between flex gap-4">
                <button class="bg-[#28B79A] text-sm  w-[50%] p-3 text-white rounded-md hover:bg-[#15c4a1]" @click="prevPosition" v-if="fieldPosition > 0 && fieldPosition <= 4">PREVIOUS</button>
                <button class="bg-[#28B79A] text-sm  w-[50%] p-3 text-white rounded-md hover:bg-[#15c4a1]" @click="nextPosition" v-if="fieldPosition <= 3">NEXT</button>
                <button class="bg-[#0D0D3F] text-sm  w-[50%] p-3 text-white rounded-md" v-if="fieldPosition == 4" @click="onSubmit">
                    <span v-if="loading">Please wait ...</span>
                    <span v-else>SUBMIT</span>
                </button>
            </div>
        </div>
        <div v-if="fieldPosition == 5" class="relative z-20 overflow-y-auto p-4 bg-white shadow-xl flex justify-center items-center">
            <div class="flex items-center flex-col gap-5 bg-white shadow-xl p-4 py-[4rem] rounded-md">
                <p class="text-[#28B79A] border-[3px] rounded-[50%] p-2 border-l-[#28B79A] border-t-[#28B79A] border-b-[#28B79A] w-fit"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m4 24l5-5l10 10L39 9l5 5l-25 25L4 24Z" clip-rule="evenodd"/></svg></p>
                <p class="text-4xl text-[#0D0D3F] font-semibold">Thank you</p>
                <p class="text-center max-w-[420px] text-[#0D0D3F font-semibold">A mail will be sent to your email address. Please ensure to checkmthe spam box incase you can't find it in your inbox</p>
                <router-link to="/"><p class="w-[180px] text-center p-3 bg-[#28B79A] text-white rounded-sm hover:bg-[#15c4a1] cursor-pointer">Return to homepage</p></router-link>
            </div>
        </div>
    </div>
</template>