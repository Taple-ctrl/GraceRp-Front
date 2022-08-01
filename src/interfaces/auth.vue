<template>
  <div class="AuthMain">
    <div class="authAndRegBlock" v-if="isAuthRegBlock">

      <div class="Auth-block" v-if="isAuth">
        <div class="Auth-block-text">
          <img class="user-plus" src="../assets/images/auth/icons/user-plus.png" alt="user-plus">
          <div class="authBlock_title">Авторизация</div>
          <div class="authBlock_subtitle">Добро пожаловать на <span class="graceRp-Text">GRACE RP</span>, удачной игры на <br> проекте не нарушайте правила проекта.</div>
        </div>
        <div class="Auth">
          <div class="login-input">
            <img src="../assets/images/auth/icons/bxs_user-account.png" alt="bxs_user-account">
            <input type="text" v-model="authorizationModel.login" placeholder="Логин">
          </div>
          <div class="password-input">
            <img src="../assets/images/auth/icons/fluent_lock-multiple-20-filled.png" alt="fluent_lock">
            <input type="password" v-model="authorizationModel.password" placeholder="Пароль">
          </div>
          <div class="forgot-password">
            <input type="checkbox">
            <div class="forgot-password-text">Запомнить пароль?</div>
          </div>
          <div class="Auth_btn" v-on:click="getAuth">Войти в аккаунт</div>
        </div>
        <div class="authBlock_btnS">
          <div class="authBlock_btn_tittle">Потеряли или не создали аккаунт?</div>
          <div class="authBlock_btn_click">
            <div class="authBlock_btn" v-on:click="showReg">Зарегистрироваться</div>
            <div class="authBlock-or">или</div>
            <div class="authBlock_btn" v-on:click="showRecovery">Восстановить аккаунт</div>
          </div>
        </div>
      </div>

      <div class="Auth-block" v-if="isReg">
        <img v-on:click="showAuth" class="back-auth" src="../assets/images/auth/icons/back-auth.png" alt="back_auth">
        <div class="Auth-block-text">
          <img class="user-plus" src="../assets/images/auth/icons/user-plus-reg.png" alt="user-plus">
          <div class="authBlock_title">Регистрация</div>
          <div class="authBlock_subtitle">Ух ты, с нами появляется новый игрок? Давай быстрее<br> создавай аккаунт и начинай свой путь вместе с нами</div>
        </div>
        <div class="Reg">
          <div class="login-input">
            <img src="../assets/images/auth/icons/bxs_user-account.png" alt="bxs_user-account">
            <input type="text" v-model="ischeckregistrationModel.login" placeholder="Логин">
          </div>
          <div class="login-input">
            <img src="../assets/images/auth/icons/bxs_user-account.png" alt="bxs_user-account">
            <input type="text" v-model="ischeckregistrationModel.email" placeholder="E-mail">
          </div>
          <div class="password-input">
            <img src="../assets/images/auth/icons/fluent_lock-multiple-20-filled.png" alt="fluent_lock">
            <input type="password" v-model="ischeckregistrationModel.password" placeholder="Пароль">
          </div>
          <div class="password-input">
            <img src="../assets/images/auth/icons/fluent_lock-multiple-20-filled.png" alt="fluent_lock">
            <input type="password" v-model="ischeckregistrationModel.password2" placeholder="Повторите пароль">
          </div>
          <div class="forgot-password">
            <input type="checkbox">
            <div class="forgot-password-text">Я ознакомился с правилами проекта</div>
          </div>
          <div class="Auth_btn" v-on:click="getReg">Продолжить регистрацию</div>
        </div>
      </div>

      <div class="right-slide">
        <img src="../assets/images/auth/icons/right_slide_tittle.png" alt="">
        <div class="right-slide-text">
          <div class="right-slide-text-site">WWW.GRACERP.COM</div>
          <div class="right-slide-text-news">Вот и настал твой путь, на нашем проекте играет уже много <br> медиа личностей и даже звезды кино и сериалов!</div>
          <div class="right-slide-text-promo">Создай аккаунт и введи промокод - <span>#NEW2022</span></div>
        </div>
      </div>
    </div>

    <div class="recover" v-if="isRecovery">
      <img v-on:click="showRecovery" class="back-auth" src="../assets/images/auth/icons/back-auth.png" alt="back_auth">
      <div class="Auth-block-text">
        <img class="user-plus" src="../assets/images/auth/icons/user-plus.png" alt="user-plus">
        <div class="authBlock_title">Востановление</div>
        <div class="authBlock_subtitle">Упс... Ты кажется забыл пароль от аккаунта? Тогда<br> восстанавливай его быстрее и будь снова в строю.</div>
      </div>
      <div class="login-input">
        <img src="../assets/images/auth/icons/bxs_user-account.png" alt="bxs_user-account">
        <input type="text" v-model="ischeckregistrationModel.email" placeholder="E-mail">
      </div>
      <div class="Auth_btn">Продолжить восстановление</div>
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
      isAuthRegBlock: true,
      isAuth: true,
      isReg: false,
      isRecovery: false,
      ischeckregistrationModel: {
        login: '',
        email: '',
        password: '',
        password2: ''
      },
      registrationModel: {
        login: '',
        email: '',
        password: '',
        password2: ''
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
    getAuth(){
      if (this.authorizationModel.login == ''){
        console.log('Введите Логин')
      }else if(this.authorizationModel.password == ''){
        console.log('Введите Пароль')
      }else{
        this.$trigger(CLIENT_EVENTS.AUTH_SEND_REGISTER_DATA, JSON.stringify({
          login:this.authorizationModel.login,
          password:this.authorizationModel.password,
        }))
        console.log('Авторизация')
      }
    },
    getReg(){
      if (this.ischeckregistrationModel.login == ''){
        console.log('Введите Логин')
      }else if(this.ischeckregistrationModel.email == ''){
        console.log('Введите Email')
      }else if(this.ischeckregistrationModel.password == ''){
        console.log('Введите пароль')
      }else if(this.ischeckregistrationModel.password2 == ''){
        console.log('Введите пароль2')
      }else{
        this.$trigger(CLIENT_EVENTS.AUTH_SEND_REGISTER_DATA, JSON.stringify({
          login:this.ischeckregistrationModel.login,
          email:this.ischeckregistrationModel.email,
          password:this.ischeckregistrationModel.password,
          password2:this.ischeckregistrationModel.password2,
        }))
        console.log('Регистрация')
      }
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
    },
    showRecovery(){
      if (this.isRecovery == false){
        this.isRecovery = true;
        this.isAuthRegBlock = false;
      }else{
        this.isRecovery = false;
        this.isAuthRegBlock = true;
      }
    }
  }
}
</script>

