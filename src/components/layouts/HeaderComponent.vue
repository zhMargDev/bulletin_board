<template>
    <header>
        <section id="first_section" v-if="windowWidth > 410">
            <div class="first_secton_blocks" style="justify-content: start;">
                <a href="/" rel="noopener" id="logoBox">
                    <mini-logo v-if="windowWidth > 650 || windowWidth <= 410" :width="'100px'" :height="'24px'" />
                    <micro-logo v-if="windowWidth <= 650 && windowWidth > 410" />
                </a>
                <button class="mainBtns" v-if="windowWidth <= 650 && windowWidth > 410" id="mainBtnsBoxOpBtn" @click="mainControlBox = !mainControlBox"><img id="mainBtnsBoxOpArrow" src="@/assets/icons/burger.png" alt="Menu Burger"></button>
                <button class="mainBtns" style="margin-left: auto" v-if="windowWidth <= 410" id="mainBtnsBoxOpBtn" @click="globalControlBox = !globalControlBox"><img id="mainBtnsBoxOpArrow" src="@/assets/icons/burger.png" alt="Menu Burger"></button>
                <a rel="noopener" v-if="windowWidth > 550" class="mainBtns" @click="$router.push('/')">Обявления</a>
                <a rel="noopener" v-if="windowWidth > 550" class="mainBtns" @click="$router.push('/shops')">Магазины</a>
                <nav id="mainNavigationBtnsBox" v-if="windowWidth <= 550 && mainControlBox">
                    <a rel="noopener" class="mainBtns" @click="$router.push('/')">Обявления</a>
                    <a rel="noopener" class="mainBtns" @click="$router.push('/shops')">Магазины</a>
                </nav>
                <button class="mainBtns" @click="$router.push('/announcements')"><img src="@/assets/icons/bell.png" alt="Bell icon"></button>
            </div>
            <div class="first_secton_blocks" style="margin-left: auto;">
                <button id="loginBtn" @click="authorization = true" v-if="!userAuthorized"> <HumanSvg /> Вход</button>
                <button id="loginBtn" v-if="userAuthorized" @click="userAccControlBox = !userAccControlBox"> 
                    <img src="@/assets/imgs/user.png" alt="User avatar"> 
                    <p>Личный кабинет </p>
                    <img src="@/assets/icons/arrow_down.png" id="loginBtnArrowDown" alt="Arrow down">
                </button>
                <nav v-if="userAccControlBox" id="userAccControleBox">
                    <a rel="noopener" class="userAccControlBtns" @click="my_personal_site('my_advertisement')">Мои объявления</a>
                    <a rel="noopener" class="userAccControlBtns navHiddenBtns" @click="my_personal_site('my_favorites')">Избранные</a>
                    <a rel="noopener" class="userAccControlBtns navHiddenBtns" @click="my_personal_site('my_messages')">Сообщения</a>
                    <hr>
                    <a rel="noopener" class="userAccControlBtns navHiddenBtns" @click="my_personal_site('my_check')">Счет</a>
                    <a rel="noopener" class="userAccControlBtns" @click="my_personal_site('my_settings')">Настройки</a>
                    <br>
                    <a rel="noopener" class="userAccControlBtns" @click="logout()">Выход</a>
                </nav>
                <button class="controlBtns hiddenBtns" v-if="userAuthorized" @click="my_personal_site('my_favorites')"><img src="@/assets/icons/star.png" alt="Star icon"></button>
                <button class="controlBtns hiddenBtns" v-if="userAuthorized" @click="my_personal_site('my_messages')"><img src="@/assets/icons/message.png" alt="Message icon"> </button>
                <button class="controlBtns hiddenBtns" v-if="userAuthorized" @click="my_personal_site('my_check')"><img src="@/assets/icons/transactions.png" alt="Transactions icon">0 ₽</button>
                <button class="controlBtns" @click="$router.push('/personal/my_shops')"><img src="@/assets/icons/shop.png" style="width: 17px;" alt="Shop icon"></button>
                <button id="new_post_btn" @click="$router.push('/new_dvertisement')">Подать объявление</button>
            </div>
        </section>

        <section id="first_section" v-if="windowWidth <= 410">
            <a href="/" rel="noopener" id="logoBox">
                <mini-logo :width="'100px'" :height="'24px'" />
            </a>
            <button style="margin-left: auto" id="globalMenuControlBurgerBtn" @click="globalControlBox = !globalControlBox">
                <img id="globalMenuControlBurger" src="@/assets/icons/burger.png" alt="Menu Burger">
            </button>
            <nav id="globalControlNavigationBar" v-if="globalControlBox">
                <a rel="noopener" @click="$router.push('/')">Объявления</a>
                <a rel="noopener" @click="$router.push('/shops')">Все магазины</a>
                <a rel="noopener" @click="$router.push('/announcements')">Уведомления</a>
                <hr>
                <a rel="noopener" v-if="!userAuthorized" @click="authorization = true">Вход</a>
                <a rel="noopener" v-if="userAuthorized" @click="my_personal_site('my_advertisement')">Мои объявления</a>
                <a rel="noopener" v-if="userAuthorized" @click="my_personal_site('my_favorites')">Избранные</a>
                <a rel="noopener" v-if="userAuthorized" @click="my_personal_site('my_messages')">Сообщения</a>
                <hr>
                <a rel="noopener" v-if="userAuthorized" @click="my_personal_site('my_check')">Счет</a>
                <a rel="noopener" v-if="userAuthorized" @click="my_personal_site('my_settings')">Настройки</a>
                <a rel="noopener" @click="$router.push('/personal/my_shops')">Магазин</a>
                <a rel="noopener" @click="$router.push('/new_dvertisement')">Подать объявление</a>
                <hr v-if="userAuthorized">
                <a rel="noopener" v-if="userAuthorized" @click="logout()">Выход</a>
            </nav>
        </section>

        <section id="search_section">
            <div class="searchBack" v-if="windowWidth > 700">
                <div class="searchSection">
                    <div id="catsSelector" @click="catsBox = !catsBox; regionBox = false">
                        <img src="@/assets/icons/selector.png" alt="Select a category icon">
                        <p>{{ selectedCat  }}</p>
                        <img src="@/assets/icons/arrow_down.png" alt="Arrow down">
                    </div>
                    <div id="searchSector">
                        <img src="@/assets/icons/search.png" alt="Select a category icon">
                        <input type="text" v-model="searchingText" placeholder="Что ищем...">
                    </div>
                    <div id="navigatiionSector" @click="regionBox = !regionBox; catsBox = false">
                        <img src="@/assets/icons/map.png" alt="Select a category icon">
                        <p>{{ selectedRegion }}</p>
                        <img src="@/assets/icons/arrow_down.png" alt="Arrow down">
                    </div>
                </div>
                <button @click="$router.push(`/search?category=${searchingByCat}&sub_category=${searchingBySubCat}&region=${searchingByRegion}&text=${ restructText() }`)">Поиск</button>
            </div>

            <div class="searchBack" style="display: grid; border-radius: 15px;" v-if="windowWidth <= 700">
                <div class="searchSectionMini">
                    <div id="catsSelector" @click="catsBox = !catsBox; regionBox = false">
                        <img src="@/assets/icons/selector.png" alt="Select a category icon">
                        <p>{{ selectedCat }}</p>
                        <img src="@/assets/icons/arrow_down.png" alt="Arrow down">
                    </div>
                    <div id="navigatiionSector" @click="regionBox = !regionBox; catsBox = false">
                        <img src="@/assets/icons/map.png" alt="Select a category icon">
                        <p>{{ selectedRegion }}</p>
                        <img src="@/assets/icons/arrow_down.png" alt="Arrow down">
                    </div>
                </div>
                <div style="display: flex;">
                    <div class="searchSection" style="margin-top: 5px;">
                        <div id="searchSector" class="searchSector_mini">
                            <img src="@/assets/icons/search.png" alt="Select a category icon">
                            <input type="text" v-model="searchingText" placeholder="Что ищем...">
                        </div>
                    </div>
                    <button style="margin-top: auto;" @click="$router.push(`/search?category=${searchingByCat}&sub_category=${searchingBySubCat}&region=${searchingByRegion}&text=${ restructText() }`)">Поиск</button>
                </div>
            </div>

            <nav id="catsBox" v-if="catsBox">
                <div class="catsBox" v-for="(category, index) in categories" :key="index">
                    <a @click="searchingByCat = category.url; 
                        catsBox = false;
                        selectedCat = category.name;
                        searchingBySubCat = 'all'" class="categoryTitle">{{ category.name }}</a>
                    <div class="subCatsBox">
                        <a v-for="(subCat, i) in filteredSubCategories(category.url)" 
                            @click="searchingByCat = category.url; 
                            searchingBySubCat = subCat.url; 
                            catsBox = false;
                            selectedCat = `${category.name} > ${subCat.name}`"
                            :key="i" class="subCategories">
                            {{ subCat.name }}
                        </a>
                    </div>
                </div>
                <div class="catsBox">
                    <a @click="searchingByCat = 'all'; 
                        catsBox = false;
                        selectedCat = 'Все категории';
                        searchingBySubCat = 'all'" class="categoryTitle">Все категории</a>
                </div>
            </nav>

            <nav id="regionBox" v-if="regionBox">
                <div class="catsBox" v-for="(region, index) in regions" :key="index">
                    <a @click="searchingByRegion = region.url; 
                    regionBox = false;
                    selectedRegion = region.region" class="categoryTitle">{{ region.region }}</a>
                </div>
                <div class="catsBox">
                    <a @click="searchingByRegion = 'all'; 
                    regionBox = false;
                    selectedRegion = 'Все регионы'" class="categoryTitle">Все регионы</a>
                </div>
            </nav>
        </section>

        <AuthorizatoinComponent v-if="authorization" @close="close_auth" @user_authorizated="authorizedHandler" />
        <RegiostrationComponent v-if="registration" @close="close_reg" @user_authorizated="authorizedHandler" />
    </header>
