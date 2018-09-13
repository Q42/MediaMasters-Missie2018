<template>
  <div id="cookie-explanation">
    <h1>Cookies!</h1>
    <p>Heb je wel eens van Cookies gehoord?</p>
    <p>Ik ga je uitleggen wat Cookies op het internet zijn. Maar ook hoe je ze kan bekijken, en aanpassen. </p>
    <p>En dat is handig om te weten, want zonder cookies werkt een groot deel van het internet niet!</p>

    <h2>Een website</h2>
    <p>Eerst een beetje uitleg over hoe een website werkt.</p>
    <p>Als jij naar een website gaat, dan krijgt die website een aantal gegevens van jou. Natuurlijk het adres dat je opvraagt, bijv <code>www.unicef.nl/contact</code>. Dit heet ook wel de URL. Maar de website krijgt bijvoorbeeld ook informatie over de browser waarmee je de website bekijkt. Daardoor weet ik nu dat jij in <code>{{browser}}</code> op <code>{{os}}</code> zit. Grappig he?!</p>
    
    <h2>HTML-code</h2>
    <p>De website stuurt HTML terug. Die HTML is iedere keer anders als je naar een ander web-adres gaat. Zo krijg je de juiste informatie te zien op <code>www.unicef.nl/contact</code> en op <code>www.unicef.nl/nieuws</code>.

    <img class="fw" alt="internet" src="../assets/internet.png" />

    <h2>Cookies</h2>
    <p>Cookies zijn speciaal, want die gaan allebei de kanten op. Als een website HTML terug geeft, kan hij tegelijk ook cookies terug sturen. Die cookies worden op je computer opgeslagen. De volgende keer dat jij informatie van de website vraagt, worden de cookies weer meegestuurt. De website weet dan: Ah, deze bezoeker is hier al eerder geweest!</p>
    <p>Cookies blijven op je computer achter als je weer van de website weg gaat. Een soort broodkruimels dus, uit Hans en Grietje. Sterker nog, daar zijn ze naar vernoemd :) Iedere broodkruimel is dus een kleine informatiekruimel over jou. Al die kruimels bij elkaar vertellen de websites veel over wie jij bent en wat je leuk vindt.</p>

    <h2>Vraag</h2>
    <p>Als kind heb je rechten. Ook online. Met welke rechten heb je te maken als je aan het surfen bent op internet?</p>
    <div><label><input type="radio" v-model="radio" value="1" />Recht op privacy, geld en informatie</label></div>
    <div><label><input type="radio" v-model="radio" value="2" />Recht op spelen, privacy en wifi</label></div>
    <div><label><input type="radio" v-model="radio" value="3" />Recht op veiligheid, privacy en informatie</label></div>
    <div><label><input type="radio" v-model="radio" value="4" />Recht op koekjes, spelen en wifi</label></div>
    <p :style="{ color: answerColor }">{{answer}}</p>
    
    <div class="cta-container">
      <router-link class="cta" to="/stap2">
        <img src="/images/arrow.svg" />
      </router-link>
    </div>
  </div>
</template>

<script>
var useragent = require('useragent');

export default {
  data() {
    return {
      browser: 'onbekend',
      os: 'onbekend',
      radio: null,
    }
  },
  created() {
    const ua = useragent.parse(navigator.userAgent);
    this.browser = ua.toAgent();
    this.os = ua.os.toString();
  },
  computed: {
    answer() {
      switch (this.radio + "") {
        case "1": return "Nope, geld heb je geen recht op!";
        case "2": return "Helaas, wifi is geen recht op.";
        case "3": return "Juist! Op het internet moet je veilig kunnen surfen.";
        case "4": return "Nee joh! Koekjes... wel lekker, maar je hebt er geen recht op.";
      }
    },
    answerColor() {
      switch (this.radio + "") {
        case "1":
        case "2":
        case "4": return "red";
        case "3": return "green";
      }
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img.fw {
    width: 100%;
    max-width: 800px;
  }
</style>
