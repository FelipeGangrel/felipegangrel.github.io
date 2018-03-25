<template>
    <div v-bind:class="{'active': active}" v-on:click="openFile">
        {{file.filename}} <span class="close" v-on:click.stop="closeFile">&times;</span>
    </div>
</template>


<script>
export default {
    computed: {
        file () {
            return this.$store.state.open[this.index];
        },
        active () {
            return this.file == this.$store.state.active;
        }
    },
    props: {
        index: {
            type: String
        }
    },
    methods: {
        openFile () {
            console.log('clicou em open');
            const payload = this.file;
            this.$store.commit('OPEN_FILE', payload);
        },
        closeFile () {
            console.log('clicou em close');
            const payload = this.file;
            this.$store.commit('CLOSE_FILE', payload);
        }
    }
}
</script>
