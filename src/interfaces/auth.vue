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
            <input type="checkbox" v-model="successRules">
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
        <div class="authBlock_title">Восстановление</div>
        <div class="authBlock_subtitle">Упс... Ты кажется забыл пароль от аккаунта? Тогда<br> восстанавливай его быстрее и будь снова в строю.</div>
      </div>
      <div class="login-input">
        <img src="../assets/images/auth/icons/bxs_user-account.png" alt="bxs_user-account">
        <input type="text" v-model="recoveryModel.email" placeholder="E-mail">
      </div>
      <div class="Auth_btn" v-on:click="sendRecoveryEmail">Продолжить восстановление</div>
    </div>

    <div class="recover-code" v-if="isRecoveryCode">
      <img v-on:click="backRecoveryCode" class="back-auth" src="../assets/images/auth/icons/back-auth.png" alt="back_auth">
      <div class="recover-code-block">
        <div class="recover-code-block-text">
          <img class="user-plus" src="../assets/images/auth/icons/user-plus.png" alt="user-plus">
          <div class="authBlock_title">Восстановление</div>
          <div class="authBlock_subtitle">Упс... Ты кажется забыл пароль от аккаунта? Тогда<br> восстанавливай его быстрее и будь снова в строю.</div>
        </div>
        <div class="recover-code-input">
          <input v-model="recoveryCode.number1" type="text" maxlength="1">
          <input v-model="recoveryCode.number2" type="text"  maxlength="1">
          <input v-model="recoveryCode.number3" type="text"  maxlength="1">
          <input v-model="recoveryCode.number4" type="text"  maxlength="1">
          <input v-model="recoveryCode.number5" type="text"  maxlength="1">
          <input v-model="recoveryCode.number6" type="text"  maxlength="1">
        </div>
        <div class="authBlock_subtitle">Введите шестизначный код, который вы получили на свою почту.</div>
        <div class="Auth_btn" v-on:click="showNewPassword">Продолжить восстановление</div>
      </div>
    </div>

    <div class="recover-code" v-if="isRecoveryCodeReg">
      <img v-on:click="backRecoveryCode" class="back-auth" src="../assets/images/auth/icons/back-auth.png" alt="back_auth">
      <div class="recover-code-block">
        <div class="recover-code-block-text">
          <img class="user-plus" src="../assets/images/auth/icons/user-plus.png" alt="user-plus">
          <div class="authBlock_title">Регистрация</div>
          <div class="authBlock_subtitle">Упс... Ты кажется забыл пароль от аккаунта? Тогда<br> восстанавливай его быстрее и будь снова в строю.</div>
        </div>
        <div class="recover-code-input">
          <input v-model="recoveryCode.number1" type="text" maxlength="1">
          <input v-model="recoveryCode.number2" type="text"  maxlength="1">
          <input v-model="recoveryCode.number3" type="text"  maxlength="1">
          <input v-model="recoveryCode.number4" type="text"  maxlength="1">
          <input v-model="recoveryCode.number5" type="text"  maxlength="1">
          <input v-model="recoveryCode.number6" type="text"  maxlength="1">
        </div>
        <div class="authBlock_subtitle">Введите шестизначный код, который вы получили на свою почту.</div>
        <div class="Auth_btn" v-on:click="sendRegistrationCode">Завершить регистрацию</div>
      </div>
    </div>

    <div class="recover-code" v-if="isNewPassword">
      <img v-on:click="backNewPassword" class="back-auth" src="../assets/images/auth/icons/back-auth.png" alt="back_auth">
      <div class="recover-code-block">
        <div class="recover-code-block-text">
          <img class="user-plus" src="../assets/images/auth/icons/user-plus.png" alt="user-plus">
          <div class="authBlock_title">Восстановление</div>
          <div class="authBlock_subtitle">Упс... Ты кажется забыл пароль от аккаунта? Тогда<br> восстанавливай его быстрее и будь снова в строю.</div>
        </div>
        <div class="newPassword-Input-block">
          <div class="newPassword-input">
            <img src="../assets/images/auth/icons/fluent_lock-multiple-20-filled.png" alt="fluent_lock">
            <input type="password" v-model="newPassword.password1" placeholder="Пароль">
          </div>
          <div class="newPassword-input">
            <img src="../assets/images/auth/icons/fluent_lock-multiple-20-filled.png" alt="fluent_lock">
            <input type="password" v-model="newPassword.password2" placeholder="Повторите пароль">
          </div>
        </div>
        <div class="authBlock_subtitle newPassword-subtitle">Введите новый пароль и не забудьте его записать, чтобы в<br>следующий раз не забыть или потерять его!</div>
        <div class="Auth_btn" v-on:click="FinalNewPassword">Восстановить</div>
      </div>
    </div>
  </div>
</template>

