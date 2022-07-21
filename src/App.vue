<template>
  <HudMain v-if="isHud"/>
  <AuthMain v-if="isAuth"/>
</template>

<script>
import HudMain from './interfaces/hud'
import AuthMain from './interfaces/auth'

export default {
  name: 'App',
  components: {
    HudMain,
    AuthMain
  },
  data(){
    return {
      isHud: false,
      isAuth: true,
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


</style>
