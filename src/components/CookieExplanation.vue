<template>
  <div id="cookie-explanation">
    <h1>Cookies!</h1>
    <p>Heb je wel eens van Cookies gehoord?</p>
    <p>Ik ga je uitleggen wat Cookies zijn. Maar ook hoe je ze kan bekijken, en aanpassen. </p>
    <p>En dat is goed om te weten, want zonder cookies werkt een groot deel van het internet niet!</p>

    <h2>Een website</h2>
    <p>Eerst een beetje uitleg over hoe een website werkt.</p>
    <p>Als jij naar een website gaat, dan krijgt die website een aantal gegevens van jou. Natuurlijk het adres dat je opvraagt (bijv www.unicef.nl/contact), maar bijvoorbeeld ook de browser waarmee je de website bekijkt. Daardoor weet ik nu dat je in <span>{{browser}}</span> op <span>{{os}}</span> zit.</p>
  </div>
</template>

<script>
var useragent = require('useragent');

export default {
  name: 'CookieExplanation',
  data() {
    return {
      browser: 'onbekend',
      os: 'onbekend',
    }
  },
  created() {
    const ua = useragent.parse(navigator.userAgent);
    this.browser = ua.toAgent();
    this.os = ua.os.toString();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
