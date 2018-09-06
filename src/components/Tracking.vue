<template>
  <div>
    <h1>Tracking</h1>
    <p>Cookies zijn dus erg handig. Maar ze worden ook gebruikt om je te volgen op het internet.</p>
    <p>Grote bedrijven zoals Google en Facebook kunnen zo een heel specifiek profiel van jou opbouwen.</p>
    <p>Dit gebeurt bijvoorbeeld met de Facebook Like button.</p>
    <div id="fb-root"></div>
    <div class="fb-like" data-href="https://www.facebook.com/StichtingFutureNL/" data-layout="button_count" data-action="like" data-size="large" data-show-faces="false" data-share="false"></div>

    <p>Zie je hierboven een Facebook Like button voor de Stichting FutureNL? Moet je nu eens in de cookies van je browser kijken...</p>
    <p>Waarschijnlijk zie je nu naast de cookies van deze website, cookies van facebook.com:</p>
    <img class="fw" src="../assets/3dparty.png" />

    <p class="italic">Zie je de like button niet? Dan heb je waarschijnlijk al beveiliging tegen 3d party cookies aan staan!</p>

    <div class="cta-container">
      <router-link class="cta" to="/stap4">
        <img src="/images/arrow.svg" />
      </router-link>
    </div>

  </div>
</template>

<script>

export default {
  created() {
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.1';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
}
</script>
