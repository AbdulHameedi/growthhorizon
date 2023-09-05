<template>
    <header class="">
        <div class="bg-[#0D0D3F] hidden lg:flex items-center justify-between py-2 px-[5.5rem] max-[1312px]:px-[1rem]">
            <div class="flex items-center gap-8">
                <div class="flex gap-[4px] items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#27B296" d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Z"/></svg>
                    <p class="text-white font-semibold">30 Commercial Road Fratton, Australia</p>
                </div>
                <div class="flex gap-[4px] items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#27B296" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.313t.1-.412q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037Z"/></svg>
                    <p class="text-white font-semibold"><a href="mailto:luqmanola60@gmail.com">needourhelp@gmail.com</a></p>
                </div>
            </div>

            <div class="flex gap-4">
                <div class="flex gap-4">
                    <p class="cursor-pointer text-white font-semibold"><a href="#">Make a claim</a></p>
                    <p class="cursor-pointer text-white font-semibold"><a href="#">FAQs</a></p>
                    <p class="cursor-pointer text-white font-semibold"><a href="#">About</a></p>
                </div>

                <div class="flex border-l px-2 items-center gap-4">
                  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="white" d="M8 2H1l8.26 11.014L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886L8 2Zm9 18L5 4h2l12 16h-2Z"/></svg></a>
                  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="white" d="M13.001 19.938a8.001 8.001 0 0 0-1-15.938a8 8 0 0 0-1 15.938V14h-2v-2h2v-1.654c0-1.337.14-1.822.4-2.311A2.725 2.725 0 0 1 12.537 6.9c.382-.205.857-.328 1.687-.381c.329-.021.755.005 1.278.08v1.9h-.5c-.917 0-1.296.043-1.522.164a.728.728 0 0 0-.314.314c-.12.226-.164.45-.164 1.368V12h2.5l-.5 2h-2v5.938Zm-1 2.062c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10Z"/></svg></a>
                  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="white" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"/></svg></a>
                  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="white" d="M5 3c0 1.062-.71 1.976-2.001 1.976C1.784 4.976 1 4.114 1 3.052C1 1.962 1.76 1 3 1s1.976.91 2 2zM1 19V6h4v13H1zm6-8.556c0-1.545-.051-2.836-.102-3.951h3.594l.178 1.723h.076c.506-.811 1.746-2 3.822-2C17.1 6.216 19 7.911 19 11.558V19h-4v-6.861c0-1.594-.607-2.81-2-2.81c-1.062 0-1.594.86-1.873 1.569c-.102.254-.127.608-.127.963V19H7v-8.556z"/></svg></a>
                </div>
            </div>
        </div>

        <div class="px-[5.5rem] max-[1312px]:px-[1rem] flex items-end justify-between py-8">
            <div class="flex flex-col items-center w-fit">
                <img src="../assets/logo.svg" width="25" alt="Logo">
                <p class="text-[#0D0D3F] text-xl font-bold">GrowthHorizon</p>
            </div>
    
            <nav class="lg:flex lg:static fixed top-0 lg:bg-transparent bg-[#0D0D3F] lg:w-fit w-[90%] lg:h-fit h-screen lg:p-0 md:p-16 p-6 gap-6 space-y-6 lg:overflow-hidden overflow-y-auto z-[999] transition-right duration-700" :class="!showNavs ? 'right-[-1500px]' : 'right-0'">
                <div @click="showNavs = false" class="lg:hidden block absolute top-6 right-6 w-fit cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="white" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/></svg>
                </div>

                <div class="lg:hidden flex flex-col items-center w-fit">
                    <img src="../assets/logo.svg" width="25" alt="Logo">
                    <p class="text-white text-xl font-bold">GrowthHorizon</p>
                </div>

                <p @click="HomeActive()" class="lg:border-none lg:p-0 py-2 border-b border-[#7F7F88] font-semibold cursor-pointer text-lg lg:hover:text-[#0D0D3F]" :class="onHomeActive ? 'lg:text-[#0D0D3F] text-white' : 'text-white lg:text-[#7F7F88]'">Home</p>
  
                <p @click="AboutActive()" class="lg:border-none lg:p-0 py-2 border-b border-[#7F7F88] font-semibold cursor-pointer text-lg lg:hover:text-[#0D0D3F]" :class="onAboutUsActive ? 'lg:text-[#0D0D3F] text-white' : 'text-white lg:text-[#7F7F88]'">About us</p>

                <p @click="NewsActive()" class="lg:border-none lg:p-0 py-2 border-b border-[#7F7F88] font-semibold cursor-pointer text-lg lg:hover:text-[#0D0D3F]" :class="onNewsActive ? 'lg:text-[#0D0D3F] text-white' : 'text-white lg:text-[#7F7F88]'">News</p>

                <p @click="FaqsActive()" class="lg:border-none lg:p-0 py-2 border-b border-[#7F7F88] font-semibold cursor-pointer text-lg lg:hover:text-[#0D0D3F]" :class="onFaqsActive ? 'lg:text-[#0D0D3F] text-white' : 'text-white lg:text-[#7F7F88]'">Faqs</p>

                <p @click="TestimonialsActive()" class="lg:border-none lg:p-0 py-2 border-b border-[#7F7F88] font-semibold cursor-pointer text-lg lg:hover:text-[#0D0D3F]" :class="onTestimonialActive ? 'lg:text-[#0D0D3F] text-white' : 'text-white lg:text-[#7F7F88]'">Testimonials</p>

                <p @click="GetInTouchActive()" class="lg:border-none lg:p-0 py-2 border-b border-[#7F7F88] font-semibold cursor-pointer text-lg lg:hover:text-[#0D0D3F]" :class="onGetInTouchActive ? 'lg:text-[#0D0D3F] text-white' : 'text-white lg:text-[#7F7F88]'">Get in touch</p>

                <div class="lg:hidden flex gap-4 items-center">
                    <router-link to="/signup"><p class="cursor-pointer border hover:border-[#0D0D3F] hover:bg-white hover:text-[#0D0D3F] py-2 md:px-6 px-4 rounded-[10px] font-semibold bg-[#0D0D3F] text-white">Sign up</p></router-link>
                    <p class="cursor-pointer border hover:border-[#0D0D3F] hover:bg-white hover:text-[#0D0D3F] py-2 md:px-6 px-4 rounded-[10px] font-semibold bg-[#0D0D3F] text-white">Sign in</p>
                </div>

                <p class="lg:hidden block text-white font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum recusandae fuga perspiciatis enim consequuntur magni,</p>

                <div class="lg:hidden flex items-center gap-2 text-white">
                  <p class="bg-[#181855] rounded-[50%] p-3 hover:bg-[#28B79A] hover:scale-x-[-1]"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M8 2H1l8.26 11.014L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886L8 2Zm9 18L5 4h2l12 16h-2Z"/></svg></p>
                  <p class="bg-[#181855] rounded-[50%] p-3 hover:bg-[#28B79A] hover:scale-x-[-1]"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M13.001 19.938a8.001 8.001 0 0 0-1-15.938a8 8 0 0 0-1 15.938V14h-2v-2h2v-1.654c0-1.337.14-1.822.4-2.311A2.725 2.725 0 0 1 12.537 6.9c.382-.205.857-.328 1.687-.381c.329-.021.755.005 1.278.08v1.9h-.5c-.917 0-1.296.043-1.522.164a.728.728 0 0 0-.314.314c-.12.226-.164.45-.164 1.368V12h2.5l-.5 2h-2v5.938Zm-1 2.062c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10Z"/></svg></p>
                  <p class="bg-[#181855] rounded-[50%] p-3 hover:bg-[#28B79A] hover:scale-x-[-1]"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"/></svg></p>
                  <p class="bg-[#181855] rounded-[50%] p-3 hover:bg-[#28B79A] hover:scale-x-[-1]"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="currentColor" d="M5 3c0 1.062-.71 1.976-2.001 1.976C1.784 4.976 1 4.114 1 3.052C1 1.962 1.76 1 3 1s1.976.91 2 2zM1 19V6h4v13H1zm6-8.556c0-1.545-.051-2.836-.102-3.951h3.594l.178 1.723h.076c.506-.811 1.746-2 3.822-2C17.1 6.216 19 7.911 19 11.558V19h-4v-6.861c0-1.594-.607-2.81-2-2.81c-1.062 0-1.594.86-1.873 1.569c-.102.254-.127.608-.127.963V19H7v-8.556z"/></svg></p>
                </div>
            </nav>
    
            <div class="hidden md:flex gap-4 items-center">
                <router-link to="/signup"><p class="cursor-pointer border hover:border-[#0D0D3F] hover:bg-transparent hover:text-[#0D0D3F] py-2 px-6 rounded-[10px] font-semibold bg-[#0D0D3F] text-white">Sign up</p></router-link>
                <p class="cursor-pointer border border-[#0D0D3F] py-2 px-6 rounded-[10px] font-semibold hover:bg-[#0D0D3F] hover:text-white">Sign in</p>
            </div>
            <!-- hamburger icon -->
            <div @click="showNavs = true" class="lg:hidden block cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"/></svg>
            </div>
               
        </div>
    </header>


    <!-- cover -->
    <div v-show="showNavs" @click="showNavs = false" class="lg:hidden w-full h-screen bg-black opacity-50 fixed top-0 z-[900]"></div>
