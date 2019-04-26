// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
import { store } from './store'

// For hosting build
import firebase from 'firebase'
firebase.initializeApp({
  apiKey: "AIzaSyBrtHf3EU8BsbLQL-sWLlH1D0bL0s-TJcY",
  authDomain: "britecore-frontend.firebaseapp.com",
  databaseURL: "https://britecore-frontend.firebaseio.com",
  projectId: "britecore-frontend",
  storageBucket: "britecore-frontend.appspot.com",
  messagingSenderId: "844974468716"
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
