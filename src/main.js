import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value) {
    return value.toLowerCase();
});

Vue.filter('word-count', function(value){
if(value){
    var stringLenght = value.length;
    value = value + " "+ '(' + stringLenght +')'
    return value;
}
})

Vue.mixin({
    created() {
        console.log('Global Mixin - Created Hook');
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