<style>

body{
  background-image: url('../assets/images/auth/backgroundAuth.png');
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

.login-input{
  background: #161616;
  /*backdrop-filter: blur(16px);*/
  border-radius: 5px;
  padding: 3%;
  display: flex;
  align-items: center;
  gap: 17px;
}

.login-input img{
  background: #1C1C1C;
  border-radius: 5px;
  padding:5px;
}

.login-input input[type="text"]{
  background-color: rgb(0,0,0,0);
  border: 0;
  outline:none;
  color: darkgray;
  padding: 0.5em;
}

.login-input input::-webkit-input-placeholder{
  font-family: 'Nunito',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: rgba(255, 255, 255, 0.2);
}

.password-input{
  background: #161616;
  /*backdrop-filter: blur(16px);*/
  border-radius: 5px;
  padding: 3%;
  display: flex;
  align-items: center;
  gap: 17px;
}

.password-input img{
  background: #1C1C1C;
  border-radius: 5px;
  padding: 5px;
}

.password-input input[type="password"]{
  background-color: rgb(0,0,0,0);
  border: 0;
  outline:none;
}

.password-input input::-webkit-input-placeholder{
  font-family: 'Nunito',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: rgba(255, 255, 255, 0.2);
}

.forgot-password{
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.forgot-password-text{
  font-family: 'Nunito',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #535353;
}

.authAndRegBlock{
  display: flex;
  width: 50vw;
}

.Auth-block{
  width: 51%;
  background: #101010;
  padding: 3vw 4vh;
  border-radius:9px 0 0 9px;
  gap: .5em;
}

.recover{
  background: #101010;
  padding: 3vw 4vh;
  border-radius:9px;
  width: 25%;
  height: 40%;
}

.right-slide{
  padding-top: 23px;
  padding-bottom: 29px;
  width: 49%;
  background-image: url('../assets/images/auth/right_slide_back.png'), linear-gradient(151.71deg, #A35CFE 1.34%, #591BA7 101.6%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 0 9px 9px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.right-slide-text{
  display: flex;
  flex-direction: column;
  padding-left: 34px;
  gap: 1em;
}

.right-slide-text-site{
  font-family: 'Inter',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 0.15em;

  color: rgba(255, 255, 255, 0.6);
}

.right-slide-text-news, .right-slide-text-promo{
  font-family: 'Nunito',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  color: #FFFFFF;
}

.right-slide-text-promo span{
  font-weight: 800;
}

.user-plus{
  background: rgba(217, 217, 217, 0.08);
  border-radius: 0.8vw;
  padding: 0.8vw;
}

.authBlock_title{
  font-family: 'Nunito',sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 1.3vw;
  line-height: 150%;
  color: white;
  text-align: center;
}

.authBlock_subtitle{
  font-family: 'Nunito',sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 0.75vw;
  text-align: center;
  color: #535353;
}

.graceRp-Text{
  font-family: 'Nunito',sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 0.75vw;
  line-height: 21px;
  color: #A35CFE;
}


.authBlock_btnS{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
  margin-top: 2vh;
  margin-bottom: 1em;
}

.authBlock_btn_tittle{
  font-family: 'Nunito',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1.5vh;
  color: #FFFFFF;
}

.authBlock_btn_click{
  display: flex;
  align-items: center;
  gap: 0.2em;
}

.authBlock_btn{
  font-family: 'Nunito',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.8vw;
  color: #A35CFE;
  cursor: pointer;
}

.authBlock-or{
  font-family: 'Nunito',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.2vh;

  color: #535353;
}

.Auth-block-text{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
  margin-bottom: 1vw;
}

.Auth{
  display: flex;
  flex-direction: column;
  gap: 1vw;
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
  background: #A35CFE;
  border-radius: 3px;
  font-family: 'Nunito',sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #FFFFFF;
  cursor: pointer;
  text-align: center;
  padding: 4% 0;
}

.back-auth{
  position: absolute;
  cursor: pointer;
}

</style>