</template>

<script>
import axios from 'axios'
import MiniLogo from '@/svg-components/LogoMini.vue'
import HumanSvg from '@/svg-components/HumanSvg.vue'
import MicroLogo from '@/svg-components/LogoMicro.vue'
import AuthorizatoinComponent from '@/components/authorization/AuthorizatoinComponent.vue'
import RegiostrationComponent from '@/components/authorization/RegiostrationComponent.vue'
export default{
    components:{
        MiniLogo,
        HumanSvg,
        MicroLogo,
        AuthorizatoinComponent,
        RegiostrationComponent
    },
    data(){
        return{
        //this.$store.state.userAuthorized
            user: {name:null, id:null, key:null, mail:null},
            userAuthorized: false,
            userAccControlBox: false,
            mainControlBox: false,
            globalControlBox: false,
            windowWidth: window.innerWidth,
            categories:[],
            sub_categories: [],
            regions: [],
            domain: this.$store.state.domain,
            catsBox: false,
            regionBox: false,
            searchingText: '',
            searchingByCat: 'all',
            selectedCat: 'Все категории',
            searchingBySubCat: 'all',
            searchingByRegion: 'all',
            selectedRegion: 'Все регионы',
            authorization: false,
            registration: false,
        }
    },
    mounted() {
        this.userAuthorizedCheck();
        
    // Добавляем слушатель события изменения размера окна
        window.addEventListener('resize', this.handleResize);

        axios.get(`${this.domain}/categories`)
            .then(response => {
                this.categories = response.data.categories;
                this.sub_categories = response.data.sub_categories;
            })
            .catch(error => {
                console.error('Error:', error);
            });

        axios.get(`${this.domain}/regions`)
            .then(response => {
                this.regions = response.data.regions;
            })
            .catch(error => {
                console.error('Error:', error);
            });
    },
    methods: {
        userAuthorizedCheck(){
            this.user.name = localStorage.getItem('user');
            this.user.id = localStorage.getItem('id');
            this.user.key = localStorage.getItem('key');
            this.user.mail = localStorage.getItem('mail');

            // Проверка данных
            const data = {
                'id':this.user.id,
                'key':this.user.key,
                'mail':this.user.mail
            }
            axios.post(`${this.domain}/user_authorization_check`, data)
                .then(response => {
                    if(response.status === 200){
                        this.userAuthorized = true;
                    }
                })
                .catch(error => {
                    if(error){
                        this.userAuthorized = false;
                        this.user.id = null;
                        this.user.key = null;
                        this.user.name = null;
                        this.user.mail = null;
                        localStorage.removeItem('user');
                        localStorage.removeItem('id');
                        localStorage.removeItem('key');
                        localStorage.removeItem('mail');
                    }
                });
        },
        authorizedHandler(handler){
            if(handler){
                this.userAuthorizedCheck();
            }
        },
        filteredSubCategories(categoryUrl) {
            return this.sub_categories.filter(subCat => subCat.p_category_url === categoryUrl);
        },
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
        restructText(){
            this.searchingText = this.searchingText.replace(/\s+/g, '+');
            return this.searchingText
        },
        close_auth(handler){
            this.authorization = false;
            this.registration = handler;   
        },
        close_reg(handler){
            this.authorization = handler;
            this.registration = false;   
        },
        my_personal_site(page){
            if(!this.userAuthorized){
                this.authorization = true;
            }else{
                this.$router.push(`/personal/${page}`);
            }
        },
        logout(){
            this.userAuthorized = false;
            this.user.id = null;
            this.user.key = null;
            this.user.name = null;
            this.user.mail = null;
            localStorage.removeItem('user');
            localStorage.removeItem('id');
            localStorage.removeItem('key');
            localStorage.removeItem('mail');

            this.userAccControlBox = false;
            this.globalControlBox = false;
        }
  }
}

