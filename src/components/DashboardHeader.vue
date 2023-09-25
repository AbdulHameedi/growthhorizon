<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data(){
        return{
            feedbackBox: false,
            notificationBox: false,
            notificationUpdate: true,
            userBox: false,
            mobileMenu: false
        }
    },
    methods: {
        notificationFunc(){
            this.feedbackBox = false;
            this.userBox = false;
            this.notificationBox = !this.notificationBox
        },
        feedbackFunc(){
            this.notificationBox = false;
            this.userBox = false;
            this.feedbackBox = !this.feedbackBox
        },
        userBoxFunc(){
            this.notificationBox = false;
            this.feedbackBox = false;
            this.userBox =! this.userBox
        }
    }

})
</script>
<template>
        <header class="px-5 border-b pb-3 fixed left-0 right-0 bg-white top-0">
            <!-- notification-box overlay -->
            <p @click="notificationBox = false" v-if="notificationBox" class="hidden max-[570px]:block fixed bottom-0 w-full bg-black top-0 left-0 opacity-40"></p>

            <!-- mobile-menu -->
            <div v-if="mobileMenu" class="p-5 absolute w-full top-[4rem] left-0 bottom-0 bg-white flex flex-col gap-3 text-gray-600">
                <div class="flex justify-between border-b pb-4 items-center">
                    <p>sanilinity507@gmail.com</p>
                    <p class="w-fit p-1 bg-[#0D0D3F] text-white rounded-[50%]"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M12 5.9a2.1 2.1 0 1 1 0 4.2a2.1 2.1 0 0 1 0-4.2m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/></svg></p>
                </div>
                <p class="pb-4 border-b">Change Password</p>
                <router-link to="/dashboard/settings"><p @click="mobileMenu = false" class="pb-4 border-b">Settings</p></router-link>
                <p class="py-3 bg-[#0D0D3F] w-full rounded-md text-white text-center mt-3">Log Out</p>
            </div>

            <!--  -->
            <div class="flex justify-between py-5">
                <div class="flex items-center gap-2">
                    <img class="w-[30px] h-[30px]" src="../assets/logo.svg" alt="logo">
                    <p class="text-[#0D0D3F] font-semibold uppercase">Growth Horizon</p>
                </div>
                <div class="flex items-center gap-4 text-gray-600">
                    <div class="relative max-[570px]:hidden">
                        <p @click="feedbackFunc" class="w-fit border p-1 px-2 rounded-md hover:bg-gray-100 cursor-pointer">Feedback</p>
                        <div v-if="feedbackBox" class="absolute shadow-sm right-[-2rem] top-[2.5rem] h-[200px] bg-white border rounded-md z-20">
                            <div class="p-2 h-[75%] bg-white">
                                <textarea class="rounded-md p-2 placeholder:text-gray-600 border outline-none focus:border-black" name="" id="" cols="40" rows="4" placeholder="Your feedback..."></textarea>
                            </div>
                            <div class="p-2 h-[25%] bg-gray-100 flex justify-end">
                                <button class="w-fit bg-[#0D0D3F] rounded-md text-white p-1 px-3">Send</button>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="max-[570px]:hidden">Help</a>
                    <div class="relative max-[570px]:static">
                        <p @click="notificationFunc" class="w-fit border rounded-[50%] p-1 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/></svg></p>
                        <div v-if="notificationBox" class="absolute bg-white shadow-md rounded-md w-[400px] text-gray-600 right-5 bottom-[-28rem] max-[570px]:bottom-0 max-[570px]:w-full max-[570px]:right-0">
                            <div class="flex items-center justify-between border-b p-4 relative">
                                <p>Inbox</p>
                                <p class="w-fit p-1 rounded-[50%] hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"><path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94c0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6s3.6 1.62 3.6 3.6s-1.62 3.6-3.6 3.6z"/></svg></p>
                                <p class="absolute w-[3rem] h-[2px] bg-black bottom-0 left-3"></p>
                            </div>
                            <div class="h-[310px] overflow-auto" v-if="notificationUpdate">
                                <div class="flex items-center gap-5 p-4 border-b hover:bg-gray-100 cursor-pointer">
                                    <p class="text-red-400"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="currentColor" d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm1 16H9v-2h2zm0-4H9V4h2z"/></svg></p>
                                    <p>Withdrawal form will be out on Friday-Sunday 19th-22nd of October, 2023</p>
                                </div>
                                <div class="flex items-center gap-5 p-4 border-b hover:bg-gray-100 cursor-pointer">
                                    <p class="text-red-400"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="currentColor" d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm1 16H9v-2h2zm0-4H9V4h2z"/></svg></p>
                                    <p>Is this a new account? Change your password</p>
                                </div>
                                <div class="flex items-center gap-5 p-4 border-b hover:bg-gray-100 cursor-pointer">
                                    <p class="text-red-400"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="currentColor" d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm1 16H9v-2h2zm0-4H9V4h2z"/></svg></p>
                                    <p>growth horizon failed to deploy in the production environment</p>
                                </div>
                                <div class="flex items-center gap-5 p-4 border-b hover:bg-gray-100 cursor-pointer">
                                    <p class="text-red-400"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="currentColor" d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm1 16H9v-2h2zm0-4H9V4h2z"/></svg></p>
                                    <p>growth horizon failed to deploy in the production environment</p>
                                </div>
                            </div>
                            <div v-else class="flex h-[310px] overflow-auto flex items-center justify-center">
                                <p>No availabe notification</p>
                            </div>
                            <div class="border-t flex justify-center p-3 font-semibold">
                                <router-link to="/dashboard/notification"><p @click="notificationBox = false" class="cursor-pointer hover:bg-gray-200 rounded-md p-1 px-3">Expand</p></router-link>
                            </div>
                        </div>
                    </div>
                    <div class="relative max-[570px]:hidden">
                        <p @click="userBoxFunc" class="w-fit p-1 bg-[#0D0D3F] text-white rounded-[50%] border hover:bg-white hover:border hover:text-[#0D0D3F] transition duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M12 5.9a2.1 2.1 0 1 1 0 4.2a2.1 2.1 0 0 1 0-4.2m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/></svg></p>
                        <div v-if="userBox" class="py-5 text-gray-600 absolute shadow-md top-10 bg-white rounded-md right-0 w-[250px]">
                            <p class="pb-2 px-3">sanilinity507@gmail.com</p>
                            <router-link to="/dashboard/settings"><p @click="userBox = false" class="hover:bg-gray-100 cursor-pointer p-2 px-3">Change Password</p></router-link>
                            <router-link to="/dashboard/settings">
                            <div @click="userBox = false" class="flex items-center justify-between hover:bg-gray-100 cursor-pointer p-2 px-3">
                                <p>Settings</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"><path fill="currentColor" d="M19.14 12.94c.04-.3.06-.61.06-.94c0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6s3.6 1.62 3.6 3.6s-1.62 3.6-3.6 3.6z"/></svg>
                            </div>
                            </router-link>
                            <div class="px-3 text-center mt-3 cursor-pointer">
                                <p class="w-full bg-lo bg-[#0D0D3F] hover:bg-[#1e1e5a] rounded-md p-1 text-white">Log Out</p>
                            </div>
                        </div>
                    </div>
                    <div class="hidden max-[570px]:block">
                        <p v-if="!mobileMenu" @click="mobileMenu = true" class="w-fit border p-1 rounded-[50%]"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 512 512"><path fill="currentColor" d="M80 96h352v32H80zm0 144h352v32H80zm0 144h352v32H80z"/></svg></p>
                        <p v-if="mobileMenu" @click="mobileMenu = false" class="w-fit border p-1 rounded-[50%]"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg></p>
                    </div>
                </div>
            </div>
            <div class="flex items-center text-gray-600 cursor-pointer gap-1 overflow-auto nav-items">
                <router-link to="/dashboard"><p :class="$route.path == '/dashboard' && 'bg-gray-200'" class="hover:bg-gray-200 hover:text-black p-1 px-3 rounded-md transition duration-300">Overview</p></router-link>
                <p class="hover:bg-gray-200 hover:text-black p-1 px-3 rounded-md transition duration-300">Deployments</p>
                <p class="hover:bg-gray-200 hover:text-black p-1 px-3 rounded-md transition duration-300">Analytics</p>
                <router-link to="/dashboard/notification"><p :class="$route.path == '/dashboard/notification' && 'bg-gray-200'" class="hover:bg-gray-200 hover:text-black p-1 px-3 rounded-md transition duration-300">Notification</p></router-link>
                <p class="hover:bg-gray-200 hover:text-black p-1 px-3 rounded-md transition duration-300">Logs</p>
                <router-link to="/dashboard/withdrawal"><p :class="$route.path == '/dashboard/withdrawal' && 'bg-gray-200'" class="hover:bg-gray-200 hover:text-black p-1 px-3 rounded-md transition duration-300">Withdrawal</p></router-link>
                <router-link to="/dashboard/settings"><p :class="$route.path == '/dashboard/settings' && 'bg-gray-200'" class="hover:bg-gray-200 hover:text-black p-1 px-3 rounded-md transition duration-300">Settings</p></router-link>
            </div>
        </header>
</template>
<style scoped>
    .nav-items::-webkit-scrollbar{
        width: 8px;
    }
</style>