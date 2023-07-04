<template>
    <div class="version">
        <Read />
        <Read name="潜力佳作" title="潜力之作，请君品鉴" />
        <Read name="精品必读" title="质量精品，必读佳作" />
        <Read name="热门飙升" title="人气好书，火热连载" />
    </div>
    <div class="car">
        <h1>编辑力荐</h1>
        <div class="car_main">
            <div class="item">
                <img src="../../../assets/image/book_pic13.jpeg" />
                <p>局外人</p>
            </div>
            <div class="item">
                <img src="../../../assets/image/book_pic14.jpeg" />
                <p>人类简史</p>
            </div>
            <div class="item">
                <img src="../../../assets/image/book_pic15.jpeg" />
                <p>平凡的世界</p>
            </div>
            <div class="item active">
                <img src="../../../assets/image/book_pic16.jpeg" />
                <p>白鹿原</p>
            </div>
            <div class="item">
                <img src="../../../assets/image/book_pic17.jpeg" />
                <p>围城</p>
            </div>
            <div class="item">
                <img src="../../../assets/image/book_pic18.jpeg" />
                <p>艺术的故事</p>
            </div>
            <div class="item">
                <img src="../../../assets/image/book_pic12.jpeg" />
                <p>新名字的故事</p>
            </div>
            <div class="next">
                <SvgIcon type="next" width="20px" height="20px" color="white" />
            </div>
            <div class="prev">
                <SvgIcon type="prev" width="20px" height="20px" color="white" />
            </div>
        </div>
    </div>

    <div class="cake">
        <div class="cake_left">
            <h1>热销作品</h1>
            <el-carousel
                :interval="4000"
                type="card"
                height="200px"
                style="
                    background-color: #ede8e1;
                    padding-top: 35px;
                    padding-left: 8px;
                    padding-bottom: 15px;
                    border-top-left-radius: 6px;
                    border-top-right-radius: 6px;
                "
            >
                <el-carousel-item
                    v-for="(item, index) in bookList"
                    :key="index"
                >
                    <div class="cake_item">
                        <img :src="item.imgUrl" />
                    </div>
                </el-carousel-item>
            </el-carousel>
            <div class="cake_title">
                <p>{{ bookList[index].bookname }}</p>
                <span>{{ bookList[index].name }}</span>
                <br />
                <i>
                    {{ bookList[index].title }}
                </i>
                <button>书籍详情</button>
            </div>
        </div>
        <div class="cake_right">
            <h1>本周强推</h1>
            <ul>
                <li>
                    <div class="card">
                        <img src="../../../assets/image/book_pic1.jpeg" />
                        <div class="text">
                            <p>邓小平时代</p>
                            <span>【美】傅高义 (Ezra.F.Vogel)</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <img src="../../../assets/image/book_pic2.jpeg" />
                        <div class="text">
                            <p>活着</p>
                            <span>余华</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <img src="../../../assets/image/book_pic3.jpeg" />
                        <div class="text">
                            <p>杀死一只知更鸟</p>
                            <span>【美】哈珀·李</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <img src="../../../assets/image/book_pic4.jpeg" />
                        <div class="text">
                            <p>房思琪的初恋乐园</p>
                            <span>林奕含</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <img src="../../../assets/image/book_pic5.jpeg" />
                        <div class="text">
                            <p>白夜行</p>
                            <span>【日】东野圭吾</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <img src="../../../assets/image/book_pic6.jpeg" />
                        <div class="text">
                            <p>小王子</p>
                            <span>【法】圣埃克苏佩里</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <img src="../../../assets/image/book_pic7.jpeg" />
                        <div class="text">
                            <p>撒哈拉的故事</p>
                            <span>三毛</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <img src="../../../assets/image/book_pic8.jpeg" />
                        <div class="text">
                            <p>明朝那些事儿</p>
                            <span>当年明月</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <img src="../../../assets/image/book_pic9.jpeg" />
                        <div class="text">
                            <p>悉达多：一首印度的诗</p>
                            <span>【德】赫尔曼·黑塞</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <img src="../../../assets/image/book_pic10.jpeg" />
                        <div class="text">
                            <p>失踪的孩子</p>
                            <span>【德】埃莱娜·费兰特</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <img src="../../../assets/image/book_pic11.jpeg" />
                        <div class="text">
                            <p>沉默的大多数</p>
                            <span>王小波</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <img src="../../../assets/image/book_pic12.jpeg" />
                        <div class="text">
                            <p>新名字的故事</p>
                            <span>【德】埃莱娜·费兰特</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import Read from './Read/index.vue';
