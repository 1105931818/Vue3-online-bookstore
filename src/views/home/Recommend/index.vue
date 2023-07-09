<template>
    <div class="recommend">
        <div class="main">
            <span>分类推荐</span>
            <ul>
                <li
                    v-for="(item, index) in recommend"
                    :key="index"
                    @click="gotolibrary(item)"
                >
                    {{ item.name }}
                </li>
                <li><router-link to="/library">查看更多</router-link></li>
            </ul>
        </div>
    </div>

    <div class="rank">
        <div class="left">
            <el-carousel :interval="4000" height="450px">
                <el-carousel-item
                    v-for="(item, index) in booksList"
                    :key="index"
                    @click="gotoCont(item)"
                >
                    <div class="item">
                        <img :src="item.imgUrl" />
                        <div class="title">
                            <h1>{{ item.bookname }}</h1>
                            <p>
                                <span>作者</span>
                                {{ item.author }}
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span>出版年</span>
                                {{ item.date }}
                            </p>
                            <i>
                                {{ item.summary }}
                            </i>
                            <button @click.stop="gotoRead(item)">
                                立即阅读
                            </button>
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="right">
            <h1>热门榜单</h1>
            <ul>
                <li>
                    <SvgIcon type="first" width="16px" height="16px" />
                    <a>
                        <div class="link">
                            <p>直播算命：水友你这对象玩的有点厉害</p>
                            <span>成家立业</span>
                        </div>
                        <img src="../../../assets//image/book_pic6.jpeg" />
                    </a>
                </li>
                <li>
                    <SvgIcon type="second" width="16px" height="16px" />
                    <a>
                        <div class="link">
                            <p>亮剑：开局成为汉奸，反手端掉鬼子司令部</p>
                            <span>看见细微的曙光</span>
                        </div>
                        <img src="../../../assets//image/book_pic7.jpeg" />
                    </a>
                </li>
                <li>
                    <SvgIcon type="third" width="16px" height="16px" />
                    <a>
                        <div class="link">
                            <p>灵气复苏：从鲤鱼进化成神龙</p>
                            <span>月下苍穹</span>
                        </div>
                        <img src="../../../assets//image/book_pic8.jpeg" />
                    </a>
                </li>
                <li>
                    <a>
                        <div class="link">
                            <p>科技：打造巅峰华夏，从横推鹰酱</p>
                            <span>南音于梦</span>
                        </div>
                        <img src="../../../assets//image/book_pic9.jpeg" />
                    </a>
                </li>
                <li>
                    <a>
                        <div class="link">
                            <p>小师叔，你已经无敌了，快下山吧</p>
                            <span>贫道化个菊</span>
                        </div>
                        <img src="../../../assets//image/book_pic10.jpeg" />
                    </a>
                </li>
                <li>
                    <a>
                        <div class="link">
                            <p>武侠：迎娶徐谓熊，陪嫁青鸟红薯</p>
                            <span>雨夜疾书</span>
                        </div>
                        <img src="../../../assets//image/book_pic11.jpeg" />
                    </a>
                </li>
                <li>
                    <a>
                        <div class="link">
                            <p>凶宅试睡，我鬼中介的身份被全网知道了</p>
                            <span>榆钱子</span>
                        </div>
                        <img src="../../../assets//image/book_pic12.jpeg" />
                    </a>
                </li>
                <li>
                    <a>
                        <div class="link">
                            <p>表白你不同意，变心你哭什么</p>
                            <span>小龙的笔</span>
                        </div>
                        <img src="../../../assets//image/book_pic13.jpeg" />
                    </a>
                </li>
                <li>
                    <a>
                        <div class="link">
                            <p>深情祖师爷：我真没想当渣男啊</p>
                            <span>小龙的笔</span>
                        </div>
                        <img src="../../../assets//image/book_pic14.jpeg" />
                    </a>
                </li>
                <li>
                    <a>
                        <div class="link">
                            <p>这聊天群群主有事</p>
                            <span>1231</span>
                        </div>
                        <img src="../../../assets//image/book_pic15.jpeg" />
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <div class="ListContainer">
        <div class="list_left">
            <h1>热门标签</h1>
            <ul>
                <li>重生反派</li>
                <li>全民升级</li>
                <li>系统</li>
                <li>穿越长生</li>
                <li>末世</li>
                <li>洪荒</li>
                <li>直播</li>
                <li>无限升级</li>
                <li>风水改命</li>
                <li>火影</li>
                <li>大明</li>
                <li>神豪</li>
                <li>历史军事</li>
                <li>轻小说</li>
                <li>游戏体育</li>
            </ul>
        </div>
        <div class="list_right">
            <ul>
                <li>
                    <div class="list_item">
                        <img src="../../../assets/image/book_pic6.jpeg" />
                        <div class="title">
                            <p>小王子</p>
                            <span>
                                简介：
                                <i>
                                    小王子是一个超凡脱俗的仙童，他住在一颗只比他大一丁点儿的小行星上。陪伴他的是一朵他非常喜爱的小玫瑰花。但玫瑰花的虚荣心伤害了小王子对她的感情。小王子告别小行星，开始了遨游太空的旅行。他先后访问了六个行星，各种见闻使他陷入忧伤，他感到大人们荒唐可笑、太不正常。只有在其中一个点灯人的星球上，小王子才找到一个可以作为朋友的人。但点灯人的天地又十分狭小，除了点灯人他自己，不能容下第二个人。在地理学家的指点下，孤单的小王子来到人类居住的地球。
                                    小王子发现人类缺乏想象力，只知像鹦鹉那样重复别人讲过的话。小王子这时越来越思念自己星球上的那枝小玫瑰。后来，小王子遇到一只小狐狸，小王子用耐心征服了小狐狸，与它结成了亲密的朋友。小狐狸把自己心中的秘密——肉眼看不见事务的本质，只有用心灵才能洞察一切——作为礼物，送给小王子。用这个秘密，小王子在撒哈拉大沙漠与遇险的飞行员一起找到了生命的泉水。最后，小王子在蛇的帮助下离开地球，重新回到他的B612号小行星上。
                                    童话描写小王子没有被成人那骗人的世界所征服，而最终找到自己的理想。这理想就是连结宇宙万物的爱，而这种爱又是世间所缺少的。因此，小王子常常流露出一种伤感的情绪。作者圣埃克絮佩里在献辞中说：这本书是献给长成了大人的从前那个孩子。
                                    《小王子》不仅赢得了儿童读者，也为成年人所喜爱，作品凝练的语言渗透了作者对人类及人类文明深邃的思索。它所表现出的讽刺与幻想，真情与哲理，使之成为法国乃至世界上最为著名的一部童话小说。
                                </i>
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="list_item">
                        <img src="../../../assets/image/book_pic7.jpeg" />
                        <div class="title">
                            <p>撒哈拉的故事</p>
                            <span>
                                简介：
                                <i>
                                    三毛作品中最脍炙人口的《撒哈拉的故事》，由12篇精彩动人的散文结合而成，其中《沙漠中的饭店》，是三毛适应荒凉单调的沙漠生活后，重新拾笔的第一篇文字，自此之后，三毛便写出一系列以沙漠为背景的故事，倾倒了全世界的中文读者。
                                </i>
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="list_item">
                        <img src="../../../assets/image/book_pic8.jpeg" />
                        <div class="title">
                            <p>明朝那些事儿</p>
                            <span>
                                简介：
                                <i>
                                    《明朝那些事儿》讲述从1344年到1644年，明朝三百年间的历史。作品以史料为基础，以年代和具体人物为主线，运用小说的笔法，对明朝十七帝和其他王公权贵和小人物的命运进行全景展示，尤其对官场政治、战争、帝王心术着墨最多。作品也是一部明朝政治经济制度、人伦道德的演义。
                                </i>
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="list_item">
                        <img src="../../../assets/image/book_pic9.jpeg" />
                        <div class="title">
                            <p>悉达多：一首印度的诗</p>
                            <span>
                                简介：
                                <i>
                                    《悉达多》并非是佛陀的故事，它讲述了一个人的一生，千万寻常人亦会经历的一生。
                                    意气风发的少年郎，常认为自己是被命运选中的人。抛下过去，随了跌跌撞撞的步伐，找寻心中的声音，追逐名利，经历友情，品尝爱情。不同的是，悉达多一生追求的是生命的圆融统一，看似宏大，确是每个人无法回
                                    避的问题。
                                    黑塞的语言是充满诗性的，正如本书副题“一首印度的诗”，因不得而知的原因，此副题在前人所出版本中都被回避了。为了尽可能表现黑塞的诗意，我们选择从德文直译，尽管我们的译文不能完全实现这种诗意，但其诗的本性与精神显而易见。
                                    本书地位在前人的版本中已被反复强调——亨利·米勒的最爱；影响了包括电台司令在内的许多名人雅士；在六十年代美国掀起过阅读黑塞的热潮，大学生们人手一册等等。
                                    但如书中成为摆渡人的悉达多所述，智慧无法分享，它可以被发现，被体验。
                                    所以倘若你碰巧遇到了这本小书，请细细品味其中的文字。
                                    愿你在读了悉达多的故事后，也能有所感悟，并开始体验属于自己的人生。
                                </i>
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="list_item">
                        <img src="../../../assets/image/book_pic10.jpeg" />
                        <div class="title">
                            <p>失踪的孩子</p>
                            <span>
                                简介：
                                <i>
                                    “我的整个生命，只是一场为了提升社会地位的低俗斗争。”
                                    全球畅销近千万册被翻译成40多种语言
                                    《我的天才女友》《新名字的故事》《离开的，留下的》——
                                    那不勒斯四部曲NO.4令人欲罢不能的大结局
                                    穷尽友谊对一个人最极致的塑造
                                    《失踪的孩子》是“那不勒斯四部曲”的第四部，小说聚焦了莉拉和埃莱娜（“我”）的壮年和晚年，为她们持续了五十多年的友谊划上了一个令人心碎的句号。
                                    “我”为了爱情和写作，离开丈夫带着两个女儿回到了那不勒斯，不可避免地与莉拉，还有我曾想要逃离的城区再度变得亲密。“我”和莉拉甚至在同一年怀孕、生子，并经历了恐怖残暴的那不勒斯大地震，一切都分崩离析，一切又将被重建。
                                    “我”在不自觉中卷入莉拉秘密的企图——她希望利用我的名声和写作技巧来对抗城区陈腐而猖獗的恶势力。但在经历了生命最恐怖的打击之后，莉拉选择以一种怪异夸张的方式在城区彻底将自己流放。
                                    而“我”也将以惊人的韧性和诚实面对写作、爱情、家庭的失败。在经历了多年的自我怀疑之后，“我”决定忤逆（罔顾？）莉拉的告诫，将“我”和她一生的友谊写成一本小说，却招来了最深的背叛……
                                </i>
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="list_item">
                        <img src="../../../assets/image/book_pic11.jpeg" />
                        <div class="title">
                            <p>沉默的大多数</p>
                            <span>
                                简介：
                                <i>
                                    这本杂文随笔集包括思想文化方面的文章，涉及知识分子的处境及思考，社会道德伦理，文化论争，国学与新儒家，民族主义等问题；包括从日常生活中发掘出来的各种真知灼见，涉及科学与邪道，女权主义等；包括对社会科学研究的评论，涉及性问题，生育问题，同性恋问题，社会研究的伦理问题和方法问题等；包括创作谈和文论，如写作的动机，作者的师承，作者对小说艺术的看法，作者对文体格调的看法，对影视的看法等；包括少量的书评，其中既有对文学经典的评论，也有对当代作家作品的一些看法；最后，还包括一些域外生活的杂感以及对某些社会现象的评点。
                                </i>
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { reactive } from 'vue';

