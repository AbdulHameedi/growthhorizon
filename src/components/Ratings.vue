<script>
import { defineComponent } from 'vue';

export default defineComponent({})
</script>
<template>
    <div data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out" class="bg-[url('../assets/bg-parallax.webp')] grid grid-cols-4 bg-center p-20 gap-7 max-[1312px]:px-[1rem] max-[1009px]:grid-cols-2 max-[581px]:grid-cols-1">
        <div class="p-5 relative box-rating">
            <div class="relative z-20">
                <div class="flex items-center mb-2 gap-2">
                    <p class="text-4xl text-white font-bold">100%</p>
                    <svg class="text-[#28B79A]" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24"><path fill="currentColor" d="M12.025 21.025q-3.425 0-5.725-2.475T4 12.725V5.5q0-.825.588-1.413Q5.175 3.5 6 3.5h12q.825 0 1.413.587Q20 4.675 20 5.5v1.75q0 .4-.15.762q-.15.363-.425.638l-5.775 5.775q-.575.575-1.412.575q-.838 0-1.413-.575L8 11.6l1.4-1.425L12.25 13L18 7.25V5.5H6v7.3q0 2.55 1.725 4.375Q9.45 19 12.025 19q2.5 0 4.237-1.75Q18 15.5 18 13h2q0 3.35-2.312 5.688q-2.313 2.337-5.663 2.337Z"/></svg>
                </div>
                <button class="w-full bg-white text-[#0D0D3F] rounded-md p-3 font-bold text-lg">Insurance</button>
            </div>
            <p class="absolute opacity-rating top-0 w-full bottom-0 left-0 bg-black opacity-10 rounded-md"></p>
        </div>
        <div class="p-5 relative box-rating">
            <div class="relative z-20">
                <div class="flex items-center mb-2 gap-2">
                    <p class="text-4xl text-white font-bold">90%</p>
                    <svg class="text-[#28B79A]" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11a5 5 0 0 1 5 5v6h-2v-6a3 3 0 0 0-2.824-2.995L12 13a3 3 0 0 0-2.995 2.824L9 16v6H7v-6a5 5 0 0 1 5-5Zm-6.5 3c.279 0 .55.033.81.094a5.948 5.948 0 0 0-.301 1.575L6 16v.086a1.493 1.493 0 0 0-.356-.08L5.5 16a1.5 1.5 0 0 0-1.493 1.355L4 17.5V22H2v-4.5A3.5 3.5 0 0 1 5.5 14Zm13 0a3.5 3.5 0 0 1 3.5 3.5V22h-2v-4.5a1.5 1.5 0 0 0-1.355-1.493L18.5 16c-.175 0-.343.03-.5.085V16c0-.666-.108-1.306-.308-1.904c.258-.063.53-.096.808-.096Zm-13-6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Zm13 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Zm-13 2a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1Zm13 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1ZM12 2a4 4 0 1 1 0 8a4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z"/></svg>
                </div>
                <button class="w-full bg-white text-[#0D0D3F] rounded-md p-3 font-bold text-lg">Professional team</button>
            </div>
            <p class="absolute opacity-rating top-0 w-full bottom-0 left-0 bg-black opacity-10 rounded-md"></p>
        </div>
        <div class="p-5 relative box-rating">
            <div class="relative z-20">
                <div class="flex items-center mb-2 gap-2">
                    <p class="text-4xl text-white font-bold">80%</p>
                    <svg class="text-[#28B79A]" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 1024 1024"><path fill="currentColor" d="M824.2 699.9a301.55 301.55 0 0 0-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200c-109.1 1.7-197 90.6-197 200c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 0 0-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7c1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 0 1 612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 0 0 8-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88c24-24.6 56.1-38.3 90.4-38.7c33.9-.3 66.8 12.9 91 36.6c24.8 24.3 38.4 56.8 38.4 91.4c0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 0 1 612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4c0-15.9 1.5-31.4 4.3-46.5c.7-3.6-1.2-7.3-4.5-8.8c-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6c24.7-25.3 57.9-39.1 93.2-38.7c31.9.3 62.7 12.6 86 34.4c7.9 7.4 14.7 15.6 20.4 24.4c2 3.1 5.9 4.4 9.3 3.2c17.6-6.1 36.2-10.4 55.3-12.4c5.6-.6 8.8-6.6 6.3-11.6c-32.5-64.3-98.9-108.7-175.7-109.9c-110.9-1.7-203.3 89.2-203.3 199.9c0 62.8 28.9 118.8 74.2 155.5c-31.8 14.7-61.1 35-86.5 60.4c-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7c1.9-58 25.4-112.3 66.7-153.5c29.4-29.4 65.4-49.8 104.7-59.7c3.9-1 6.5-4.7 6-8.7z"/></svg>
                </div>
                <button class="w-full bg-white text-[#0D0D3F] rounded-md p-3 font-bold text-lg">Satisfied Customer</button>
            </div>
            <p class="absolute opacity-rating top-0 w-full bottom-0 left-0 bg-black opacity-10 rounded-md"></p>
        </div>
        <div class="p-5 relative box-rating">
            <div class="relative z-20">
                <div class="flex items-center mb-2 gap-2">
                    <p class="text-4xl text-white font-bold">99%</p>
                    <svg class="text-[#28B79A]" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 48 48"><mask id="ipSSuccess0"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path fill="#fff" stroke="#fff" d="m24 4l5.253 3.832l6.503-.012l1.997 6.188l5.268 3.812L41 24l2.021 6.18l-5.268 3.812l-1.997 6.188l-6.503-.012L24 44l-5.253-3.832l-6.503.012l-1.997-6.188l-5.268-3.812L7 24l-2.021-6.18l5.268-3.812l1.997-6.188l6.503.012L24 4Z"/><path stroke="#000" d="m17 24l5 5l10-10"/></g></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSuccess0)"/></svg>
                </div>
                <button class="w-full bg-white text-[#0D0D3F] rounded-md p-3 font-bold text-lg">Success Rates</button>
            </div>
            <p class="absolute opacity-rating top-0 w-full bottom-0 left-0 bg-black opacity-10 rounded-md"></p>
        </div>
    </div>
</template>
<style>
.box-rating:hover .opacity-rating{
    opacity: 0.2;
    transition: all 0.3s;
}
</style>