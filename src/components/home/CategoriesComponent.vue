<template>
    <div id="mainBox">
        <div id="catsBox">
            <div class="categoryBox" v-for="(category, index) in categories" :key="index">
                <img :src="category.icon_url" class="categoryicon" @click="$router.push(`/category/${category.url}`)" alt="Category icon">
                <div class="aboutCategoryBox">
                    <a :href="`/#/category/${category.url}`" class="categoryTitle">{{ category.name }}</a>
                    <div class="subCatsBox">
                        <a v-for="(subCat, i) in filteredSubCategories(category.url)" 
                            :href="`/#/category/${category.url}/subCategory/${subCat.url}`"
                            :key="i" class="subCategories">
                            {{ subCat.name }}<span v-if="i < filteredSubCategories(category.url).length - 1" style="margin-right: 4px;">,</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            domain: this.$store.state.domain,
            categories: [],
            sub_categories: [],
            windowWidth: window.innerWidth
        }
    },
    mounted() {
        axios.get(`${this.domain}/categories`)
            .then(response => {
                this.categories = response.data.categories;
                this.sub_categories = response.data.sub_categories;
            })
            .catch(error => {
                console.error('Error:', error);
            });

    },
    methods: {
        filteredSubCategories(categoryUrl) {
            return this.sub_categories.filter(subCat => subCat.p_category_url === categoryUrl);
        }
    }
}
</script>


<style scoped>
.categoryicon{
    cursor:pointer
}
.subCategories{
    text-decoration: none;
    color: #5d5d5d;
    font-size: 13px;
    transition: 300ms;
}
.subCategories:hover{
    color: black;
}
.subCatsBox{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
.aboutCategoryBox{
    margin-left: 10px;
}
.categoryTitle{
    text-decoration: none;
    font-weight: bold;
    color: #6237AC;
    font-size: 15px;
    opacity: 0.8;
    transition: 300ms;
}
.categoryTitle:hover{
    opacity: 1;
}
#mainBox{
    font-family: 'Roboto';
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 0;
}
#catsBox{
    width: 49%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    background: #F3F3F3;
    padding: 20px;
    border-radius: 20px;
    border: 4px solid #6237AC;
}
.categoryBox{
    width: calc(100% - 20px);
    display: flex;
    padding:10px;
    transition: 300ms;
    border-radius: 10px;
}
.categoryBox:hover{
    background: #DECAFF;
}
</style>

<style scoped>
@media (width <= 1550px){
    #catsBox{
        width: 48.5%;
    }
}
@media (width <= 1300px){
    #catsBox{
        width: 47%;
    }
}
@media (width <= 1100px){
    #catsBox{
        width: 46%;
    }
}
@media (width <= 800px){
    #catsBox{
        width: calc(95% - 40px);
    }
}
@media (width <= 500px){
    #catsBox{
        grid-template-columns: 1fr;
    }
    .categoryicon{
        width: 40px;
    }
}
</style>