</script>

<style scoped>
#catsSelector p{
    white-space: nowrap;
    overflow: hidden;
}
#regionBox{
    animation: globalControlNavigationBarShowAnim 500ms;
    display: grid;
    position: absolute;
    background: white;
    border: 4px solid #6237AC;
    padding: 5px;
    border-radius: 10px;
    top: 45px;
    right: 80px;
    transition: 300ms;
    max-height: 500px;
    overflow: hidden;
    overflow-y: scroll;
    width: 160px;
    font-family: 'Roboto';
    background: #F4F4F4;
}
a{cursor: pointer;}
.catsBox:hover .subCatsBox{
    max-height: 200px;
    margin: 10px 0;
}
.subCatsBox{
    transition: 300ms;
    overflow: hidden;
    display: grid;
    max-height: 0;
}

.subCatsBox a{
    text-decoration: none;
    color: #5d5d5d;
    font-size: 13px;
    transition: 300ms;
}
.subCatsBox a:hover{
    color: black;
}
.categoryTitle{
    text-decoration: none;
    font-weight: bold;
    color: #6237AC;
    font-size: 17px;
    opacity: 0.8;
    transition: 300ms;
}
.categoryTitle:hover{
    opacity: 1;
}
#catsBox{
    animation: globalControlNavigationBarShowAnim 500ms;
    display: grid;
    position: absolute;
    background: white;
    border: 4px solid #6237AC;
    padding: 5px;
    border-radius: 10px;
    top: 45px;
    transition: 300ms;
    max-height: 500px;
    overflow: hidden;
    overflow-y: scroll;
    width: 160px;
    font-family: 'Roboto';
    background: #F4F4F4;
}
#globalMenuControlBurgerBtn{
    width: 30px;
    height: 20px;
    cursor: pointer;
}
#globalMenuControlBurger{
    width: 100%;
    height: 100%;
}
@keyframes globalControlNavigationBarShowAnim{
    0%{max-height: 0;}
    100%{max-height: 500px;}
} 
#globalControlNavigationBar{
    animation: globalControlNavigationBarShowAnim 500ms;
    display: grid;
    position: absolute;
    background: white;
    border: 4px solid #6237AC;
    padding: 5px;
    border-radius: 10px;
    top: 40px;
    transition: 300ms;
    max-height: 500px;
    overflow: hidden;
    overflow-y: scroll;
    width: 90%;
    font-family: 'Roboto';
}
#globalControlNavigationBar a{
    padding: 0;
    margin: 5px 0;
    display: block;
    border-radius: 10px;
    cursor: pointer;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #6237AC;
}
hr{
    width: 100%;
    background: #6237AC;
}
#mainBtnsBoxOpBtn{
    display: none;
}
@keyframes mainNavigationBtnsBoxShowAnim{
    0%{max-height: 0;}
    100%{max-height: 500px;}
} 
#mainNavigationBtnsBox{
    animation: mainNavigationBtnsBoxShowAnim 500ms;
    display: grid;
    position: absolute;
    background: white;
    border: 4px solid #6237AC;
    padding: 5px;
    border-radius: 10px;
    left: 10px;
    top: 40px;
    transition: 300ms;
    max-height: 200px;
    overflow: hidden;
}
#mainNavigationBtnsBox a{
    padding: 0;
    margin: 5px 0;
}
a{text-decoration: none;}
@keyframes userAccControleBoxShowAnim{
    0%{max-height: 0;}
    100%{max-height: 500px;}
} 
nav{
    z-index: 10;
    
}
#userAccControleBox{
    animation: userAccControleBoxShowAnim 500ms;
    position: absolute;
    background: white;
    border: 4px solid #6237AC;
    padding: 5px;
    border-radius: 10px;
    left: 0px;
    top: 40px;
    transition: 300ms;
    max-height: 200px;
    overflow: hidden;
}
#userAccControleBox a{
    text-decoration: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #6237AC;
}
#mainBtnsBoxOpArrow{
    width: 20px;
    height: 16px;
}
.searchSector_mini{
    padding: 0 10px !important;
}
#searchSector{
    display: flex;
    justify-content: start;
    align-items: center;
    width: calc(100% - 300px);
}
#searchSector img{
    width: 19px;
    height: 19px;
    margin-right: 5px;
}
#searchSector input{
    height: 90%;
    background: transparent;
    border: 0;
    font-family: 'Roboto';
    width: calc(100% - 24px)
}
#searchSector input:focus{
    outline: none;
}
#navigatiionSector{
    display: flex;
    justify-content: end;
    align-items: center;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 13px;
    color: #404040;
    padding: 5px 10px;
    cursor: pointer;
    height: 21px;
    margin-left: auto;
    width: 130px;
}
#navigatiionSector img:first-child{
    width: 17px;
    margin-right: 5px;
}
#navigatiionSector img:last-child{
    width: 14px;
    margin-left: 5px;
}
#catsSelector{
    display: flex;
    justify-content: start;
    align-items: center;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 13px;
    color: #404040;
    padding: 5px 10px;
    cursor: pointer;
    height: 21px;
    width: 170px;
}
#catsSelector img:first-child{
    width: 20px;
    margin-right: 5px;
}
#catsSelector img:last-child{
    width: 14px;
    margin-left: 5px;
}
.searchSection{
    background: #F4F4F4;
    height: 100%;
    width: calc(100% - 100px);
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    display: flex;
    height: 30px;
}
.searchSectionMini{
    background: #F4F4F4;
    height: 30px;
    width: 100%;
    border-radius: 30px;
    display: flex;
}
.searchBack{
    width: 100%;
    border-radius: 30px;
    background: linear-gradient(232.55deg, #7D4ECF -16.19%, #6237AC 56.59%);
    padding: 5px;
    display: flex;
}
.searchBack button{
    width: 100px;
    height: 30px;
    background: linear-gradient(132.88deg, #542A9D 10.11%, #7D54C5 109.67%);
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    cursor: pointer;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 15px;
    color: #FFFFFF;
}
#search_section{
    width: 80%;
    display: flex;
    padding: 10px 0;
    position: relative;
}
#search_section_mini{
    display: grid;
}
button{
    background: transparent;
    border: 0;
}
header{
    width: 100%;
    padding: 5px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
#first_section{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
}
#logoBox{
    display: flex;
    justify-content: center;
    align-items: center;
}
#loginBtn{
    display: flex;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #6237AC;
    cursor: pointer;
    align-items: center;
}
.navHiddenBtns{
    display: none;
}
#loginBtn svg{
    width: 15px;
}
.first_secton_blocks{
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    position: relative
}
#new_post_btn{
    padding: 10px 12px;
    gap: 10px;
    background: #6237AC;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 14px;
    margin-left: 10px;
}
.mainBtns{
    padding: 9px 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    margin-left: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #6237AC;
}
.mainBtns img{
    width: 20px;
    height: 20px;
}
.controlBtns{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    margin-left: 10px;
    color: #404040;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 14px;
    margin-left: 10px;
}
.controlBtns img{
    width: 15px;
    height: 15px;
}

