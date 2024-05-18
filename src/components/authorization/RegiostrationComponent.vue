<template>
    <div id="mainBox">
        <div id="registrationBox">
            <button class="closeBtnBox"><img src="@/assets/icons/close.png" @click="$emit('close', false)" id="closeBtn" alt="Close"></button>
            <h3 id="title">Зарегестрироваться</h3>

            <p class="text">Имя и Фамилия</p>
            <div id="nameBox">
                <div class="inputBox" :style="{'border-color': nameCheck ? '#6237AC' : '#EB5757'}">
                    <input type="text" v-model="name" @input="checkName()">
                </div>
                <div class="inputBox" :style="{'border-color': surnameCheck ? '#6237AC' : '#EB5757'}">
                    <input type="text" v-model="surname" @input="checkSurName()">
                </div>
            </div>

            <p class="text">Электронная почта</p>
            <div class="inputBox" :style="{'border-color': mailBorder ? '#6237AC' : '#EB5757'}">
                <input type="text" v-model="mail" @input="checkEmail()">
            </div>

            <p class="text">Пароль</p>
            <div class="inputBox" :style="{'border-color': passwordBorder ? '#6237AC' : '#EB5757'}">
                <input type="password" v-if="!passwordShow" v-model="password">
                <input type="text" v-if="passwordShow" v-model="password">
                <img src="@/assets/icons/eye.png" class="eye" @click="passwordShow = !passwordShow" alt="Show password">
            </div>

            <p class="text">Повоторить Пароль</p>
            <div class="inputBox" :style="{'border-color': checkPasswordBorder ? '#6237AC' : '#EB5757'}">
                <input type="password" v-if="!checkpasswordShow" v-model="checkPassword">
                <input type="text" v-if="checkpasswordShow" v-model="checkPassword">
                <img src="@/assets/icons/eye.png" class="eye" @click="checkpasswordShow = !checkpasswordShow" alt="Show password">
            </div>

            <button id="senBtn" @click="registration">Зарегестрироваться</button>

            <div id="otherBtnsBox">
                <p class="appeal">Есть аккаунта? <a class="otherBtn" @click="$emit('close', true)">Войти!</a></p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            mail: '',
            password: '',
            checkPassword: '',
            name: '',
            surname: '',
            nameCheck: true,
            surnameCheck: true,
            passwordShow: false,
            checkpasswordShow: false,
            isMail: false,
            mailBorder: true,
            passwordBorder: true,
            checkPasswordBorder: true,
            domain: this.$store.state.domain,
        }
    },
    methods:{
        checkName(){
            if(this.name === '' || this.name.length < 3 || this.name.length > 20 || !/^\p{L}+$/u.test(this.name)){
                this.nameCheck = false;
            }else{this.nameCheck = true;}
        },
        checkSurName(){
            if(this.surname === '' || this.surname.length < 3 || this.surname.length > 20 || !/^\p{L}+$/u.test(this.surname)){
                this.surnameCheck = false;
            }else{this.surnameCheck = true;}
        },
        checkEmail() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailPattern.test(this.mail)) {
                this.isMail = true;
            } else {
                this.isMail = false;
            }
        },
        registration(){
            if(!this.nameCheck || this.name === ''){this.nameCheck = false; return;}
            else{this.nameCheck = true;}

            if(!this.surnameCheck || this.surnameCheck === ''){this.surname = false; return;}
            else{this.surnameCheck = true;}
            
            if(!this.isMail){this.mailBorder = false; return;}
            else{this.mailBorder = true;}

            // Проверка пароля на валидность
            if(this.password === '' || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{1,30}$/.test(this.password)){this.passwordBorder = false; return;}
            else{this.passwordBorder = true;}
            
            if(this.checkPassword === ''){this.checkPasswordBorder = false; return;}
            else{this.checkPasswordBorder = true;}    
            
            if(this.password !== this.checkPassword){
                this.passwordBorder = false;
                this.checkPasswordBorder = false;
                return;
            }else{
                this.passwordBorder = true;
                this.checkPasswordBorder = true;
            }
            
            if(this.isMail && this.passwordBorder && this.checkPasswordBorder && this.nameCheck && this.surnameCheck){
                const data = {
                    'name': this.name,
                    'surname': this.surname,
                    'mail': this.mail,
                    'password': this.password
                }

                axios.post(`${this.domain}/register`, data)
                    .then(response => {
                        localStorage.setItem('user', response.data.name + '_' + response.data.surname);
                        localStorage.setItem('mail', response.data.mail);
                        localStorage.setItem('id', response.data.id);
                        localStorage.setItem('key', response.data.password);
                        
                        this.$emit('close', false);
                        this.$emit('user_authorizated', true)
                        this.mailBorder = true;
                        this.passwordBorder = true;
                        this.checkPasswordBorder = true;
                    })
                    .catch(error => {
                        if(error.response.status === 401){
                            this.mailBorder = false;
                        }else{
                            this.mailBorder = false;
                            this.passwordBorder = false;
                            this.checkPasswordBorder = false;
                        }
                        console.error('Error:', error.response.data.Error);
                    });
            }
        }
    }
}
</script>


<style scoped>
#nameBox{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
}
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
#registrationBox{
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
    #registrationBox{
        width: 265px;
    }
}
</style>