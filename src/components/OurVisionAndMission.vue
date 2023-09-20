<template>
    <div data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out">
        <div class="lg:h-screen md:h-[70vh] h-[50vh] relative bg-[url(../assets/offer-meeting.jpeg)] bg-cover bg-center overflow-hidden">
            <div class="absolute h-full bg-[#0D0D3F] opacity-[0.4] top-0 w-full"></div>
            <img class="absolute right-0" src="../assets/offer-shape1.png" alt="">
            <div class="p-4 md:p-20 flex absolute left-0 right-0 h-full items-center justify-center">
                <p class="lg:text-6xl text-4xl text-white lg:leading-[70px] text-center font-bold">We’re protecting your future with the best insurance</p>
            </div>
            <img class="absolute bottom-0 z-[-999] img" src="../assets/offer-shape1.png" alt="">
        </div>
    
        <div class="bg-white lg:px-6 flex py-16 shadow-lg lg:h-[70vh] md:h-[80vh] mt-[-70px] md:mt-[-120px] rounded-lg relative lg:w-[90%] w-[95%] mx-auto">
            <div class=" w-full mx-auto flex flex-col gap-10 lg:justify-between px-2 lg:px-8 h-full">
                <div class="space-y-4">
                    <div class="flex items-center justify-between md:gap-14">
                        <p class="font-semibold lg:text-xl text-sm cursor-pointer md:text-lg" :class="mission ? 'bg-[#0D0D3F] text-white p-2 rounded-lg' : 'text-[#0D0D3F]'" @click="missionTrue">Our missions</p>
                        <p class="font-semibold lg:text-xl text-sm cursor-pointer md:text-lg" :class="vision ? 'bg-[#0D0D3F] text-white p-2 rounded-lg' : 'text-[#0D0D3F]'" @click="visionTrue">Our visions</p>
                        <p class="font-semibold lg:text-xl text-sm cursor-pointer md:text-lg" :class="company ? 'bg-[#0D0D3F] text-white p-2 rounded-lg' : 'text-[#0D0D3F]'" @click="companyTrue">About company</p>
                    </div>
                    <div class="bg-[#DBD9E5] rounded-xl w-full h-[2px]"></div>
                    <!-- <div class="bg-[#0D0D3F] w-[33.33%] md:w-[120px] h-full rounded-xl transition-all duration-600" :class="vision ? 'md:translate-x-[265px] translate-x-[130px]' : company ? 'md:translate-x-[510px] translate-x-[290px] w-[100px] md:w-[170px]' : 'translate-x-0'"></div> -->
                </div>
                <div>
                    <p v-if="mission" class="text-[#AEAEB4] text-[12px] md:text-base">Growth Horizon's mission is to revolutionize the way people interact with online content. We're dedicated to ensuring that users are fairly rewarded for their engagement, while advertisers achieve their audience reach objectives effectively and ethically</p>
                    <p v-else-if="vision" class="text-[#AEAEB4] text-[12px] md:text-base">At Growth Horizon, Our Vision is to empower users to turn their online presence into a valuable asset, while providing businesses with a trusted platform to promote and grow.</p>
                    <p v-else class="text-[#AEAEB4] text-[12px] md:text-base">We are committed to transparency, trust, and professionalism in all our dealings. Our goal is to provide a secure and rewarding environment for users and advertisers alike</p>
                </div>
                <div class="flex lg:flex-row flex-col gap-10 md:justify-between">
                    <img class="rounded-lg" src="../assets/small-image.webp" alt="">
                    <div class="space-y-2 flex flex-col justify-between">
                        <div class="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#27B397" d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4l4.25 4.25ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
                            <p class="text-[#0D0D3F] font-semibold lg:text-base text-sm">Creating opportunities for users.</p>
                        </div>

                        <div class="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#27B397" d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4l4.25 4.25ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
                            <p class="text-[#0D0D3F] font-semibold lg:text-base text-sm">Dedicated to trust and professionalism.</p>
                        </div>

                        <div class="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#27B397" d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4l4.25 4.25ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
                            <p class="text-[#0D0D3F] font-semibold lg:text-base text-sm">Digital engagement to real financial growth.</p>
                        </div>

                        <div class="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#27B397" d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4l4.25 4.25ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
                            <p class="text-[#0D0D3F] font-semibold lg:text-base text-sm">Join us to redefine digital earnings</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src="../assets/vision-man.webp" class="w-[700px] h-full rounded-lg max-[1284px]:hidden" alt="">
            </div>
        </div>
    </div>

</template>

<style scoped>
.img{
    transform: rotate(180deg);
}
</style>

<script>
 import { defineComponent } from 'vue'
 export default defineComponent({
    data(){
        return{
            mission: true,
            vision: false,
            company: false
        }
    },
    methods:{
        missionTrue(){
            this.mission=true, this.vision=false, this.company=false
        },
        visionTrue(){
            this.mission=false, this.vision=true, this.company=false
        },
        companyTrue(){
            this.mission=false, this.vision=false, this.company=true
        }
    }
 })   
 </script>