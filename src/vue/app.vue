<template>
    <main id="app" :class="{'menu-toggle': menuToggle}">
        <navigator />
        <tabs />
        <editor />
        <my-footer />
    </main>
</template>

<script>

import Editor from './editor.vue'
import Navigator from './navigator.vue'
import Tabs from './tabs.vue'
import MyFooter from './footer.vue'

export default {
    components: {
        Editor,
        Navigator,
        Tabs,
        MyFooter
    },
    computed: {
        menuToggle () {
            return this.$store.state.menuToggle;
        }
    }
}
</script>

