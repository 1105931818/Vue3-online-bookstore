<template>
    <div class="library">
        <div class="top">
            <Logo />
        </div>
        <div class="sort">
            <div
                class="sort_main"
                v-for="(item, index) in sortList"
                :key="index"
            >
                <div class="sort_title">{{ item.title }}</div>
                <ul class="sort_list">
                    <li
                        class="sort_item"
                        :class="{ active: value === changeList[index] }"
                        v-for="(item1, value) in item.arrList"
                        :key="value"
                        @click="changeClass(item1, value, index)"
                    >
                        {{ item1.name }}
                    </li>
                </ul>
            </div>

            <div class="sort_sele">
                <div class="sele_title">已选条件</div>
                <ul class="sele_list">
                    <li
                        class="sele_item"
                        v-for="sele in seleList"
                        :key="sele.id"
                        v-show="sele.id"
                    >
                        {{ sele.name }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="filter">
            <el-dropdown class="filter_item">
                <span class="el-dropdown-link" style="font-size: 16px">
                    总点击量
                    <el-icon><CaretBottom /></el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>总点击量</el-dropdown-item>
                        <el-dropdown-item>月点击</el-dropdown-item>
                        <el-dropdown-item>周点击</el-dropdown-item>
                        <el-dropdown-item>日点击</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <el-dropdown class="filter_item">
                <span class="el-dropdown-link" style="font-size: 16px">
                    用户总点击
                    <el-icon><CaretBottom /></el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>用户总点击</el-dropdown-item>
                        <el-dropdown-item>用户月点击</el-dropdown-item>
                        <el-dropdown-item>用户周点击</el-dropdown-item>
                        <el-dropdown-item>用户日点击</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <el-dropdown class="filter_item">
                <span class="el-dropdown-link" style="font-size: 16px">
                    总推荐
                    <el-icon><CaretBottom /></el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>总推荐</el-dropdown-item>
                        <el-dropdown-item>月推荐</el-dropdown-item>
                        <el-dropdown-item>周推荐</el-dropdown-item>
                        <el-dropdown-item>日推荐</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <span class="filter_item">总收藏</span>
            <span class="filter_item">总字数</span>
            <span class="filter_item">更新时间</span>
        </div>
        <div class="books">
            <ul class="books_list">
                <li class="books_item">
                    <img src="../../assets/image/book_pic1.jpeg" />
                    <div class="books_title">
                        <h1>邓小平时代</h1>
                        <p>
                            <span>作者</span>
                            【美】傅高义 (Ezra.F.Vogel) &nbsp;&nbsp;&nbsp;&nbsp;
                            <span>出版年</span>
                            2013-1-18
                        </p>
                        <i>
                            邓小平深刻影响了中国历史和世界历史的走向，也改变了每一个当代中国人的命运。解读邓小平的政治生涯及其行为逻辑，就是解读当代中国，解读个人命运背后的历史变局。
                            哈佛大学傅高义教授倾十年心力完成的巨著《邓小平时代》，是对邓小平跌宕起伏的一生以及中国惊险崎岖的改革开放之路的全景式描述。作者以丰富的史料、国内外重要的研究成果、档案资料和为数众多的独家访谈为基础，对邓小平个人性格及执政风格进行了深层分析，并对中国改革开放史进行了完整而独到的阐释。全书人物、事件众多，既有对毛泽东、周恩来、邓小平、陈云等人相互关系的细致解读，又有对三中全会、权力过渡、中美建交、政改试水、经济特区、一国两制、九二南巡等重大事件和决策的深入分析。全书持论严谨、脉络清晰、观点鲜明、叙述生动，力图使人物言行符合历史情境，对改革开放的历史进程亦时有独特看法，引人深思，被誉为邓小平研究“纪念碑式”的著作。
                            读懂《邓小平时代》，读懂这段历史，读懂“仍然生活在邓小平时代”的我们自己的现在和未来。
                        </i>
                    </div>
                </li>
                <li class="books_item">
                    <img src="../../assets/image/book_pic2.jpeg" />
                    <div class="books_title">
                        <h1>活着</h1>
                        <p>
                            <span>作者</span>
                            余华 &nbsp;&nbsp;&nbsp;&nbsp;
                            <span>出版年</span>
                            2012-8-1
                        </p>
                        <i>
                            《活着(新版)》讲述了农村人福贵悲惨的人生遭遇。福贵本是个阔少爷，可他嗜赌如命，终于赌光了家业，一贫如洗。他的父亲被他活活气死，母亲则在穷困中患了重病，福贵前去求药，却在途中被国民党抓去当壮丁。经过几番波折回到家里，才知道母亲早已去世，妻子家珍含辛茹苦地养大两个儿女。此后更加悲惨的命运一次又一次降临到福贵身上，他的妻子、儿女和孙子相继死去，最后只剩福贵和一头老牛相依为命，但老人依旧活着，仿佛比往日更加洒脱与坚强。
                            《活着(新版)》荣获意大利格林扎纳•卡佛文学奖最高奖项（1998年）、台湾《中国时报》10本好书奖（1994年）、香港“博益”15本好书奖（1994年）、第三届世界华文“冰心文学奖”（2002年），入选香港《亚洲周刊》评选的“20世纪中文小说百年百强”、中国百位批评家和文学编辑评选的“20世纪90年代最有影响的10部作品”。
                        </i>
                    </div>
                </li>
                <li class="books_item">
                    <img src="../../assets/image/book_pic3.jpeg" />
                    <div class="books_title">
                        <h1>杀死一只知更鸟</h1>
                        <p>
                            <span>作者</span>
                            【美】哈珀·李&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>出版年</span>
                            2012-9-18
                        </p>
                        <i>
                            成长总是个让人烦恼的命题。成长有时会很缓慢，如小溪般唱着叮咚的歌曲趟过，有时却如此突如其来，如暴雨般劈头盖脸……三个孩子因为小镇上的几桩冤案经历了猝不及防的成长——痛苦与迷惑，悲伤与愤怒，也有温情与感动。这是爱与真知的成长经典。
                            《杀死一只知更鸟》获1961年普利策奖。
                            美国图书馆借阅率最高的书，英国青少年最喜爱的小说之一。
                            美国中学推荐课外读物。
                            由小说改编的电影获第25届奥斯卡三项大奖。
                            美国电影协会评选的“100名银幕英雄与恶人”中，派克主演的芬奇律师名列英雄第一位。
                            作为史上最受喜爱的小说之一，《杀死一只知更鸟》已获得显赫声誉。它赢得过普利策奖，被翻译成四十多种语言，在世界范围内售出超过三千万册，并曾被拍成，备受欢迎的电影。
                            ——哈珀•柯林斯出版集团
                            斯塔尔六月对北卡罗来纳州律师协会发表演说时，自比为《杀死一只知更鸟》中勇敢的南方白人律师阿蒂克斯•芬奇。斯塔尔凭着他的道德优越感，不把规则、秩序和正直放在眼里，这样一个人居然自比为芬奇，实在令我和比尔难以忍受。
                            ——希拉里•克林顿
                            年轻时看过《梅岗城故事》（即《杀死一只知更鸟》），对片中法律人为弱势者争取权益奋斗，为恶法非法或恶法亦法辩论的故事感到澎湃不已，更加确定要成为法律人的心愿。
                            ——许宗力（台大法学院院长）
                        </i>
                    </div>
                </li>
                <li class="books_item">
                    <img src="../../assets/image/book_pic4.jpeg" />
                    <div class="books_title">
                        <h1>房思琪的初恋乐园</h1>
                        <p>
                            <span>作者</span>
                            林奕含&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>出版年</span>
                            2018-2-18
                        </p>
                        <i>
                            令人心碎却无能为力的真实故事。向死而生的文学绝唱，打动万千读者的年度华语小说。李银河、戴锦华、骆以军、张悦然、詹宏志、蒋方舟、等多位学者作家社会名人郑重推荐。
                            痛苦的际遇是如此难以分享，好险这个世界还有文学。
                            我下楼拿作文给李老师改。他掏出来，我被逼到
                            涂在墙上。老师说了九个字：“不行的话，嘴巴可以吧。”我说了五个字：“不行，我不会。”他就塞进来。那感觉像溺水。可以说话之后，我对老师说：“对不起。”有一种功课做不好的感觉。
                            小小的房思琪住在金碧辉煌的人生里，她的脸和她可以想象的将来一样漂亮。补习班语文名师李国华是同一栋高级住宅的邻居。崇拜文学的小房思琪同样崇拜饱读诗书的李老师。
                            有一天李老师说，你的程度这么好，不如每个礼拜交一篇作文给我吧，不收你周点费。思琪听话地下楼了。老师在家里等她，桌上没有纸笔。
                            思琪的初恋是李老师。因为李老师把她翻面，把他的东西塞进去。那年的教师节思琪才十三岁，这个世界和她原本认识的不一样。
                            如果这是爱情，为什么觉得暴力？为什么觉得被折断？为什么老师要一个女学生换过一个女学生？如果这不是爱情，那满口学问的李老师怎么能做了以后，还这么自信、无疑、无愧于心？
                            故事必须重新讲过，与房思琪情同双胞的刘怡婷，接到警局通知，去带回神志不清，被判定疯了的房思琪。透过思琪的日记，怡婷得知思琪五年中的所见所思……
                            嫁入钱家的许伊纹，是两位少女的忘年交，二十余岁的她，是两位少女的文学启蒙者同时也是丈夫家暴的沉默受害者……
                            升入大学后的郭晓奇仍旧爱着高中时的补习教师李国华，而这位文质彬彬的补习教师并不只有平时人们眼中受人尊敬的老师形象的一面……
                            这是一部惊人而特别的小说，小说作者既具有高度敏锐的感受力、又是一个近距离目击者，使这整件事像一个“幸存的标本”那样地被保留下来。整本书反覆地、用极度贴近被侵害者的视角，直直逼视那种“别人夺去你某个珍贵之物”的痛苦──且掠夺之人是以此为乐。
                        </i>
                    </div>
                </li>
                <li class="books_item">
                    <img src="../../assets/image/book_pic5.jpeg" />
                    <div class="books_title">
                        <h1>白夜行</h1>
                        <p>
                            <span>作者</span>
                            【日】东野圭吾&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>出版年</span>
                            2013-1-1
                        </p>
                        <i>
                            东野圭吾万千书迷心中的无冕之王
                            周刊文春推理小说年度BEST10第1名
                            本格推理小说年度BEST10第2名
                            《白夜行》是东野圭吾迄今口碑最好的长篇杰作，具备经典名著的一切要素：
                            一宗离奇命案牵出跨度近20年步步惊心的故事：悲凉的爱情、吊诡的命运、令人发指的犯罪、复杂人性的对决与救赎……
                            1973年，大阪的一栋废弃建筑中发现一名遭利器刺死的男子。案件扑朔迷离，悬而未决。
                            此后20年间，案件滋生出的恶逐渐萌芽生长，绽放出恶之花。案件相关者的人生逐渐被越来越重的阴影笼罩……
                            “我的天空里没有太阳，总是黑夜，但并不暗，因为有东西代替了太阳。虽然没有太阳那么明亮，但对我来说已经足够。
                            凭借着这份光，我便能把黑夜当成白天。
                            我从来就没有太阳，所以不怕失去。”
                            “只希望能手牵手在太阳下散步”，这句象征本书故事内核的绝望念想，有如一个美丽的幌子，随着无数凌乱、压抑、悲凉的事件片段如纪录片一样一一还原，最后一丝温情也被完全抛弃，万千读者在一曲救赎罪恶的爱情之中悲切动容。
                        </i>
                    </div>
                </li>
                <li class="books_item">
                    <img src="../../assets/image/book_pic6.jpeg" />
                    <div class="books_title">
                        <h1>小王子</h1>
                        <p>
                            <span>作者</span>
                            [法国] 安东尼·德·圣-埃克苏佩里
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <span>出版年</span>
                            2003-8-1
                        </p>
                        <i>
                            《小王子是一个超凡脱俗的仙童，他住在一颗只比他大一丁点儿的小行星上。陪伴他的是一朵他非常喜爱的小玫瑰花。但玫瑰花的虚荣心伤害了小王子对她的感情。小王子告别小行星，开始了遨游太空的旅行。他先后访问了六个行星，各种见闻使他陷入忧伤，他感到大人们荒唐可笑、太不正常。只有在其中一个点灯人的星球上，小王子才找到一个可以作为朋友的人。但点灯人的天地又十分狭小，除了点灯人他自己，不能容下第二个人。在地理学家的指点下，孤单的小王子来到人类居住的地球。
                            小王子发现人类缺乏想象力，只知像鹦鹉那样重复别人讲过的话。小王子这时越来越思念自己星球上的那枝小玫瑰。后来，小王子遇到一只小狐狸，小王子用耐心征服了小狐狸，与它结成了亲密的朋友。小狐狸把自己心中的秘密——肉眼看不见事务的本质，只有用心灵才能洞察一切——作为礼物，送给小王子。用这个秘密，小王子在撒哈拉大沙漠与遇险的飞行员一起找到了生命的泉水。最后，小王子在蛇的帮助下离开地球，重新回到他的B612号小行星上。
                            童话描写小王子没有被成人那骗人的世界所征服，而最终找到自己的理想。这理想就是连结宇宙万物的爱，而这种爱又是世间所缺少的。因此，小王子常常流露出一种伤感的情绪。作者圣埃克絮佩里在献辞中说：这本书是献给长成了大人的从前那个孩子。
                            《小王子》不仅赢得了儿童读者，也为成年人所喜爱，作品凝练的语言渗透了作者对人类及人类文明深邃的思索。它所表现出的讽刺与幻想，真情与哲理，使之成为法国乃至世界上最为著名的一部童话小说。
                        </i>
                    </div>
                </li>
                <li class="books_item">
                    <img src="../../assets/image/book_pic7.jpeg" />
                    <div class="books_title">
                        <h1>撒哈拉的故事</h1>
                        <p>
                            <span>作者</span>
                            三毛 &nbsp;&nbsp;&nbsp;&nbsp;
                            <span>出版年</span>
                            2003-8-18
                        </p>
                        <i>
                            三毛作品中最脍炙人口的《撒哈拉的故事》，由12篇精彩动人的散文结合而成，其中《沙漠中的饭店》，是三毛适应荒凉单调的沙漠生活后，重新拾笔的第一篇文字，自此之后，三毛便写出一系列以沙漠为背景的故事，倾倒了全世界的中文读者。
                        </i>
                    </div>
                </li>
                <li class="books_item">
                    <img src="../../assets/image/book_pic8.jpeg" />
                    <div class="books_title">
                        <h1>明朝那些事儿</h1>
                        <p>
                            <span>作者</span>
                            当年明月 &nbsp;&nbsp;&nbsp;&nbsp;
                            <span>出版年</span>
                            2009-4-1
                        </p>
                        <i>
                            《明朝那些事儿》讲述从1344年到1644年，明朝三百年间的历史。作品以史料为基础，以年代和具体人物为主线，运用小说的笔法，对明朝十七帝和其他王公权贵和小人物的命运进行全景展示，尤其对官场政治、战争、帝王心术着墨最多。作品也是一部明朝政治经济制度、人伦道德的演义。
                        </i>
                    </div>
                </li>
                <li class="books_item">
                    <img src="../../assets/image/book_pic9.jpeg" />
                    <div class="books_title">
                        <h1>悉达多：一首印度的诗</h1>
                        <p>
                            <span>作者</span>
                            [德] 赫尔曼·黑塞 &nbsp;&nbsp;&nbsp;&nbsp;
                            <span>出版年</span>
                            2017-1-1
                        </p>
                        <i>
                            悉达多》并非是佛陀的故事，它讲述了一个人的一生，千万寻常人亦会经历的一生。
                            意气风发的少年郎，常认为自己是被命运选中的人。抛下过去，随了跌跌撞撞的步伐，找寻心中的声音，追逐名利，经历友情，品尝爱情。不同的是，悉达多一生追求的是生命的圆融统一，看似宏大，确是每个人无法回
                            避的问题。
                            黑塞的语言是充满诗性的，正如本书副题“一首印度的诗”，因不得而知的原因，此副题在前人所出版本中都被回避了。为了尽可能表现黑塞的诗意，我们选择从德文直译，尽管我们的译文不能完全实现这种诗意，但其诗的本性与精神显而易见。
                            本书地位在前人的版本中已被反复强调——亨利·米勒的最爱；影响了包括电台司令在内的许多名人雅士；在六十年代美国掀起过阅读黑塞的热潮，大学生们人手一册等等。
                            但如书中成为摆渡人的悉达多所述，智慧无法分享，它可以被发现，被体验。
                            所以倘若你碰巧遇到了这本小书，请细细品味其中的文字。
                            愿你在读了悉达多的故事后，也能有所感悟，并开始体验属于自己的人生。
                        </i>
                    </div>
                </li>
                <li class="books_item">
                    <img src="../../assets/image/book_pic10.jpeg" />
                    <div class="books_title">
                        <h1>失踪的孩子</h1>
                        <p>
                            <span>作者</span>
                            [意] 埃莱娜·费兰特 &nbsp;&nbsp;&nbsp;&nbsp;
                            <span>出版年</span>
                            2018-7-1
                        </p>
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
                    </div>
                </li>
                <li class="books_item">
                    <img src="../../assets/image/book_pic11.jpeg" />
                    <div class="books_title">
                        <h1>沉默的大多数</h1>
                        <p>
                            <span>作者</span>
                            王小波 &nbsp;&nbsp;&nbsp;&nbsp;
                            <span>出版年</span>
                            1997-10-1
                        </p>
                        <i>
                            《这本杂文随笔集包括思想文化方面的文章，涉及知识分子的处境及思考，社会道德伦理，文化论争，国学与新儒家，民族主义等问题；包括从日常生活中发掘出来的各种真知灼见，涉及科学与邪道，女权主义等；包括对社会科学研究的评论，涉及性问题，生育问题，同性恋问题，社会研究的伦理问题和方法问题等；包括创作谈和文论，如写作的动机，作者的师承，作者对小说艺术的看法，作者对文体格调的看法，对影视的看法等；包括少量的书评，其中既有对文学经典的评论，也有对当代作家作品的一些看法；最后，还包括一些域外生活的杂感以及对某些社会现象的评点。
                        </i>
                    </div>
                </li>
                <li class="books_item">
                    <img src="../../assets/image/book_pic12.jpeg" />
                    <div class="books_title">
                        <h1>新名字的故事</h1>
                        <p>
                            <span>作者</span>
                            [意] 埃莱娜·费兰特 &nbsp;&nbsp;&nbsp;&nbsp;
                            <span>出版年</span>
                            2017-4-1
                        </p>
                        <i>
                            只有你身为女人 才会知道这些丑陋的秘密，两个女人
                            50年的友谊和战争。如何成为那个更强大的她，又不被她战胜。那不勒斯四部曲NO.2，《我的天才女友》后续，
                            意大利最神秘的作家费兰特，探索青年时代的激情、困惑、挣扎、背叛和失去全球畅销近千万册
                            被翻译成40多种语言 希拉 里·克林顿、
                            乔纳森·弗兰岑、詹姆斯·伍德、詹姆斯·弗兰科都是她的粉丝
                            《新名字的故事》是埃莱娜·费兰特的“那不勒斯四部曲”的第二部，描述了埃莱娜和莉拉的青年时代。在她们的人生以最快的速度急遽分化的那些年里，她们共同体验了爱、失去、困惑、挣扎、嫉妒和隐蔽的破坏。
                            莉拉在结婚当天就发现婚姻根本不是她想象的那样，她的初夜几乎是一场强奸。她带着一种强大的破坏欲介入了斯特凡诺的家族生意，似乎成为了她和埃莱娜小时候都想成为的那种女人。久未有身孕的莉拉，和埃莱娜去海边度假休养。而在伊斯基亚岛的那个夏天，改变了所有人的一生……
                            出于对莉拉所拥有的爱情的愤怒，“我”（埃莱娜）奋力摆脱这个破败、暴力、充满宿仇的街区。“我”成了街区的第一个大学生，并和一个高级知识分子家庭的男孩订婚，甚至出版了第一本小说。“我”以胜利者的形象回到那不勒斯，却发现告别了丑陋婚姻的莉拉，在一家肉食加工厂备受屈辱地打工。
                            当“我”发现自己的小说，其实完全窃取了莉拉交托给“我”的秘密笔记本里那些独特的力量和灵感，“我”被迫面临一个极度痛苦的问题：“我”和莉拉，到底谁离开了，又是谁留下了？
                        </i>
                    </div>
                </li>
                <li class="books_item">
                    <img src="../../assets/image/book_pic13.jpeg" />
                    <div class="books_title">
                        <h1>局外人</h1>
                        <p>
                            <span>作者</span>
                            [法] 阿尔贝·加缪 &nbsp;&nbsp;&nbsp;&nbsp;
                            <span>出版年</span>
                            2010-1-18
                        </p>
                        <i>
                            《局外人》是法国作家加缪的成名作，同时也是存在主义文学的杰出作品之一，该书以一种客观记录式的“零度风格”，粗线条地描述了主人公默尔索在荒谬的世界中经历的种种荒谬的事，以及自身的荒诞体验。从参加母亲的葬礼到偶然成了杀人犯，再到被判处死刑，默尔索似乎对一切都无动于衷，他像一个象征性的符号，代表了一种普遍的存在，又像是一个血红色的灯塔，具有高度的警示性。然而，局外人现象的产生无疑是由这个世界本身所孕育的，默尔索的存在有其深刻的外部原因。
                        </i>
                    </div>
                </li>
                <li class="books_item">
                    <img src="../../assets/image/book_pic14.jpeg" />
                    <div class="books_title">
                        <h1>人类简史</h1>
                        <p>
                            <span>作者</span>
                            [以色列] 尤瓦尔·赫拉利 &nbsp;&nbsp;&nbsp;&nbsp;
                            <span>出版年</span>
                            2014-11-1
                        </p>
                        <i>
                            《十万年前，地球上至少有六种不同的人
                            但今日，世界舞台为什么只剩下了我们自己？
                            从只能啃食虎狼吃剩的残骨的猿人，到跃居食物链顶端的智人，
                            从雪维洞穴壁上的原始人手印，到阿姆斯壮踩上月球的脚印，
                            从认知革命、农业革命，到科学革命、生物科技革命，
                            我们如何登上世界舞台成为万物之灵的？
                            从公元前1776年的《汉摩拉比法典》，到1776年的美国独立宣言，
                            从帝国主义、资本主义，到自由主义、消费主义，
                            从兽欲，到物欲，从兽性、人性，到神性
                            我们了解自己吗？我们过得更快乐吗？
                            我们究竟希望自己得到什么、变成什么？
                        </i>
                    </div>
                </li>
                <li class="books_item">
                    <img src="../../assets/image/book_pic15.jpeg" />
                    <div class="books_title">
                        <h1>平凡的世界</h1>
                        <p>
                            <span>作者</span>
                            路遥 &nbsp;&nbsp;&nbsp;&nbsp;
                            <span>出版年</span>
                            2005-1-1
                        </p>
                        <i>
                            《平凡的世界》是一部现实主义小说，也是一部小说形式的家族史。作者浓缩了中国西北农村的历史变迁过程，在小说中全景式地表现了中国当代城乡的社会生活。在近十年的广阔背景下，通过复杂的矛盾纠葛，刻划社会各阶层众多普通人的形象。劳动与爱情，挫折与追求，痛苦与欢乐，日常生活与巨大社会冲突，纷繁地交织在一起，深刻地展示了普通人在大时代历史进程中所走过的艰难曲折的道路。
                        </i>
                    </div>
                </li>
                <li class="books_item">
                    <img src="../../assets/image/book_pic16.jpeg" />
                    <div class="books_title">
                        <h1>白鹿原</h1>
                        <p>
                            <span>作者</span>
                            陈忠实 &nbsp;&nbsp;&nbsp;&nbsp;
                            <span>出版年</span>
                            2012-9-1
                        </p>
                        <i>
                            在从清末民初到建国之初的半个世纪里，一阵阵狂风掠过了白鹿原上空，而每一次的变动都震荡着它的内在结构：打乱了再恢复，恢复了再打乱，细腻地反映出白姓和鹿姓两大家族祖孙三代的恩怨纷争。陈忠实先生在这里，人物的命运是纵线，百回千转，社会历史的演进是横面，愈拓愈宽，传统文化的兴衰则是全书的精神主体，以至人、社会历史、文化精神三者之间相互激荡，相互作用，共同推进了作品的时空，在我们眼前铺开了一轴恢宏的、动态的、极富纵深感的关于我们民族灵魂的现实主义的画卷。
                        </i>
                    </div>
                </li>
                <li class="books_item">
                    <img src="../../assets/image/book_pic17.jpeg" />
                    <div class="books_title">
                        <h1>围城</h1>
                        <p>
                            <span>作者</span>
                            钱钟书 &nbsp;&nbsp;&nbsp;&nbsp;
                            <span>出版年</span>
                            1991-8-1
                        </p>
                        <i>
                            《围城》是钱钟书所著的长篇小说。第一版于1947年由上海晨光出版公司出版。1949年之后，由于政治等方面的原因，本书长期无法在中国大陆和台湾重印，仅在香港出现过盗印本。1980年由作者重新修订之后，在中国大陆地区由人民文学出版社刊印。此后作者又曾小幅修改过几次。《围城》
                            自从出版以来，就受到许多人的推崇。由于1949年后长期无法重印，这本书逐渐淡出人们的视野。1960年代，旅美汉学家夏志清在《中国现代小说史》(A
                            History of Modern Chinese
                            Fiction)中对本书作出很高的评价，这才重新引起人们对它的关注。人们对它的评价一般集中在两方面，幽默的语言和对生活深刻的观察。从1990年代开始，也有人提出对本书的不同看法，认为这是一部被“拔高”的小说，并不是一部出色的作品。很多人认为这是一部幽默作品。除了各具特色的人物语言之外，作者夹叙其间的文字也显着机智与幽默。这是本书的一大特色。也有人认为这是作者卖弄文字，语言显得尖酸刻薄。但这一说法并不为大多数人接受。
                        </i>
                    </div>
                </li>
                <li class="books_item">
                    <img src="../../assets/image/book_pic18.jpeg" />
                    <div class="books_title">
                        <h1>艺术的故事</h1>
                        <p>
                            <span>作者</span>
                            [英国] E·H·贡布里希 &nbsp;&nbsp;&nbsp;&nbsp;
                            <span>出版年</span>
                            2008-4-1
                        </p>
                        <i>
                            艺术的故事》概括地叙述了从最早的洞窟绘画到当今的实验艺术的发展历程，以阐明艺术史是“各种传统不断迂回、不断改变的历史，每一件作品在这历史中都既回顾过去又导向未来。
                            继1997年三联版《艺术的故事》后，英国费顿出版社授权广西美术出版社独家出版，也是国内唯一合法授权的版本。
                        </i>
                    </div>
                </li>
                <li class="books_item">
                    <img src="../../assets/image/book_pic2.jpeg" />
                    <div class="books_title">
                        <h1>活着</h1>
                        <p>
                            <span>作者</span>
                            余华 &nbsp;&nbsp;&nbsp;&nbsp;
                            <span>出版年</span>
                            2012-8-1
                        </p>
                        <i>
                            《活着(新版)》讲述了农村人福贵悲惨的人生遭遇。福贵本是个阔少爷，可他嗜赌如命，终于赌光了家业，一贫如洗。他的父亲被他活活气死，母亲则在穷困中患了重病，福贵前去求药，却在途中被国民党抓去当壮丁。经过几番波折回到家里，才知道母亲早已去世，妻子家珍含辛茹苦地养大两个儿女。此后更加悲惨的命运一次又一次降临到福贵身上，他的妻子、儿女和孙子相继死去，最后只剩福贵和一头老牛相依为命，但老人依旧活着，仿佛比往日更加洒脱与坚强。
                            《活着(新版)》荣获意大利格林扎纳•卡佛文学奖最高奖项（1998年）、台湾《中国时报》10本好书奖（1994年）、香港“博益”15本好书奖（1994年）、第三届世界华文“冰心文学奖”（2002年），入选香港《亚洲周刊》评选的“20世纪中文小说百年百强”、中国百位批评家和文学编辑评选的“20世纪90年代最有影响的10部作品”。
                        </i>
                    </div>
                </li>
                <li class="books_item">
                    <img src="../../assets/image/book_pic2.jpeg" />
                    <div class="books_title">
                        <h1>活着</h1>
                        <p>
                            <span>作者</span>
                            余华 &nbsp;&nbsp;&nbsp;&nbsp;
                            <span>出版年</span>
                            2012-8-1
                        </p>
                        <i>
                            《活着(新版)》讲述了农村人福贵悲惨的人生遭遇。福贵本是个阔少爷，可他嗜赌如命，终于赌光了家业，一贫如洗。他的父亲被他活活气死，母亲则在穷困中患了重病，福贵前去求药，却在途中被国民党抓去当壮丁。经过几番波折回到家里，才知道母亲早已去世，妻子家珍含辛茹苦地养大两个儿女。此后更加悲惨的命运一次又一次降临到福贵身上，他的妻子、儿女和孙子相继死去，最后只剩福贵和一头老牛相依为命，但老人依旧活着，仿佛比往日更加洒脱与坚强。
                            《活着(新版)》荣获意大利格林扎纳•卡佛文学奖最高奖项（1998年）、台湾《中国时报》10本好书奖（1994年）、香港“博益”15本好书奖（1994年）、第三届世界华文“冰心文学奖”（2002年），入选香港《亚洲周刊》评选的“20世纪中文小说百年百强”、中国百位批评家和文学编辑评选的“20世纪90年代最有影响的10部作品”。
                        </i>
                    </div>
                </li>
            </ul>
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
import { useRoute } from 'vue-router';

type Y = {
    id?: number;
    name?: string;
};
type T = {
    title: string;
    arrList: Y[];
};
const route = useRoute();
console.log(route.params.id);
const page = ref<number>(1);
const pageSize = ref<number>(100);
const handleSizeChange = () => {
    console.log(1);
};
const handleCurrentChange = () => {
    console.log(2);
};
const seleList = reactive<Y[]>([{}, {}, {}, {}, {}]);
const changeList = reactive<number[]>([0, 0, 0, 0, 0]);
const sortList = reactive<T[]>([
    {
        title: '作品分类',
        arrList: [
            { id: 0, name: '全部分类' },
            { id: 1, name: '东方玄幻' },
            { id: 2, name: '仙侠洪荒' },
            { id: 3, name: '都市脑洞' },
            { id: 4, name: '历史架空' },
            { id: 5, name: '科幻无限' },
            { id: 6, name: '游戏竞技' },
            { id: 7, name: '次元同人' },
            { id: 8, name: '怪奇物语' },
            { id: 9, name: '体育赛事' },
        ],
    },
    {
        title: '写作进度',
        arrList: [
            { id: 0, name: '全部' },
            { id: 1, name: '连载中' },
            { id: 2, name: '已完结' },
        ],
    },
    {
        title: '作品字数',
        arrList: [
            { id: 0, name: '全部' },
            { id: 1, name: '30万字以下' },
            { id: 2, name: '30万-50万' },
            { id: 3, name: '50万-100万' },
            { id: 4, name: '100万-200万' },
            { id: 5, name: '200万以上' },
        ],
    },
    {
        title: '更新时间',
        arrList: [
            { id: 0, name: '全部' },
            { id: 1, name: '三日内' },
            { id: 2, name: '七日内' },
            { id: 3, name: '半月内' },
            { id: 4, name: '一月内' },
        ],
    },
    {
        title: '其他',
        arrList: [
            { id: 0, name: '不限' },
            { id: 1, name: '免费' },
            { id: 2, name: 'VIP' },
            { id: 3, name: '只看签约' },
        ],
    },
]);
const changeClass = (item: Y, value: number, index: number) => {
    changeList[index] = value;
    if (item.id !== 0) {
        seleList[index] = item;
    }
};
</script>

<style scoped lang="scss">
.library {
    width: 100%;

    .top {
        width: 100%;
        background-color: $navbar-background;
        position: fixed;
        top: 0;
        box-shadow: 0px 3px 3px rgb(199, 199, 199);
        z-index: 999;
    }

    .sort {
        width: 80%;
        margin: auto;
        padding: 25px;
        box-sizing: border-box;
        margin-top: 150px;
        background-color: $navbar-background;
        border-radius: 8px;
        color: $text-color;

        .sort_main {
            width: 100%;
            display: flex;
            height: 45px;
            align-items: center;
            justify-content: flex-start;
            margin-bottom: 15px;

            .sort_title {
                width: 100px;
            }
            .sort_list {
                flex: 1;
                display: flex;
                font-size: 14px;

                .sort_item {
                    padding: 0 20px;
                    height: 40px;
                    text-align: center;
                    line-height: 40px;
                }

                .active {
                    background-color: $menu-background;
                    color: white;
                    border-radius: 20px;
                    font-size: 16px;
                }
            }
        }

        .sort_sele {
            width: 100%;
            height: 45px;
            border-top: 1px solid $text-color;
            display: flex;
            align-items: center;
            padding-top: 20px;
            box-sizing: border-box;

            .sele_title {
                width: 100px;
            }

            .sele_list {
                flex: 1;
                display: flex;

                .sele_item {
                    padding: 0 20px;
                    height: 40px;
                    margin-right: 20px;
                    text-align: center;
                    line-height: 40px;
                    background-color: $menu-background;
                    color: white;
                    border-radius: 20px;
                    font-size: 16px;
                }
            }
        }
    }

    .filter {
        width: 80%;
        height: 60px;
        margin: auto;
        margin-top: 20px;
        border-bottom: 1px solid $navbar-background;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: $text-color;
        font-size: 16px;

        .filter_item {
            margin-right: 40px;
        }
    }

    .books {
        width: 79%;
        margin: auto;
        margin-top: 20px;
        margin-bottom: 20px;

        .books_list {
            width: 100%;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;

            .books_item {
                width: 47%;
                height: 180px;
                display: flex;
                margin-bottom: 40px;

                img {
                    width: 130px;
                    height: 180px;
                }

                .books_title {
                    flex: 1;
                    margin-left: 30px;

                    h1 {
                        margin: 0;
                        color: $menu-background;
                        font-size: 22px;
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
                        -webkit-line-clamp: 4;
                        -webkit-box-orient: vertical;
                        font-size: 14px;
                        color: $text-color;
                        line-height: 22px;
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
