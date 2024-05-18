<template>
    <div id="MainBox">
        <div id="FooterBox">
            <div class="FooterBox">
                <h4 class="blockTitle">Нужна помощь?</h4>
                <div class="supportBox">
                    <p class="FooterTxt">Пресс служба</p>
                    <a href="tel:88005555555" class="help">8 800 555 55 55</a>
                </div>
                <div class="supportBox">
                    <p class="FooterTxt">Почта для связи</p>
                    <a href="mailto:info@eastnews.com<" class="help">info@eastnews.com</a>
                </div>
                <div class="supportBox">
                    <p class="FooterTxt">Раскажите о нас</p>
                    <div class="iconsBox">
                        <img src="@/assets/icons/vk.png" class="socNetworks" alt="">
                        <img src="@/assets/icons/ok.png" class="socNetworks" alt="">
                        <img src="@/assets/icons/facebook.png" class="socNetworks" alt="">
                        <img src="@/assets/icons/youtube.png" class="socNetworks" alt="">
                        <img src="@/assets/icons/twitter.png" class="socNetworks" alt="">
                    </div>
                </div>
            </div>
            <div class="FooterBox">
                <h4 class="blockTitle">Разделы</h4>
                <a href="" class="FooterTxt">Категории</a>
                <a href="" class="FooterTxt">Вопросы и ответы</a>
                <a href="" class="FooterTxt">Полезные советы</a>
                <a href="" class="FooterTxt">Рекомендации</a>
            </div>
            <div class="FooterBox">
                <h4 class="blockTitle">Ещё</h4>
                <a href="" class="FooterTxt">Мега-скидки</a>
                <a href="" class="FooterTxt">Что ищут</a>
                <a href="" class="FooterTxt">Агрегаторы</a>
                <a href="" class="FooterTxt">Статьи</a>
            </div>
            <div class="FooterBox">
                <h4 class="blockTitle">Кабинет</h4>
                <a href="" class="FooterTxt">Войти </a>
                <a href="" class="FooterTxt">Зарегестрироваться</a>
                <a href="" class="FooterTxt">Избранное</a>
                <div class="FooterApp">
                    <img src="@/assets/imgs/app_store.png" alt="app_store">
                    <img src="@/assets/imgs/google_play.png" alt="google_play">
                </div>
            </div>

        </div>
        <div id="FooterBottom">
            <p class="FooterTxt">Copyright © 2021 by Monaco-Board</p>
        </div>
    </div>
 </template>
  
<style scoped>
.socNetworks:first-child{
    margin-left: 2px !important;
}
.socNetworks{
    min-width: 8px;
    margin: 0 7px;
}
.iconsBox{
    margin-top: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
}
.supportBox{
    display: grid;
    border-left: 3px solid #6237AC;
    padding-left: 11px;
}
.blockTitle{
    text-align: start;
    margin: 0;
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 700;
    line-height: 21.09px;
}
.FooterApp img:first-child{
    margin-right: 7px;
}
.FooterApp img{
    cursor: pointer;
}
#MainBox{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
}
#FooterBottom{
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    border-top: 1px solid #939393;
    padding: 15px 0;
}
#FooterBox{
    display: grid;
    flex-wrap: wrap;
    width: 70%;
    justify-content: center;
    grid-gap: 30px;
    grid-template-columns: repeat(4, 1fr) ;
    font-family: "Roboto";
}
.FooterBox{
    display: grid;
    justify-content: start;
    grid-gap: 35px;
}
.FooterTxt{
    margin: 0;
    text-align: start;
    color: #767676;
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 400;
    line-height: 16.41px;
    text-decoration: none;
}
.help{
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 700;
    text-align: start;
    color: #6237AC;
    text-decoration: none;


}
</style>
  

<style scoped>
@media (width <= 960px){
    #FooterBox, #FooterBottom{
        width: 90%;
    }
}
@media (width <= 650px){
    #FooterBox{
        grid-template-columns: 1fr 1fr;
    }
}
@media (width <= 440px){
    #FooterBox{
        grid-template-columns: 1fr;
        justify-content: center;
    }
    .FooterBox{
        justify-content: center;
    }
    .FooterBox h4, .FooterBox p, .FooterBox a{
        text-align: center;
    }
}
</style>