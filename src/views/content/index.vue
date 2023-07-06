<template>
    <div class="content">
        <div class="top">
            <Logo />
        </div>

        <div class="wrapper">
            <div class="main">
                <ul class="main_list">
                    <li>当前位置：</li>
                    <li>首页 ></li>
                    <li>{{ route.query.bookname }}</li>
                </ul>
                <div class="duction">
                    <div class="duction_left">
                        <img :src="String(route.query.imgUrl)" />
                        <div class="duction_title">
                            <h1>
                                {{ route.query.bookname }}
                                <span>
                                    110万
                                    <br />
                                    总字数
                                </span>
                            </h1>
                            <ul>
                                <li>已签约</li>
                                <li>已完结</li>
                                <li>都市脑洞</li>
                                <li>穿越</li>
                                <li>升级</li>
                                <li>网游</li>
                            </ul>
                            <p>
                                <span>
                                    7万
                                    <br />
                                    总点击
                                </span>
                                <span>
                                    34
                                    <br />
                                    总推荐
                                </span>
                                <span>
                                    10
                                    <br />
                                    周推荐
                                </span>
                            </p>
                            <i>更新至 第510章痛苦之门！苏白的领域技！</i>
                            <i>更新于 {{ route.query.date }}</i>
                            <div class="btn">
                                <button @click="gotoRead()">立即阅读</button>
                                <button>加入书架</button>
                            </div>
                        </div>
                    </div>
                    <div class="duction_right">
                        <div class="icon">
                            <el-icon><UserFilled /></el-icon>
                        </div>
                        <h1>{{ route.query.name }}</h1>
                        <span>签约作者</span>
                        <ul>
                            <li>
                                2
                                <span>作品总数</span>
                            </li>
                            <li>
                                124万
                                <span>作品字数</span>
                            </li>
                            <li>
                                5天
                                <span>本月更新</span>
                            </li>
                        </ul>
                        <p>作者留言</p>
                        <i>作者大大正在奋力码字哦～～</i>
                    </div>
                </div>
            </div>
        </div>

        <div class="page">
            <div class="page_left">
                <div class="page_top">
                    <ul>
                        <li><h1 class="active">目录</h1></li>
                        <li><h1>作品信息</h1></li>
                        <li><h1>圈子</h1></li>
                    </ul>
                </div>
                <ul class="page_cont">
                    <li class="page_item" @click="gotoRead()">
                        第一章 穿越神之塔，至高神器的奖励！
                    </li>
                    <li class="page_item" @click="gotoRead()">
                        第一章 穿越神之塔，至高神器的奖励！
                    </li>
                    <li class="page_item" @click="gotoRead()">
                        第一章 穿越神之塔，至高神器的奖励！
                    </li>
                    <li class="page_item" @click="gotoRead()">
                        第一章 穿越神之塔，至高神器的奖励！
                    </li>
                    <li class="page_item" @click="gotoRead()">
                        第一章 穿越神之塔，至高神器的奖励！
                    </li>
                    <li class="page_item" @click="gotoRead()">
                        第一章 穿越神之塔，至高神器的奖励！
                    </li>
                    <li class="page_item">
                        第一章 穿越神之塔，至高神器的奖励！
                    </li>
                    <li class="page_item">
                        第一章 穿越神之塔，至高神器的奖励！
                    </li>
                    <li class="page_item">
                        第一章 穿越神之塔，至高神器的奖励！
                    </li>
                    <li class="page_item">
                        第一章 穿越神之塔，至高神器的奖励！
                    </li>
                    <li class="page_item">
                        第一章 穿越神之塔，至高神器的奖励！
                    </li>
                    <li class="page_item">
                        第一章 穿越神之塔，至高神器的奖励！
                    </li>
                    <li class="page_item">
                        第一章 穿越神之塔，至高神器的奖励！
                    </li>
                    <li class="page_item">
                        第一章 穿越神之塔，至高神器的奖励！
                    </li>
                    <li class="page_item">
                        第一章 穿越神之塔，至高神器的奖励！
                    </li>
                    <li class="page_item">
                        第一章 穿越神之塔，至高神器的奖励！
                    </li>
                    <li class="page_item">
                        第一章 穿越神之塔，至高神器的奖励！
                    </li>
                    <li class="page_item">
                        第一章 穿越神之塔，至高神器的奖励！
                    </li>
                    <li class="page_item">
                        第一章 穿越神之塔，至高神器的奖励！
                    </li>
                    <li class="page_item">
                        第一章 穿越神之塔，至高神器的奖励！
                    </li>
                </ul>
            </div>
            <div class="page_right"></div>
        </div>
        <Sidebar />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const gotoRead = () => {
    router.push({
        name: 'chapter',
        query: {
            name: route.query.name,
            date: route.query.date,
            bookname: route.query.bookname,
        },
    });
};
</script>

