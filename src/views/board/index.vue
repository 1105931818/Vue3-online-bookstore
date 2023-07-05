<template>
    <div class="board">
        <div class="top">
            <Logo />
        </div>
        <div class="cont">
            <div class="cont_left">
                <h1>作品榜单</h1>
                <ul class="left_list">
                    <li
                        class="left_item"
                        :class="{ active: change === index }"
                        v-for="(item, index) in board"
                        :key="index"
                        @click="changeBoard(item, index)"
                    >
                        {{ item }}
                    </li>
                </ul>
            </div>
            <div class="cont_right">
                <h1>{{ title }}</h1>
                <ul class="right_list">
                    <li class="right_item">
                        <img src="../../assets/image/book_pic1.jpeg" />
                        <div class="title">
                            <h1>邓小平时代</h1>
                            <p>
                                <span>作者</span>
                                【美】傅高义 (Ezra.F.Vogel)
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>出版年</span>
                                2013-1-18
                            </p>
                            <i>
                                邓小平深刻影响了中国历史和世界历史的走向，也改变了每一个当代中国人的命运。解读邓小平的政治生涯及其行为逻辑，就是解读当代中国，解读个人命运背后的历史变局。
                                哈佛大学傅高义教授倾十年心力完成的巨著《邓小平时代》，是对邓小平跌宕起伏的一生以及中国惊险崎岖的改革开放之路的全景式描述。作者以丰富的史料、国内外重要的研究成果、档案资料和为数众多的独家访谈为基础，对邓小平个人性格及执政风格进行了深层分析，并对中国改革开放史进行了完整而独到的阐释。全书人物、事件众多，既有对毛泽东、周恩来、邓小平、陈云等人相互关系的细致解读，又有对三中全会、权力过渡、中美建交、政改试水、经济特区、一国两制、九二南巡等重大事件和决策的深入分析。全书持论严谨、脉络清晰、观点鲜明、叙述生动，力图使人物言行符合历史情境，对改革开放的历史进程亦时有独特看法，引人深思，被誉为邓小平研究“纪念碑式”的著作。
                                读懂《邓小平时代》，读懂这段历史，读懂“仍然生活在邓小平时代”的我们自己的现在和未来。
                            </i>
                        </div>
                        <div class="btn">
                            <button>立即阅读</button>
                            <button>加入书架</button>
                        </div>
                    </li>
                    <li class="right_item">
                        <img src="../../assets/image/book_pic2.jpeg" />
                        <div class="title">
                            <h1>邓小平时代</h1>
                            <p>
                                <span>作者</span>
                                【美】傅高义 (Ezra.F.Vogel)
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>出版年</span>
                                2013-1-18
                            </p>
                            <i>
                                邓小平深刻影响了中国历史和世界历史的走向，也改变了每一个当代中国人的命运。解读邓小平的政治生涯及其行为逻辑，就是解读当代中国，解读个人命运背后的历史变局。
                                哈佛大学傅高义教授倾十年心力完成的巨著《邓小平时代》，是对邓小平跌宕起伏的一生以及中国惊险崎岖的改革开放之路的全景式描述。作者以丰富的史料、国内外重要的研究成果、档案资料和为数众多的独家访谈为基础，对邓小平个人性格及执政风格进行了深层分析，并对中国改革开放史进行了完整而独到的阐释。全书人物、事件众多，既有对毛泽东、周恩来、邓小平、陈云等人相互关系的细致解读，又有对三中全会、权力过渡、中美建交、政改试水、经济特区、一国两制、九二南巡等重大事件和决策的深入分析。全书持论严谨、脉络清晰、观点鲜明、叙述生动，力图使人物言行符合历史情境，对改革开放的历史进程亦时有独特看法，引人深思，被誉为邓小平研究“纪念碑式”的著作。
                                读懂《邓小平时代》，读懂这段历史，读懂“仍然生活在邓小平时代”的我们自己的现在和未来。
                            </i>
                        </div>
                        <div class="btn">
                            <button>立即阅读</button>
                            <button>加入书架</button>
                        </div>
                    </li>
                    <li class="right_item">
                        <img src="../../assets/image/book_pic3.jpeg" />
                        <div class="title">
                            <h1>邓小平时代</h1>
                            <p>
                                <span>作者</span>
                                【美】傅高义 (Ezra.F.Vogel)
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>出版年</span>
                                2013-1-18
                            </p>
                            <i>
                                邓小平深刻影响了中国历史和世界历史的走向，也改变了每一个当代中国人的命运。解读邓小平的政治生涯及其行为逻辑，就是解读当代中国，解读个人命运背后的历史变局。
                                哈佛大学傅高义教授倾十年心力完成的巨著《邓小平时代》，是对邓小平跌宕起伏的一生以及中国惊险崎岖的改革开放之路的全景式描述。作者以丰富的史料、国内外重要的研究成果、档案资料和为数众多的独家访谈为基础，对邓小平个人性格及执政风格进行了深层分析，并对中国改革开放史进行了完整而独到的阐释。全书人物、事件众多，既有对毛泽东、周恩来、邓小平、陈云等人相互关系的细致解读，又有对三中全会、权力过渡、中美建交、政改试水、经济特区、一国两制、九二南巡等重大事件和决策的深入分析。全书持论严谨、脉络清晰、观点鲜明、叙述生动，力图使人物言行符合历史情境，对改革开放的历史进程亦时有独特看法，引人深思，被誉为邓小平研究“纪念碑式”的著作。
                                读懂《邓小平时代》，读懂这段历史，读懂“仍然生活在邓小平时代”的我们自己的现在和未来。
                            </i>
                        </div>
                        <div class="btn">
                            <button>立即阅读</button>
                            <button>加入书架</button>
                        </div>
                    </li>
                    <li class="right_item">
                        <img src="../../assets/image/book_pic4.jpeg" />
                        <div class="title">
                            <h1>邓小平时代</h1>
                            <p>
                                <span>作者</span>
                                【美】傅高义 (Ezra.F.Vogel)
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>出版年</span>
                                2013-1-18
                            </p>
                            <i>
                                邓小平深刻影响了中国历史和世界历史的走向，也改变了每一个当代中国人的命运。解读邓小平的政治生涯及其行为逻辑，就是解读当代中国，解读个人命运背后的历史变局。
                                哈佛大学傅高义教授倾十年心力完成的巨著《邓小平时代》，是对邓小平跌宕起伏的一生以及中国惊险崎岖的改革开放之路的全景式描述。作者以丰富的史料、国内外重要的研究成果、档案资料和为数众多的独家访谈为基础，对邓小平个人性格及执政风格进行了深层分析，并对中国改革开放史进行了完整而独到的阐释。全书人物、事件众多，既有对毛泽东、周恩来、邓小平、陈云等人相互关系的细致解读，又有对三中全会、权力过渡、中美建交、政改试水、经济特区、一国两制、九二南巡等重大事件和决策的深入分析。全书持论严谨、脉络清晰、观点鲜明、叙述生动，力图使人物言行符合历史情境，对改革开放的历史进程亦时有独特看法，引人深思，被誉为邓小平研究“纪念碑式”的著作。
                                读懂《邓小平时代》，读懂这段历史，读懂“仍然生活在邓小平时代”的我们自己的现在和未来。
                            </i>
                        </div>
                        <div class="btn">
                            <button>立即阅读</button>
                            <button>加入书架</button>
                        </div>
                    </li>
                    <li class="right_item">
                        <img src="../../assets/image/book_pic5.jpeg" />
                        <div class="title">
                            <h1>邓小平时代</h1>
                            <p>
                                <span>作者</span>
                                【美】傅高义 (Ezra.F.Vogel)
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>出版年</span>
                                2013-1-18
                            </p>
                            <i>
                                邓小平深刻影响了中国历史和世界历史的走向，也改变了每一个当代中国人的命运。解读邓小平的政治生涯及其行为逻辑，就是解读当代中国，解读个人命运背后的历史变局。
                                哈佛大学傅高义教授倾十年心力完成的巨著《邓小平时代》，是对邓小平跌宕起伏的一生以及中国惊险崎岖的改革开放之路的全景式描述。作者以丰富的史料、国内外重要的研究成果、档案资料和为数众多的独家访谈为基础，对邓小平个人性格及执政风格进行了深层分析，并对中国改革开放史进行了完整而独到的阐释。全书人物、事件众多，既有对毛泽东、周恩来、邓小平、陈云等人相互关系的细致解读，又有对三中全会、权力过渡、中美建交、政改试水、经济特区、一国两制、九二南巡等重大事件和决策的深入分析。全书持论严谨、脉络清晰、观点鲜明、叙述生动，力图使人物言行符合历史情境，对改革开放的历史进程亦时有独特看法，引人深思，被誉为邓小平研究“纪念碑式”的著作。
                                读懂《邓小平时代》，读懂这段历史，读懂“仍然生活在邓小平时代”的我们自己的现在和未来。
                            </i>
                        </div>
                        <div class="btn">
                            <button>立即阅读</button>
                            <button>加入书架</button>
                        </div>
                    </li>
                    <li class="right_item">
                        <img src="../../assets/image/book_pic6.jpeg" />
                        <div class="title">
                            <h1>邓小平时代</h1>
                            <p>
                                <span>作者</span>
                                【美】傅高义 (Ezra.F.Vogel)
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>出版年</span>
                                2013-1-18
                            </p>
                            <i>
                                邓小平深刻影响了中国历史和世界历史的走向，也改变了每一个当代中国人的命运。解读邓小平的政治生涯及其行为逻辑，就是解读当代中国，解读个人命运背后的历史变局。
                                哈佛大学傅高义教授倾十年心力完成的巨著《邓小平时代》，是对邓小平跌宕起伏的一生以及中国惊险崎岖的改革开放之路的全景式描述。作者以丰富的史料、国内外重要的研究成果、档案资料和为数众多的独家访谈为基础，对邓小平个人性格及执政风格进行了深层分析，并对中国改革开放史进行了完整而独到的阐释。全书人物、事件众多，既有对毛泽东、周恩来、邓小平、陈云等人相互关系的细致解读，又有对三中全会、权力过渡、中美建交、政改试水、经济特区、一国两制、九二南巡等重大事件和决策的深入分析。全书持论严谨、脉络清晰、观点鲜明、叙述生动，力图使人物言行符合历史情境，对改革开放的历史进程亦时有独特看法，引人深思，被誉为邓小平研究“纪念碑式”的著作。
                                读懂《邓小平时代》，读懂这段历史，读懂“仍然生活在邓小平时代”的我们自己的现在和未来。
                            </i>
                        </div>
                        <div class="btn">
                            <button>立即阅读</button>
                            <button>加入书架</button>
                        </div>
                    </li>
                    <li class="right_item">
                        <img src="../../assets/image/book_pic7.jpeg" />
                        <div class="title">
                            <h1>邓小平时代</h1>
                            <p>
                                <span>作者</span>
                                【美】傅高义 (Ezra.F.Vogel)
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>出版年</span>
                                2013-1-18
                            </p>
                            <i>
                                邓小平深刻影响了中国历史和世界历史的走向，也改变了每一个当代中国人的命运。解读邓小平的政治生涯及其行为逻辑，就是解读当代中国，解读个人命运背后的历史变局。
                                哈佛大学傅高义教授倾十年心力完成的巨著《邓小平时代》，是对邓小平跌宕起伏的一生以及中国惊险崎岖的改革开放之路的全景式描述。作者以丰富的史料、国内外重要的研究成果、档案资料和为数众多的独家访谈为基础，对邓小平个人性格及执政风格进行了深层分析，并对中国改革开放史进行了完整而独到的阐释。全书人物、事件众多，既有对毛泽东、周恩来、邓小平、陈云等人相互关系的细致解读，又有对三中全会、权力过渡、中美建交、政改试水、经济特区、一国两制、九二南巡等重大事件和决策的深入分析。全书持论严谨、脉络清晰、观点鲜明、叙述生动，力图使人物言行符合历史情境，对改革开放的历史进程亦时有独特看法，引人深思，被誉为邓小平研究“纪念碑式”的著作。
                                读懂《邓小平时代》，读懂这段历史，读懂“仍然生活在邓小平时代”的我们自己的现在和未来。
                            </i>
                        </div>
                        <div class="btn">
                            <button>立即阅读</button>
                            <button>加入书架</button>
                        </div>
                    </li>
                    <li class="right_item">
                        <img src="../../assets/image/book_pic8.jpeg" />
                        <div class="title">
                            <h1>邓小平时代</h1>
                            <p>
                                <span>作者</span>
                                【美】傅高义 (Ezra.F.Vogel)
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>出版年</span>
                                2013-1-18
                            </p>
                            <i>
                                邓小平深刻影响了中国历史和世界历史的走向，也改变了每一个当代中国人的命运。解读邓小平的政治生涯及其行为逻辑，就是解读当代中国，解读个人命运背后的历史变局。
                                哈佛大学傅高义教授倾十年心力完成的巨著《邓小平时代》，是对邓小平跌宕起伏的一生以及中国惊险崎岖的改革开放之路的全景式描述。作者以丰富的史料、国内外重要的研究成果、档案资料和为数众多的独家访谈为基础，对邓小平个人性格及执政风格进行了深层分析，并对中国改革开放史进行了完整而独到的阐释。全书人物、事件众多，既有对毛泽东、周恩来、邓小平、陈云等人相互关系的细致解读，又有对三中全会、权力过渡、中美建交、政改试水、经济特区、一国两制、九二南巡等重大事件和决策的深入分析。全书持论严谨、脉络清晰、观点鲜明、叙述生动，力图使人物言行符合历史情境，对改革开放的历史进程亦时有独特看法，引人深思，被誉为邓小平研究“纪念碑式”的著作。
                                读懂《邓小平时代》，读懂这段历史，读懂“仍然生活在邓小平时代”的我们自己的现在和未来。
                            </i>
                        </div>
                        <div class="btn">
                            <button>立即阅读</button>
                            <button>加入书架</button>
                        </div>
                    </li>
                    <li class="right_item">
                        <img src="../../assets/image/book_pic9.jpeg" />
                        <div class="title">
                            <h1>邓小平时代</h1>
                            <p>
                                <span>作者</span>
                                【美】傅高义 (Ezra.F.Vogel)
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>出版年</span>
                                2013-1-18
                            </p>
                            <i>
                                邓小平深刻影响了中国历史和世界历史的走向，也改变了每一个当代中国人的命运。解读邓小平的政治生涯及其行为逻辑，就是解读当代中国，解读个人命运背后的历史变局。
                                哈佛大学傅高义教授倾十年心力完成的巨著《邓小平时代》，是对邓小平跌宕起伏的一生以及中国惊险崎岖的改革开放之路的全景式描述。作者以丰富的史料、国内外重要的研究成果、档案资料和为数众多的独家访谈为基础，对邓小平个人性格及执政风格进行了深层分析，并对中国改革开放史进行了完整而独到的阐释。全书人物、事件众多，既有对毛泽东、周恩来、邓小平、陈云等人相互关系的细致解读，又有对三中全会、权力过渡、中美建交、政改试水、经济特区、一国两制、九二南巡等重大事件和决策的深入分析。全书持论严谨、脉络清晰、观点鲜明、叙述生动，力图使人物言行符合历史情境，对改革开放的历史进程亦时有独特看法，引人深思，被誉为邓小平研究“纪念碑式”的著作。
                                读懂《邓小平时代》，读懂这段历史，读懂“仍然生活在邓小平时代”的我们自己的现在和未来。
                            </i>
                        </div>
                        <div class="btn">
                            <button>立即阅读</button>
                            <button>加入书架</button>
                        </div>
                    </li>
                    <li class="right_item">
                        <img src="../../assets/image/book_pic10.jpeg" />
                        <div class="title">
                            <h1>邓小平时代</h1>
                            <p>
                                <span>作者</span>
                                【美】傅高义 (Ezra.F.Vogel)
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>出版年</span>
                                2013-1-18
                            </p>
                            <i>
                                邓小平深刻影响了中国历史和世界历史的走向，也改变了每一个当代中国人的命运。解读邓小平的政治生涯及其行为逻辑，就是解读当代中国，解读个人命运背后的历史变局。
                                哈佛大学傅高义教授倾十年心力完成的巨著《邓小平时代》，是对邓小平跌宕起伏的一生以及中国惊险崎岖的改革开放之路的全景式描述。作者以丰富的史料、国内外重要的研究成果、档案资料和为数众多的独家访谈为基础，对邓小平个人性格及执政风格进行了深层分析，并对中国改革开放史进行了完整而独到的阐释。全书人物、事件众多，既有对毛泽东、周恩来、邓小平、陈云等人相互关系的细致解读，又有对三中全会、权力过渡、中美建交、政改试水、经济特区、一国两制、九二南巡等重大事件和决策的深入分析。全书持论严谨、脉络清晰、观点鲜明、叙述生动，力图使人物言行符合历史情境，对改革开放的历史进程亦时有独特看法，引人深思，被誉为邓小平研究“纪念碑式”的著作。
                                读懂《邓小平时代》，读懂这段历史，读懂“仍然生活在邓小平时代”的我们自己的现在和未来。
                            </i>
                        </div>
                        <div class="btn">
                            <button>立即阅读</button>
                            <button>加入书架</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <el-pagination
            v-model:current-page="page"
            v-model:page-size="pageSize"
            background
            class="page"
            layout="prev, pager, next, jumper"
            :total="1000"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const board = reactive<string[]>([
    '畅销榜',
    '新书榜',
    '点击榜',
    '推荐榜',
    '捧场榜',
    '完结榜',
    '连载榜',
]);
const change = ref<number>(0);
const title = ref<string>('畅销榜');
const page = ref<number>(1);
const pageSize = ref<number>(100);
const handleSizeChange = () => {
    console.log(1);
};
const handleCurrentChange = () => {
    console.log(2);
};
const changeBoard = (item: string, index: number) => {
    change.value = index;
    title.value = item;
};
</script>

