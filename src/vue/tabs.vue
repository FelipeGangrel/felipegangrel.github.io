<template>
    <div id="tabs">
        
        <template v-for="(file, index) in files">
            <tab-item v-bind:key="index" :index="`${index}`"></tab-item>
        </template>
    </div>
</template>

<script>
import TabItem from './tab-item.vue'
export default {
    components: {
        TabItem,
    },
    computed: {
        files () {
            return this.$store.state.open;
        }
    },
    
}
</script>
