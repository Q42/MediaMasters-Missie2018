<template>
  <div>
    <h1>Wat weet een website over jou?</h1>
    <p>Deze informatie stuur jij naar elke website die je bezoekt:</p>
    <ul>
      <li v-for="d in data" :key="d">{{d}}</li>
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
      data: []
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
      .then(ip => dt.push('Extern IP adres: ' + ip));
    
    getVisitsBySession().then(count => dt.push('Bezoekers vanaf deze computer: ' + count));
    getVisitsByIp().then(count => dt.push('Bezoekers vanaf dit ipadres: ' + count));
    getVisitsTotal().then(count => dt.push('Totaal bezoekers: ' + count));
  }
}
</script>
