<template>
    <section class="section1">
        <div class="wrapper">
            <span>for business</span>
<h1 class="page-header">Для бизнеса</h1>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Forbiz1"
    }
</script>

<style lang="scss" scoped>
    .section1 {
        background-color: #ebeefa;
    }
    .wrapper {
        &>span {
            text-transform: uppercase;
            font-weight: 900;
            padding: 20px 150px 67px;
            display: block;
            font-size: 112px;
            color: #e2e6f7;
            line-height: 0.8;
        }
        position: relative;
    }
    .page-header {
        color: #8492ae;
        font-size: 36px;
        text-transform: uppercase;
        font-weight: 900;
        text-align: left;
        position: absolute;
        top: 42px;
        right: 0;
        bottom: 0;
        left: 0;
    }
</style>