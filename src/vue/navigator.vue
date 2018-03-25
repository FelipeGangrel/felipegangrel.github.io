<template>
    <div id="navigator">
        <div class="menu" @click="menuToggle"><i class="fa fa-bars"></i></div>
        <div class="files">
            <div class="folder"><i class="fa fa-caret-right"></i> felipeGangrel</div>
            <template v-for="(file, index) in files">
                <navigator-item v-bind:key="index" :index="`${index}`"></navigator-item>    
            </template>
        </div>
    </div>  
</template>

<script>
import NavigatorItem from './navigator-item.vue'
export default {
    components: {
        NavigatorItem
    },
    computed: {
        files () {
            return this.$store.state.files;
        }
    },
    methods: {
        menuToggle () {
            this.$store.commit('MENU_TOGGLE');
        }
    }
    
}
</script>
