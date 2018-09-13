<template>
  <div>
    <h1>Anti-tracking!</h1>
    <p>Gelukkig zijn er allerlei manieren om tracking tegen te gaan, want jij hebt recht op privacy op het internet.</p>
    
    <h2>Incognito surfen</h2>
    <p>Een hele effectieve manier is om een Incognito Venster te gebruiken. Dit is een optie die in veel nieuwe browsers zit. Als je die gebruikt worden je bestaande cookies niet naar een website gestuurd.</p>
    <p>Als je je Incognito Venster sluit, worden alle cookies van die sessie weer weggegooid.</p>
    <p>Wel een beetje onhandig want je moet dus elke keer weer opnieuw inloggen. Maar daardoor weten Google, Facebook e.d. niet welke gebruiker er aan het surfen is!</p>

    <h2>Uitloggen</h2>
    <p>Als je klaar bent met een website, log weer uit!</p>
    <p>Daarna kan die website je minder makkelijk herkennen op andere websites.</p>

    <h2>Zoek niet met Google</h2>
    <p>Google krijgt ontzettend veel informatie over jou doordat je hun zoekmachine gebruikt.</p>
    <p>Probeer bijvoorbeeld eens <a href="https://duckduckgo.com/" target="_blank">duckduckgo.com</a>. Zij geven je ook goede zoekresultaten, maar beloven dat ze geen enkele data over jou opslaan. Dus geen cookies, geen IP adressen, geen zoekgeschiedenis.</p>

    <div class="cta-container">
      <router-link class="cta" to="/einde">
        <img src="/images/arrow.svg" />
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  created() {
    
  }
}
</script>
