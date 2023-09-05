<template>
    <div class="carousel">
        <div class=" h-screen">
            <div class="relative" v-for="(section, index) in heroSection">
               <div v-show="currentIndex === index" class="carousel-item h-screen bg-center bg-cover lg:px-16 md:px-8 px-2 flex flex-col gap-6 justify-center"  :class="currentIndex === 0 ? 'bg-[url(../assets/bg-image-1.jpeg)]' : currentIndex === 1 ? 'bg-[url(../assets/bg-image-2.jpeg)]' : 'bg-white'">
                 <div class="space-y-2">
                    <p class="text-white font-semibold lg:text-6xl md:text-4xl text-md bg-[#2E3BA6] p-4 rounded-xl w-fit">{{ section.firstHeaderContent }}</p>
                    <p class="text-white font-semibold lg:text-6xl md:text-4xl text-md bg-[#2E3BA6] p-4 rounded-xl w-fit">{{ section.lastHeaderContent }}</p>
                 </div>
                 <p class="text-white font-semibold lg:text-xl md:text-lg text-md">{{ section.paragraph }}</p>
                 <p class="bg-white text[#0D0D3F] px-4 py-2 md:px-8 md:py-4 rounded-xl w-fit font-semibold hover:bg-[#0D0D3F] hover:text-white transition-bg duration-700 cursor-pointer">{{ section.actionButton }}</p>
               </div>
               <!-- <div class="absolute bg-black top-0 h-screen w-full opacity-50"></div> -->
               
            </div>

            
            <div class="flex flex-col gap-6 absolute top-60 md:right-18 right-14 lg:right-20">
                <button class=" lg:opacity-50 opacity-75 hover:opacity-100 transition-opacity duration-700 bg-white rounded-[50%] p-2" @click="prevSlide"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#0D0D3F" d="m7.85 13l2.85 2.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L4.7 12.7q-.3-.3-.3-.7t.3-.7l4.575-4.575q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7L7.85 11H19q.425 0 .713.288T20 12q0 .425-.288.713T19 13H7.85Z"/></svg></button>
                <button class=" lg:opacity-50 opacity-75 hover:opacity-100 transition-opacity duration-700 bg-white rounded-[50%] p-2" @click="nextSlide"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#0D0D3F" d="M16.15 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.313t.712.288L19.3 11.3q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7L16.15 13Z"/></svg></button>
            </div>
        </div>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 w-fit mx-auto gap-6">
          <div class="about-summary cursor-pointer bg-[url(../assets/about-summary-1.webp)] bg-center bg-cover h-[260px] w-[370px] mt-[-30px] mx-auto relative overflow-hidden rounded-lg">



          <div class="green-ball z-[300] absolute bg-[#28AA9A] opacity-[0.9] w-[200px] h-[200px] bottom-[-120px] left-[-90px] rounded-[50%] transition-all duration-700">
          
          </div>
          <div class="relative blue-bg transition-all duration-700 left-0 right-0 w-[300px] bottom-[-100px] h-[300px] mx-auto w-full">
            <div class="absolute blue-bg transition-all duration-700 bg-[#3E359A] z-[100] opacity-[0.8] h-full  left-0 right-0 mx-auto rounded-[50%]"></div>
            <!-- arrow -->
            <div class="arrow bg-white rounded-[50%] h-fit absolute right-8 z-[150] p-4 opacity-75"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#0D0D3F" d="M16.15 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.313t.712.288L19.3 11.3q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7L16.15 13Z"/></svg></div>
            <div class="texts absolute space-y-4 top-[70px] left-0 right-0 mx-auto w-[200px] text-center z-[500]">
              <div class="flex items-center gap-6">
                <svg class="summary-text hidden" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="white" d="M8 2H1l8.26 11.014L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886L8 2Zm9 18L5 4h2l12 16h-2Z"/></svg>
                <p class="text-white text-xl font-bold">Expand your Audience</p>
              </div>
              <p class="summary-text text-gray-300 hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, accusamus.</p>
            </div>
          </div>
          <!-- <div class="blue-bg bg-[#3E359A] mx-auto opacity-[0.8] w-[300px] h-[300px] rounded-[50%]">
          
          </div> -->
          </div>

          <div class="about-summary cursor-pointer bg-[url(../assets/about-summary-2.jpeg)] bg-center bg-cover h-[260px] w-[370px] md:mt-[-30px] mx-auto relative overflow-hidden rounded-lg">



          <div class="green-ball z-[300] absolute bg-[#28AA9A] opacity-[0.9] w-[200px] h-[200px] bottom-[-120px] left-[-90px] rounded-[50%] transition-all duration-700">
          
          </div>
          <div class="relative blue-bg transition-all duration-700 left-0 right-0 w-[300px] bottom-[-100px] h-[300px] mx-auto w-full">
            <div class="absolute blue-bg transition-all duration-700 bg-[#3E359A] z-[100] opacity-[0.8] h-full  left-0 right-0 mx-auto rounded-[50%]"></div>
            <!-- arrow -->
            <div class="arrow bg-white rounded-[50%] h-fit absolute right-8 z-[150] p-4 opacity-75"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#0D0D3F" d="M16.15 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.313t.712.288L19.3 11.3q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7L16.15 13Z"/></svg></div>
            <div class="texts absolute space-y-4 top-[70px] left-0 right-0 mx-auto w-[200px] text-center z-[500]">
              <div class="flex items-center gap-6">
                <svg class="summary-text hidden" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="white" d="M8 2H1l8.26 11.014L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886L8 2Zm9 18L5 4h2l12 16h-2Z"/></svg>
                <p class="text-white text-xl font-bold">Save your Time and money</p>
              </div>
              <p class="summary-text text-gray-300 hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, accusamus.</p>
            </div>
          </div>
          <!-- <div class="blue-bg bg-[#3E359A] mx-auto opacity-[0.8] w-[300px] h-[300px] rounded-[50%]">
          
          </div> -->
          </div>

          <div class="about-summary cursor-pointer bg-[url(../assets/about-summary-3.webp)] bg-center bg-cover h-[260px] w-[370px] lg:mt-[-30px] mx-auto relative overflow-hidden rounded-lg">



          <div class="green-ball z-[300] absolute bg-[#28AA9A] opacity-[0.9] w-[200px] h-[200px] bottom-[-120px] left-[-90px] rounded-[50%] transition-all duration-700">
          
          </div>
          <div class="relative blue-bg transition-all duration-700 left-0 right-0 w-[300px] bottom-[-100px] h-[300px] mx-auto w-full">
            <div class="absolute blue-bg transition-all duration-700 bg-[#3E359A] z-[100] opacity-[0.8] h-full  left-0 right-0 mx-auto rounded-[50%]"></div>
            <!-- arrow -->
            <div class="arrow bg-white rounded-[50%] h-fit absolute right-8 z-[150] p-4 opacity-75"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#0D0D3F" d="M16.15 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.313t.712.288L19.3 11.3q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7L16.15 13Z"/></svg></div>
            <div class="texts absolute space-y-4 top-[70px] left-0 right-0 mx-auto w-[200px] text-center z-[500]">
              <div class="flex items-center gap-6">
                <svg class="summary-text hidden" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="white" d="M8 2H1l8.26 11.014L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886L8 2Zm9 18L5 4h2l12 16h-2Z"/></svg>
                <p class="text-white text-xl font-bold">Earn from home</p>
              </div>
              <p class="summary-text text-gray-300 hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, accusamus.</p>
            </div>
          </div>
          <!-- <div class="blue-bg bg-[#3E359A] mx-auto opacity-[0.8] w-[300px] h-[300px] rounded-[50%]">
          
          </div> -->
          </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    // import store from '../store/store'

    export default defineComponent({
        data(){
            return{
                heroSection: [
                    {
                        firstHeaderContent: 'Enhance your',
                        lastHeaderContent: 'Audience / Subscribers / Customers',
                        paragraph: 'We are trusted and professional earning company',
                        actionButton: "Let's get started"
                    },
                    {
                        firstHeaderContent: 'Amplify your',
                        lastHeaderContent: 'Earnings',  
                        paragraph: 'We are trusted and professional  earning company',
                        actionButton: "Let's get started"
                    }
                ],
                currentIndex : 0,
                prevLightArrow : false,
                nextLightArrow: true
            }
        },

        mounted(){
            console.log(this.currentIndex)
        },
        methods: {
        prevSlide() {
          this.currentIndex = (this.currentIndex - 1 + this.heroSection.length) % this.heroSection.length;
          console.log(this.currentIndex)
        },
        nextSlide() {
          this.currentIndex = (this.currentIndex + 1) % this.heroSection.length; 
          console.log(this.currentIndex)
        },
        }
    })
</script>

<style scoped>

.carousel {
  position: relative;
  overflow: hidden;
}
.relative {
  display: flex;
  transition: transform 0.5s ease;
}
.carousel-item {
  flex: 0 0 100%;
  transition: all 3s ease;

}
.about-summary:hover .green-ball{
  bottom: -200px;
  left: -200px;
  transition: all 400ms ease;
}
.about-summary:hover .blue-bg{
  width: 100%;
  height: 100%;
  bottom: 0;
  border-radius: 0px;
  transition: all 400ms ease-in-out;
}
.about-summary:hover .summary-text{
  display: block;
}
.about-summary:hover .arrow{
  display: none;
}
.about-summary:hover .texts{
  top: 20px;
}
</style>