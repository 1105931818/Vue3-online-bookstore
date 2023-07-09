<template>
    <div class="main">
        <div class="logo">
            <div class="title">
                <img src="../../assets/image/logo.jpg" />
                <h1>耶小说</h1>
            </div>
            <ul>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/library">书库</router-link></li>
                <li><router-link to="/leaderboard">排行</router-link></li>
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
        display: flex;

        .title {
            display: flex;
            align-items: center;

            img {
                width: 60px;
                height: 60px;
                margin-right: 10px;
                border-radius: 6px;
            }
        }
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
