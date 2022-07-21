<template>
  <div class="AuthMain">
    <div class="WelcomeServer" v-if="IsWelcome">
      <div class="welcome_info"></div>
      <div class="welcome_btn" v-on:click="IsWelcome = !IsWelcome">Начать свою историю</div>
      <div class="welcome_hint">Нажмите Enter</div>
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
      IsWelcome: true,
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

</style>
