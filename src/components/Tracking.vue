<template>
  <div>
    <h1>Tracking</h1>
    <p>Cookies zijn dus erg handig. Maar ze worden ook gebruikt om je te volgen op het internet.</p>
    <p>Grote bedrijven zoals Google en Facebook kunnen zo een heel specifiek profiel van jou opbouwen. Een profiel kan gemaakt worden met informatie over jou. Wat vind je leuk? Wat vind je niet leuk? Waar kijk je graag naar? Wat zoek je naar?</p>

    <h2>Voorbeeld</h2>
    <p>Dit gebeurt bijvoorbeeld met de Facebook Like button.</p>
    <div id="fb-root"></div>
    <div class="fb-like" data-href="https://www.facebook.com/StichtingFutureNL/" data-layout="button_count" data-action="like" data-size="large" data-show-faces="false" data-share="false"></div>

    <p>Zie je hierboven een Facebook Like button voor de Stichting FutureNL? Moet je nu eens in de cookies van je browser kijken... <i>Weet je niet meer hoe dat ging? <router-link to="/stap2">Ga terug naar de volgende pagina!</router-link></i></p>
    <p>Waarschijnlijk zie je nu naast de cookies van deze website, cookies van facebook.com:</p>
    <img class="fw" src="../assets/3dparty.png" />

    <h2>Vraag</h2>
    <p>Waarom zou Facebook van jou willen weten wat je leuk vindt?</p>
    <div><label><input type="radio" v-model="radio" value="1" />Slimmere advertenties tonen</label></div>
    <div><label><input type="radio" v-model="radio" value="2" />Ze willen geld verdienen</label></div>
    <div><label><input type="radio" v-model="radio" value="3" />Pagina's en games aanraden</label></div>
    <div><label><input type="radio" v-model="radio" value="4" />Mij langer op facebook houden</label></div>
    <div><label><input type="radio" v-model="radio" value="5" />Meer advertenties tonen</label></div>
    <p :style="{ color: answerColor }">{{answer}}</p>

    <div class="cta-container">
      <router-link class="cta" to="/stap4">
        <img src="/images/arrow.svg" />
      </router-link>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      radio: null,
    }
  },
  created() {
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },
  computed: {
    answer() {
      switch (this.radio + "") {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5": return "Goed! Sterker nog, alle antwoorden zijn goed...";
      }
    },
    answerColor() {
      switch (this.radio + "") {
        case "1":
        case "2":
        case "3": 
        case "4": 
        case "5": return "green";
      }
    }
  }
}
</script>
