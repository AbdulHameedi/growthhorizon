<script>
import { defineComponent } from 'vue';

export default defineComponent({

})
</script>
<template>
    <div data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out" class="w-full bg-[url('../assets/bg-section.jpg')] flex max-[850px]:flex-col bg-center">
        <div class="w-[50%] max-[850px]:w-full">
            <img class="contact-img h-full" src="../assets/img-morph1.webp" alt="">
        </div>
        <div class="py-20 px-20 pl-10 w-[50%] max-[1312px]:px-[1rem] max-[850px]:w-full">
            <div class="mb-8">
                <img class="w-[16px] h-[16px]" src="../assets/logo.svg" alt="">
                <p class="text-gray-400 font-semibold mb-1">WE ARE HERE TO LISTEN</p>
                <p class="text-[#0D0D3F] text-4xl font-bold">We value your feedback and inquiries</p>
            </div>
            <form>
                <div class="flex flex-col gap-3">
                    <input class="w-full bg-white p-4 rounded-md outline-none" placeholder="Full name" type="text">
                    <input class="w-full bg-white p-4 rounded-md outline-none" type="email" placeholder="Email address">
                    <textarea class="p-4 mb-6 rounded-md outline-none" cols="30" rows="5" placeholder="Type your message ..."></textarea>
                    <button class="bg-[#2E3BA6] text-white rounded-md text-lg font-semibold px-[4rem] py-4 w-fit hover:bg-[#0D0D3F] transition duration-500">Submit</button>
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