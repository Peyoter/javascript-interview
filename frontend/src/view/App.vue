<template>
    <div id="main-wrapper">
        <router-view name="globalPage"></router-view>
    </div>
</template>

<script>
    export default {
        computed: {
            alert() {
                return this.$store.state.alert
            },
        },
        watch: {
            $route(to, from) {
                this.$store.dispatch('alert/clear');
            }
        },
    };
</script>
