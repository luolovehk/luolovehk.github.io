var i = 0;
//早饭
var breakfast = "肠粉 去饮茶 牛腩粉 面包 蛋糕 荷包蛋 烧饼 肉夹馍 豆浆油条 馄饨 火腿 面条 小笼包 大笼包 玉米粥 肉包 煎饼果子 饺子 煎蛋 烧卖 包子 酸奶 苹果 梨 香蕉 皮蛋瘦肉粥 蛋挞 南瓜粥 煎饼 玉米糊 泡面 馒头 燕麦片 水煮蛋 米粉 豆浆 牛奶 花卷 煎饼果子 小米粥 黑米糕 鸡蛋饼 牛奶布丁 水果沙拉 鸡蛋羹 南瓜饼 鸡蛋灌饼 奶香小馒头 汉堡包 麦当劳 肯德基 披萨 八宝粥 三明治 蛋包饭 豆沙红薯饼 猪肉粥 蒸饺 白粥".split(" ");
//午饭/晚饭
var lunch = "功城记沙煲粉（化州店） 柚色轻食.健康餐（化州店） 稻香煲仔饭（化州店） 至尊比萨（三小店） 菜根香（经营早餐快餐） 老牌云吞店（中山路店） 十分粥铺（白粥•味粥） 粤潮汤粉王(广伦山店) 云吞姐饺天下（东湖店） 塔斯汀·中国汉堡(化州市民主店) 功城记沙煲粉（北岸店） 君粮轩食府·香油鸡·地道粤菜 大赞寿司（化州万达店） 蒸汤馆（汇景新城店） 厨娘重庆小面（四中店） 陈李记重庆小面 潮汕猪杂汤粉世家（步行街店） 陈记黄焖鸡米饭（京界华府店） 好莱康养生汤（绿景店） 潮味猪杂汤粉世家（汇景新城店） 东北大馅水饺（化州总店） 老香港炸鸡（化州店） 粤港烧鹅 陈小厨炖汤（猪脚饭·快餐） 鼓楼牛骨汤（化州店） 回味煲仔饭 三宝粥铺（白粥.味粥.粉） 粥之道（粥，面，豆浆） 上泉寿司 桂叔肠粉 袁小饺（实验中学店） 福建云吞店（中山路店） 捞得起快餐店(猪杂汤，炖汤) 张亮麻辣烫·麻辣拌（鼓楼店） 至尊比萨（北岸店） 肥仔烧腊、快餐 塔斯汀·中国汉堡(化州市民主店) 董董寿司(董董寿司河东店) 康天下饺子皇（北岸店） 粥點（炒粉•拉粉•化州店） 纯磨坊（第831分店） 海洋牛腩档（步行街分店） 肯麦基（河西步行街店) 陈李烧鲜府点蹄擂椒猪脚饭（北岸店） 麦香饺子羊杂汤店 潮舜猪掌柜·隆江正宗猪脚饭(茂名化州店) 出色炖品（北岸店） 王记大王鸭货 和谷记·粤味小馆（化州店） 东山有家面馆 壹圆馒头坊 春芳拉粉店 头号粥铺（点心·汤粉·捞粉·河东店） 鲜炖居 肯麦基（北岸店） 刘福记桂林米粉（河西店） 牛大叔大碗牛肉面(化州店) 三津汤包（下街垌店·手工包·粥） 亚拾烧鹅饭店(烧猪，烧鸭、香油鸡） 黄记沙煲粉（中山路店，炒螺蛳粉，炒饭) 熊猫婶婶主题螺蛳粉（化州店） 煎饺王子（化州西城路店） 聚友轩·川·湘·粤菜（化州店） 牛了味（牛腩粉） 黄小厨 梁记手撕鸡快餐 柳源螺蛳粉（化州店） 蒙自源米线（化州宏达店） 杨振章麻辣烫（三十米街店） 味赞（炒饭·快餐·炒粉） 鲜一家云吞铺 一心饺子馆 鲜炖品（上街垌店） 粤桂煲仔饭（上街垌店） 金水快餐店 铭记猪杂汤（炒粉，炒饭，汤粉） 一碗排骨饭（六街店） 哈哈美味厨房（肠粉，豆浆，油条） 杨振章麻辣烫（北岸店） 黎耀阳•财神糖水铺 骨里香砂锅粉 虎头炸·潮汕南乳炸鸡(化州步行街店) 塔诗汀·中国汉堡（北岸店） 肥妹牛腩档（北岸店） 贵州酒楼 小厨居（化州万达广场店） 大熊熊螺蛳粉 咸骨粥饺子王（化州店） 一碗排骨饭（三十米街店） 三十米街·金牌隆江猪脚饭 炎记酸菜魚 大掌柜烧腊 哇友仔·铁锅牛蛙（化州万达店·烤鱼） 肥佬美食轩罗定肠粉 意莱莉(手工披萨·化州万达店) 咕咕美食餐厅 大秦小院（化州店） 尝味来柳州螺蛳粉（北岸店） 梁记餐饮店（家常小炒菜、汤饭、汤粉、） 鸡味香海南鸡饭（隆江猪脚饭） 渔港酸菜鱼（上街垌店） 美味居（快餐·小炒·炖汤） 巧姐秘制滑鸡饭(炒饭·快餐·炒粉) 华莱士·全鸡汉堡（民主路店） 赏点就点(市府店) 何记衢州鸭头(步行街文化宫店) 水东十八菜（站前路店） 肯麦基（忠信店） 桂螺号柳州螺蛳粉（步行街店） 賤記港式茶餐厅 真正隆江猪脚饭·潮式卤饭 福建特色沙县小吃（广伦山店） 猫喵芝士焗饭（向阳路店） 华莱士·全鸡汉堡（化州万达店） 云青雀(云南小锅米线) 厨娘湖南米粉 正新鸡排（化州步行街店） 李记隆江猪脚饭（快餐•北岸店） 聚喜堂（友情有意化州分店） 柳源螺蛳粉（步行街店） 成都川菜馆（川菜.小炒） 波仔快餐店（炖汤饭.炒菜） 化州香油鸡(广伦山店) 嬢嬢米线大王（化州店） 长岐牛腩店 绝味鸭脖（化州步行街店） 首尔·韩国炸鸡(化州店) 品鲜花甲粉（兆康店） 西关肠粉·汤粉·粥 劳叔饭店（经营快餐、小炒、煲仔饭） 沙县·风味小吃（北岸店） 尊宝比萨（化州北岸店） 麦当劳麦乐送（茂名化州桔城广场店） 湘聚缘新派湘菜馆 忠记•皇牌烧腊 正新鸡排·炸鸡·烧烤（化州民主店） 李记大碗云吞 六月雪甜品店（化州店） 冒胖子●市井火锅冒菜（化州店） 蒸品快餐（蒸饭蒸鱼蒸汤） 蒸品快餐（蒸饭蒸鱼蒸汤） 香半州烧味(化州北岸店) 拉叔猪扒包（北岸店） 禧厨（炒饭·快餐，炒粉） 居肉町•日式烧肉饭(化州店) 尊宝比萨（化州民主店） 沙县小吃（三中店） 海洋牛腩档（中山路店） 蒙自源米线大王（化州嘉荣店） 袁记云饺（三官塘市场店） 潮汕李记隆江猪脚饭（快餐·中山路店） 厚米饭团（寿司·三明治） 油条爱上豆浆(粥点·肠粉·炒粉面饭) 渝老头●牛油麻辣烫 亚汉大排档 一品鲜潮汕猪杂汤粉世家(隆江猪脚饭) 李记隆江猪脚饭（快餐·上街店） 云吞嫂 蒙自源米线大王（化州万达广场店） 曾仔牛腩 星妈糖水铺 塔斯汀·中国汉堡（宏达广场店） 伍胡酒家（小炒，香油鸡，水蒸鸡） 粥润发粥铺(化州店) 湛香烧腊快餐店 相聚时光（化州店） 一个人的水煮肉片（酸菜鱼） 永正豆浆大王(肠粉·粥点·炒粉) 广福阁北京烤鸭（化州店） 皇冠·黄焖鸡米饭（化州店） 王英饭店 福建云吞店（北岸店） 高老庄黄记·隆江猪脚饭 粤云簸箕炊 粥师奶（白粥-味粥） 一碗猪脚饭 烤肉基地『烤肉拌饭•脆皮鸡饭』 亿达糖水（越南小卷粉、汤粉、炒粉） 源丰餐饮店牛腩粉瘦肉粉云吞 桔丙堂走地鸡快餐店 桔丙堂走地鸡快餐店 味蕾隆江猪脚饭 糖诗颂茶（步行街店） 宁夏手抓饭-肠包肉-肚包肉 开心汉堡 螺香螺蛳粉 觅茶（鲜奶茶•咖啡•炸鸡） 福建闽南莆仙味云吞(东湖市场店） 潮汕隆江猪脚饭（东湖店） 杨国福麻辣烫·麻辣拌（橘洲一号店） 猫喵芝士焗饭（向阳路店） 小当家（炒饭•生滚粥•糖水） 光头佬本地土猪猪杂汤（站前路店） 聚喜堂（友情有意化州分店） 韦柳螺柳州螺蛳粉（二中店） 尊宝比萨（化州东信店） 星妈糖水铺 鲜炖居食府（炖汤·小炒） 翠发餐室（化州万达店） 喜记港式生滚粥（化州店） 裕来快餐店(香油鸡·猪杂汤) 日日鲜簸箕炊 赖胖子肉蟹煲（化州万达店） 探鱼·鲜青椒爽麻烤鱼（茂名化州万达广场店） 喜记港式生滚粥（化州店） 九六鸡饭店（飞马店） 四海碗仔翅（鲜炖燕窝·广式小吃·万达店） 卓锋汤粉 鲜炖居食府（炖汤·小炒） 优美乐（炸鸡汉堡） 陌陌家（糖水•炸串•捞粉） 肥姨汤粉店（广伦山店） 肯麦基·中国汉堡（二中店） 喜欢蒸鸡饭（竹盐蒸鸡·烧鸡） 港扒记•烤肉脆皮鸡扒饭 大鸿牛杂水 麦当劳麦乐送（茂名化州北京西路店） 成记云吞面（三中店） 好美味（炸鸡、汉堡） 四眼餐饮店（小炒，快餐） 四眼餐饮店（小炒，快餐） 伴拌香麻辣凉菜（川菜凉拌菜-盐焗卤味.三中店） 甜甜糖水店（粥.粉.面） 烨味浓汤 录佳食坊（绿景店） 港扒记•烤肉脆皮鸡扒饭 好美味（炸鸡、汉堡） 一碗粥 有喜小龙虾 旺旺土鸡粉 熊大爷现包饺子(三合口市场店·云吞) 金姨记咸骨粥饺子王（化州店） 出色炖品（河东店） 多米哥石磨肠粉(肠粉·汤粉·粥) 成记云吞面（三中店） 张亮麻辣烫·麻辣拌（三中店） 粤港烧卤味嘴上功夫 兰州拉面（上街店） 和聚店·新疆炒米粉 诚品烧鹅（十一分店） 炖品居 诚品烧鹅（十一分店） 起记快餐店（化州店） 糖人街（糖水•炒粉饭•粥） 八戒·猪肚鸡汤饭（化州店） 谭记白切店 福记靓汤 正宗云贵川砂锅粉（北岸店） 和聚店·新疆炒米粉 一茶一点（化州忠信店） 群姐寿司 扬记快餐店（肠粉、汤粉、粥） 囍记茶档 阿叔猪扒包（橘洲店） 肯德基宅急送（广海中路店） 港味烧腊熟食店 卡斯汉堡 谭记食店（肠粉·汤粉·炒粉） 柒粉田拌粉王 刘记云饺（东湖中路店） 煌爪柠檬无骨鸡爪（万达店） 大户人家（万达店） 刘记云饺（东湖中路店） 韦柳螺柳州螺蛳粉（河西店） 张记新鲜牛腩档（陵园路店） 肯麦基（下郭店）·炸鸡汉堡 沫沫家的小龙虾（化州商业园店） 京记手撕鸡 萃渔（万达店） 螺美味螺蛳粉 三津汤包（三官塘店·手工包子） 囍之螺螺蛳粉（文仙店） 肯德基宅急送（橘洲一号店） 陶记大排档 撸小串（麻辣烫、炸串、烧烤） 黄记•广式云吞饺子铺（东湖市场店） 家乡快餐店 日鸿杀猪粉 化北小吃 喜福临（烧腊·快餐） 三津汤包（三官塘店·手工包子） 探客（下郭店） 纯友醇原味炖汤 阿叔猪扒包（化州绿景店） 余不纪云吞当家<石磨肠粉，云吞、饺子> 美食香餐饮（猪脚饭·快餐·肠粉） 金汤馆炖汤世家（化州店） 肯麦基（河东店） 酱妈妈麻辣烫(麻辣拌) 老上海馄饨王（绿景万达店） 米膳皇石磨肠粉 化龙堂（炸鸡·小吃·主食） 杨记广式汤粉（二中店） 江渔儿酸菜鱼（化州万达店） 凤姐油炸.糖水 WRENCHCOFFEE（扳手咖啡） 麦维克汉堡奶茶(下郭店) 初名·炖汤（快餐、炖汤、简餐） 化州窑鸡王 9號咖啡 汤一品 绝味鸭脖（化州万达广场店） 麦维克汉堡奶茶(下郭店) 化州窑鸡王 茶柠美食（饮品·炸串.小吃） 奇味自选快餐店 家味车站老牌白粥（快餐、砂锅粉、糖水） 如意糖水店(现磨石磨肠粉) 轻茶序 光头佬餐饮店 隆江猪脚饭·家常鸡汤粉 绝味鸭脖（化州绿景美食街店） 大鼎烧腊（化州店） 正新鸡排（化州万达店） 百香苑复合式餐厅 翠园饭店 椒王火锅（化州万达店） 派乐汉堡·炸鸡（橘洲一号店） 粤港烧鹅（北岸分店） 巴适的牛·鲜切牛肉自助火锅（化州店） 黄氏鸡汤（炖汤.面.饭） 派乐汉堡·炸鸡（橘洲一号店） 巴适的牛·鲜切牛肉自助火锅（化州店） 大码头海鲜城（炖汤·小炒·海鲜） 牛喜市（关东煮，牛腩粉） 牛孖5 七点半麻辣烫 陕西凉皮（二小店） 汤馆(炖汤，小炒，快餐) 四中老字号油炸铺（四中分店） 可口美食快餐店（快餐粥·粉面·） 粤桂煲仔饭 农家鸡汤饭店 肯麦基（三中店） 稻香石磨肠粉店(粥•粉•饭) 麦维克汉堡奶茶（七小店） 亚雪糖水店牛腩粉（二中店） 7点早餐店(早餐，午餐) 阿里木·新疆草原蒸羊排·牛排（化州店） 董记餐饮店（肠粉.快餐.糖水）".split(" ");
//monster
var abnormal = "虫草花鱼胶汤 广式糯米卷 薏米燕窝 莴笋炒腊肉 番茄土豆排骨汤 酸梅蒸金鲳鱼 香菇瘦肉粥 猪红生菜粥 家常酱油鸡 茼蒿鸡杂汤 蚝油杏鲍菇 蚝油生菜 家常炒面 香芋烧骨煲 紫菜鸭 靓汤胡萝卜玉米扇骨汤 蒜蓉粉丝娃娃菜 咖喱鱼蛋 节瓜脊骨煲 鲍汁扣鱼胶 皮蛋瘦肉粥 菠萝糯米饭 野笋火腿土鸡煲 菠萝咕噜肉 顺德双皮奶 淡菜排骨山药汤 生滚鱼片粥 口感滑嫩又细腻 三鲜竹升面 盐焗花螺 红烧抓钱手 潮汕小炒皇 荷叶南瓜蒸排骨 腊味煲仔饭 避风塘炒大虾 猪肚鸡 广式糯米鸡 肠粉 红枣蒸南瓜 蒜末蚝油生菜 奶油白菜 清炒苦瓜片 零苦味版 客家酿苦瓜 翡翠豆腐羹 孜然鱿鱼圈 红烧海参 卤水豆腐丝儿 蚝油生菜 蚝油生菜 西芹炒百合 孜然鱿鱼头 卤水豆腐干 西芹百合炒腰果 客家酿豆腐 沙爹牛肉 客家酿苦瓜 椒盐玉米粒 蜜汁南瓜 白灼菜心 金针菇日本豆腐煲 南瓜炒百合 白灼芥蓝 糯米桂花红枣蒸南瓜 西芹炒百合腰果虾仁 清炒苦瓜 红枣蒸南瓜 客家酿豆腐 椒盐玉米土豆饼 白灼菜心 香煎茄片 焖客家酿豆腐 白灼虾 快速腌咸鸭蛋 传统广式萝卜糕 苦瓜鸡蛋 清炒苦瓜山药片 孜然鱿鱼 椒盐玉米 椒盐排骨 清蒸排骨 糖醋豆腐 香煎南瓜饼 蒜茸炒丝瓜 潮汕砂锅粥 菠萝滑鸡片 椒盐玉米 椒盐玉米钱 煎酿茄子 蒜泥蚝油生菜 清蒸鱼 白灼菜心 白灼基围虾 菠萝古老肉 腊肠炒荷兰豆 荷塘小炒 清蒸桂鱼 蒜香蚝油生菜 清蒸桂花鱼 奶黄包 水晶虾饺 烧卖 卤水豆腐 蒜蓉粉丝蒸大虾 清蒸太阳鱼 菠萝咕噜豆腐 孔雀开屏鱼 白灼茼蒿 榄菜四季豆 糖不甩 青瓜炒蛋 脆皮炸鲜奶 浇汁蚝油生菜 白灼菠菜 孜然鱿鱼 榴莲酥 三鲜日本豆腐 红烧海参斑鱼 蚝油生菜 蒜蓉蚝油生菜 蚝油生菜 木耳蚝油生菜 叉烧肉 西芹百合炒腰果 香煎秋刀鱼 双皮奶 泥鳅淮山汤 翡翠虾仁 菜心 红枣糕 蒜汁蚝油生菜 肉沫白灼菜心 丝瓜猪肝瘦肉汤 蒜蓉生菜 蒜香骨 孜然鱿鱼须 香煎茄片 百合红枣蒸南瓜 肚包鸡 甜橙蒸蛋 鱼头萝卜汤 香煎藕饼 红烧海参鱼胶 蒜蓉蚝油生菜 山楂罐头 南瓜炒百合 白灼芥蓝 盐焗虾 木瓜银耳汤 白切鸡 糯米肉丸 油条 木瓜撞奶 糯米鸡 胡椒咸菜猪肚汤 梅菜扣肉 红烧猪蹄 菠萝咕咾肉 菠萝咕噜肉 金针菇日本豆腐煲 腊味煲仔饭 清炒苦瓜 孜然鱿鱼须 苦瓜黄豆排骨汤 上汤苋菜 卤水豆腐皮 酸甜排骨 叉烧包 香酥鲫鱼 荔枝虾球 蜜汁南瓜山药泥 盐焗鸡 糖醋黄花鱼 辣酱孜然鱿鱼 掌上明珠 蜜汁南瓜 潮汕蚝仔烙 斛汁煎青鱼 陈皮辣牛肉 杂菌汤 潮汕丝瓜鱼丸子汤 黄鳝饭 汕尾层糕粿 菠萝咕咾肉 炒菜脯 脆皮吊烧鸡 菜脯炒鸡蛋 菜脯炒海米 咸鱿鱼蒸五花肉 酿苦瓜 美味便当搭配 酿豆泡 酿香菇 酿白豆腐 蚝气娃娃菜 白切鸡 猪脚姜 干炒牛河 银鱼蒸肉饼 蒜蓉焗生蚝 芝士焗生蚝 避风塘炒蟹 嫩鸡腿扒 干豆角肉片煲仔饭 白灼芥兰 豉油鸡 荷叶蒸鸡 绝味广式烤鸭 广式美食:蜜汁叉烧 金不换炒薄壳 鸡汤云吞 粤式干炒牛河 砂锅啫乳鸽 粤式肉粽 广式传统肉粽 尖椒炒牛肉 酱炒花蛤 油炝黄鳝 广式腊味煲仔饭 辣味蜜汁叉烧 猪脚姜 鲜虾香菇肠粉 蜜汁叉烧 广式蜜汁叉烧 客家菜经典代表菜盐焗鸡 菜传奇脆皮烧肉 黄豆焖猪手 盆满钵满 脆皮烧肉 盐水白米虾 蜜汁叉烧 广式脆皮烧肉 排骨煲仔饭 广东盆菜 煲仔饭 广式腊肉 菰米腊鸭腿煲仔饭 腊鸭腿煲仔饭 酸咸菜煮花蛤 芥兰炒腊肠 排骨煲仔饭 蒜蓉粉丝蒸元贝 蜜汁叉烧肉的制作方法 腊味萝卜糕 支竹焖羊肉 滑鸡煲仔饭 鲜虾香菇肠粉 豉香蒸排骨 上汤蒸斗鲳 水晶虾饺 滑蛋虾仁 芥蓝牛肉 香酥带鱼的制作方法 香菇焖鸡 鸭肉云吞面 舌尖梅菜扣肉 糖醋五柳菜炸蛋 家常鼓油鸡 啫啫滑鸡煲 鲜虾云吞 自制陈皮 虾仁肠粉 薄饼 广式甜品陈皮红豆沙 客家三杯鸭 猪脚姜 陈皮鸭 清蒸石斑鱼 特色菜品梅菜扣肉 白云猪手 避风塘炒虾 陈皮红豆沙 潮汕耗烙 广式叉烧 芥蓝头杂咸 鲜腌生蚝 梅菜肉饼 客家酿豆腐 喈喈年糕 猪脚姜 沙茶牛肉 广式腊肠 煎焗生蚝 梅酱排骨 盐焗大虾 豆皮肉卷 沙姜白切猪手 煲仔饭 福禄招财烤猪手 鲜虾马蹄盏 金枪鱼炒杂蔬 五香芋头糕 豉汁小排煲仔饭 虫草花炒茭白 蚝豉萝卜焖肋排 避风塘炒蟹 鸡仔饼 舌尖梅菜扣肉 蜜汁叉烧肉 炒河粉 盐焗鸡翅 美味广式腊肠 萝卜粄 五香芋头丝 经典菜白切鸡 沙姜啫啫鸡 椒盐油筷鱼 榄菜肉末四季豆 自制广式叉烧 港式豉油鸡腿排 煲仔饭 蜜汁叉烧 豉油鸡的家常做法 粤式点心马拉糕 炒鲜奶 白切鸡的家常做法 芋泥白果 北芪盐焗鸡 电饭锅版豉油鸡腿 鸡仔饼 经典菜白切鸡 虾仁茴香苗肠粉 广式蜜汁叉烧 荷香糯米鸡 玉米饼 广式虾肉肠粉 萝卜糕 广式腊味煲仔饭 特色菜品梅菜扣肉 避风塘炒虾 黄皮蜜饯 五柳炸蛋 鱼籽烧卖 醋拌双丝 蚝油香菇 广式煲仔饭 豉椒牛肉 五柳炸蛋 鲜虾香菇肠粉 马拉糕 芝心鲜虾春卷 鸡仔饼 蜜汁叉烧 辣味蜜汁叉烧 蛋黄肉粽 蒜蓉粉丝蒸扇贝 广式萝卜糕 广式甜点奶黄包 猪脚姜 金牌蒜香骨 腊味煲仔饭 虫草花水蛋 粤式叉烧捞面 糯米鸡 豆豉蒸排骨 豆豉鲮鱼炒苦瓜 韭菜鲜肉蒸饺豉油鸡 猪脚姜 干迫奄仔蟹 螃蟹粉丝煲 蒜蓉粉丝蒸扇贝 生爆肚尖 简易蜜汁叉烧肉 菠萝咕咾肉 香煎蚝烙 蒜蓉豆豉焗排骨 盐焗大虾 辣味蜜汁叉烧 甜酸斋 香橙咕噜肉 豆豉蒸排骨 南乳蹄髈 盆满钵溢香蛤蜊 豉油鸡腿 香炸云吞 美食广式香肠 粤式腊肠炒意面 广式茶豉汁凤爪 清蒸虾 粤式养颜鸡汤火锅 滑蛋牛肉 红焖猪脚 卤肉鹌鹑蛋 豉汁蒸凤爪 潮式生炊枪鱼 金不换菜脯蛋 返沙山药 潮汕家常焖弦鱼 蜜汁叉烧 美味豉油鸡 广式腊味煲仔饭 柱候酱焖牛腩萝卜 盐灼虾 煲仔饭 猪脚醋 叉烧肉 肉香糯米卷 水果薄罉 紫菜汤馄饨 广式经典豆豉鱼仔 焖锅白切鸡 青瓜炒腊肠 芫爆肉丝 普宁豆酱水煮巴浪鱼 蜜汁叉烧 香酥虎皮凤爪 广式粽子 蒜香XO酱蒸丝瓜 叉烧 葱油白切鸡 避风塘炒蟹 辣味蜜汁叉烧 喈喈年糕 煎焗三文鱼头 菠菜炒鸡蛋 糯米烧麦 蒜蓉白灼芦笋 丝瓜烩油条 金针云耳蒸滑鸡 蚝油草菇炒牛肉 广式卤水鸭拼盘 淮山螺肉汤 腊肠炒西芹 咕噜肉 糖醋鱼块 广式羊肉煲 蒜香虾 蒜蓉蒸鲈鱼 四喜丸子 五花叉烧肉 参蒸鳝段 咖喱糯米鸡 豆腐炸五花肉煲 板栗烧仔鸡 清芙蓉鸡 干炒牛河 特色菜品梅菜扣肉 啫啫滑鸡煲 蛋花肉丝青菜汤粉 蚝油菜心杏鲍菇 炒粒粒 葱油豉汁吹筒仔 豉油鸡 豉椒炒鳝片 五柳炸蛋 子姜焖鸭 豆瓣酱焖红杉鱼 白云猪手 清蒸金鲳鱼 爆炒鳝鱼丝 清炒红苋菜 浓酱凤爪 香煎萝卜糕 鸡仔饼 猪脚姜 清蒸石斑鱼 干锅藕片 腊肠滑鸡煲仔饭 窝蛋腊肠煲仔饭 香煎红三鱼 果酱烧排骨 玉米豆沙饼 啫啫滑鸡煲 猪脚姜 广式煲仔饭 牛肉汤河粉 香煎芋头糕 避风塘炒蟹 盐灼虾 虎皮蛋 麻辣小龙虾 鸡脚花生土豆汤 香芋蒸排骨 广式脆皮烧肉 轻松三步做出白斩鸡 冰花煎饺 蜜汁叉烧肉 鲜虾烧卖 苦瓜炒虾米 香菇鸡肉馄饨 虾饺皇 鱼片粥&杂锦炒河粉 咸蛋黄蒸肉饼 蒜头炒瓜远 醋溜白菜 清爽解暑橙汁冬瓜片 木耳海参猪肚汤 青椒炒腊肠 菠萝咕咾肉 蜜汁叉烧 广式香肠炒莴笋 红薯鸡蛋饼 香煎粽子 豉味盐焗 津白佛手 酸菜炒年糕 素菜炒饭 粉丝蒸鲜虾 豆豉蒸小排 小炒玉米山药丁 西兰花鸡蛋香肠炒饭 茄汁肉末意粉 洋葱烩鸡翅 豆豉鲮鱼炒油麦菜 脆炒青瓜 胡萝卜甜玉米扇骨薏米汤 三杯鸡酱汁 清蒸鹌鹑蛋 水晶鱿鱼饺 蒜蓉豆豉南瓜 椒丝腐乳通菜 蒜蓉虾 盐焗鸡翅 丝瓜鱿鱼须 避风塘炒蟹 舌尖梅菜扣肉 泰汁茄夹 韭菜炒蚬肉 甜辣黄鱼 粤式咖喱鸡翅 香煎葱油饼 土豆腊肉焖饭 拍黄瓜 木瓜椰奶冻 清蒸酿豆腐 腐竹炒黄瓜 玉米浆 菜心炒饭 葱头猪肠粉 牛肉炒土豆洋葱 荷塘小炒 南瓜腊鸭腿焗饭 美味嗜嗜鸡 水东芥菜浸鱼片 番茄猪肝意粉 胡萝卜冬菇煎焗鸡腿 南乳脆藕片 青椒爆猪肚 蒜蓉蚝油生菜 斋炒河粉 避风塘炒虾 舌尖梅菜扣肉 鲜肉大馄饨 香芋鸡翅煲 香菇滑鸡煲仔饭 蜜汁叉烧 牛腩萝卜 鱼蛋牛腩粉 缤纷鸡丁 椰蓉花形面包 香煎芋丝糕 腊肠炒芥蓝 杂锦糯米饭 醉鸡腿卷 豆角炒牛肉 金黄烫面蛋糕卷 煎封红衫鱼 千叶纹烫面蛋糕卷 奶酪焗饭 虾米烧萝卜 腐竹瑶柱白果粥 雨花石汤圆 生姜番薯糖水 红薯腊肠饭 奥尔良烤翅 糖渍四季桔 干炒牛河 啫啫滑鸡煲 蒜蓉粉丝蒸扇贝 咖喱胡萝卜鸡翅 猪横脷煲鸡骨草 生菜肉片粥 青瓜牛肉 韭菜如意炒 三丝炒韭菜 南瓜玉米浆 香肠热狗包 素馅水晶粉果 红枣煎焗鸡块 蜜红豆南瓜饼 鱼头鱼尾豆腐汤 彩椒爆腰花 平菇炒荷兰豆 香芒红豆沙 枸杞黄豆浆 黄豆骨头汤 椰蓉馅蒸包 酸甜萝卜&酸甜黄瓜 咖喱鸡肉饭 海带绿豆糖水 南瓜烧排骨 五指毛桃煲乌鸡 冬菇焖鸡 蜜汁叉烧 广式煲仔饭 素菜大杂烩 南瓜烧鸡翅 皮蛋瘦肉粥家常做法 花旗参清鸡汤 蒜蓉豆豉烧鳊鱼 彩椒烤肉串 迷你肠仔包 紫薯蛋糕卷 酸甜排骨 莲藕猪脚汤 南瓜黑木耳鸡蛋馅发面饼 青椒生炒排骨 老母鸡鲍鱼玉米汤 凉拌黄瓜 腐乳鸡翅 炒锅版的金牌BBQ鸡 肉末豆腐 香干青椒炒肉丝 蒜香红衫鱼 果酱馅墨西哥面包 红烧鸡三宝 鲜菇鸡腿汤面 糖心饼干 栗子玉米扇骨汤 白云猪手 喈喈年糕 盐灼虾 鲜菇鸡肉粥 香脆炸藕夹 腊味芋头糕 青椒肉丝 淮山焖鸭腿 西洋菜猪肉馅饺子 马蹄羊肉煲 爆炒海茸条 蜜汁烤鸡 酱烧罗非鱼 肉末蒸水蛋 马蹄竹蔗羊腿汤 吐司煎鸡蛋 瑶柱排骨萝卜汤 虫草花玉米脊骨汤 金玉满堂炒粒粒 卤水鸡腿卷 咕噜肉 培根金针菇卷 隔水蒸鸡做法 清蒸开屏鲈鱼 胡萝卜茅根马蹄猪骨汤 家常炒藕片 大白菜粉丝丸子煲 鲜虾香菇肠粉 煲仔饭 上汤白花菜 茶树菇滑鸡 茶树菇滑鸡红薯煲仔饭 竹蔗红萝卜马蹄汤 生鱼葛菜汤 白斩河田鸡 素烧鹅 海南椰子盅 广东烤鸭 叉烧炒面 蒜子瑶柱豆苗 酸辣虾仁烘蛋 麒麟鲈鱼 黄埔炒蛋 盐酥鸡块 蚝油鸡翅 干贝发菜 炸子鸡 炊水晶鸡 炒葱椒鸡 葱油白切鸡 果汁肉脯 荷包鲤鱼 油泡鱼青丸 荷香糯米鸡 广式脆皮烧肉 鸡仔饼 姜葱煀鲤鱼 潮州生淋鱼 干煎虾碌 白灼响螺片 鱼肠蒸蛋 金钱牛排 芝麻球 冬瓜薏米煲鸭 广东虾饺 虾仁豆腐 虾仁蒸饺 炒大明虾 蚝油牛肉 铁板牛肉 潮州烧雁鹅 玫瑰手撕鸡 江南百花鸡 广式烧填鸭 炒禾花雀 白斩鸡 果汁鱼块 红扒鱼肚 蕃茄鸡煲 五花叉烧肉 盐焗大虾 避风塘炒蟹 菠菜鸡煲 白果鸭煲 脆皮乳鸽 广州炒饭 白焯响螺 北菇鹅掌 玻璃白菜 烧禾虫 狗肉煲 脆皮烤乳猪 佛手排骨 鼎湖上素 咸蛋蒸肉饼 虾胶瓤鱼肚 红炖鱼翅 皮片乳猪 东江盐焗鸡 脆炸蟹钳 清蒸鲈鱼 香滑鲈鱼球 咸鱼茄瓜煲 白云猪手 猪脑鱼云羹 香芋扣肉 子姜焖鸭 干炸肝花 潮州冻肉 大良野鸡卷 脆皮炸鸡 炒鲜奶做法 荷叶米粉鸭 乳香四季豆 海棠冬菇 芹菜鱿鱼丝 ".split(" ");
//自定义大转盘
var turntable = "冰激凌 奶茶 再来一次 汉堡王 麦麦 毛血旺 萨莉亚 薯条 钵钵鸡 川菜 **启动！".split(" ");
//monster中的吐槽词
var abnormalTease = "大哥，饶命啊大哥 吃吃吃，就知道吃 壮士，干了这碗热翔 就这，还不够我塞牙缝儿 莫慌，抱紧我 吃一个，长一斤 你帅你先吃 你胖你先吃 听说吃这玩意吃不胖 你先吃，我不饿 不吃不是中国人 配上鸡汤，口味更佳 我仿佛看到了盐水瓶 嗯，好吃么？ 饭后注意漱口哦 这菜红烧味道如何？ 饭后百步走，活到九十九 分享页面到朋友圈，可以获得30个QQ太阳 据说吃完99%都哭了 惊天内幕！这网页是逗你玩的 为了身边的朋友！！转！！！！ 我也是醉了 我想静静，不要问我静静是谁 解决吃什么难题哪家强？ 我就笑笑不说话 转发过100，然并卵 活到老，吃到老 我给你讲个笑话 你别哭喔 你知道怎样得精神分裂症吗？那样我就再不是一个人了。 天下没有不散的筵席。我都还没吃完，你们都走了。 吃不到的醋，最酸。 躲了一辈子的雨，雨会不会很难过 小猪一定不知道自己的肉很好吃吧，真替它们心酸。 作为一个胖子，居然还自称自己不是个粗人！ 心情不好就吃吃吃 念念不忘，必会下单 别低头，口水会掉 今晚我们都是吃货 我这叫圆润，不叫胖 这不叫胖，叫丰满！ 吃饭前记得用手机消消毒 集满20个赞，明天早起瘦10斤 好吃的不要不要的 不好吃，不要钱 吃的我蹲下起立就头晕 听说你是广东人？ 贝爷，卒。".split(" ");
//默认时间
var order = 2;
//当前时间
var Hours = (new Date).getHours();
//重置次数
var Reset = 0;
var human = "human";
var b, C, E, meal;

