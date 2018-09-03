<template>
  <div id="cookie-explanation">
    <h1>Cookies!</h1>
    <p>Heb je wel eens van Cookies gehoord?</p>
    <p>Ik ga je uitleggen wat Cookies zijn. Maar ook hoe je ze kan bekijken, en aanpassen. </p>
    <p>En dat is goed om te weten, want zonder cookies werkt een groot deel van het internet niet!</p>

    <h2>Een website</h2>
    <p>Eerst een beetje uitleg over hoe een website werkt.</p>
    <p>Als jij naar een website gaat, dan krijgt die website een aantal gegevens van jou. Natuurlijk het adres dat je opvraagt (bijv www.unicef.nl/contact, dit heet ook wel de URL), maar bijvoorbeeld ook de browser waarmee je de website bekijkt. Daardoor weet ik nu dat jij in <span>{{browser}}</span> op <span>{{os}}</span> zit.</p>
    <p>De website stuurt HTML terug. Die HTML verschilt als je naar een ander adres gaat, zodat je wat anders te zien krijgt op www.unicef.nl/contact en op www.unicef.nl/nieuws. De website kan ook andere HTML terugsturen op basis van je browser.</p>

    <img alt="internet" src="../assets/internet.png" />

    <h2>Cookies</h2>
    <p>Cookies zijn speciaal, die gaan allebij de kanten op. Als een website HTML terug geeft, kan hij daar ook Cookies terug sturen. Die cookies worden op je computer opgeslagen, en de volgende keer dat jij informatie van de website vraagt, worden de cookies meegestuurt. De website weet dan: Ah, deze bezoeker is hier al eerder geweest!</p>
    <p>Cookies blijven op je computer achter als je weer van de website weg gaat. Een soort broodkruimels dus, uit Hans en Grietje. Sterker nog, daar zijn ze naar vernoemd :)</p>
    
    <router-link to="/stap2">Stap 2: Cookies bekijken</router-link>
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
  img {
    width: 100%;
    max-width: 800px;
  }
</style>
