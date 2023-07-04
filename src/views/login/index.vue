<template>
    <div class="login">
        <Logo />
        <div class="cont">
            <div class="from">
                <h1>用户登录</h1>
                <form action="">
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="请输入用户账号"
                    />
                    <br />
                    <input
                        type="password"
                        name=""
                        id=""
                        placeholder="请输入密码"
                    />
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
                <button>登 &nbsp;&nbsp; 录</button>
            </div>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.login {
    width: 100%;
    height: 100vh;
    background-color: $navbar-background;

    .top {
        width: 70%;
        height: 70px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: $menu-background;

        .left {
            width: 200px;
            h1 {
                margin: 0;
            }
        }

        .right {
            width: 300px;
            display: flex;
            justify-content: space-around;

            li {
                a {
                    color: $menu-background;
                }
            }
        }
    }

    .cont {
        width: 100%;
        height: 650px;
        background-color: $base-background;
        position: relative;

        .from {
            width: 400px;
            height: 480px;
            padding: 30px;
            box-sizing: border-box;
            background-color: white;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 200px;
            text-align: center;
            border-radius: 10px;
            color: $menu-background;

            h1 {
                margin-bottom: 50px;
            }
            input {
                width: 300px;
                height: 40px;
                margin-bottom: 35px;
                border: 1px solid $text-color;
                border-radius: 4px;
                font-size: 16px;
                color: $text-color;
            }

            .check {
                width: 12px;
                height: 12px;
                margin-bottom: 60px;
            }

            span {
                color: black;

                i {
                    color: $menu-background;
                }
            }

            button {
                width: 300px;
                height: 40px;
                margin-top: 10px;
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
