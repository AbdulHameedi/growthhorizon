<script>
import { defineComponent } from 'vue';

export default defineComponent({

})
</script>
<template>
    <div data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out" class="bg-white px-20 py-[9rem] max-[1312px]:px-[1rem]">
        <div class="flex flex-col items-center justify-center mb-12">
            <img class="w-[18px] h-[18px]" src="../assets/logo.svg" alt="">
            <p class="text-gray-500 font-semibold text-lg mb-3 text-center">RECENT NEWS FEED</p>
            <p class="text-[#0D0D3F] text-5xl font-bold max-w-lg text-center max-[792px]:text-4xl">Latest news & articles from the blog</p>
        </div>
        <div class="grid grid-cols-3 gap-4 max-[1312px]:grid-cols-2 max-[792px]:grid-cols-1 max-[792px]:gap-20">
            <div class="h-[320px] relative">
                <img class="h-full rounded-md w-full" src="../assets/blog-1.webp" alt="">
                <div class="absolute bottom-[-3rem] shadow-md w-[90%] flex ">
                    <div class="w-[15%] bg-[#28B79A] rounded-bl-md text-white flex items-center">
                        <p class="absolute rotate-90 left-[-2rem] font-semibold">9 AUGUST 2023</p>
                    </div>
                    <div class="w-[85%] bg-white p-8 pb-4 rounded-r-md">
                        <div class="flex items-center gap-1 mb-1">
                            <svg class="text-[#28B79A]" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"/></svg>
                            <p class="text-sm text-gray-500">by admin</p>
                        </div>
                        <p class="text-[#0D0D3F] text-2xl font-bold border-b pb-6">The breakdown of the registration process</p>
                        <div class="cursor-pointer flex items-center justify-between pt-3 hover:text-[#28B79A] text-gray-500">
                            <p class="text-sm transition duration-500">Read More</p>
                            <svg class="text-[#28B79A]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M16.175 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.713t.3-.712L16.175 13Z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="h-[320px] relative">
                <img class="h-full rounded-md w-full" src="../assets/blog-2.webp" alt="">
                <div class="absolute bottom-[-3rem] shadow-md w-[90%] flex ">
                    <div class="w-[15%] bg-[#28B79A] rounded-bl-md text-white flex items-center">
                        <p class="absolute rotate-90 left-[-2rem] font-semibold">6 JULY 2023</p>
                    </div>
                    <div class="w-[85%] bg-white p-8 pb-4 rounded-r-md">
                        <div class="flex items-center gap-1 mb-1">
                            <svg class="text-[#28B79A]" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"/></svg>
                            <p class="text-sm text-gray-500">by admin</p>
                        </div>
                        <p class="text-[#0D0D3F] text-2xl font-bold border-b pb-6">The breakdown of the withdrawal process</p>
                        <div class="cursor-pointer flex items-center justify-between pt-3 hover:text-[#28B79A] text-gray-500">
                            <p class="text-sm transition duration-500">Read More</p>
                            <svg class="text-[#28B79A]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M16.175 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.713t.3-.712L16.175 13Z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="h-[320px] relative">
                <img class="h-full rounded-md w-full" src="../assets/blog-3.webp" alt="">
                <div class="absolute bottom-[-3rem] shadow-md w-[90%] flex ">
                    <div class="w-[15%] bg-[#28B79A] rounded-bl-md text-white flex items-center">
                        <p class="absolute rotate-90 left-[-2rem] font-semibold">9 SEPT. 2023</p>
                    </div>
                    <div class="w-[85%] bg-white p-8 pb-4 rounded-r-md">
                        <div class="flex items-center gap-1 mb-1">
                            <svg class="text-[#28B79A]" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"/></svg>
                            <p class="text-sm text-gray-500">by admin</p>
                        </div>
                        <p class="text-[#0D0D3F] text-2xl font-bold border-b pb-6">How do I post my ads or other links as an  advertiser</p>
                        <div class="cursor-pointer flex items-center justify-between pt-3 hover:text-[#28B79A] text-gray-500">
                            <p class="text-sm transition duration-500">Read More</p>
                            <svg class="text-[#28B79A]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M16.175 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.713t.3-.712L16.175 13Z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>