<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return{
            notificationUpdate: true
        }
    }
})
</script>
<template>
    <section class="mt-[7rem]">
        <header class="text-[#0D0D3F] p-14 text-5xl border-b max-[768px]:px-4">
            <p>Notification</p>
        </header>
        <main v-if="notificationUpdate" class="py-10 px-14 max-[767px]:px-4 min-[768px]:w-[80%] flex flex-col gap-8">
            <div class="rounded-md border text-gray-600">
                <div class="p-5 max-[425px]:p-3">
                    <div class="flex items-center gap-2 mb-3">
                        <p class="text-red-400"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 18.5q.625 0 1.063-.438T13.5 17h-3q0 .625.438 1.063T12 18.5ZM7 16h10v-2h-1v-2.6q0-1.525-.788-2.788T13 7V5.5h-2V7q-1.425.35-2.212 1.613T8 11.4V14H7v2Zm5-2Zm0 8q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg></p>
                        <p class="text-xl font-semibold text-[#0D0D3F]">Exciting News! Our Platform Has Launched!</p>
                    </div>
                    <p class="mb-2">We are thrilled to announce that our platform, Growth Horizon, is now live and ready to empower you to earn while engaging with digital content. Explore exciting opportunities and start earning today</p>
                </div>
                <p class="bg-gray-100 w-full border-t  h-[40px]"></p>
            </div>
            
            <div class="rounded-md border text-gray-600">
                <div class="p-5 max-[425px]:p-3">
                    <div class="flex items-center gap-2 mb-3">
                        <p class="text-red-400"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 18.5q.625 0 1.063-.438T13.5 17h-3q0 .625.438 1.063T12 18.5ZM7 16h10v-2h-1v-2.6q0-1.525-.788-2.788T13 7V5.5h-2V7q-1.425.35-2.212 1.613T8 11.4V14H7v2Zm5-2Zm0 8q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg></p>
                        <p class="text-xl font-semibold text-[#0D0D3F]">Password Update Required</p>
                    </div>
                    <p class="mb-2">For your security, we kindly ask all new users to change their initial password. Please navigate to settings to set a secure password for your account. Thank you for helping us keep your account safe.</p>
                </div>
                <p class="bg-gray-100 w-full border-t  h-[40px]"></p>
            </div>

            <div class="rounded-md border text-gray-600">
                <div class="p-5 max-[425px]:p-3">
                    <div class="flex items-center gap-2 mb-3">
                        <p class="text-red-400"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 18.5q.625 0 1.063-.438T13.5 17h-3q0 .625.438 1.063T12 18.5ZM7 16h10v-2h-1v-2.6q0-1.525-.788-2.788T13 7V5.5h-2V7q-1.425.35-2.212 1.613T8 11.4V14H7v2Zm5-2Zm0 8q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg></p>
                        <p class="text-xl font-semibold text-[#0D0D3F]">Discover How it Works</p>
                    </div>
                    <p class="mb-2">New to Growth Horizon? Learn how to maximize your earning by exploring our Process page on the Homepage. Discover the steps to success and start earning with ease</p>
                </div>
                <p class="bg-gray-100 w-full border-t  h-[40px]"></p>
            </div>
            
            <div class="rounded-md border text-gray-600">
                <div class="p-5 max-[425px]:p-3">
                    <div class="flex items-center gap-2 mb-3">
                        <p class="text-red-400"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 18.5q.625 0 1.063-.438T13.5 17h-3q0 .625.438 1.063T12 18.5ZM7 16h10v-2h-1v-2.6q0-1.525-.788-2.788T13 7V5.5h-2V7q-1.425.35-2.212 1.613T8 11.4V14H7v2Zm5-2Zm0 8q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg></p>
                        <p class="text-xl font-semibold text-[#0D0D3F]">Important Update: Withdrawal Form Availability</p>
                    </div>
                    <p class="mb-2">We value your participation! We're pleased to inform you that the withdrawal form will be available starting on the 3rd of October. Get ready to cash out your earnings and watch your efforts turn into real rewards</p>
                </div>
                <p class="bg-gray-100 w-full border-t  h-[40px]"></p>
            </div>
        </main>

        <main v-else class="text-[#0D0D3F] py-10 px-14 max-[767px]:px-4 min-[768px]:w-[80%] ">
            <div class="rounded-md border flex items-center justify-center h-[400px]">
                <p>No notification update. Check back later</p>
            </div>
        </main>
    </section>
</template>