type T = {
    id: number;
    name: string;
};
type Y = {
    bookname: string;
    author: string;
    date: string;
    imgUrl: string;
    summary: string;
};
const booksList = reactive<Y[]>([
    {
        bookname: '邓小平时代',
        author: '【美】傅高义 (Ezra.F.Vogel)',
        date: '2012-9-18',
        imgUrl: '/image/book_pic1.jpeg',
        summary:
            '邓小平深刻影响了中国历史和世界历史的走向，也改变了每一个当代中国人的命运。解读邓小平的政治生涯及其行为逻辑，就是解读当代中国，解读个人命运背后的历史变局。哈佛大学傅高义教授倾十年心力完成的巨著《邓小平时代》，是对邓小平跌宕起伏的一生以及中国惊险崎岖的改革开放之路的全景式描述。作者以丰富的史料、国内外重要的研究成果、档案资料和为数众多的独家访谈为基础，对邓小平个人性格及执政风格进行了深层分析，并对中国改革开放史进行了完整而独到的阐释。全书人物、事件众多，既有对毛泽东、周恩来、邓小平、陈云等人相互关系的细致解读，又有对三中全会、权力过渡、中美建交、政改试水、经济特区、一国两制、九二南巡等重大事件和决策的深入分析。全书持论严谨、脉络清晰、观点鲜明、叙述生动，力图使人物言行符合历史情境，对改革开放的历史进程亦时有独特看法，引人深思，被誉为邓小平研究“纪念碑式”的著作。读懂《邓小平时代》，读懂这段历史，读懂“仍然生活在邓小平时代”的我们自己的现在和未来。',
    },
    {
        bookname: '活着',
        author: '余华',
        date: '2012-8-1',
        imgUrl: '/image/book_pic2.jpeg',
        summary:
            '《活着(新版)》讲述了农村人福贵悲惨的人生遭遇。福贵本是个阔少爷，可他嗜赌如命，终于赌光了家业，一贫如洗。他的父亲被他活活气死，母亲则在穷困中患了重病，福贵前去求药，却在途中被国民党抓去当壮丁。经过几番波折回到家里，才知道母亲早已去世，妻子家珍含辛茹苦地养大两个儿女。此后更加悲惨的命运一次又一次降临到福贵身上，他的妻子、儿女和孙子相继死去，最后只剩福贵和一头老牛相依为命，但老人依旧活着，仿佛比往日更加洒脱与坚强。《活着(新版)》荣获意大利格林扎纳•卡佛文学奖最高奖项（1998年）、台湾《中国时报》10本好书奖（1994年）、香港“博益”15本好书奖（1994年）、第三届世界华文“冰心文学奖”（2002年），入选香港《亚洲周刊》评选的“20世纪中文小说百年百强”、中国百位批评家和文学编辑评选的“20世纪90年代最有影响的10部作品”.',
    },
    {
        bookname: '杀死一只知更鸟',
        author: '【美】哈珀·李',
        date: '2012-9-18',
        imgUrl: '/image/book_pic3.jpeg',
        summary:
            '成长总是个让人烦恼的命题。成长有时会很缓慢，如小溪般唱着叮咚的歌曲趟过，有时却如此突如其来，如暴雨般劈头盖脸……三个孩子因为小镇上的几桩冤案经历了猝不及防的成长——痛苦与迷惑，悲伤与愤怒，也有温情与感动。这是爱与真知的成长经典。《杀死一只知更鸟》获1961年普利策奖。美国图书馆借阅率最高的书，英国青少年最喜爱的小说之一。美国中学推荐课外读物。由小说改编的电影获第25届奥斯卡三项大奖。美国电影协会评选的“100名银幕英雄与恶人”中，派克主演的芬奇律师名列英雄第一位。作为史上最受喜爱的小说之一，《杀死一只知更鸟》已获得显赫声誉。它赢得过普利策奖，被翻译成四十多种语言，在世界范围内售出超过三千万册，并曾被拍成，备受欢迎的电影。——哈珀•柯林斯出版集团斯塔尔六月对北卡罗来纳州律师协会发表演说时，自比为《杀死一只知更鸟》中勇敢的南方白人律师阿蒂克斯•芬奇。斯塔尔凭着他的道德优越感，不把规则、秩序和正直放在眼里，这样一个人居然自比为芬奇，实在令我和比尔难以忍受。——希拉里•克林顿年轻时看过《梅岗城故事》（即《杀死一只知更鸟》），对片中法律人为弱势者争取权益奋斗，为恶法非法或恶法亦法辩论的故事感到澎湃不已，更加确定要成为法律人的心愿。——许宗力（台大法学院院长）',
    },
    {
        bookname: '房思琪的初恋乐园',
        author: '林奕含',
        date: '2018-2-18',
        imgUrl: '/image/book_pic4.jpeg',
        summary:
            '令人心碎却无能为力的真实故事。向死而生的文学绝唱，打动万千读者的年度华语小说。李银河、戴锦华、骆以军、张悦然、詹宏志、蒋方舟、等多位学者作家社会名人郑重推荐。痛苦的际遇是如此难以分享，好险这个世界还有文学。我下楼拿作文给李老师改。他掏出来，我被逼到涂在墙上。老师说了九个字：“不行的话，嘴巴可以吧。”我说了五个字：“不行，我不会。”他就塞进来。那感觉像溺水。可以说话之后，我对老师说：“对不起。”有一种功课做不好的感觉。小小的房思琪住在金碧辉煌的人生里，她的脸和她可以想象的将来一样漂亮。补习班语文名师李国华是同一栋高级住宅的邻居。崇拜文学的小房思琪同样崇拜饱读诗书的李老师。有一天李老师说，你的程度这么好，不如每个礼拜交一篇作文给我吧，不收你周点费。思琪听话地下楼了。老师在家里等她，桌上没有纸笔。思琪的初恋是李老师。因为李老师把她翻面，把他的东西塞进去。那年的教师节思琪才十三岁，这个世界和她原本认识的不一样。如果这是爱情，为什么觉得暴力？为什么觉得被折断？为什么老师要一个女学生换过一个女学生？如果这不是爱情，那满口学问的李老师怎么能做了以后，还这么自信、无疑、无愧于心？故事必须重新讲过，与房思琪情同双胞的刘怡婷，接到警局通知，去带回神志不清，被判定疯了的房思琪。透过思琪的日记，怡婷得知思琪五年中的所见所思……嫁入钱家的许伊纹，是两位少女的忘年交，二十余岁的她，是两位少女的文学启蒙者同时也是丈夫家暴的沉默受害者……升入大学后的郭晓奇仍旧爱着高中时的补习教师李国华，而这位文质彬彬的补习教师并不只有平时人们眼中受人尊敬的老师形象的一面……这是一部惊人而特别的小说，小说作者既具有高度敏锐的感受力、又是一个近距离目击者，使这整件事像一个“幸存的标本”那样地被保留下来。整本书反覆地、用极度贴近被侵害者的视角，直直逼视那种“别人夺去你某个珍贵之物”的痛苦──且掠夺之人是以此为乐。',
    },
    {
        bookname: '白夜行',
        author: '【日】东野圭吾',
        date: '2013-1-18',
        imgUrl: '/image/book_pic5.jpeg',
        summary:
            ' 东野圭吾万千书迷心中的无冕之王周刊文春推理小说年度BEST10第1名本格推理小说年度BEST10第2名《白夜行》是东野圭吾迄今口碑最好的长篇杰作，具备经典名著的一切要素：一宗离奇命案牵出跨度近20年步步惊心的故事：悲凉的爱情、吊诡的命运、令人发指的犯罪、复杂人性的对决与救赎……1973年，大阪的一栋废弃建筑中发现一名遭利器刺死的男子。案件扑朔迷离，悬而未决。此后20年间，案件滋生出的恶逐渐萌芽生长，绽放出恶之花。案件相关者的人生逐渐被越来越重的阴影笼罩……“我的天空里没有太阳，总是黑夜，但并不暗，因为有东西代替了太阳。虽然没有太阳那么明亮，但对我来说已经足够。凭借着这份光，我便能把黑夜当成白天。我从来就没有太阳，所以不怕失去。”“只希望能手牵手在太阳下散步”，这句象征本书故事内核的绝望念想，有如一个美丽的幌子，随着无数凌乱、压抑、悲凉的事件片段如纪录片一样一一还原，最后一丝温情也被完全抛弃，万千读者在一曲救赎罪恶的爱情之中悲切动容。',
    },
    {
        bookname: '小王子',
        author: '[法国] 安东尼·德·圣-埃克苏佩里',
        date: '2003-8-1',
        imgUrl: '/image/book_pic6.jpeg',
        summary:
            '《小王子是一个超凡脱俗的仙童，他住在一颗只比他大一丁点儿的小行星上。陪伴他的是一朵他非常喜爱的小玫瑰花。但玫瑰花的虚荣心伤害了小王子对她的感情。小王子告别小行星，开始了遨游太空的旅行。他先后访问了六个行星，各种见闻使他陷入忧伤，他感到大人们荒唐可笑、太不正常。只有在其中一个点灯人的星球上，小王子才找到一个可以作为朋友的人。但点灯人的天地又十分狭小，除了点灯人他自己，不能容下第二个人。在地理学家的指点下，孤单的小王子来到人类居住的地球。小王子发现人类缺乏想象力，只知像鹦鹉那样重复别人讲过的话。小王子这时越来越思念自己星球上的那枝小玫瑰。后来，小王子遇到一只小狐狸，小王子用耐心征服了小狐狸，与它结成了亲密的朋友。小狐狸把自己心中的秘密——肉眼看不见事务的本质，只有用心灵才能洞察一切——作为礼物，送给小王子。用这个秘密，小王子在撒哈拉大沙漠与遇险的飞行员一起找到了生命的泉水。最后，小王子在蛇的帮助下离开地球，重新回到他的B612号小行星上。童话描写小王子没有被成人那骗人的世界所征服，而最终找到自己的理想。这理想就是连结宇宙万物的爱，而这种爱又是世间所缺少的。因此，小王子常常流露出一种伤感的情绪。作者圣埃克絮佩里在献辞中说：这本书是献给长成了大人的从前那个孩子。《小王子》不仅赢得了儿童读者，也为成年人所喜爱，作品凝练的语言渗透了作者对人类及人类文明深邃的思索。它所表现出的讽刺与幻想，真情与哲理，使之成为法国乃至世界上最为著名的一部童话小说。',
    },
]);
const recommend = reactive<T[]>([
    { id: 1, name: '东方玄幻' },
    { id: 2, name: '仙侠洪荒' },
    { id: 3, name: '都市脑洞' },
    { id: 4, name: '历史架空' },
    { id: 5, name: '科幻无限' },
    { id: 6, name: '游戏竞技' },
    { id: 7, name: '次元同人' },
    { id: 8, name: '怪奇物语' },
]);
const router = useRouter();
const gotoRead = (item: Y) => {
    router.push({
        name: 'chapter',
        query: { name: item.author, date: item.date, bookname: item.bookname },
    });
};
const gotolibrary = (item: T) => {
    router.push({ name: 'library', query: item });
};
const gotoCont = (item: Y) => {
    router.push({
        name: 'content',
        query: {
            name: item.author,
            bookname: item.bookname,
            imgUrl: item.imgUrl,
            date: item.date,
        },
    });
};
</script>

