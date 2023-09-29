<script>
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
    data(){
        return{
            withdrawalForm: false,
            errorUsername: false,
            errorEmail: false,
            errorFacebook: false,
            errorInstagram: false,
            errorBankAcctName: false,
            errorBankAcctNum: false,
            errorBankType: false,
            username: '',
            email: '',
            facebook: '',
            instagram: '',
            bankAcctNum: '',
            bankAcctName: '',
            bankAcctType: '',
            loading: false,
            usedFacebookInstagram: false,
            usedInstagram: false,
            facebookPass: false,
            instagramPass: false
        }
    },
    methods: {
        validateName(){
            if(this.username == ''){
                this.errorUsername = true
            }else{
                this.errorUsername = false
            }
        },
        validateEmail(){
            if(this.email == ''){
                this.errorEmail =  true
            }else{
                this.errorEmail = false
            }
        },
        validateFacebook(){
            if(this.facebook == ''){
                this.errorFacebook = true
            }else{
                this.errorFacebook= false
            }
        },
        validateInstagram(){
            if(this.instagram == ''){
                this.errorInstagram = true
            }else{
                this.errorInstagram= false
            }
        },
        validateBankAcctNum(){
            if(this.bankAcctNum == ''){
                this.errorBankAcctNum = true
            }else{
                this.errorBankAcctNum= false
            }
        },
        validateBankAcctName(){
            if(this.bankAcctName == ''){
                this.errorBankAcctName = true
            }else{
                this.errorBankAcctName= false
            }
        },
        validateBankAcctType(){
            if(this.bankAcctType == ''){
                this.errorBankType = true
            }else{
                this.errorBankType= false
            }
        },
        async submitWithdrawal(){
            this.validateBankAcctName();
            this.validateBankAcctNum();
            this.validateBankAcctType();
            this.validateEmail();
            this.validateName();
            this.validateInstagram();
            this.validateFacebook();
            if(!this.errorUsername && !this.errorEmail && !this.errorFacebook &&  !this.errorInstagram && !this.errorBankType && !this.errorBankAcctNum && !this.errorBankAcctName){
                this.loading = true;
                    // FB
                    let getResult = await axios.get(
                    `https://dbgrowthhorizon.onrender.com/withdrawal?facebook=${this.facebook}`
                    )
                    // IG
                    let getInstagram = await axios.get(
                    `https://dbgrowthhorizon.onrender.com/withdrawal?instagram=${this.instagram}`
                    )
                    if(getResult.status == 200 && getResult.data.length > 0 || getInstagram.status == 200 && getInstagram.data.length > 0){
                        this.usedFacebookInstagram = true
                        this.loading = false
                    }else{
                        this.loading = true
                        let resultPost = await axios.post("https://dbgrowthhorizon.onrender.com/withdrawal" , {
                            username: this.username,
                            email: this.email,
                            facebook: this.facebook,
                            instagram: this.instagram,
                            acctNum: this.bankAcctNum,
                            acctName: this.bankAcctName,
                            acctType: this.bankAcctType
                        })
                        if(resultPost.status == 201){
                            this.loading = false
                            this.$router.push('/dashboard')
                        }
                    }
            }
        }
    },
    watch: {
        username(value){
            if(value !== ''){
                this.errorUsername = false
            }
        },
        email(value){
            if(value !== ''){
                this.errorEmail = false
            }
        },
        facebook(value){
            if(value !== ''){
                this.errorFacebook = false
            }
        },
        instagram(value){
            if(value !== ''){
                this.errorInstagram = false
            }
        },
        bankAcctNum(value){
            if(value !== ''){
                this.errorBankAcctNum = false
            }
        },
        bankAcctType(value){
            if(value !== ''){
                this.errorBankType = false
            }
        },
        bankAcctName(value){
            if(value !== ''){
                this.errorBankAcctName = false
            }
        }
    }
})
</script>
<template>
    <section class="mt-[7rem]">
        <header class="text-[#0D0D3F] p-14 text-5xl border-b max-[880px]:px-4">
            <p>Withdrawal</p>
        </header>
        <main v-if="withdrawalForm" class="py-10 px-14 min-[880px]:w-[80%] max-[880px]:px-4">
            <form @submit.prevent="submitWithdrawal" class="rounded-md border p-5 flex flex-col gap-5 max-[557px]:p-3">
                <div class="grid grid-cols-2 max-[557px]:grid-cols-1 gap-5">
                    <div class="flex flex-col gap-2">
                        <label for="name" class="font-semibold text-[#0D0D3F]">Username</label>
                        <input v-model="username" placeholder="John Doe" class="p-2 rounded-md outline-none border focus:border-[#0D0D3F]" type="text" id="name">
                        <p v-if="errorUsername" class="text-sm text-red-500 italic">This field is required</p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="email" class="font-semibold text-[#0D0D3F]">Email address</label>
                        <input v-model="email" placeholder="example@email.com" class="p-2 rounded-md outline-none border focus:border-[#0D0D3F]" type="email" id="email">
                        <p v-if="errorEmail" class="text-sm text-red-500 italic">This field is required</p>
                    </div>
                </div>
                <div class="grid grid-cols-2 max-[557px]:grid-cols-1 gap-5">
                    <div class="flex flex-col gap-2">
                        <label for="fb_link" class="font-semibold text-[#0D0D3F]">Facebook Link</label>
                        <input v-model="facebook" placeholder="https://web.facebook.com/profile.php?id=11222" class="p-2 rounded-md outline-none border focus:border-[#0D0D3F]" type="text" id="fb_link">
                        <p v-if="errorFacebook" class="text-sm text-red-500 italic">This field is required</p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="ig_link" class="font-semibold text-[#0D0D3F]">Instagram Link</label>
                        <input v-model="instagram" placeholder="https://web.instagram.com/profile.php?id=11222" class="p-2 rounded-md outline-none border focus:border-[#0D0D3F]" type="text" id="ig_link">
                        <p v-if="errorInstagram" class="text-sm text-red-500 italic">This field is required</p>
                    </div>
                </div>
                <p v-if="usedFacebookInstagram" class="text-sm text-red-500 italic bg-red-100 p-1 w-full">The social media link has beeen used</p>
                <div class="grid grid-cols-2 max-[557px]:grid-cols-1 gap-5">
                    <div class="flex flex-col gap-2">
                        <label for="acct_num" class="font-semibold text-[#0D0D3F]">Bank Acccount Number</label>
                        <input v-model="bankAcctNum"  class="p-2 rounded-md outline-none border focus:border-[#0D0D3F]" type="text" id="acct_num">
                        <p v-if="errorBankAcctNum" class="text-sm text-red-500 italic">This field is required</p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="acct_name" class="font-semibold text-[#0D0D3F]">Bank Account Name</label>
                        <input v-model="bankAcctName"  class="p-2 rounded-md outline-none border focus:border-[#0D0D3F]" type="text" id="acct_name">
                        <p v-if="errorBankAcctName" class="text-sm text-red-500 italic">This field is required</p>
                    </div>
                </div>
                <div class="grid grid-cols-2 max-[557px]:grid-cols-1 gap-5">
                    <div class="flex flex-col gap-2">
                        <label for="bank_type" class="font-semibold text-[#0D0D3F]">Bank Type</label>
                        <input v-model="bankAcctType" placeholder="GT Bank, Palmpay ..." class="p-2 rounded-md outline-none border focus:border-[#0D0D3F]" type="text" id="bank_type">
                        <p v-if="errorBankType" class="text-sm text-red-500 italic">This field is required</p>
                    </div>
                </div>
                <button type="submit" class="w-fit px-20 p-3 bg-[#0D0D3F] hover:bg-[#1e1e5a] rounded-md text-white mt-5 max-[425px]:w-full">
                    <span v-if="loading">Please wait ...</span>
                    <span v-else>Submit</span>
                </button>
            </form>
        </main>
        <main class="py-10 px-14 min-[880px]:w-[80%] max-[880px]:px-4" v-else>
            <div class="text-lg rounded-md border w-full h-[500px] text-[#0D0D3F] flex justify-center items-center">
                <p>Withdrawal form is unavailable</p>
            </div>
        </main>
    </section>
</template>