<template>
    <div class="navbar">
        <div class="main">
            <div class="left">
                <span>{{ mes }} &nbsp;&nbsp;&nbsp;&nbsp; 请 &nbsp;&nbsp;</span>
                <span>登录 &nbsp; | &nbsp;</span>
                <span>注册</span>
            </div>
            <div class="right">
                <ul>
                    <li>我的书架</li>
                    <li>我的收藏</li>
                    <li>微信小程序</li>
                    <li>客户端下载</li>
                    <li>联系客服</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import timer from '@/utils/timer';
import { ref } from 'vue';

const mes = ref<string>('');
mes.value = timer.message;
</script>

<style scoped lang="scss">
.navbar {
    width: 100%;
    height: 35px;
    background-color: $navbar-background;

    .main {
        width: 80%;
        height: 100%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        color: $text-color;

        .right {
            ul {
                display: flex;
                li {
                    margin-left: 20px;
                    padding-left: 20px;
                    border-left: 1px solid $text-color;
                    &:first-child {
                        border: none;
                    }
                }
            }
        }
    }
}
</style>
