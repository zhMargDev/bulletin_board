<template>
    <div id="mainBox">
        <img src="@/assets/imgs/1920_zon.png" id="background" alt="">
        <CategoriesComponent />
        <AdsComponent />
        <AboutNewAdsComponent />
        <UsefulTipsComponent />
        <AboutUsComponent />
    </div>
</template>

<script>
import CategoriesComponent from '@/components/home/CategoriesComponent.vue'
import AdsComponent from '@/components/home/AdsComponent.vue'
import AboutNewAdsComponent from "@/components/home/AboutNewAdsComponent.vue"
import UsefulTipsComponent from '@/components/home/UsefulTipsComponent.vue'
import AboutUsComponent from '@/components/home/AboutUsComponent.vue'
export default {
    components:{
        CategoriesComponent,
        AdsComponent,
        AboutNewAdsComponent,
        UsefulTipsComponent,
        AboutUsComponent
    },
    
}
</script>


<style scoped>
#background{
    position: absolute;
    top: 113px;
    left: -3px;
    z-index: -1;
    width: 100vw;
    height: 70%;
}
@media (width <= 800px){
    #background{
        display: flex;
    }
}
</style>