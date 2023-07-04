<template>
    <div class="search_main">
        <Logo />
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.search_main {
    width: 100%;
    height: 350px;
    .search {
        width: 80%;
        height: 120px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: $menu-background;

        .logo {
            margin-left: 40px;
            display: flex;

            ul {
                display: flex;
                align-items: center;
                margin-left: 40px;
                margin-top: 15px;

                li {
                    margin-right: 20px;
                }
            }
        }

        .input {
            display: flex;
            margin-right: 50px;
            position: relative;
            border-radius: 4px;
            overflow: hidden;
            border: 1px solid $menu-background;
            input {
                width: 350px;
                height: 35px;
                border: none;
            }
            .btn {
                width: 55px;
                height: 41px;
                position: absolute;
                top: 0;
                right: 0;
                text-align: center;
                padding-top: 7px;
                box-sizing: border-box;
                background-color: $menu-background;
            }
        }
    }
}
</style>
