import firebase from 'firebase/app';
import 'firebase/firestore';
var uuid = require("uuid");
var Cookies = require('js-cookie');

var config = {
  apiKey: "AIzaSyAvTIxSXlAWZ6iFGN-AMWZhePAGdJmkRFw",
  authDomain: "mediamissie-cookies.firebaseapp.com",
  databaseURL: "https://mediamissie-cookies.firebaseio.com",
  projectId: "mediamissie-cookies",
};
firebase.initializeApp(config);

const db = firebase.firestore()
const settings = { timestampsInSnapshots: true };
db.settings(settings);

var ip = null;
var session = null;

export function getIpAddress() {
  if (ip !== null) 
    return Promise.resolve(ip);
  return window.fetch('https://api.ipify.org/?format=txt')
    .then(r => r.text())
    .then(ipr => { ip = ipr; return ip; })
}

export function getSession() {
  if (session !== null) 
    return Promise.resolve(session);
  var csession = Cookies.get('session');
  if (!csession) {
    session = uuid.v4();
    Cookies.set('session', session, {expires: 365});
  } else {
    session = csession;
  }
  return Promise.resolve(session);
}

export function storeVisit() {
  getSession()
    .then(s => upByOne(db.collection('visitsBySession').doc(s)))
    .then(unique => {
      if (unique)
        return Promise.all([
          getIpAddress().then(i => upByOne(db.collection('visitsByIp').doc(i))),
          upByOne(db.collection('visitsTotal').doc('total')),
        ]).then(() => unique);
      return Promise.resolve(unique);
    })
    .then((unique) => console.log('stored visits in firestore', ip, session, unique ? 'unique visit' : 'return visit'))
    .catch((error) => console.error("Error storing visit in firestore: ", error));
}

function upByOne(ref) {
  return db.runTransaction(t =>
    t.get(ref).then(doc => {
      if (doc.exists) {
        const count = doc.data().count + 1;
        t.update(ref, { count, date: +Date.now() });
        return false;
      } else {
        t.set(ref, { count: 1, date: +Date.now() });
        return true;
      }
    })
  );
}

export function getVisitsTotal() {
  return db.collection('visitsTotal').doc('total').get().then(doc => doc.exists ? doc.data().count : 0);
}

export function getVisitsByIp() {
  return getIpAddress().then(ip => db.collection('visitsByIp').doc(ip).get().then(doc => doc.exists ? doc.data().count : 0));
}

export function getVisitsBySession() {
  return getSession().then(session => db.collection('visitsBySession').doc(session).get().then(doc => doc.exists ? doc.data().count : 0));
}