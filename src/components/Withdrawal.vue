<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return{
            withdrawalForm: true
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
            <form class="rounded-md border p-5 flex flex-col gap-5 max-[557px]:p-3">
                <div class="grid grid-cols-2 max-[557px]:grid-cols-1 gap-5">
                    <div class="flex flex-col gap-2">
                        <label for="name" class="font-semibold text-[#0D0D3F]">Username</label>
                        <input placeholder="John Doe" class="p-2 rounded-md outline-none border focus:border-[#0D0D3F]" type="text" id="name">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="email" class="font-semibold text-[#0D0D3F]">Email address</label>
                        <input placeholder="example@email.com" class="p-2 rounded-md outline-none border focus:border-[#0D0D3F]" type="email" id="email">
                    </div>
                </div>
                <div class="grid grid-cols-2 max-[557px]:grid-cols-1 gap-5">
                    <div class="flex flex-col gap-2">
                        <label for="fb_link" class="font-semibold text-[#0D0D3F]">Facebook Link</label>
                        <input placeholder="https://web.facebook.com/profile.php?id=11222" class="p-2 rounded-md outline-none border focus:border-[#0D0D3F]" type="text" id="fb_link">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="acct_num" class="font-semibold text-[#0D0D3F]">Bank Acccount Number</label>
                        <input  class="p-2 rounded-md outline-none border focus:border-[#0D0D3F]" type="text" id="acct_num">
                    </div>
                </div>
                <div class="grid grid-cols-2 max-[557px]:grid-cols-1 gap-5">
                    <div class="flex flex-col gap-2">
                        <label for="acct_name" class="font-semibold text-[#0D0D3F]">Bank Account Name</label>
                        <input  class="p-2 rounded-md outline-none border focus:border-[#0D0D3F]" type="text" id="acct_name">
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="email" class="font-semibold text-[#0D0D3F]">Bank Type</label>
                        <input placeholder="GT Bank, Palmpay ..." class="p-2 rounded-md outline-none border focus:border-[#0D0D3F]" type="email" id="email">
                    </div>
                </div>
                <button type="submit" class="w-fit px-20 p-3 bg-[#0D0D3F] hover:bg-[#1e1e5a] rounded-md text-white mt-5 max-[425px]:w-full">Submit</button>
            </form>
        </main>
        <main class="py-10 px-14 min-[880px]:w-[80%] max-[880px]:px-4">
            <div class="text-lg rounded-md border w-full h-[500px] text-[#0D0D3F] flex justify-center items-center">
                <p>Withdrawal form is unavailable</p>
            </div>
        </main>
    </section>
</template>