import { reactive, ref } from 'vue';

type T = {
    imgUrl: string;
    bookname: string;
    name: string;
    title: string;
};
const bookList = reactive<T[]>([
    {
        imgUrl: 'image/book_pic1.jpeg',
        bookname: '邓小平时代',
        name: '【美】傅高义 (Ezra.F.Vogel)',
        title: '邓小平深刻影响了中国历史和世界历史的走向，也改变了每一个当代中国人的命运。解读邓小平的政治生涯及其行为逻辑，就是解读当代中国，解读个人命运背后的历史变局。哈佛大学傅高义教授倾十年心力完成的巨著《邓小平时代》，是对邓小平跌宕起伏的一生以及中国惊险崎岖的改革开放之路的全景式描述。作者以丰富的史料、国内外重要的研究成果、档案资料和为数众多的独家访谈为基础，对邓小平个人性格及执政风格进行了深层分析，并对中国改革开放史进行了完整而独到的阐释。全书人物、事件众多，既有对毛泽东、周恩来、邓小平、陈云等人相互关系的细致解读，又有对三中全会、权力过渡、中美建交、政改试水、经济特区、一国两制、九二南巡等重大事件和决策的深入分析。全书持论严谨、脉络清晰、观点鲜明、叙述生动，力图使人物言行符合历史情境，对改革开放的历史进程亦时有独特看法，引人深思，被誉为邓小平研究“纪念碑式”的著作。读懂《邓小平时代》，读懂这段历史，读懂“仍然生活在邓小平时代”的我们自己的现在和未来。',
    },
    {
        imgUrl: 'image/book_pic2.jpeg',
        bookname: '活着',
        name: '余华',
        title: '《活着(新版)》讲述了农村人福贵悲惨的人生遭遇。福贵本是个阔少爷，可他嗜赌如命，终于赌光了家业，一贫如洗。他的父亲被他活活气死，母亲则在穷困中患了重病，福贵前去求药，却在途中被国民党抓去当壮丁。经过几番波折回到家里，才知道母亲早已去世，妻子家珍含辛茹苦地养大两个儿女。此后更加悲惨的命运一次又一次降临到福贵身上，他的妻子、儿女和孙子相继死去，最后只剩福贵和一头老牛相依为命，但老人依旧活着，仿佛比往日更加洒脱与坚强。《活着(新版)》荣获意大利格林扎纳•卡佛文学奖最高奖项（1998年）、台湾《中国时报》10本好书奖（1994年）、香港“博益”15本好书奖（1994年）、第三届世界华文“冰心文学奖”（2002年），入选香港《亚洲周刊》评选的“20世纪中文小说百年百强”、中国百位批评家和文学编辑评选的“20世纪90年代最有影响的10部作品”。',
    },
    {
        imgUrl: 'image/book_pic3.jpeg',
        bookname: '杀死一只知更鸟',
        name: '【美】哈珀·李',
        title: '成长总是个让人烦恼的命题。成长有时会很缓慢，如小溪般唱着叮咚的歌曲趟过，有时却如此突如其来，如暴雨般劈头盖脸……三个孩子因为小镇上的几桩冤案经历了猝不及防的成长——痛苦与迷惑，悲伤与愤怒，也有温情与感动。这是爱与真知的成长经典。《杀死一只知更鸟》获1961年普利策奖。美国图书馆借阅率最高的书，英国青少年最喜爱的小说之一。美国中学推荐课外读物。由小说改编的电影获第25届奥斯卡三项大奖。美国电影协会评选的“100名银幕英雄与恶人”中，派克主演的芬奇律师名列英雄第一位。作为史上最受喜爱的小说之一，《杀死一只知更鸟》已获得显赫声誉。它赢得过普利策奖，被翻译成四十多种语言，在世界范围内售出超过三千万册，并曾被拍成，备受欢迎的电影。——哈珀•柯林斯出版集团斯塔尔六月对北卡罗来纳州律师协会发表演说时，自比为《杀死一只知更鸟》中勇敢的南方白人律师阿蒂克斯•芬奇。斯塔尔凭着他的道德优越感，不把规则、秩序和正直放在眼里，这样一个人居然自比为芬奇，实在令我和比尔难以忍受。——希拉里•克林顿年轻时看过《梅岗城故事》（即《杀死一只知更鸟》），对片中法律人为弱势者争取权益奋斗，为恶法非法或恶法亦法辩论的故事感到澎湃不已，更加确定要成为法律人的心愿。 ——许宗力（台大法学院院长）',
    },
]);
let index = ref<number>(0);
</script>

