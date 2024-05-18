<template>
    <div id="mainBox">
        <div id="athorizationBox">
            <button class="closeBtnBox"><img src="@/assets/icons/close.png" @click="$emit('close', false)" id="closeBtn" alt="Close"></button>
            <h3 id="title">Войти</h3>

            <p class="text">Электронная почта</p>
            <div class="inputBox" :style="{'border-color': mailBorder ? '#6237AC' : '#EB5757'}">
                <input type="text" v-model="mail" @input="checkEmail">
            </div>

            <p class="text">Пароль</p>
            <div class="inputBox" :style="{'border-color': passwordBorder ? '#6237AC' : '#EB5757'}">
                <input type="password" v-if="!passwordShow" v-model="password">
                <input type="text" v-if="passwordShow" v-model="password">
                <img src="@/assets/icons/eye.png" class="eye" @click="passwordShow = !passwordShow" alt="Show password">
            </div>
            <div id="recaptchaContainer"></div> <!-- Добавляем контейнер для reCAPTCHA -->
            <button type="submit" id="senBtn" @click="athorization()">Войти</button>

            <div id="otherBtnsBox">
                <p class="appeal">Нет аккаунта? <a class="otherBtn" @click="$emit('close', true)">Зарегистрируйтесь!</a></p>
                <a class="otherBtn oba">Забыли пароль?</a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default{
    data(){
        return{
            mail: '',
            isMail: false,
            password: '',
            passwordShow: false,
            mailBorder: true,
            passwordBorder: true,
            domain: this.$store.state.domain,
            recaptchaToken: null
        }
    },
    mounted() {
        // Вызываем метод checkRecaptchaToken при монтировании компонента для получения токена reCAPTCHA
        //this.checkRecaptchaToken();
    },
    methods:{
        //checkRecaptchaToken() {
        //    grecaptcha.execute(this.$store.state.sitekey, { action: 'submit' }).then((token) => {
        //        this.recaptchaToken = token;
        //    });
        //},
        checkEmail() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailPattern.test(this.mail)) {
                this.isMail = true;
            } else {
                this.isMail = false;
            }
        },
        athorization(){
            // Добавляем проверку наличия токена reCAPTCHA перед выполнением аутентификации
            //if (!this.recaptchaToken) {
            //    console.error('Пожалуйста, подтвердите, что вы не робот');
            //    return;
            //}

            if (!this.isMail){this.mailBorder = false;}
            else{this.mailBorder = true;}

            if(this.password === ''){this.passwordBorder = false;}
            else{this.passwordBorder = true;}

            if(this.mailBorder && this.passwordBorder){
                const data = {
                    'mail': this.mail,
                    'password': this.password
                }

                axios.post(`${this.domain}/login`, data)
                    .then(response => {
                        localStorage.setItem('user', response.data.name + '_' + response.data.surname);
                        localStorage.setItem('mail', response.data.mail);
                        localStorage.setItem('id', response.data.id);
                        localStorage.setItem('key', response.data.password);

                        this.$emit('close', false);
                        this.$emit('user_authorizated', true)
                        this.mailBorder = true;
                        this.passwordBorder = true;
                    })
                    .catch(error => {
                        console.error('Error:', error.response.data.Error);
                        this.mailBorder = false;
                        this.passwordBorder = false;
                    });
            }
        }
    }
}
</script>

<style scoped>
.closeBtnBox{
    background: transparent;
    border:0;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
}
#closeBtn{
    width: 15px;
    height: 15px;
    cursor: pointer;
}
.oba{
    margin: 0;
    margin-top: 10px;
}
.otherBtn{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #6237AC;
    cursor: pointer;
}
.appeal{
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    color: #404040;
    margin: 0;
}
#otherBtnsBox{
    width: 100%;
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
#senBtn{
    width: 100%;
    height: 39px;
    border:0;
    background: #6237AC;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 30px;
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 14px;
    color: #FFFFFF;
}
.eye{
    width: 20px;
    height: 15px;
    margin: auto 10px;
    margin-right: 0;
    cursor: pointer;
}
.inputBox{
    width: 100%;
    padding: 0 10px;
    height: 39px;
    background: #F4F4F4;
    border: 3px solid #6237AC;
    border-radius: 10px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr auto;
}
input{
    border: 0;
    background: transparent;
    width: 100%;
    transition: 100ms;
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 14px;
    color: #404040;
}
input:focus{
    outline: none;
}
.text{
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #404040;
    margin-bottom: 10px;
}
#title{
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #404040;
    text-align: center;
}
#athorizationBox{
    width: 305px;
    padding: 20px;
    border-radius: 15px;
    position: relative;
    background: #FFFFFF;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
}
#mainBox{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    z-index: 100;
    font-family: 'Roboto';
}
</style>

<style scoped>
@media (width <= 380px){
    #athorizationBox{
        width: 265px;
    }
}
</style>