<style scoped lang="scss">
.board {
    width: 100%;

    .top {
        width: 100%;
        background-color: $navbar-background;
        position: fixed;
        top: 0;
        box-shadow: 0px 3px 3px rgb(199, 199, 199);
        z-index: 999;
    }
    .cont {
        width: 75%;
        margin: auto;
        margin-top: 170px;
        display: flex;

        .cont_left {
            width: 300px;

            h1 {
                width: 220px;
                margin: 0;
                color: $menu-background;
                font-size: 26px;
                font-weight: 500;
                padding-left: 10px;
                padding-bottom: 20px;
                margin-bottom: 20px;
                border-bottom: 1px solid $menu-background;
            }

            .left_list {
                width: 200px;
                font-size: 16px;
                color: $text-color;

                .left_item {
                    width: 100%;
                    height: 60px;
                    padding-left: 30px;
                    text-align: left;
                    line-height: 60px;
                    border-top-left-radius: 6px;
                    border-bottom-left-radius: 6px;
                }

                .active {
                    font-size: 24px;
                    color: $menu-background;
                    background-image: linear-gradient(
                        to right,
                        $navbar-background,
                        #ffffff
                    );
                }
            }
        }

        .cont_right {
            flex: 1;

            h1 {
                margin: 0;
                color: $menu-background;
                font-size: 26px;
                font-weight: 500;
                margin-bottom: 30px;
            }

            .right_list {
                width: 100%;

                .right_item {
                    width: 100%;
                    height: 140px;
                    display: flex;
                    align-items: center;
                    margin-bottom: 30px;

                    img {
                        width: 100px;
                        height: 140px;
                    }

                    .btn {
                        width: 160px;
                        margin-left: 40px;
                        padding-top: 20px;
                        box-sizing: border-box;

                        button {
                            width: 120px;
                            height: 45px;
                            margin-bottom: 15px;
                            background-color: white;
                            color: $text-color;
                            border: none;
                            border-radius: 22px;
                            font-size: 16px;

                            &:first-child {
                                background-color: $menu-background;
                                color: white;
                            }
                        }
                    }

                    .title {
                        flex: 1;
                        margin-left: 30px;

                        h1 {
                            margin: 0;
                            color: $menu-background;
                            font-size: 20px;
                            font-weight: 500;
                            margin-bottom: 20px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                        p {
                            font-size: 14px;
                            margin-bottom: 20px;

                            span {
                                color: $text-color;
                            }
                        }

                        i {
                            width: 100%;
                            display: -webkit-box;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            font-size: 14px;
                            color: $text-color;
                            line-height: 22px;
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }
    }

    .page {
        width: 600px;
        margin: auto;
        margin-top: 30px;
        margin-bottom: 50px;
    }
}
</style>
