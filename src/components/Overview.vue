<script>
import { defineComponent } from 'vue';
export default defineComponent({
    data(){
        return{
            copied: false,
            contentAvailable: true
        }
    },
    methods: {
        copyText(){
            this.copied = true;
            const textToCopy = document.getElementById('textToCopy').textContent;
            const textArea = document.createElement('textarea');
            textArea.value= textToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);

            setTimeout(()=>{
                this.copied = false;
            },2000 );
        }
    }
})
</script>
<template>
    <section class="mt-[7rem]">
        <header class="text-[#0D0D3F] p-14 text-5xl border-b max-[768px]:px-4">
            <p>Overview</p>
        </header>
        <main class="py-10 px-14 bg-gray-100 max-[768px]:px-4">
            <div class="text-gray-600 mb-10">
                <p class="text-[#0D0D3F] text-2xl mb-3 font-semibold">Explore Content Categories</p>
                <p>At the heart of your earnings journey is engagement. Interact with our carefully curated content, share it, and see your earnings grow in real-time.</p>
            </div>
            <div class="w-full bg-white rounded-md shadow-xl" v-if="contentAvailable">
                <p class="rounded-t-md bg-gray-200 w-full p-1 px-6  text-gray-700">Monday, 25th September, 2023</p>

                <!-- content-1</p> -->
                <div class="grid grid-cols-2 px-6 py-8 gap-5 max-[941px]:grid-cols-1">
                    <!-- image -->
                    <div class="h-full">
                        <img class="rounded-md h-full" src="../assets/ads/ad-dervac.jpg" alt="dervac">
                    </div>
                    <!-- texts -->
                    <div>
                        <div class="flex justify-end mb-4">
                            <div @click="copyText" class="hover:bg-gray-100 cursor-pointer flex items-center gap-2 border-2 border-gray-300 w-fit p-1 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M7 18V2h13v16H7Zm2-2h9V4H9v12Zm-6 6V6h2v14h11v2H3Zm6-6V4v12Z"/></svg>
                                <p>COPY</p>
                                <p v-if="copied" class="fixed font-semibold top-4 left-[50%] border border-gray-500 text-[#0D0D3F] bg-white rounded-md px-5 p-2">Copied</p>
                            </div>
                        </div>

                        <div class="text-gray-600 flex flex-col gap-2" id="textToCopy">
                            <p>Exciting News: 🚀 Announcing Our Front-End Development Class! 🚀 </p>
                            <p> Are you ready to dive headfirst into the exciting world of Front-End Development? Look no further! Dervac's Front-End Development Class has just kicked off, and we want YOU to be a part of it.</p>
                            <p>🗓 Class Schedule:</p>
                            <p>📅 Every Monday, Tuesday, and Wednesday</p>
                            <p> ⏰ 9:00 AM - 2:00 PM</p>
                            <p> 📍 Location: Hub: 65, Shipeolu Street, Palmgroove, Lagos</p>
                            <p>👩‍💼 Who Should Attend? 👨‍💼</p>
                            <p>Aspiring front-end developers</p>
                            <p>Tech enthusiasts and beginners looking to start a rewarding career</p>
                            <p>Professionals aiming to enhance their skills</p>
                            <p>Designers wanting to bring their concepts to life</p>
                            <p> What You'll Learn:</p>
                            <p>Master HTML, CSS, and JavaScript</p>
                            <p>Create responsive, user-friendly websites</p>
                            <p> Hands-on experience with modern web development tools</p>
                            <p>UI/UX design principles</p>
                            <p>Ready to reshape the web with your front-end skills? Don't miss out on this incredible opportunity! Secure your spot today.</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- inavailable content -->
            <div v-else class="w-full bg-white text=[#0D0D3F] rounded-md shadow-xl h-[400px] flex items-center justify-center">
                <p>Content is inavailable. Check back later</p>
            </div>
        </main>
    </section>
</template>