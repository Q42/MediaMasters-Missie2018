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
      <p>Kom, we gaan de cookie eens bekijken. Dat werkt op elke browser weer net iets anders, maar voor de jouwe zou dit hem moeten zijn:</p>

      <ul v-if="browser.mozilla">
        <li>Druk op <code>F12</code>. Het "Web Developer" paneel opent naast je website.</li>
        <li>Ga naar de tab "Storage" of "Opslag"
          <img src="../assets/firefox-2.png" /></li>
        <li>Kies links voor "Cookies", klap die uit, en kies voor "cookies.futurenl.org"</li>
        <li>Als het goed is zie je nu een aantal Cookies staan, waaronder 'name'.</li>
      </ul>
      <ul v-else-if="browser.chrome">
        <li>Open het menu rechtsboven, kies voor "More Tools" en dan "Developer Tools"<br />
        <img src="../assets/chrome-1.png" /></li>
        <li>Ga naar de tab "Application" of "Applicatie"<br />
        <img src="../assets/chrome-2.png" /></li>
        <li>Kies links voor "Cookies", klap die uit, en kies voor "cookies.futurenl.org"</li>
        <li>Als het goed is zie je nu een aantal Cookies staan, waaronder 'name'.</li>
      </ul>
      <ul v-else-if="browser.safari">
        <li>Open het menu rechtsboven, kies voor "More Tools" en dan "Developer Tools"<br />
        <li>Ga naar de tab "Application" of "Applicatie"</li>
        <li>Kies links voor "Cookies", klap die uit, en kies voor "cookies.futurenl.org"</li>
        <li>Als het goed is zie je nu een aantal Cookies staan, waaronder 'name'.</li>
      </ul>
      <ul v-else-if="browser.ie">
      </ul>
      <ul v-else>
      </ul>

      <h2>Cookies aanpassen</h2>
      <p>Je kunt hier ook cookies aanpassen. (Dubbel)klik maar eens op je naam (<code>{{name}}</code>), en typ iets anders.</p>
      <p>Als je daarna de pagina opnieuw laadt (<a @click="reload"><img class="img-reload" src="../assets/reload.png" /></a>), dan zie je de nieuwe waarde.</p>

      <h2>Vraag!</h2>
      <p>Kun je er achter komen waar de cookie "<code>color</code>" voor gebruikt wordt?</p>
      <p><i>Tip: Verander de waarde en herlaad de pagina, wat is er veranderd?</i></p>

      <router-link class="cta" to="/stap3">Stap 3: Tracking</router-link>

    </div>
  </div>
</template>

<script>
var Cookies = require('js-cookie');
var useragent = require('useragent');

export default {
  data() {
    return {
      color: 'white',
      tempName: null,
      name: null,
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100%;
  max-width: 500px;
}
.img-reload {
  width: 16px;
}
</style>
