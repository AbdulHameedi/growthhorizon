<template>
    <div class="carousel">
        <div class="grid lg:grid-cols-3 md:grid-cols-2 w-fit mx-auto gap-6 border-b pb-20">
          <div class="about-summary cursor-pointer bg-[url(../assets/about-summary-1.webp)] bg-center bg-cover h-[260px] w-[370px] mt-[-30px] mx-auto relative overflow-hidden rounded-lg">



          <div class="green-ball z-[300] absolute bg-[#28AA9A] opacity-[0.9] w-[200px] h-[200px] bottom-[-120px] left-[-90px] rounded-[50%] transition-all duration-700">
          
          </div>
          <div class="relative blue-bg transition-all duration-700 left-0 right-0 w-[300px] bottom-[-100px] h-[300px] mx-auto w-full">
            <div class="absolute blue-bg transition-all duration-700 bg-[#3E359A] z-[100] opacity-[0.8] h-full  left-0 right-0 mx-auto rounded-[50%]"></div>
            <!-- arrow -->
            <div class="arrow bg-white rounded-[50%] h-fit absolute right-8 z-[150] p-4 opacity-75"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#0D0D3F" d="M16.15 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.313t.712.288L19.3 11.3q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7L16.15 13Z"/></svg></div>
            <div class="texts absolute space-y-4 top-[70px] left-0 right-0 mx-auto w-[200px] text-center z-[500]">
              <div class="flex items-center gap-6">
                <svg class="summary-text hidden" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16"><path fill="#2BAC91" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm2.33-11.5c-1.22 0-1.83.5-2.323 1.136C7.513 5 6.903 4.5 5.682 4.5c-1.028 0-2.169.784-2.169 2.5c0 1.499 1.493 3.433 3.246 4.517c.52.321.89.479 1.248.484c.357-.005.728-.163 1.247-.484C11.007 10.433 12.5 8.5 12.5 7c0-1.716-1.14-2.5-2.17-2.5Z"/></svg>
                <p class="text-white text-xl text-center w-full font-bold">Expand your Audience</p>
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
                <svg class="summary-text hidden" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#2BAC91" d="M12 22q-1.875 0-3.513-.713t-2.85-1.924q-1.212-1.213-1.924-2.85T3 13q0-1.875.713-3.513t1.924-2.85q1.213-1.212 2.85-1.924T12 4q1.875 0 3.513.713t2.85 1.925q1.212 1.212 1.925 2.85T21 13q0 1.875-.713 3.513t-1.924 2.85q-1.213 1.212-2.85 1.925T12 22Zm2.8-4.8l1.4-1.4l-3.2-3.2V8h-2v5.4l3.8 3.8ZM5.6 2.35L7 3.75L2.75 8l-1.4-1.4L5.6 2.35Zm12.8 0l4.25 4.25l-1.4 1.4L17 3.75l1.4-1.4Z"/></svg>
                <p class="text-white text-xl text-center w-full font-bold">Save your Time</p>
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
                <svg class="summary-text hidden" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 640 512"><path fill="#2BAC91" d="m323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5L373 188.8L550.2 352H592c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48h-80.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2c-31.5 24.6-77.2 18.2-100.8-14.2c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48H48c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h108.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123z"/></svg>
                <p class="text-white text-xl text-center w-full font-bold">Earn from home</p>
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
    
    export default defineComponent({
        data(){
            return{
            }
        },
    })
</script>

<style scoped>
.relative {
  display: flex;
  transition: transform 0.5s ease;
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