$(document).ready(function () {
    //打印控制台信息
    

    $(".title").on("animationend webkitAnimationEnd", function (t) {
        $(this).removeClass("shake")
    })

    $("#temp_container").on("animationend webkitAnimationEnd", function (t) {
        $(t.target).remove()
    })

    $("#start").click(function () {

        $("body").toggleClass("playing", !i);
        if (i) {
            i = 0;
            if ("monster" == human) {
                $(".os").text(abnormalTease[randomNumber(abnormalTease.length)]);
            }
            $(".punctuation").text("");
            $("#start").find("span").text("换一个");
            clearTimeout(b);
            document.title = "化州佬 | " + $(".title").text();
        } else {
            i = 1;
            Reset++;
            2 == Reset && tease("我就知道你会换一个 ( ͡° ͜ʖ ͡°)");
            5 == Reset && tease("说，你是不是天秤座？Σ( ° △ °|||)︴");
            10 == Reset && tease("你是吃了炫迈吗？(￣△￣；)");
            20 == Reset && tease("难道你是处女座？(๑•̀ㅂ•́)و✧");
            30 == Reset && tease("再换我可要报警了！( *・ω・)✄╰ひ╯");

            //重置状态
            $(".today, .time, .eat").css("display", false)
            //判断使用哪个数组
            var pool = lunch
            switch ($("div > .selected").data("type")) {
                case "human":
                    if (order == 0) {
                        pool = breakfast
                    }
                    break;
                case "monster":
                    pool = abnormal;
                    break;
                case "turntable":
                    pool = turntable;
                    //隐藏一些内容
                    $(".today, .time, .eat").css("display", "none")
                    break;
            }

            $(".punctuation").text("？"), $("#start").find("span").text("停"), $(".os").text(""),
                function o() {
                    var e = randomNumber(pool.length) - 1,
                        item = pool[e],
                        a = randomNumber(C),
                        c = randomNumber(E - 50),
                        l = randomNumber(37, 14);
                    $(".what").text(item);
                    var m = $("<span class='temp'>" + item + "</span>").css({
                        top: a,
                        left: c,
                        color: "rgba(0,0,0," + randomNumber(7, 3) / 10 + ")",
                        fontSize: l + "px"
                    }).appendTo($("#temp_container"));
                    b = setTimeout(o, 60)
                }()
        }
    })

    $("#toggle span").click(function () {
        //添加selected
        $(this).addClass("selected").siblings().removeClass("selected");
        //添加色块
        $("#colorBlock").removeClass().addClass($(this).data("type"));
        human = $(this).data("type");
        Reset = 0;
    })

    //当前时间
    if (9 > Hours || Hours >= 23) {
        order = 0;
    } else if (13 > Hours) {
        order = 1;
    } else {
        order = 2;
    }
    SwitchMeal(order)

    // 为标题元素绑定点击事件
    $(".title").click(function () {
        order++;
        if (order > 2) {
            order = 0;
        }
        SwitchMeal(order);
    })

    $("#ribbon").click(function () {
        return alert(this.$(".title")), !1
    })

    $(window).resize(function () {
        E = $(window).width(), C = $(window).height()
    }).resize()

});

function randomNumber(t, e) {
    return t = t || 100, e = e || 0, Math.ceil(Math.random() * (t - e) + e)
}

function tease(t) {
    var e = $("<div class='comment'>" + t + "</div>");
    e.on("animationend webkitAnimationEnd", function (t) {
        $(this).remove()
    }).appendTo($("body"))
}

function SwitchMeal(time) {
    var meals = ["早上", "中午", "晚上"];
    if (!i) {
        $(".time").text(meals[time]);
        $(".what").text("神马");
        $(".punctuation").text("？");
        $(".title").addClass("shake");
        Reset = 0;

        var prompt = $(".tip").show();
        setTimeout(function () {
            prompt.remove()
        }, 4e3)

    }
}



