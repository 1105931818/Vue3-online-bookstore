<template>
    <div class="register">
        <Logo />
        <div class="cont">
            <div class="main">
                <p>
                    <span>注册新用户</span>
                    <span>
                        已有账号，去
                        <router-link to="/login">登录</router-link>
                    </span>
                </p>
                <form action="">
                    <input type="text" placeholder="请输入手机号" />
                    <div class="verify">
                        <input type="text" placeholder="请输入验证码" />
                        <button>获取验证码</button>
                    </div>
                    <input type="password" placeholder="请设置登录密码" />
                    <input type="password" placeholder="请确认密码" />
                    <br />
                    <input type="checkbox" class="check" />
                    <span>
                        同意
                        <i>《用户协议》</i>
                        和
                        <i>《隐私协议》</i>
                    </span>
                    <br />
                </form>
                <button class="btn">确认注册</button>
            </div>
        </div>
        <div class="footer">
            <Footer />
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.register {
    width: 100%;
    height: 100vh;
    background-color: $navbar-background;

    .cont {
        width: 100%;
        height: 650px;
        background-color: $base-background;
        padding-top: 50px;
        box-sizing: border-box;

        .main {
            width: 60%;
            height: 550px;
            margin: auto;
            background-color: white;
            border-radius: 8px;
            overflow: hidden;

            p {
                width: 100%;
                height: 40px;
                display: flex;
                padding: 0 15px;
                box-sizing: border-box;
                justify-content: space-between;
                align-items: center;
                background-color: $navbar-background;
                font-size: 14px;
                color: $text-color;

                a {
                    color: $menu-background;
                }
            }

            form {
                width: 60%;
                height: 350px;
                margin: auto;
                margin-top: 50px;

                input {
                    width: 330px;
                    height: 40px;
                    margin-bottom: 30px;
                    margin-left: 100px;
                    border: 1px solid $text-color;
                    border-radius: 4px;
                    font-size: 14px;
                    color: $text-color;
                }

                .verify {
                    width: 330px;
                    height: 40px;
                    margin: auto;
                    margin-bottom: 30px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    input {
                        width: 140px;
                        height: 40px;
                        margin-bottom: 0;
                        margin-left: 0;
                        font-size: 14px;
                    }

                    button {
                        width: 140px;
                        height: 40px;
                        background-color: $book-background;
                        color: $text-color;
                        border: none;
                        border-radius: 4px;
                        font-size: 14px;
                    }
                }

                .check {
                    width: 12px;
                    height: 12px;
                    margin-bottom: 45px;
                }

                span {
                    text-align: left;
                    font-size: 14px;
                    color: black;

                    i {
                        color: $menu-background;
                    }
                }
            }

            .btn {
                width: 300px;
                height: 40px;
                display: block;
                margin: auto;
                font-size: 18px;
                background-color: $menu-background;
                color: white;
                border: none;
                border-radius: 4px;
            }
        }
    }
}
</style>
