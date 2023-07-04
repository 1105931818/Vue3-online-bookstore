<template>
    <div class="read">
        <h1>
            {{ name ? name : '人气连载' }}
            <br />
            <span>{{ title ? title : '人气好书，火热连载' }}</span>
        </h1>
        <ul>
            <li>
                <a>
                    <img src="../../../../assets/image/book_pic6.jpeg" />
                    <div class="link">
                        <p>直播算命：水友你这对象玩的有点厉害</p>
                        <span>成家立业</span>
                    </div>
                </a>
            </li>
            <li>
                <a>
                    <img src="../../../../assets/image/book_pic7.jpeg" />
                    <div class="link">
                        <p>亮剑：开局成为汉奸，反手端掉鬼子司令部</p>
                        <span>看见细微的曙光</span>
                    </div>
                </a>
            </li>
            <li>
                <a>
                    <img src="../../../../assets//image/book_pic8.jpeg" />
                    <div class="link">
                        <p>灵气复苏：从鲤鱼进化成神龙</p>
                        <span>月下苍穹</span>
                    </div>
                </a>
            </li>
            <li>
                <a>
                    <img src="../../../../assets//image/book_pic9.jpeg" />
                    <div class="link">
                        <p>科技：打造巅峰华夏，从横推鹰酱</p>
                        <span>南音于梦</span>
                    </div>
                </a>
            </li>
            <li>
                <a>
                    <img src="../../../../assets//image/book_pic10.jpeg" />
                    <div class="link">
                        <p>小师叔，你已经无敌了，快下山吧</p>
                        <span>贫道化个菊</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
type T = {
    name?: string;
    title?: string;
};

defineProps<T>();
</script>

<style scoped lang="scss">
.read {
    width: 270px;
    height: 550px;
    margin-top: 20px;
    position: relative;

    h1 {
        margin: 0;
        color: $menu-background;
        font-size: 26px;
        font-weight: 500;
        padding: 20px 10px;
        border-bottom: 4px solid $menu-background;
        background-image: linear-gradient(
            to bottom,
            $navbar-background,
            #ffffff
        );
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        span {
            display: block;
            font-size: 14px;
            padding-top: 20px;
            color: $text-color;
        }
    }

    ul {
        width: 100%;
        margin-top: 20px;
        position: absolute;
        z-index: 99;

        li {
            margin-bottom: 10px;

            a {
                width: 100%;
                height: 60px;
                font-size: 16px;
                color: $text-color;
                transition: all 0.5s;
                overflow: hidden;
                display: flex;
                border-radius: 4px;
                &:hover {
                    height: 100px;
                    padding: 10px;
                    box-sizing: border-box;
                    img {
                        display: block;
                    }
                    .link p {
                        width: 180px;
                        height: 70px;
                        font-size: 16px;
                        white-space: pre-wrap;
                        line-height: 20px;
                    }
                }

                .link {
                    width: 100%;
                    height: 100%;
                    margin-left: 10px;
                    p {
                        width: 250px;
                        height: 30px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }

                    span {
                        font-size: 12px;
                        display: block;
                        width: 150px;
                        height: 40px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }

                img {
                    display: none;
                }
            }
        }
    }
}
</style>