<style scoped lang="scss">
.version {
    width: 80%;
    margin: auto;
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
}

.car {
    width: 80%;
    margin: auto;
    h1 {
        margin: 0;
        color: $menu-background;
        font-size: 26px;
        font-weight: 500;
        margin-bottom: 20px;
    }

    .car_main {
        display: flex;
        background-color: $navbar-background;
        padding-top: 40px;
        border-radius: 6px;
        position: relative;

        .next,
        .prev {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: $menu-background;
            text-align: center;
            line-height: 60px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
        }

        .prev {
            left: -25px;
        }
        .next {
            right: -25px;
        }

        .item {
            width: 140px;
            margin: 0 15px;
            text-align: center;
            color: $text-color;
            margin-bottom: 10px;

            img {
                width: 120px;
                height: 180px;
                margin-bottom: 15px;
            }
        }

        .active {
            width: 180px;
            font-size: 24px;
            font-weight: 500;
            margin-top: -20px;

            img {
                width: 160px;
                height: 220px;
            }
        }
    }
}

.cake {
    width: 80%;
    margin: auto;
    margin-top: 50px;
    display: flex;
    height: 650px;

    .cake_left {
        width: 320px;
        height: 100%;
        h1 {
            margin: 0;
            color: $menu-background;
            font-size: 26px;
            font-weight: 500;
            margin-bottom: 20px;
        }

        .cake_item {
            img {
                width: 140px;
            }
        }

        .cake_title {
            width: 100%;
            height: 360px;
            border: 2px solid $navbar-background;
            padding: 30px;
            border-top: none;
            box-sizing: border-box;
            text-align: center;
            color: $text-color;
            position: relative;

            p {
                font-size: 22px;
                font-weight: 600px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin-bottom: 15px;
            }

            span {
                display: block;
                font-size: 14px;
                margin-bottom: 5px;
            }

            i {
                width: 100%;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 10;
                -webkit-box-orient: vertical;
                font-size: 14px;
                line-height: 16px;
            }

            button {
                position: absolute;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                width: 120px;
                height: 40px;
                font-size: 16px;
                background-color: $menu-background;
                color: white;
                border: none;
                border-radius: 20px;
            }
        }
    }

    .cake_right {
        flex: 1;
        height: 100%;
        margin-left: 80px;
        h1 {
            margin: 0;
            color: $menu-background;
            font-size: 26px;
            font-weight: 500;
            margin-bottom: 20px;
            margin-left: -10px;
        }

        ul {
            width: 100%;
            height: 620px;
            display: flex;
            justify-content: space-around;
            align-content: space-around;
            flex-wrap: wrap;

            li {
                width: 30%;
                height: 130px;
                display: flex;
                border: 2px solid $base-background;
                border-radius: 6px;

                .card {
                    width: 100%;
                    height: 100%;
                    padding: 10px;
                    box-sizing: border-box;
                    display: flex;

                    img {
                        width: 80px;
                    }
                    .text {
                        width: 128px;
                        font-size: 14px;
                        color: $text-color;
                        padding-top: 10px;
                        margin-left: 20px;
                        box-sizing: border-box;

                        p {
                            font-size: 18px;
                            margin-bottom: 25px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                    }
                }
            }
        }
    }
}
</style>
