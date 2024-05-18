<template>
    <div id="mainBox">
        <div id="titleBox">
            <img src="@/assets/icons/news.png" class="anounsement" alt="Anounsement">
            <h2 class="componenttitle">Полезные советы </h2>
        </div>
        <div id="usBox">
            <div class="blogBox">
                <img src="@/assets/imgs/img_1.png" class="blogImg" alt="">
                <div class="infoBox">
                    <h4 class="title">Lorem ipsum dolor sit amet </h4>
                    <p class="desc">Сonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                </div>
                <div class="backBox">
                    <div class="blackBox"></div>
                </div>
            </div>
            <div class="blogBox" v-if="windowWidth > 1000">
                <div class="backBox">
                    <div class="blackBox"></div>
                </div>
                <div class="infoBox">
                    <h4 class="title">Lorem ipsum dolor sit amet </h4>
                    <p class="desc">Сonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                </div>
                <img src="@/assets/imgs/img_2.png" class="blogImg" alt="">
            </div>
            <div class="blogBox" v-if="windowWidth <= 1000">
                <img src="@/assets/imgs/img_2.png" class="blogImg" alt="">
                <div class="infoBox">
                    <h4 class="title">Lorem ipsum dolor sit amet </h4>
                    <p class="desc">Сonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                </div>
                <div class="backBox">
                    <div class="blackBox"></div>
                </div>
            </div>
            <div class="blogBox" v-if="windowWidth > 1000">
                <img src="@/assets/imgs/img_3.png" class="blogImg" alt="">
                <div class="infoBox">
                    <h4 class="title">Lorem ipsum dolor sit amet </h4>
                    <p class="desc">Сonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                </div>
                <div class="backBox">
                    <div class="blackBox"></div>
                </div>
            </div>
        </div>
        <div id="pagesBox">
            <span class="page active"></span>
            <span class="page"></span>
            <span class="page"></span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            windowWidth: window.innerWidth
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        }
    }
}
</script>

<style scoped>
.active{
    background: #6237AC !important;
}
.page{
    width: 64px;
    height: 4px;
    margin: 20px 5px;
    background: #E1E1E1;
    cursor: pointer;
    border-radius: 5px;
}
#pagesBox{
    display: flex;
    justify-content: center;
}
.desc{
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 12px;
    color: #737373;
    margin: 0;
    margin-top: 20px;
}
.title{
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 16px;
    color: #404040;
    margin: 0;
}
.blackBox{
    width: 300px;
    height: 100%;
    background: #7C767642;
    border-radius: 10px;
}
.backBox{
    width: 300px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
    opacity: 0;
    transition: 500ms;
}
.backBox:hover{
    opacity: 1;
}
.blogBox:hover{
    border: 3px solid #6237AC;
}
.infoBox{
    padding: 30px 18px;
    height: calc(50% - 60px);
}
.blogImg{
    width: 300px;
    height: 200px;
    border-radius: 10px;
}
.blogBox{
    margin: 0 10px;
    width: 300px;
    height: 400px;
    border-radius: 10px;
    background: #F3F3F3;
    transition: 500ms;
    cursor: pointer;
    position: relative;
    border: 3px solid transparent;
}
#usBox{
    width: 100%;
    display: flex;
    justify-content: center;
}
#mainBox{
    display: flex;
    justify-content: center;
    font-family: 'Roboto';
    flex-wrap: wrap;
}
#titleBox{
    width: 70%;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
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
</style>

<style scoped>
@media (width <= 730px){
    #titleBox{
        width: 95%;
    }
    .blogBox{
        width: 200px;
        height: 300px;
        overflow: hidden;
    }
    .backBox, .blackBox{
        width: 200px;
    }
    .blogImg{
        width: 200px;
        height: 150px;
    }
    .infoBox{
        padding: 15px;
        width: calc(100% - 30px);
        height: calc(100% - 30px);
    }
    .title{
        font-size: 13px;
    }
    .desc{
        font-size: 11px;
        margin-top: 10px;
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
    .blogBox{
        width: 150px;
        height: 250px;
        overflow: hidden;
        margin: 0 5px;
    }
    .backBox, .blackBox{
        width: 150px;
    }
    .blogImg{
        width: 150px;
        height: 125px;
    }
    .infoBox{
        padding: 15px;
        width: calc(100% - 30px);
        height: calc(100% - 30px);
    }
    .title{
        font-size: 13px;
    }
    .desc{
        font-size: 11px;
        margin-top: 10px;
    }
}
</style>