<style scoped lang="scss">
.content {
    width: 100%;

    .top {
        width: 100%;
        background-color: $navbar-background;
        position: fixed;
        top: 0;
        box-shadow: 0px 3px 3px rgb(199, 199, 199);
        z-index: 999;
    }

    .wrapper {
        width: 100%;
        margin-top: 120px;
        padding-top: 30px;
        height: 500px;
        background-image: linear-gradient(
            to bottom,
            $navbar-background,
            #ffffff
        );

        .main {
            width: 75%;
            margin: auto;

            .main_list {
                width: 100%;
                margin: auto;
                margin-bottom: 20px;
                display: flex;
                color: $text-color;
                li {
                    margin-right: 10px;
                }
            }
        }

        .duction {
            width: 100%;
            margin-top: 20px;
            display: flex;

            .duction_left {
                flex: 1;
                display: flex;

                img {
                    width: 280px;
                    height: 400px;
                }

                .duction_title {
                    flex: 1;
                    margin-left: 30px;

                    h1 {
                        margin: 0;
                        color: $menu-background;
                        font-size: 26px;
                        font-weight: 500;
                        margin-bottom: 30px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        span {
                            width: 80px;
                            height: 50px;
                            display: block;
                            border: 2px solid $menu-background;
                            text-align: center;
                            line-height: 25px;
                            font-size: 16px;
                            border-radius: 8px;
                        }
                    }

                    ul {
                        width: 100%;
                        margin-top: 50px;
                        display: flex;
                        align-items: center;
                        font-size: 14px;
                        color: $menu-background;

                        li {
                            padding: 0 10px;
                            height: 25px;
                            line-height: 25px;
                            border: 1px solid $menu-background;
                            margin-right: 10px;
                            border-radius: 4px;
                        }
                    }

                    p {
                        width: 100%;
                        margin-top: 50px;
                        display: flex;
                        align-items: center;
                        span {
                            display: block;
                            width: 80px;
                            height: 40px;
                            margin-right: 20px;
                            padding-right: 20px;
                            border-right: 1px solid black;
                            text-align: center;
                            font-size: 16px;

                            &:last-child {
                                border-right: none;
                            }
                        }
                    }

                    i {
                        width: 42%;
                        display: inline-block;
                        font-size: 14px;
                        margin-right: 30px;
                        margin-top: 50px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        color: $text-color;
                    }

                    .btn {
                        width: 100%;
                        margin-top: 50px;

                        button {
                            width: 180px;
                            height: 40px;
                            border: none;
                            border-radius: 20px;
                            background-color: transparent;
                            font-size: 16px;
                            color: $text-color;

                            &:first-child {
                                background-color: $menu-background;
                                color: white;
                            }
                        }
                    }
                }
            }

            .duction_right {
                width: 300px;
                height: 400px;
                background-color: white;
                margin-left: 30px;
                border-radius: 10px;
                text-align: center;

                .icon {
                    width: 80px;
                    height: 80px;
                    border-radius: 40px;
                    font-size: 40px;
                    line-height: 80px;
                    margin: auto;
                    margin-top: 30px;
                    border: 1px solid $navbar-background;
                }

                h1 {
                    color: $menu-background;
                    font-size: 18px;
                    font-weight: 500;
                    margin-bottom: 30px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                ul {
                    width: 95%;
                    margin: auto;
                    margin-top: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    border-bottom: 1px solid $text-color;
                    color: $text-color;

                    li {
                        width: 30%;
                        height: 40px;
                        text-align: center;
                        font-size: 16px;
                        margin-bottom: 10px;

                        span {
                            display: block;
                            font-size: 12px;
                            margin-top: 10px;
                        }
                    }
                }

                p {
                    margin: 20px;
                    text-align: left;
                }

                i {
                    color: $text-color;
                }
            }
        }
    }

    .page {
        width: 75%;
        margin: auto;
        display: flex;

        .page_left {
            flex: 1;

            .page_top {
                width: 100%;

                ul {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    padding-bottom: 20px;
                    border-bottom: 1px solid $text-color;

                    li {
                        padding: 0 30px;

                        h1 {
                            margin: 0;
                            color: $text-color;
                            font-size: 26px;
                            font-weight: 500;
                        }

                        .active {
                            color: $menu-background;
                        }
                    }
                }
            }

            .page_cont {
                width: 100%;
                margin-top: 30px;
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 30px;

                .page_item {
                    width: 45%;
                    height: 60px;
                    line-height: 60px;
                    margin-right: 40px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }

        .page_right {
            width: 300px;
        }
    }
}
</style>