</template>

<script>
    import { defineComponent } from 'vue';
    import store from '../stores/store'
    export default defineComponent({
        data(){
            return{
                // showPagesDropdown: store().$state.showItems,
                onHomeActive: true,
                onAboutUsActive: store().$state.showItems,
                onNewsActive: store().$state.showItems,
                onFaqsActive: store().$state.showItems,
                onTestimonialActive: store().$state.showItems,
                onGetInTouchActive: store().$state.showItems,
                showNavs: store().$state.showItems,
            }
        },
        methods:{
            HomeActive(){
                this.onHomeActive = true
                this.onAboutUsActive = false
                this.onOurTeamActive = false
                this.onNewsActive = false
                this.onFaqsActive = false
                this.onTestimonialActive = false
                this.onGetInTouchActive = false
                this.showNavs = false
            },
            AboutActive(){
                this.onHomeActive = false
                this.onAboutUsActive = true
                this.onOurTeamActive = false
                this.onNewsActive = false
                this.onFaqsActive = false
                this.onTestimonialActive = false
                this.onGetInTouchActive = false
                this.showNavs = false
            },
            NewsActive(){
                this.onHomeActive = false
                this.onAboutUsActive = false
                this.onNewsActive = true
                this.onFaqsActive = false
                this.onTestimonialActive = false
                this.onGetInTouchActive = false
                this.showNavs = false
            },
            FaqsActive(){
                this.onHomeActive = false
                this.onAboutUsActive = false
                this.onNewsActive = false
                this.onFaqsActive = true
                this.onTestimonialActive = false
                this.onGetInTouchActive = false
                this.showNavs = false
            },
            TestimonialsActive(){
                this.onHomeActive = false
                this.onAboutUsActive = false
                this.onNewsActive = false
                this.onFaqsActive = false
                this.onTestimonialActive = true
                this.onGetInTouchActive = false
                this.showNavs = false
            },
            GetInTouchActive(){
                this.onHomeActive = false
                this.onAboutUsActive = false
                this.onNewsActive = false
                this.onFaqsActive = false
                this.onTestimonialActive = false
                this.onGetInTouchActive = true

this.showNavs = false            }
        }
    })
</script>

<style scoped>
/* .dropdown-contents{
    display: none;
}
.dropdown:hover .dropdown-contents{
    display: block !important;
} */

.carousel{
    /* width: 200%; */
    /* display: flex; */
}
</style>