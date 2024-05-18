<template>
    <div id="mainBox">
        <div id="titleBox">
            <img src="@/assets/icons/news.png" class="anounsement" alt="Anounsement">
            <h2 class="componenttitle">О нас</h2>
        </div>

        <div id="aboutUsBox" :style="{ maxHeight: mHeight + 'px' }">
            <p class="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velitSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
        </div>
        <div id="openOrCloseBox">
            <button @click="maxHeightFunc">
                <p class="desc">{{ opText }}</p>
                <img src="@/assets/icons/arrow_down.png" id="arrow" :style="{ transform: `rotate(${deg}deg)` }" alt="">
            </button>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            mHeight: 45,
            opText: 'Развернуть',
            deg: 0
        }
    },
    methods:{
        maxHeightFunc(){
            if(this.mHeight === 45){
                this.mHeight = 400;
                this.opText = 'Свернуть';
                this.deg = 180;
            }else if(this.mHeight === 400){
                this.mHeight = 45;
                this.opText = 'Развернуть';
                this.deg = 0;
            }
        }
    }
}
</script>

<style scoped>
#arrow{
    transform: rotate();
    width: 16px;
    height: 8px;
    transition: 500ms;
}
#openOrCloseBox button{
    padding: 5px 10px;
    background: transparent;
    border: 0;
    cursor: pointer;
}
#openOrCloseBox{
    display: grid;
    justify-content: center;
    width: 100%;
}
.desc{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #737373;
    margin: 0;
    transition: 500ms;
}
#aboutUsBox{
    width: 70%;
    overflow: hidden;
    transition: 500ms;
}
#mainBox{
    font-family: 'Roboto';
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
    #titleBox, #aboutUsBox{
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