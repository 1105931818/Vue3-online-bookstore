<template>
    <div class="chapter">
        <div class="top">
            <Logo />
        </div>
        <div class="chap_main"></div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.chapter {
    width: 100%;
    height: calc(100vh - 100px);

    .top {
        width: 100%;
        background-color: white;
        position: fixed;
        top: 0;
        box-shadow: 0px 3px 3px rgb(199, 199, 199);
        z-index: 999;
    }

    .chap_main {
        width: 100%;
        padding: 30px;
        margin: auto;
        margin-top: 120px;
        box-sizing: border-box;
        color: $text-color;
        background-color: $navbar-background;
    }
}
</style>
