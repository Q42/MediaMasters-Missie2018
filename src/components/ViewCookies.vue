<template>
  <div id="cookie-explanation">
    <form @submit="submitName" v-if="!name || name==''">
      <h1>Cookies zetten</h1>
      <p>Laten we eerst eens een cookie plaatsen.</p>
      <p>Wat is je naam?</p>
      <input v-model="tempName" /><input type="submit" value="verstuur" />
    </form>
    <div v-else>
      <h1>Cookies bekijken</h1>
      <h2>Welkom {{name}}!</h2>
      <p>Deze website weet nu hoe je heet!</p>
      <p>Dat onthoudt hij, in een cookie. Nu weet je ook meteen waarom cookies zo handig zijn op het internet; ze bewaren wie er ingelogd is op een website.</p>
      <p>Kom, we gaan de cookie eens bekijken. Dat werkt op elke browser weer net iets anders. Gelukkig weet ik precies met welke browser je deze pagina bekijkt! Op jouw browser zou je op deze manier je cookies moeten kunnen bekijken:</p>

      <p v-if="mobile || browser.android || browser.mobile_safari">
        Uh-oh, je zit op een mobieltje of tablet! Daar is het niet mogelijk om de cookies te bekijken. Open deze website a.u.b. op een computer.
      </p>
      <ul v-else-if="browser.mozilla">
        <li>Druk op <code>F12</code>. Het "Web Developer" paneel opent naast je website.</li>
        <li>Ga naar de tab "Storage"
          <img src="../assets/firefox-2.png" /></li>
        <li>Kies links voor "Cookies", klap die uit, en kies voor "cookies.futurenl.org"</li>
        <li>Als het goed is zie je nu een aantal Cookies staan, waaronder 'name'.</li>
      </ul>
      <ul v-else-if="browser.chrome">
        <li>Open het menu rechtsboven, kies voor "Meer hulpprogramma's" en dan "Hulpprogramma's voor ontwikkelaars"<br />
        <img src="../assets/chrome-1.png" /></li>
        <li>Ga naar de tab "Application"<br />
        <img src="../assets/chrome-2.png" /></li>
        <li>Kies links voor "Cookies", klap die uit, en kies voor "cookies.futurenl.org"</li>
        <li>Als het goed is zie je nu een aantal Cookies staan, waaronder 'name'.</li>
      </ul>
      <ul v-else-if="browser.safari">
        <li>Klik linksboven op "Safari" en dan op "Voorkeuren"<br />
        <li>Zet het vinkje "Toon ontwikkel-menu in menubalk" aan<br />
        <img src="../assets/safari-1.png" /></li>
        <li>Nu is er bovenin het scherm en menu "Ontwikkel" bij gekomen. Klik daarop, en dan op "Toon javascript console"<br />
        <img src="../assets/safari-2.png" /></li>
        <li>Ga naar de tab "Opslag"<br />
        <img src="../assets/safari-3.png" /></li>
        <li>Kies links voor "Cookies - cookies.futurenl.org"</li>
        <li>Als het goed is zie je nu een aantal Cookies staan, waaronder 'name'.</li>
      </ul>
      <ul v-else-if="browser.ie">
      </ul>
      <ul v-else-if="browser.edge">
      </ul>
      <p v-else>
        Uh-oh, je browser ken ik niet! 
      </p>

      <div v-if="!browser.safari">
        <h2>Cookies aanpassen</h2>
        <p>Je kunt hier ook cookies aanpassen. (Dubbel)klik maar eens op je naam (<code>{{name}}</code>), en typ iets anders.</p>
        <p>Als je daarna de pagina opnieuw laadt (<a @click="reload"><img class="img-reload" src="../assets/reload.png" /></a>), dan zie je de nieuwe waarde.</p>

        <h2>Vraag!</h2>
        <p>Kun je er achter komen waar de cookie "<code>color</code>" voor gebruikt wordt?</p>
        <p><i>Tip: Verander de waarde en herlaad de pagina, wat is er veranderd?</i></p>
      </div>
      <div v-else-if="!mobile">
        <h2>Gevonden!</h2>
        <p>Nou, daar staan je cookies dus. Op deze manier kun je van elke website zien welke cookies hij allemaal op je computer achter laat.</p>
      </div>

      <div v-if="!mobile" class="cta-container">
        <router-link class="cta" to="/stap3">
          <img src="/images/arrow.svg" />
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
var Cookies = require('js-cookie');
var useragent = require('useragent');
var mobile = require('is-mobile');

export default {
  data() {
    return {
      color: 'black',
      tempName: null,
      name: null,
      mobile: false,
      browser: {
        version: '1',
        webkit: false,
        opera: false,
        ie: false,
        chrome: false,
        safari: false,
        mobile_safari: false,
        firefox: false,
        mozilla: false,
        android: false
      },
    }
  },
  methods: {
    submitName() {
      Cookies.set('name', this.tempName, {expires: 365});
      window.location.reload();
    },
    reload() {
      window.location.reload();
    }
  },
  created() {
    this.color = Cookies.get('color');    
    this.name = Cookies.get('name');

    this.browser = useragent.is(navigator.userAgent);
    console.log(useragent.is(navigator.userAgent));

    this.mobile = mobile();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul img {
  width: 100%;
  max-width: 500px;
}
.img-reload {
  width: 16px;
}
</style>
