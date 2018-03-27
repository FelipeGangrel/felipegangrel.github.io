import 'es6-promise/auto'
import Vue from 'vue'
import App from './../vue/app.vue'
import store from './store/store'

import fontawesome from '@fortawesome/fontawesome'
import { faFolderOpen, faCodeBranch, faBars } from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faFolderOpen, faCodeBranch, faBars);

const VueApp = new Vue({
    store,
    el: '#root',
    components: {
        App,
    }
});