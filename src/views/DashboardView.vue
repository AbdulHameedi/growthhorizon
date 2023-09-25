<script>
import { defineComponent } from 'vue'
import DashboardHeader from '../components/DashboardHeader.vue'

export default defineComponent({
    components: {
        DashboardHeader
    }
})
</script>
<template>
    <DashboardHeader />
    <router-view></router-view>
</template>