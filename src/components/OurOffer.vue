<template>
    <div data-aos="fade-up" data-aos-duration="800" data-aos-offset="200"  data-aos-easing="ease-in-out" class="flex flex-col gap-14 items-center py-[100px]">
        <div class="space-y-2 flex flex-col items-center">
                <div class="space-y-[2px] flex flex-col items-center">
                    <img src="../assets/logo.svg" width="20" alt="logo">
                    <p class="text-[#7F7F88] uppercase font-semibold">What we're offering</p>
                </div>
                <p class="text-[#0D0D3F] font-bold text-5xl leading-20 max-[499px]:text-3xl text-center">Providing all the services <br> you need</p>
        </div>

        <div class="grid grid-cols-3 max-[1180px]:grid-cols-2 gap-8 max-[1074px]:px-[50px] max-[600px]:px-[20px] max-[460px]:grid-cols-1 px-[100px]">
            <div class="background h-[294px] relative">
                <div class="rounded-xl w-fit overflow-hidden"><img class="image-cover transition-all duration-500" src="../assets/offer-1.webp" alt=""></div>
                <div class="icon relative z-[500] bottom-[63px] transition-all duration-500 left-8 rounded-md bg-[#28B79A] p-2 w-fit"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" d="M6 19h3v-5q0-.425.288-.713T10 13h4q.425 0 .713.288T15 14v5h3v-9l-6-4.5L6 10v9Zm-2 0v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4q-.425 0-.713-.288T13 20v-5h-2v5q0 .425-.288.713T10 21H6q-.825 0-1.413-.588T4 19Zm8-6.75Z"/></svg></div>
                <div class="bg-content shadow-xl transition-all duration-500  bg-white relative bottom-[90px]  rounded-xl w-full p-8 space-y-[10px]">
                    <p class="content  transition-all duration-500 text-[#0D0D3F] text-xl font-bold">Content Promotion</p>
                    <p class="content  transition-all duration-500 text-[#A48188]">Boost your reach with our effective content promotion strategies.</p>
                </div>
            </div>

            <div class="background h-[294px] relative">
                <div class="rounded-xl w-fit overflow-hidden"><img class="image-cover transition-all duration-500" src="../assets/offer-1.webp" alt=""></div>
                <div class="icon relative z-[500] bottom-[63px] transition-all duration-500 left-8 rounded-md bg-[#28B79A] p-2 w-fit"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" d="M6 19h3v-5q0-.425.288-.713T10 13h4q.425 0 .713.288T15 14v5h3v-9l-6-4.5L6 10v9Zm-2 0v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4q-.425 0-.713-.288T13 20v-5h-2v5q0 .425-.288.713T10 21H6q-.825 0-1.413-.588T4 19Zm8-6.75Z"/></svg></div>
                <div class="bg-content shadow-xl transition-all duration-500  bg-white relative bottom-[90px]  rounded-xl w-full p-8 space-y-[10px]">
                    <p class="content  transition-all duration-500 text-[#0D0D3F] text-xl font-bold">User Engagement</p>
                    <p class="content  transition-all duration-500 text-[#A48188]">Engage and grow your audience through authentic user interactions.</p>
                </div>
            </div>

            <div class="background h-[294px] relative">
                <div class="rounded-xl w-fit overflow-hidden"><img class="image-cover transition-all duration-500" src="../assets/offer-1.webp" alt=""></div>
                <div class="icon relative z-[500] bottom-[63px] transition-all duration-500 left-8 rounded-md bg-[#28B79A] p-2 w-fit"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" d="M6 19h3v-5q0-.425.288-.713T10 13h4q.425 0 .713.288T15 14v5h3v-9l-6-4.5L6 10v9Zm-2 0v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4q-.425 0-.713-.288T13 20v-5h-2v5q0 .425-.288.713T10 21H6q-.825 0-1.413-.588T4 19Zm8-6.75Z"/></svg></div>
                <div class="bg-content shadow-xl transition-all duration-500  bg-white relative bottom-[90px]  rounded-xl w-full p-8 space-y-[10px]">
                    <p class="content  transition-all duration-500 text-[#0D0D3F] text-xl font-bold">Campaign Management</p>
                    <p class="content  transition-all duration-500 text-[#A48188]">Effortlessly create, manage, and optimize your advertising campaigns with us.</p>
                </div>
            </div>

            <div class="background h-[294px] relative">
                <div class="rounded-xl w-fit overflow-hidden"><img class="image-cover transition-all duration-500" src="../assets/offer-1.webp" alt=""></div>
                <div class="icon relative z-[500] bottom-[63px] transition-all duration-500 left-8 rounded-md bg-[#28B79A] p-2 w-fit"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" d="M6 19h3v-5q0-.425.288-.713T10 13h4q.425 0 .713.288T15 14v5h3v-9l-6-4.5L6 10v9Zm-2 0v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4q-.425 0-.713-.288T13 20v-5h-2v5q0 .425-.288.713T10 21H6q-.825 0-1.413-.588T4 19Zm8-6.75Z"/></svg></div>
                <div class="bg-content shadow-xl transition-all duration-500  bg-white relative bottom-[90px]  rounded-xl w-full p-8 space-y-[10px]">
                    <p class="content  transition-all duration-500 text-[#0D0D3F] text-xl font-bold">User Earnings</p>
                    <p class="content  transition-all duration-500 text-[#A48188]">Earn real income by actively participating in our engaging content promotions</p>
                </div>
            </div>

            <div class="background h-[294px] relative">
                <div class="rounded-xl w-fit overflow-hidden"><img class="image-cover transition-all duration-500" src="../assets/offer-1.webp" alt=""></div>
                <div class="icon relative z-[500] bottom-[63px] transition-all duration-500 left-8 rounded-md bg-[#28B79A] p-2 w-fit"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" d="M6 19h3v-5q0-.425.288-.713T10 13h4q.425 0 .713.288T15 14v5h3v-9l-6-4.5L6 10v9Zm-2 0v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4q-.425 0-.713-.288T13 20v-5h-2v5q0 .425-.288.713T10 21H6q-.825 0-1.413-.588T4 19Zm8-6.75Z"/></svg></div>
                <div class="bg-content shadow-xl transition-all duration-500  bg-white relative bottom-[90px]  rounded-xl w-full p-8 space-y-[10px]">
                    <p class="content  transition-all duration-500 text-[#0D0D3F] text-xl font-bold">Advertising Solutions</p>
                    <p class="content  transition-all duration-500 text-[#A48188]">Connect with a diverse user base for impactful and targeted advertising.</p>
                </div>
            </div>

            <div class="background h-[294px] relative h-[294px]">
                <div class="rounded-xl w-fit overflow-hidden"><img class="image-cover transition-all duration-500" src="../assets/offer-1.webp" alt=""></div>
                <div class="icon relative z-[500] bottom-[63px] transition-all duration-500 left-8 rounded-md bg-[#28B79A] p-2 w-fit"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" d="M6 19h3v-5q0-.425.288-.713T10 13h4q.425 0 .713.288T15 14v5h3v-9l-6-4.5L6 10v9Zm-2 0v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4q-.425 0-.713-.288T13 20v-5h-2v5q0 .425-.288.713T10 21H6q-.825 0-1.413-.588T4 19Zm8-6.75Z"/></svg></div>
                <div class="bg-content shadow-xl transition-all duration-500  bg-white relative bottom-[90px]  rounded-xl w-full p-8 space-y-[10px]">
                    <p class="content  transition-all duration-500 text-[#0D0D3F] text-xl font-bold">Flexible Earning</p>
                    <p class="content  transition-all duration-500 text-[#A48188]">Enjoy flexible payment options and timely withdrawals for your earnings.</p>
                </div>
            </div>

            <div class="background h-[294px] relative h-[294px]">
                <div class="rounded-xl w-fit overflow-hidden"><img class="image-cover transition-all duration-500" src="../assets/offer-1.webp" alt=""></div>
                <div class="icon relative z-[500] bottom-[63px] transition-all duration-500 left-8 rounded-md bg-[#28B79A] p-2 w-fit"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" d="M6 19h3v-5q0-.425.288-.713T10 13h4q.425 0 .713.288T15 14v5h3v-9l-6-4.5L6 10v9Zm-2 0v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4q-.425 0-.713-.288T13 20v-5h-2v5q0 .425-.288.713T10 21H6q-.825 0-1.413-.588T4 19Zm8-6.75Z"/></svg></div>
                <div class="bg-content shadow-xl transition-all duration-500  bg-white relative bottom-[90px]  rounded-xl w-full p-8 space-y-[10px]">
                    <p class="content  transition-all duration-500 text-[#0D0D3F] text-xl font-bold">User Support</p>
                    <p class="content  transition-all duration-500 text-[#A48188]">Our dedicated support team is here to assist you every step of the way.</p>
                </div>
            </div>

            <div class="relative overflow-hidden bg-[url(../assets/news04-370x320.webp)] bg-cover bg-center h-[294px] max-[560px]:h-[420px] max-[460px]:col-span-1 rounded-xl col-span-2">
                <div class="absolute h-full bg-[#0D0D3F] opacity-75 top-0 w-full"></div>
                <div class="absolute h-full flex flex-col justify-between px-8 py-10">
                    <div class="">
                        <div class="flex h-fit flex-row max-[560px]:items-start max-[560px]:flex-col items-center max-[560px]:gap-0 gap-10">
                            <svg class="max-[560px]:w-[70px]" xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24"><path fill="white" d="M12.025 21.025q-3.425 0-5.725-2.475T4 12.725V5.5q0-.825.588-1.413Q5.175 3.5 6 3.5h12q.825 0 1.413.587Q20 4.675 20 5.5v1.75q0 .4-.15.762q-.15.363-.425.638l-5.775 5.775q-.575.575-1.412.575q-.838 0-1.413-.575L8 11.6l1.4-1.425L12.25 13L18 7.25V5.5H6v7.3q0 2.55 1.725 4.375Q9.45 19 12.025 19q2.5 0 4.237-1.75Q18 15.5 18 13h2q0 3.35-2.312 5.688q-2.313 2.337-5.663 2.337Z"/></svg>
                            <p class="text-3xl text-white font-bold max-[411px]:text-2xl max-[343px]:text-xl">Compare & earn in the right way right away</p>
                        </div>
                        <p class="text-[#B2B3C4] text-lg">Trust and Professionalism in our Services</p>
                    </div>
                    <router-link to="/signup"><p class="bg-[#28B79A] text-white px-8 py-2 w-fit rounded-md hover:bg-white hover:text-[#0D0D3F] transition-all cursor-pointer duration-700 font-semibold">Get Started</p></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.background:hover .bg-content{
    background-color: #5E68BB;
    transition: all 1s;
    bottom: 95px;
}
.background:hover .content{
    color: white;
    transition: all 1s;
}
.background:hover .image-cover{
    transform: scale(1.1 );
    transition: all 1s;
}
.background:hover .icon{
    bottom: 68px;
    transition: all 1s;
}
.background.background:hover .icon{
    animation: ping 500ms cubic-bezier(0, 0, 0.2, 1) alternate;
}
@keyframes ping {
  75%, 100% {
    transform: scale(1.2);
    opacity: 0.6;
  }
}
</style>