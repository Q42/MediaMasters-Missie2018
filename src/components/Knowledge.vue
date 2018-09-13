<template>
  <div>
    <h1>Wat weet een website over jou?</h1>
    <p>Deze informatie stuur jij naar elke website die je bezoekt:</p>
    <ul>
      <li v-for="d in data" :key="d">{{d}}</li>
    </ul>

    <h2>IP adres?</h2>
    <p>Zie je dat "IP adres" erbij staan? Dat is het adres van je internetverbinding, die meestal per huis of school is. Daar kan een website ook weer slimme dingen van weten! Je bent de {{visitsByIp}}e bezoeker vanaf dit IP adres. {{theory}}</p>

    <h2>Cijfertjes</h2>
    <ul>
      <li>Het aantal bezoeken vanaf deze computer: {{visitsBySession}}</li>
      <li>Unieke computers vanaf dit IP adres: {{visitsByIp}}</li>
      <li>Unieke computers totaal: {{visitsTotal}}</li>
    </ul>

    <div class="cta-container">
      <router-link class="cta" to="/stap5">
        <img src="/images/arrow.svg" />
      </router-link>
    </div>
  </div>
</template>

<script>
var useragent = require('useragent');
import { getIpAddress, getVisitsTotal, getVisitsByIp, getVisitsBySession } from '../firestore';

export default {  
  data() {
    return {
      data: [],
      visitsBySession: null,
      visitsByIp: null,
      visitsTotal: null,
    }
  },
  computed: {
    theory() {
      if (!this.visitsByIp) return null;
      if (this.visitsByIp > 2) return "Conclusie: waarschijnlijk ben je nu thuis, anders had ik wel meer bezoekers vanaf dit IP adres gezien.";
      return "Conclusie: waarschijnlijk ben je nu op school, want er zijn aardig wat bezoekers die vanaf dit IP adres komen!";
    }
  },
  created() {
    var dt = this.data;
    const ua = useragent.parse(navigator.userAgent);
    dt.push('Operating systeem: ' + ua.os.toString());
    dt.push('Browser: ' + ua.toAgent());
    // TODO get location from a POST to https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAGGcwb5hDw9YNIgw-l8LmrzAVpdQ3gqrs
    // according to https://developers.google.com/maps/documentation/geolocation/intro

    if (document.referrer) {
      dt.push('Vorige website: ' + document.referrer);
    }

    if (typeof navigator.getBattery == "function") {
      navigator.getBattery().then(r => {
        if (r.level) {
          dt.push('Batterij: ' + (r.level * 100) + '%');
        }
      })
    }
    
    getIpAddress()
      .then(ip => dt.push('IP adres: ' + ip));
    
    getVisitsBySession().then(count => this.visitsBySession = count+1);
    getVisitsByIp().then(count => this.visitsByIp = count+1);
    getVisitsTotal().then(count => this.visitsTotal = count+1);
  }
}
</script>
