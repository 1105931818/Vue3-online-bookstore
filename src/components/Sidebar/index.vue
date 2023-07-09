<template>
    <div class="sidebar">
        <ul>
            <li>
                <el-icon style="font-size: 24px"><Collection /></el-icon>
                <p>我的书架</p>
            </li>
            <li>
                <el-icon style="font-size: 24px"><ChatDotRound /></el-icon>
                <p>联系客服</p>
            </li>
            <li>
                <el-icon style="font-size: 24px"><Cellphone /></el-icon>
                <p>手机端</p>
            </li>
        </ul>
        <span v-show="isShow" @click="gotoTop()">
            <el-icon style="font-size: 24px"><Upload /></el-icon>
        </span>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isShow = ref<boolean>(false);
window.onscroll = function () {
    if (document.documentElement.scrollTop > 400) {
        isShow.value = true;
    } else {
        isShow.value = false;
    }
};
const gotoTop = () => {
    document.documentElement.scrollTop = 0;
};
</script>

<style scoped lang="scss">
.sidebar {
    width: 50px;
    height: 200px;
    position: fixed;
    top: 60%;
    right: 20px;
    z-index: 999;
    color: $text-color;

    ul {
        width: 100%;

        li {
            width: 50px;
            height: 50px;
            margin-bottom: 20px;
            box-shadow: 2px 2px 2px 2px #e4e4e4;
            border-radius: 4px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            background-color: white;
            p {
                font-size: 12px;
            }
        }
    }

    span {
        width: 50px;
        height: 50px;
        display: block;
        text-align: center;
        line-height: 60px;
        box-shadow: 2px 2px 2px 2px #e4e4e4;
        border-radius: 4px;
        background-color: white;
    }
}
</style>
