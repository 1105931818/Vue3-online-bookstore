<template>
    <div class="chapter">
        <div class="top">
            <Logo />
        </div>
        <div class="cont">
            <ul class="list">
                <li>当前位置：</li>
                <li>首页 ></li>
                <li>{{ route.query.bookname }} ></li>
                <li>正文</li>
            </ul>
            <div class="cont_main">
                <div class="cont_top">
                    <h1>第一章 穿越神之塔，至高神器的奖励！</h1>
                    <p>
                        作者：
                        <span>{{ route.query.name }}</span>
                        更新时间：
                        <span>{{ route.query.date }}</span>
                    </p>
                </div>
                <div class="content">
                    <ul class="cont_list">
                        <li
                            class="cont_item"
                            v-for="(item, index) in arr"
                            :key="index"
                        >
                            {{ item }}
                        </li>
                    </ul>
                    <button>
                        <el-icon><Star /></el-icon>
                        捧场
                    </button>
                </div>
                <div class="btn">
                    <button>目录</button>
                    <button>上一章</button>
                    <button>下一章</button>
                </div>
            </div>
        </div>
        <Sidebar />
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const data =
    '令人心碎却无能为力的真实故事。 向死而生的文学绝唱，打动万千读者的年度华语小说。 李银河、戴锦华、骆以军、张悦然、詹宏志、蒋方舟、等多位学者作家社会名人郑重推荐。 痛苦的际遇是如此难以分享，好险这个世界还有文学。 我下楼拿作文给李老师改。他掏出来，我被逼到涂在墙上。 老师说了九个字：“不行的话，嘴巴可以吧。” 我说了五个字：“不行，我不会。” 他就塞进来。那感觉像溺水。 可以说话之后，我对老师说：“对不起。”有一种功课做不好的感觉。 小小的房思琪住在金碧辉煌的人生里，她的脸和她可以想象的将来一样漂亮。 补习班语文名师李国华是同一栋高级住宅的邻居。崇拜文学的小房思琪同样崇拜饱读诗书的李老师。 有一天李老师说，你的程度这么好，不如每个礼拜交一篇作文给我吧，不收你周点费。 思琪听话地下楼了。老师在家里等她，桌上没有纸笔。思琪的初恋是李老师。因为李老师把她翻面，把他的东西塞进去。 那年的教师节思琪才十三岁，这个世界和她原本认识的不一样。如果这是爱情，为什么觉得暴力？为什么觉得被折断？为什么老师要一个女学生换过一个女学生？如果这不是爱情，那满口学问的李老师怎么能做了以后，还这么自信、无疑、无愧于心？故事必须重新讲过，与房思琪情同双胞的刘怡婷，接到警局通知，去带回神志不清，被判定疯了的房思琪。 透过思琪的日记，怡婷得知思琪五年中的所见所思……嫁入钱家的许伊纹，是两位少女的忘年交，二十余岁的她，是两位少女的文学启蒙者同时也是丈夫家暴的沉默受害者…… 升入大学后的郭晓奇仍旧爱着高中时的补习教师李国华，而这位文质彬彬的补习教师并不只有平时人们眼中受人尊敬的老师形象的一面…… 这是一部惊人而特别的小说，小说作者既具有高度敏锐的感受力、又是一个近距离目击者，使这整件事像一个“幸存的标本”那样地被保留下来。 整本书反覆地、用极度贴近被侵害者的视角，直直逼视那种“别人夺去你某个珍贵之物”的痛苦──且掠夺之人是以此为乐。令人心碎却无能为力的真实故事。 向死而生的文学绝唱，打动万千读者的年度华语小说。 李银河、戴锦华、骆以军、张悦然、詹宏志、蒋方舟、等多位学者作家社会名人郑重推荐。 痛苦的际遇是如此难以分享，好险这个世界还有文学。 我下楼拿作文给李老师改。他掏出来，我被逼到涂在墙上。 老师说了九个字：“不行的话，嘴巴可以吧。” 我说了五个字：“不行，我不会。” 他就塞进来。那感觉像溺水。 可以说话之后，我对老师说：“对不起。”有一种功课做不好的感觉。 小小的房思琪住在金碧辉煌的人生里，她的脸和她可以想象的将来一样漂亮。 补习班语文名师李国华是同一栋高级住宅的邻居。崇拜文学的小房思琪同样崇拜饱读诗书的李老师。 有一天李老师说，你的程度这么好，不如每个礼拜交一篇作文给我吧，不收你周点费。 思琪听话地下楼了。老师在家里等她，桌上没有纸笔。思琪的初恋是李老师。因为李老师把她翻面，把他的东西塞进去。 那年的教师节思琪才十三岁，这个世界和她原本认识的不一样。如果这是爱情，为什么觉得暴力？为什么觉得被折断？为什么老师要一个女学生换过一个女学生？如果这不是爱情，那满口学问的李老师怎么能做了以后，还这么自信、无疑、无愧于心？故事必须重新讲过，与房思琪情同双胞的刘怡婷，接到警局通知，去带回神志不清，被判定疯了的房思琪。 透过思琪的日记，怡婷得知思琪五年中的所见所思……嫁入钱家的许伊纹，是两位少女的忘年交，二十余岁的她，是两位少女的文学启蒙者同时也是丈夫家暴的沉默受害者…… 升入大学后的郭晓奇仍旧爱着高中时的补习教师李国华，而这位文质彬彬的补习教师并不只有平时人们眼中受人尊敬的老师形象的一面…… 这是一部惊人而特别的小说，小说作者既具有高度敏锐的感受力、又是一个近距离目击者，使这整件事像一个“幸存的标本”那样地被保留下来。 整本书反覆地、用极度贴近被侵害者的视角，直直逼视那种“别人夺去你某个珍贵之物”的痛苦──且掠夺之人是以此为乐。';
