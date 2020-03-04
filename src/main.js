import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
////////////////////////////////////////////////////
// import AMap from 'vue-amap';
// Vue.use(AMap)
// AMap.initAMapApiLoader({
//   key: '3f276829106f11a9a909519eb9078680',
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView',
//     'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor',
//     'AMap.CircleEditor', 'AMap.Geolocation']
// });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
