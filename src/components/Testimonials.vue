<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data(){
        return{
            testimonies: [
                {
                    "id": 0,
                    "name": 'Sanni Hammed',
                    "occupation": 'Youtuber',
                    "speech": 'Transforming the way we engage with online content has been a game-changer, and Growth Horizon has made it not only possible but exceptionally rewarding.',
                },
                {
                    "id": 1,
                    "name": 'Luqman Abdulrahman',
                    "occupation": 'Software Developer',
                    "speech": 'The platform user-friendly interface and diverse engagement options have not only made it easy but exciting to participate in content promotion and earnings.',
                },
                {
                    "id": 3,
                    "name": 'Taiwo Balkis',
                    "occupation": 'Content Creator',
                    "speech": 'The Growth Horizon experience has been nothing short of transformative, and it has empowered me to shape my own path to financial prosperity through digital engagement',
                },                
            ],
            currentTestimony: 0
        }
    }
})
</script>
<template>
    <div data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out" class="grid grid-cols-2 bg-[#EDEDF4] pt-[18rem] pb-[4rem] max-[1096px]:grid-cols-1">
        <div class="relative bg-[url('../assets/lines.webp') bg-left bg-no-repeat h-[500px]  max-[425px]:h-[300px]">
            <img class="rounded-[50%] max-[425px]:w-[150px] max-[610px]:w-[300px] absolute top-[10%] left-[20%] z-20" src="../assets/a1.webp" alt="">
            <img class="rounded-[50%] max-[425px]:w-[100px] max-[610px]:w-[200px] absolute left-[50%] top-0" src="../assets/a2.webp" alt="">
            <img class="rounded-[50%] max-[425px]:w-[100px] absolute top-0 left-[6%]" src="../assets/a3.webp" alt="">
            <img class="rounded-[50%] max-[425px]:w-[90px] absolute left-[65%] max-[425px]:left-[43%] max-[425px]:bottom-[24%] z-30 bottom-[20%]" src="../assets/a4.webp" alt="">
        </div>
        <div class="px-20 pl-10 max-[1312px]:px-[1rem]">
            <div class="mb-8">
                <img class="w-[16px] h-[16px]" src="../assets/logo.svg" alt="">
                <p class="text-gray-400 font-semibold mb-1">OUR TESTIMONIALS</p>
                <p class="text-[#0D0D3F] text-5xl font-bold max-[499px]:text-3xl">What they're talking about company</p>
            </div>
            <div v-for="(testimony, index) in testimonies" :bind="testimony">
                <template v-if="index == currentTestimony">
                    <p class="text-gray-500 font-semibold leading-2 text-lg tracking-wide max-w-md mb-10">{{ testimony.speech }}</p>
                    <div class="flex justify-between items-center max-[405px]:flex-col max-[405px]:justify-between max-[405px]:gap-3">
                        <div class="flex gap-6 items-center">
                            <div class="border border-[5px] overflow-hidden border-[#28B79A] rounded-[50%] w-[105px] h-[105px]">
                                <img class="rounded-[50%] w-full h-full  border border-white border-[4px]" src="../assets/hammed.jpg" alt="" v-if="currentTestimony == 0">
                                <img class="rounded-[50%] w-full h-full  border border-white border-[4px]" src="../assets/luqman.png" alt="" v-if="currentTestimony == 1">
                                <img class="rounded-[50%] w-full h-full  border border-white border-[4px]" src="../assets/balkis.jpg" alt="" v-if="currentTestimony == 2">
                            </div>
                            <div>
                                <p class="text-[#0D0D3F] font-bold text-xl">{{ testimony.name }}</p>
                                <p class="text-[#28B79A] font-semibold">{{ testimony.occupation }} </p>
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <p class="w-[20px] h-[20px] rounded-[50%] border-2 border-[#0D0D3F]" @click="currentTestimony = 0" :class="currentTestimony == 0 && 'bg-[#0D0D3F]'"></p>
                            <p class="w-[20px] h-[20px] rounded-[50%] border-2 border-[#0D0D3F]" @click="currentTestimony = 1" :class="currentTestimony == 1 && 'bg-[#0D0D3F]'"></p>
                            <p class="w-[20px] h-[20px] rounded-[50%] border-2 border-[#0D0D3F]" @click="currentTestimony = 2" :class="currentTestimony == 2 && 'bg-[#0D0D3F]'"></p>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>