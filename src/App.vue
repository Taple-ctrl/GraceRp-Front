<template>
<div id="app">
  <HudMain v-if="isHud"/>
  <AuthMain v-if="isAuth"/>
</div>
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

#app {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
