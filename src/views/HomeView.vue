<template>
    <div id="mainBox">
        <HeaderComponent />
        <HomeComponent />
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from '@/components/layouts/HeaderComponent.vue'
import HomeComponent from '@/components/HomeComponent.vue'
import FooterComponent from '@/components/layouts/FooterComponent.vue'

export default {
    name: 'HomeView',
    components: {
        HomeComponent,
        HeaderComponent,
        FooterComponent
    }
}
</script>

<style scoped>

</style>