<template>
    <div class="main">
        <div class="logo">
            <h1>耶小说</h1>
            <ul>
                <li><router-link to="/">首页</router-link></li>
                <li>书库</li>
                <li>排行</li>
                <li>完本</li>
                <li>免费</li>
                <li>作者专区</li>
            </ul>
        </div>
        <div class="input">
            <input type="text" />
            <div class="btn">
                <SvgIcon type="search" width="20px" height="20px" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.main {
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
                a {
                    color: $menu-background;
                }
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
</style>
