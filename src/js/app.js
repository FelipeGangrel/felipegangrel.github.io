import Vue from 'vue'
import App from './../vue/app.vue'
import store from './store/store'

const VueApp = new Vue({
    store,
    el: '#root',
    components: {
        App,
    }
});