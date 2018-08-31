<template>
    <div id="app">
        <Header/>
        <router-view/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Header from '@/components/Header.vue'

    export default {
        name: 'app',
        components: {
            Header
        }
    }
</script>

<style lang="scss">

    @import "../public/scss/animate.css";
    @import "../public/scss/reset";
    /*@import "../public/scss/fonts";*/
    .nw {
        white-space: pre !important;
        display: inline-block !important;
        color: inherit !important;
        font-weight: inherit !important;
        margin: auto !important
    }

    * {
        outline: none;
    }



    html {
        overflow-x: hidden;
    }

    body {
        font-family: 'Lato', sans-serif;
        overflow-x: hidden;
    }

    .wrapper {
        max-width: 1200px;
        margin: auto;
    }
</style>