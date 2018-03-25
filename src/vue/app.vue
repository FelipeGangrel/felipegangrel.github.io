<template>
    <main id="app" :class="{'menu-toggle': menuToggle}">
        <navigator />
        <tabs />
        <editor />
    </main>
</template>

<script>

import Editor from './editor.vue'
import Navigator from './navigator.vue'
import Tabs from './tabs.vue'

export default {
    components: {
        Editor,
        Navigator,
        Tabs,
    },
    computed: {
        menuToggle () {
            return this.$store.state.menuToggle;
        }
    }
}
</script>

