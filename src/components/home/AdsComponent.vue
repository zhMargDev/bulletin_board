<template>
    <div id="mainBox">
        <div id="titleBox">
            <img src="@/assets/icons/news.png" class="anounsement" alt="Anounsement">
            <h2 class="componenttitle">Самые популярные обьявления дня</h2>
        </div>
        <div id="adsMainBox">
            <div class="adsCard" v-for="(ad, index) in ads" :key="index" @click="$router.push(`/advertisement/id/${ad.id}`)">
                <img src="@/assets/icons/heart.png" class="linkIcon" alt="Like">
                <img :src="ad.picure_url" alt="Ad's picture" class="adImage">
                <div class="aboutAdBox">
                    <div class="catsBox">
                        <p v-for="(cat, index) in adCategoryFilter('category', ad.category_url)" :key="index">{{ cat.name }}</p>
                        <span v-if="ad.subcategory_url !== 'none' "> >  </span>
                        <p v-for="(cat, index) in adCategoryFilter('sub_category', ad.subcategory_url)" :key="index">{{ cat.name }}</p>
                    </div>
                    <div class="adsRegionBox">
                        <img src="@/assets/icons/map.png" alt="Map icon">
                        <p class="region">{{ ad.region }}</p>
                    </div>
                    <h5 class="title">{{ ad.title }}</h5>
                    <div class="bottomBox">
                        <img src="@/assets/icons/clock.png" class="clockIcon" alt="Time">
                        <p class="time">{{ daysAndHoursCounter(ad.created) }}</p>

                        <img src="@/assets/icons/eye.png" class="eye" alt="Views">
                        <p class="time">{{ ad.views }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            domain: this.$store.state.domain,
            ads: [],
            categories: [],
            sub_categories: []
        }
    },
    mounted(){
        this.getAllAds();
        this.getAllCategories();
    },
    methods:{
        getAllAds(){
            axios.get(`${this.domain}/ads`)
            .then(response => {
                this.ads = response.data.data;
            })
            .catch(error => {
                console.error('Error:', error);
            });
        },
        getAllCategories(){
            axios.get(`${this.domain}/categories`)
            .then(response => {
                this.categories = response.data.categories;
                this.sub_categories = response.data.sub_categories;
            })
            .catch(error => {
                console.error('Error:', error);
            });
        },
        adCategoryFilter(type, categoryUrl) {
            if(type === 'category'){
                return this.categories.filter(cat => cat.url === categoryUrl);
            }else if(type === 'sub_category'){
                return this.sub_categories.filter(cat => cat.url === categoryUrl);
            }
        },
        daysAndHoursCounter(ad_date){
            const dateString = ad_date;
            const startDate = new Date(dateString);
            const currentDate = new Date();
            const difference = currentDate - startDate;
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            return `${days} д ${hours} ч`
        }
    }
}
</script>

<style scoped>
.componenttitle{
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    margin: 0;
    color: #404040;
    margin-left: 10px;
}
.anounsement{
    width: 20px;
    height: 23px;
}
#titleBox{
    width: 70%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.eye{
    width: 17.5px;
    height: 12.5px;
    margin-left: auto;
}
.time{
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #828282;
    margin-left: 10px;
}
.clockIcon{
    width: 15px;
    height: 15px;
}
.bottomBox{
    display: flex;
    align-items: center;
    margin-top: auto;
}
.aboutAdBox{
    padding: 5px 10px;
}
.linkIcon{
    position: absolute;
    top: 10px;
    right: 10px;
}
.title{
    width: 100%;
    font-style: normal;
    font-weight: 1000;
    font-size: 16px;
    color: #404040;
    margin: 0;
    margin-top: 5px;
    height: 53px;
    overflow: hidden;
}
.adsRegionBox{
    display: flex;
    align-items: center;
}
.adsRegionBox img{
    margin-right: 10px;
    width: 10px;
    height: 15px;
}
.region{
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #404040;
    margin: 0;
}
.catsBox{
    display: flex;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #828282;
    margin: 5px 0;
    margin-top: 0;
}
.catsBox p{margin: 0;}
.catsBox span{margin: 0;}
.adImage{
    width: 100%;
    max-height: 230px;
}
.adsCard{
    width: 250px;
    margin: 0 auto;
    padding: 0px;
    overflow-x: hidden;
    border: 1px solid #DBDBDB;
    border-radius: 10px;
    position: relative;
    margin-top: 10px;
    transition: 500ms;
    cursor: pointer;
}
.adsCard:hover{
    background: #DBDBDB;
}
#adsMainBox{
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
#mainBox{
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-family: 'Roboto';
}
</style>

<style scoped>
@media (width <= 730px){
    #titleBox{
        width: 95%;
    }
}
@media (width <= 500px){
    .componenttitle{
        font-size: 20px;
    }
    .anounsement{
        width: 17px;
        height: 20px;
    }
}
</style>