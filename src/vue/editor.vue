<template>
    <div id="editor" >
        <div class="editor-content" v-html="content">
        
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        content () {
            if (this.$store.state.active != null) {
                return this.$store.state.active.content
            } 
            return '';
        }
    }
}
</script>

