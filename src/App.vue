<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
var Cookies = require('js-cookie');

export default {
  data() {
    return {
    }
  },
  created() {
    if (!Cookies.get('color')) {
      Cookies.set('color', 'white', {expires: 365});
    }
  }
}
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
body::after {
  content: "";
  background-image: url('./assets/cookie-1.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-attachment: fixed;
  opacity: 0.1;
  position:absolute;
  top:0; left: 0; bottom: 0; right: 0;
  z-index: -1;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 4em;
}
</style>
