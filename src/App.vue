<template>
  <div id="app">
    <CookieExplanation />
  </div>
</template>

<script>
import CookieExplanation from './components/CookieExplanation.vue'

export default {
  name: 'app',
  components: {
    CookieExplanation
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
  opacity: 0.3;
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
