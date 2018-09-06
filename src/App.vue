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
body {
  background-color: #F1F1F1;
  position:absolute;
  top:0; left: 0; bottom: 0; right: 0;
  z-index: -1;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
#content {
  text-align: left;
  margin: 0.2em auto;
  max-width: 740px;
}
h1 {
  margin-top: 0.4em;
  font-size: 1.875em;
  line-height: 1.2;
  font-weight: bold;
}
h2 {
  margin-top: 0.4em;
  font-weight: 300;
  font-size: 1.625em;
  line-height: 1.2;
}
p {

}

.cta-container {
  text-align: center;
  width:100%;
}
.cta {
  height: 56px;
  width: 56px;
  margin: 20px auto;
  background: rgba(34,34,34,0.35);
  position: relative;
  display: inline-block;
  z-index: 10;
  cursor: pointer;
  background-size: 24px;
  border-radius: 100%;
  transition: all .15s ease-out;
}
.cta.pulsate {
  animation: pulse 2s infinite;
}
.cta > img {
  height: 24px;
  width: 24px;
  top: 50%;
  left: 50%;
  margin: -12px;
  position: absolute;
  transform: rotate(270deg);
}

.fw {
  width: 100%;
}
.italic {
  font-style: italic;
}
</style>
