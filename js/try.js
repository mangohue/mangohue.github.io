import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'

Vue.use(MintUI)

new Vue({
      el: '#app',
      methods: {
        test: function() {
          this.$toast('Hello world!')
        },

      }
    })
    new Vue({
      el: '#test',
      methods: {
        test: function() {
          this.$toast('test')
        },

      }
    })

