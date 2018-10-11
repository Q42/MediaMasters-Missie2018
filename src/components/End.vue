<template>
  <div>
    <h1>Klaar!</h1>
    <p>Gaaf, je bent aan het einde van deze Cookie-les!</p>
    <p>Hopelijk kijk je vanaf nu wat anders naar Cookies en Cookie banners :)</p>
    <p class="bold">Het antwoord dat je nodig hebt om bij MediaMasters punten te verdienen, vind je in een cookie genaamd <code>HetAntwoord</code>.</p>
    <p>Happy surfing!</p>
    <p>Groetjes van <a href="http://www.futurenl.org">FutureNL</a>, <a href="https://www.q42.nl">Q42</a> en <a href="https://www.unicef.nl">Unicef</p>
  </div>
</template>

<script>
var Cookies = require('js-cookie');

export default {
  created() {
    Cookies.set('HetAntwoord', 'GezondeCookies');
  }
}
</script>

<style>
.bold {
  font-weight: bold;
}
</style>
