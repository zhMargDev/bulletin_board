<template>
    <div id="mainBox">
        <div id="aboutNewAdsBox">
            <img src="@/assets/imgs/abot_new_ad.png" id="backgroundImage">
            <div id="textBox">
                <h3>Как разместить новое объявление в каталоге</h3>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <button>Подробнее</button>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
button{
    position: absolute;
    bottom: 35px;
    right: 35px;
    width: 229px;
    height: 53px;
    border: 1px solid #FFFFFF;
    background: transparent;
    border-radius: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #FFFFFF;
    cursor: pointer;
}
p{
    width: 45%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
    margin: 0;
    margin-top: auto;
}
h3{
    margin: 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #FFFFFF;
}
#textBox{
    padding: 35px 50px;
    padding-right: 0;
    width: 80%;
    height: calc(100% - 70px);
    background: linear-gradient(101.52deg, #6237AC 24.48%, rgba(98, 55, 172, 0) 96.47%);
    position: relative;
    z-index: 2;
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap;
}
#backgroundImage{
    border-radius: 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 0;
    transform: translate(-50%, -50%);
    width: 100vw;
}
#mainBox{
    display: flex;
    justify-content: center;
    padding: 40px 0;
}
#aboutNewAdsBox{
    width: 70%;
    height: 200px;
    border-radius: 15px;
    position: relative;
    overflow: hidden;
}
</style>

<style scoped>
@media (width <= 1050px){
    #aboutNewAdsBox{
        width: 95%;
    }
}
@media (width <= 700px){
    button{
        width: 159px;
        height: 43px;
        bottom: 17px;
        right: 16px;
        z-index: 10;
    }
    #textBox{
        padding: 15px 20px;
        padding-right: 0;
        height: calc(100% - 30px);
    }
    h3{
        width: 80%;
    }
    p{
        width: 70%;
    }
}
@media (width <= 500px){
    #textBox{
        width: calc(100% - 40px);
        padding: 15px 20px;
    }
    h3{
        width: 100%;
    }
    p{
        width: 100%;
        margin-bottom: 50px;
    }
    #aboutNewAdsBox{
        height: 300px;
    }
    #backgroundImage{
        width: unset;
    }
}
</style>