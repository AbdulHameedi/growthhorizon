<template>
    <div class="carousel">
        <div class="carousel-wrapper">
            <div class="h-screen w-full bg-center bg-cover" v-for="( section, index ) in heroSection" :key="index" :class="['carousel-slide', { active: index === currentIndex }]" :style="{ backgroundImage: `url(${section.bg})` }">
               <p>{{ section.paragraph }}</p>
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
                        firstHeaderContent: 'Increase your',
                        lastHeaderContent: 'Viewers/Subscribers/Customers',
                        paragraph: 'We are trusted and professional earning company',
                        actionButton: "Let's get started"
                    },
                    {
                        firstHeaderContent: 'Increase your',
                        lastHeaderContent: 'Income',
                        paragraph: 'We are trusted and professional earning company',
                        actionButton: "Let's get started"
                    }
                ],
                currentIndex : 0
            }
        }
    })
</script>

<style scoped>
.carousel{
    width: 200%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    animation: slide 18s  infinite linear alternate;
}

@keyframes slide {
    0%{
        left:-0%
    }
    25%{
        left:-0%;
    }
    50%{
        left: -100%;
    }
    75%{
        left: -100%;
    }
    100%{
        left: -100%;
    }
}
</style>