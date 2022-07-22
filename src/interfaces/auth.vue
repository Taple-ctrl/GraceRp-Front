<template>
  <div class="AuthMain">
    <div class="WelcomeServer" v-if="IsWelcome">
      <div class="welcome_info"></div>
      <div class="welcome_btn" v-on:click="AuthAndRegOpen">Начать свою историю</div>
      <div class="welcome_hint">Нажмите Enter</div>
    </div>
    <div class="authAndRegBlock" v-if="isAuthRegBlock">
      <div class="authAndRegBlock_title">Вход в аккаунт</div>
      <div class="authAndRegBlock_subtitle">Войдите в существующий аккаунт, или зарегистрируйте новый</div>
      <div class="authAndRegBlock_btnS">
        <div class="AuthOpen_btn Open_btn_Active" v-on:click="showAuth">Вход</div>
        <div class="RegOpen_btn" v-on:click="showReg">Регистрация</div>
      </div>
      <div class="Auth" v-if="isAuth">
        <input type="text" v-model="authorizationModel.login" placeholder="Введите ваш ник">
        <input type="password" v-model="authorizationModel.password" placeholder="Введите ваш пароль">
        <div class="Auth_btn" v-on:click="getAuth">Войти в аккаунт</div>
      </div>
      <div class="Reg" v-if="isReg">
        <input type="text" v-model="registrationModel.email" placeholder="Введите ваш E-mail">
        <input type="text" v-model="registrationModel.login" placeholder="Введите ваш логин">
        <input type="password" v-model="registrationModel.password" placeholder="Введите ваш пароль">
        <input type="password" v-model="registrationModel.password2" placeholder="Подтвердите ваш пароль">
        <input type="text" v-model="registrationModel.promo" placeholder="Промокод (необязательно)">
        <div class="Auth_btn" v-on:click="getReg">Зарегистрировать аккаунт</div>
      </div>
    </div>
  </div>
</template>

<script>

import {CLIENT_EVENTS} from "@/shared/const/events";

export default {
  name: 'AuthMain',
  components:{

  },
  data(){
    return{
      IsWelcome: false,
      isAuthRegBlock: true,
      isAuth: true,
      isReg: false,
      registrationModel: {
        login: '',
        email: '',
        password: '',
        password2: '',
        promo: ''
      },
      authorizationModel: {
        login: '',
        password: ''
      },
      recoveryModel: {
        email: ''
      }
    }
  },
  methods:{
    AuthAndRegOpen(){
      this.IsWelcome = !this.IsWelcome;
      this.isAuthRegBlock = !this.isAuthRegBlock;
    },
    getAuth(){
      this.$trigger(CLIENT_EVENTS.AUTH_SEND_REGISTER_DATA, JSON.stringify({
        login:this.registrationModel.login,
        email:this.registrationModel.email,
        password:this.registrationModel.password,
        password2:this.registrationModel.password2,
        promo:this.registrationModel.promo,
      }))
    },
    getReg(){
      // mp.trigger(CLIENT_EVENTS.AUTH_SEND_LOGIN_DATA, JSON.stringify({
      //   login:this.authorizationModel.login,
      //   password:this.authorizationModel.password
      // }))
    },
    showAuth(){
      if(this.isAuth === false){
        this.isAuth = true;
        this.isReg = false;
      }
    },
    showReg(){
      if(this.isReg === false){
        this.isReg = true;
        this.isAuth = false;
      }
    }
  }
}
</script>

<style>

body{
  background-image: url('../assets/images/auth/backgroundAuth.jpg');
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.AuthMain{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.WelcomeServer{
  width: 30%;
  height: 60%;
}

.welcome_info{
  height: 80%;
  background: black;
}

.welcome_btn{
  color: white;
  font-weight: 800;
  font-size: 3.5vh;
  background: deepskyblue;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.welcome_hint{
  color: gray;
  text-align: center;
  margin-top: .5em;
}

.authAndRegBlock{
  width: 30%;
  min-height: 60%;
  background: black;
  padding: 2% 3%;
}

.authAndRegBlock_title{
  color: white;
  font-weight: 800;
  text-align: center;
}

.authAndRegBlock_subtitle{
  color: gray;
  font-weight: 500;
  text-align: center;
  margin: 1em 0;
}

.authAndRegBlock_btnS{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  margin-bottom: 1em;
}

.AuthOpen_btn{
  color: darkgray;
  background: gray;
  width: 50%;
  padding: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 800;
}

.RegOpen_btn{
  color: darkgray;
  background: gray;
  width: 50%;
  padding: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 800;
}

.Open_btn_Active{
  background: royalblue;
  color: white;
}

.Auth{
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.Auth input{
  background: gray;
  color: darkgray;
  padding: 0.5em;
}

.Reg {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.Reg input{
  background: gray;
  color: darkgray;
  padding: 0.5em;
}

.Auth_btn{
  background: gray;
  color: darkgray;
  cursor: pointer;
  text-align: center;
  padding: 0.5em;
}

</style>
