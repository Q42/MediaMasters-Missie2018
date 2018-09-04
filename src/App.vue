<template>
  <div id="app" :style="{ color: color}">
    <section id="content">
      <router-view />
    </section>
  </div>
</template>

<script>
import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';
var Cookies = require('js-cookie');

export default {
  data() {
    return {
      color: 'black',
    }
  },
  created() {
    if (!Cookies.get('color')) {
      Cookies.set('color', 'black', {expires: 365});
    }
    this.color = Cookies.get('color') || 'black';
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
  background-color: #F1F1F1;
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
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}
#content {
  margin: 4em;
}

</style>