</style>


<style scoped>
@media (width <= 1070px){
    #first_section, #search_section{
        width: 100%;
    }
    header{
        width: calc(100% - 20px);
        padding: 5px 10px;
    }
}
@media (width <= 855px){
    .hiddenBtns, #loginBtn p{
        display: none;
    }
    .navHiddenBtns{
        display: block;
    }
    #userAccControleBox{
        left: -40px;
    }
}
@media (width <= 700px){
    #searchSector{
        width: 100%;
    }
    #regionBox{
        right: 0px;
    }
}
@media (width <= 550px){
    #mainBtnsBoxOpBtn{
        display: block;
    }
}
@media (width <= 410px){
    #catsBox{
        width: 95%;
        left: 50%;
        transform: translate(-50%);
    }
    #regionBox{
        width: 95%;
        left: 50%;
        transform: translate(-50%);
    }
}
@media (width <= 370px){
    .searchSectionMini{
        height: 70px;
        border-radius: 15px;
        flex-wrap: wrap;
    }
    .searchSectionMini #navigatiionSector{
        justify-content: start;
        margin-left: 0;
    }
    .searchSectionMini div{
        width: 100% !important;
    }
    .searchSectionMini div p{
        margin: auto;
    }
    #regionBox, #catsBox{
        top: 86px;
    }
}
</style>
