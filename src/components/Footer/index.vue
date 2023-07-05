<template>
    <div class="footer">
        <div class="main">
            <ul>
                <li>关于我们</li>
                <li>联系我们</li>
                <li>帮助与客服</li>
                <li>举报中心</li>
                <li>出版合作</li>
                <li>诚聘英才</li>
                <li>法律声明</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer {
    width: 100%;
    height: 350px;
    margin-top: 30px;
    background-color: $navbar-background;

    .main {
        width: 70%;
        height: 100%;
        margin: auto;
        padding: 30px;
        box-sizing: border-box;

        ul {
            width: 700px;
            height: 50px;
            margin: auto;
            display: flex;
            justify-content: space-around;
            align-items: center;
            color: $text-color;

            li {
                padding: 40px 0;
                box-sizing: border-box;
            }
        }
    }
}
</style>