<script>
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
      isRecoveryCode:false,
      successRules: false,
      isNewPassword: false,
      isRecoveryCodeReg:false,
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
      },
      recoveryCode: {
        number1: '',
        number2: '',
        number3: '',
        number4: '',
        number5: '',
        number6: '',
      },
      newPassword:{
        password1: '',
        password2: ''
      }
    }
  },
  methods:{
    getAuth(){
      if (this.authorizationModel.login === ''){
        console.log('Введите Логин')
      }else if(this.authorizationModel.password === ''){
        console.log('Введите Пароль')
      }else{
        this.$trigger('client.auth.transferLoginData', JSON.stringify({
          login: this.authorizationModel.login,
          password: this.authorizationModel.password,
          savePassword: false
        }))
        console.log('Авторизация')
      }
    },
    getReg(){
      if (this.ischeckregistrationModel.login === ''){
        console.log('Введите Логин')
      }else if(this.ischeckregistrationModel.email === ''){
        console.log('Введите Email')
      }else if(this.ischeckregistrationModel.password === ''){
        console.log('Введите пароль')
      }else if(this.ischeckregistrationModel.password2 === ''){
        console.log('Введите пароль2')
      }else if(this.ischeckregistrationModel.password !== this.ischeckregistrationModel.password2){
        console.log('Пароли не совпадают')
      }else if(this.successRules === true){
        this.$trigger('client.auth.transferRegistrationData', JSON.stringify({
          login: this.ischeckregistrationModel.login,
          email: this.ischeckregistrationModel.email,
          password: this.ischeckregistrationModel.password,
          promo: '',
          acceptPolicy: this.successRules
        }))
        console.log('Регистрация')
      }else{
        console.log('Подтвердите правила проекта')
      }

    },
    showAuth(){
      this.isAuthRegBlock = true
      this.isAuth = true
      this.isReg = false
      this.isRecovery = false
      this.isRecoveryCode = false
      this.isNewPassword = false
      this.isRecoveryCodeReg = false
    },
    showReg(){
      this.isAuthRegBlock = true
      this.isAuth = false
      this.isReg = true
      this.isRecovery = false
      this.isRecoveryCode = false
      this.isNewPassword = false
      this.isRecoveryCodeReg = false
    },
    showRecovery() {
      if (this.isRecovery === false){
        this.isRecovery = true;
        this.isAuthRegBlock = false;
      }else{
        this.isRecovery = false;
        this.isAuthRegBlock = true;
      }
    },
    backRecoveryCode(){
      this.isRecoveryCode = false;
      this.isRecovery = true;
    },
    backNewPassword(){
      this.isNewPassword = false;
      this.isRecoveryCode = true;
    },
    showRecoveryCode(email){
      this.recoveryModel.email = email
      if(this.recoveryModel.email === ''){
        console.log('Введите почту')
      }else{
        this.isRecoveryCode = true;
        this.isRecovery = false;
      }
    },
    showRegistrationCode(){
      if(this.recoveryModel.email === ''){
        this.isAuthRegBlock = false
        this.isAuth = false
        this.isReg = false
        this.isRecovery = false
        this.isRecoveryCode = false
        this.isNewPassword = false
        this.isRecoveryCodeReg = true
      }else{
        this.isRecoveryCodeReg = true;
        this.isAuthRegBlock = false;
      }
    },
    sendRegistrationCode() {
      this.$trigger('client.auth.transferRegistrationConfirmData', JSON.stringify({
        email: this.ischeckregistrationModel.email,
        code: Object.values(this.recoveryCode).join('')
      }))
    },
    showNewPassword() {
      const fullcode = parseInt(this.recoveryCode.number1 + this.recoveryCode.number2 + this.recoveryCode.number3 + this.recoveryCode.number4 + this.recoveryCode.number5 + this.recoveryCode.number6);
      console.log(fullcode)
      this.isRecoveryCode = false;
      this.isNewPassword = true;
    },
    FinalNewPassword(){
      if (this.newPassword.password1 === ''){
        console.log('Введите новый пароль')
      }else if(this.newPassword.password2 === ''){
        console.log('Введите новый пароль повторно')
      }else if(this.newPassword.password1 === this.newPassword.password2){
        console.log('Пароль успешно изменен')

        this.$trigger('client.auth.transferRecoveryData', JSON.stringify({
          email: this.recoveryModel.email,
          code: Object.values(this.recoveryCode).join(""),
          password: this.newPassword.password1
        }))
      }else{
        console.log('пароли не совпадают')
      }
    },

    sendRecoveryEmail() {
      this.$trigger('client.auth.transferRecoveryEmail', this.recoveryModel.email)
    }
  },
  mounted() {
    this.$addEvent('cef.auth.setRecoveryConfirmStage', this.showRecoveryCode)
    this.$addEvent('cef.auth.setRecoveryFinalStage', this.showAuth)

    this.$addEvent('cef.auth.setRegistrationConfirmStage', this.showRegistrationCode)
  },
  unmounted() {
    this.$removeEvent('cef.auth.setRecoveryConfirmStage')
    this.$removeEvent('cef.auth.setRecoveryFinalStage')
    this.$removeEvent('cef.auth.setRegistrationConfirmStage')
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
  margin-bottom: 5%;
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
  width: 100%;
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

.recover-code{
  background: #101010;
  padding: 3vw 4vh;
  border-radius:9px;
  width: 30%;
  height: 55%;
}

.recover-code-block{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: .5em;
  height: 100%;
}

.recover-code-block-text{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.recover-code-input{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.recover-code-input input[type="text"]{
  width: 10%;
  height: 5vh;
  text-align: center;
  background-color: #161616;
  border: 0;
  outline:none;
  color: white;
  font-family: 'Nunito',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5vw;
}

.newPassword-Input-block{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.newPassword-input{
  background: #161616;
  border-radius: 5px;
  padding: 3.5% 3%;
  gap: 0.5em;
  display: flex;
  align-items: center;
}

.newPassword-input input[type="password"]{
  background-color: rgb(0,0,0,0);
  border: 0;
  outline:none;
  color: gray;
}

.newPassword-input input[placeholder], [placeholder], *[placeholder]{
  font-family: 'Nunito',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.7vw;

  color: rgba(255, 255, 255, 0.13);
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
  font-size: 1vw;
  color: #FFFFFF;
  cursor: pointer;
  text-align: center;
  padding: 4% 0;
  width: 100%;
}

.back-auth{
  position: absolute;
  cursor: pointer;
}

.newPassword-subtitle{
  width: 100%;
  text-align: left;
}

</style>