<style scoped lang="scss">
.recommend {
    width: 100%;
    height: 70px;
    border-bottom: 2px solid $menu-background;
    background: rgba($color: #ffffff, $alpha: 0.3);
    margin-top: -70px;

    .main {
        width: 80%;
        height: 100%;
        margin: auto;
        display: flex;
        align-items: center;

        span {
            width: 150px;
            height: 100%;
            font-size: 26px;
            font-weight: 500;
            color: black;
            text-align: center;
            line-height: 70px;
        }
        ul {
            flex: 1;
            display: flex;
            justify-content: space-around;
            color: #3c2a25;

            li a {
                color: #3c2a25;
            }
        }
    }
}

.rank {
    width: 80%;
    margin: auto;
    display: flex;
    margin-top: 50px;

    .left {
        flex: 1;
        border-radius: 10px;
        overflow: hidden;
        .item {
            width: 100%;
            height: 450px;
            padding: 30px;
            box-sizing: border-box;
            border-radius: 10px;
            overflow: hidden;
            background-color: $navbar-background;
            display: flex;
            img {
                width: 270px;
            }
            .title {
                flex: 1;
                margin-left: 30px;
                position: relative;
                h1 {
                    margin: 0;
                    color: $menu-background;
                    font-size: 26px;
                    font-weight: 500;
                    margin-bottom: 30px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                p {
                    font-size: 14px;
                    margin-bottom: 30px;

                    span {
                        color: $text-color;
                    }
                }

                i {
                    width: 100%;
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 9;
                    -webkit-box-orient: vertical;
                    font-size: 14px;
                    color: $text-color;
                    line-height: 22px;
                    margin-bottom: 30px;
                }

                button {
                    position: absolute;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 150px;
                    height: 40px;
                    background-color: $menu-background;
                    color: white;
                    border: none;
                    border-radius: 20px;
                }
            }
        }
    }

    .right {
        width: 270px;
        margin-left: 30px;
        position: relative;

        h1 {
            margin: 0;
            color: $menu-background;
            font-size: 26px;
            font-weight: 500;
            padding-bottom: 20px;
            border-bottom: 1px solid $menu-background;
        }

        ul {
            width: 100%;
            margin-top: 20px;
            position: absolute;
            z-index: 99;

            li {
                display: flex;
                margin-bottom: 10px;

                a {
                    width: 100%;
                    height: 30px;
                    font-size: 14px;
                    color: $text-color;
                    margin-left: 15px;
                    transition: all 0.5s;
                    overflow: hidden;
                    display: flex;
                    border-radius: 4px;

                    &:hover {
                        height: 100px;
                        background-color: $navbar-background;
                        padding: 10px;
                        box-sizing: border-box;
                        img {
                            display: block;
                        }
                        .link p {
                            width: 150px;
                            height: 70px;
                            font-size: 16px;
                            white-space: pre-wrap;
                            line-height: 20px;
                        }
                    }

                    .link {
                        width: 100%;
                        height: 100%;
                        p {
                            width: 230px;
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
}

.ListContainer {
    width: 67%;
    margin: auto;
    display: flex;
    margin-top: 80px;
    .list_left {
        width: 400px;

        h1 {
            margin: 0;
            color: $menu-background;
            font-size: 26px;
            font-weight: 500;
            margin-top: -20px;
            margin-bottom: 50px;
            margin-left: -20px;
        }
        ul {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            li {
                padding: 0px 20px;
                height: 35px;
                margin: 0 15px;
                color: $menu-background;
                border: 1px solid $menu-background;
                border-radius: 17px;
                margin-bottom: 20px;
                text-align: center;
                line-height: 35px;
            }
        }
    }
    .list_right {
        flex: 1;
        margin-left: 25px;
        ul {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            li {
                width: 48%;
                height: 100px;
                margin-bottom: 20px;

                .list_item {
                    display: flex;
                    width: 100%;
                    height: 100%;
                    background-color: $base-background;
                    padding: 10px;
                    box-sizing: border-box;
                    border-radius: 4px;
                    position: relative;
                    color: white;
                    img {
                        width: 55px;
                    }
                    &::after {
                        content: '荐';
                        width: 25px;
                        height: 30px;
                        position: absolute;
                        text-align: center;
                        line-height: 30px;
                        font-size: 14px;
                        color: $text-color;
                        top: -3px;
                        right: 10px;
                        background-color: $navbar-background;
                    }

                    .title {
                        margin-left: 10px;
                        p {
                            margin-bottom: 10px;
                            font-size: 16px;
                        }

                        span {
                            font-size: 12px;
                            i {
                                width: 100%;
                                display: -webkit-box;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                                line-height: 16px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