const arr = data.split(' ');
</script>

<style scoped lang="scss">
.chapter {
    width: 100%;
    height: calc(100vh - 100px);

    .top {
        width: 100%;
        background-color: white;
        box-shadow: 0px 3px 3px rgb(199, 199, 199);
    }

    .cont {
        width: 100%;
        padding: 30px;
        margin: auto;
        box-sizing: border-box;
        color: $text-color;
        background-color: $book-background;

        .list {
            width: 80%;
            margin: auto;
            margin-bottom: 20px;
            display: flex;
            li {
                margin-right: 10px;
            }
        }
        .cont_main {
            width: 80%;
            margin: auto;
            padding: 50px;
            padding-top: 100px;
            box-sizing: border-box;
            background-color: $navbar-background;

            .cont_top {
                width: 80%;
                margin: auto;
                text-align: center;
                padding-bottom: 25px;
                border-bottom: 1px dotted $text-color;

                h1 {
                    margin: 0;
                    color: $menu-background;
                    font-size: 28px;
                    font-weight: 500;
                    margin-bottom: 30px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                span {
                    color: black;
                    margin-right: 15px;
                }
            }

            .content {
                width: 80%;
                margin: auto;
                margin-top: 50px;

                .cont_list {
                    width: 100%;

                    .cont_item {
                        width: 100%;
                        line-height: 50px;
                    }
                }
                button {
                    width: 200px;
                    height: 40px;
                    display: block;
                    margin: auto;
                    background-color: $menu-background;
                    color: white;
                    border-radius: 4px;
                    border: none;
                    font-size: 18px;
                    margin-top: 30px;
                }
            }

            .btn {
                width: 630px;
                margin: auto;
                margin-top: 50px;
                padding-left: 10px;

                button {
                    width: 200px;
                    height: 40px;
                    margin-right: 10px;
                    background-color: $book-background;
                    opacity: 0.5;
                    border: none;
                    border-radius: 4px;
                }
            }
        }
    }
}
</style>
