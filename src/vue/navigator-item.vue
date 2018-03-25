<template>
    <div @click="openFile" v-bind:class="{'active': active}">
        {{file.filename}} 
    </div>
</template>

<script>
export default {
    computed: {
        file () {
            return this.$store.state.files[this.index];
        },
        active () {
            return this.$store.state.active == this.file;
        }
    },
    props: {
        index: {
            type: String,
        }
    },
    methods: {
        openFile () {
            const payload = this.file;
            this.$store.commit('OPEN_FILE', payload);
        }
    }
}
</script>

