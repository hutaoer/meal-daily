/**
 * 本文件由 yarn content:sync 自动生成，请勿手动修改。
 * 数据源：content/（录入手册见 content/README.md）
 * 顺序由 content/manifest.json 的 pinned 决定，第一项即首页 Banner 第一张。
 */
import type { ContentItem, Dish, FeedItem } from '../../types/content'

export const userContents: ContentItem[] = [
  {
    "id": "202611121",
    "date": "2026.11.12",
    "mealType": "晚餐",
    "weekday": "周四",
    "title": "【录入示例】雨夜的一碗热汤面",
    "subtitle": "来自 content/ 目录 · 改 JSON 即可替换",
    "coverKey": "warm-orange",
    "coverImgUrl": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Fr1CT25crghkqWFYIlvrXY2pTsZz0eFYfOEzq6qkKHpIlH2GTQycfXyjyibG6XOnItylMn2vQ8HiasKAUuIvz9Yvj1QUib9YDoz2qyRibAGhFqA/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1",
    "totalMinutes": 25,
    "servings": 1,
    "tags": [
      "示例",
      "录入演示",
      "一人食"
    ],
    "note": [
      "下班时下了雨，进门只想吃一碗带汤的。烧水、下面、卧一个蛋，再抓一把小青菜丢进去，前后不到二十分钟。",
      "顺手拍了拍桌上的水汽。这条是用来演示静态数据录入的示例：它躺在本文件里，同步之后就成了首页 Banner 的第一张。"
    ],
    "dishIds": [
      "d011",
      "d008"
    ],
    "likeCount": 3
  },
  {
    "id": "202611141",
    "date": "2026.11.14",
    "mealType": "午餐",
    "weekday": "周六",
    "title": "周六午后的家常五样",
    "subtitle": "一荤一汤两小炒，刚好够两个人",
    "coverKey": "warm-orange",
    "coverImgUrl": "",
    "totalMinutes": 90,
    "servings": 2,
    "tags": [
      "午餐",
      "家常",
      "周末"
    ],
    "note": [
      "周六不用赶时间，慢悠悠做了一桌。回锅肉是主心骨，糖醋排骨哄孩子，外婆菜炒蛋和清炒西蓝花一荤一素搭着来，最后鹿茸菇排骨汤收尾。",
      "其实五样看着多，排骨焯水的时候就能顺手把别的备了，真正站在灶前也就四十分钟。"
    ],
    "dishIds": [
      "d012",
      "d013",
      "d014",
      "d015",
      "d016"
    ],
    "likeCount": 0
  }
]

export const userDishes: Dish[] = [
  {
    "id": "d011",
    "title": "青菜鸡蛋面",
    "description": "十分钟，一碗热乎的",
    "subtitle": "水开下面、卧个蛋，最省心也最熨帖的一碗",
    "coverKey": "wheat-gold",
    "coverImgUrl": "https://mmbiz.qpic.cn/mmbiz_jpg/Fr1CT25crghSKhT6PHIEib0OEL94pMlOMpJBzQicIsLcSb4VE2xPxRGQUEyht9GdpwceV7wgRGmghJib0bqHImamzDTfw2iaBIsrXGFQgW0qibps/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1",
    "images": [
      "wheat-gold",
      "sage",
      "oat"
    ],
    "category": "一人食",
    "tags": [
      "快手",
      "一人食",
      "汤面"
    ],
    "duration": 12,
    "difficulty": "简单",
    "servings": 1,
    "date": "2026.11.12",
    "story": [
      "这碗面没有菜谱可言，纯粹是冰箱里只剩一把青菜和两个鸡蛋时的产物。但越是这种时候，端上桌的那一碗越让人踏实。",
      "关键只有两处：汤底先用一点生抽和猪油（或香油）冲开，面条别煮太烂。蛋要最后卧，焖到蛋白刚好凝住、蛋黄还是软的。"
    ],
    "ingredients": [
      {
        "name": "细面条",
        "amount": "1 把"
      },
      {
        "name": "鸡蛋",
        "amount": "1 个"
      },
      {
        "name": "小青菜",
        "amount": "1 小把"
      },
      {
        "name": "生抽",
        "amount": "1 勺"
      },
      {
        "name": "香油 / 白胡椒",
        "amount": "少许"
      }
    ],
    "steps": [
      {
        "index": 1,
        "description": "碗里放生抽、香油、少许白胡椒，冲入半碗开水做汤底。"
      },
      {
        "index": 2,
        "description": "另起锅煮面，面条快熟时放入小青菜烫软，一起捞进汤底。"
      },
      {
        "index": 3,
        "description": "锅里卧一个鸡蛋，小火焖到蛋白凝固，连汤一起倒进碗中即可。"
      }
    ],
    "likeCount": 0
  },
  {
    "id": "d012",
    "title": "蒜苗回锅肉",
    "description": "肥而不腻，蒜香下饭",
    "subtitle": "五花肉煸出灯盏窝，蒜苗一烫就香",
    "coverKey": "chili",
    "coverImgUrl": "",
    "images": [
      "chili",
      "tomato-red",
      "oat"
    ],
    "category": "家常菜",
    "tags": [
      "下饭",
      "川味",
      "快手"
    ],
    "duration": 25,
    "difficulty": "中等",
    "servings": 2,
    "date": "2026.11.14",
    "story": [
      "回锅肉是冰箱里有点肥肉时最该做的菜。先把整块五花煮熟，放凉了切薄片，下锅才能煸出卷边的灯盏窝。",
      "蒜苗别炒太狠，断生就好，借一点肉里的油最香。"
    ],
    "ingredients": [
      {
        "name": "带皮五花肉",
        "amount": "300 g"
      },
      {
        "name": "青蒜苗",
        "amount": "1 把"
      },
      {
        "name": "郫县豆瓣酱",
        "amount": "1 勺"
      },
      {
        "name": "甜面酱",
        "amount": "半勺"
      },
      {
        "name": "生抽",
        "amount": "1 勺"
      },
      {
        "name": "姜片",
        "amount": "几片"
      }
    ],
    "steps": [
      {
        "index": 1,
        "description": "五花肉冷水下锅煮到筷子能扎透，捞出放凉切薄片。"
      },
      {
        "index": 2,
        "description": "中火少油下肉片，煸到卷边、吐出油，盛出多余的油。"
      },
      {
        "index": 3,
        "description": "下豆瓣酱和姜片炒出红油，放肉片、甜面酱、生抽翻炒。"
      },
      {
        "index": 4,
        "description": "最后下蒜苗段大火翻匀，蒜苗一塌就出锅。"
      }
    ],
    "likeCount": 0
  },
  {
    "id": "d013",
    "title": "外婆菜炒蛋",
    "description": "咸香开胃，米饭杀手",
    "subtitle": "腌菜炒蛋，一口就想起外婆的味道",
    "coverKey": "wheat-gold",
    "coverImgUrl": "",
    "images": [
      "wheat-gold",
      "oat",
      "sage"
    ],
    "category": "家常菜",
    "tags": [
      "下饭",
      "快手",
      "家常"
    ],
    "duration": 10,
    "difficulty": "简单",
    "servings": 2,
    "date": "2026.11.14",
    "story": [
      "外婆菜是湖南一带的腌菜，咸酸带点辣，和鸡蛋最配。懒得做菜的时候，一碟腌菜、两个蛋就能救场。",
      "蛋液里少放点盐，外婆菜本身够咸，重了会发苦。"
    ],
    "ingredients": [
      {
        "name": "外婆菜（腌菜）",
        "amount": "1 包"
      },
      {
        "name": "鸡蛋",
        "amount": "3 个"
      },
      {
        "name": "小葱",
        "amount": "1 根"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "index": 1,
        "description": "鸡蛋打散，加一点点盐；外婆菜挤掉多余水分切碎。"
      },
      {
        "index": 2,
        "description": "热油先炒蛋到刚凝固盛出。"
      },
      {
        "index": 3,
        "description": "底油下外婆菜炒香，倒回鸡蛋翻匀，撒葱花出锅。"
      }
    ],
    "likeCount": 0
  },
  {
    "id": "d014",
    "title": "糖醋排骨",
    "description": "酸甜挂汁，孩子最爱",
    "subtitle": "一勺糖一勺醋，裹住每块肋排",
    "coverKey": "terracotta",
    "coverImgUrl": "",
    "images": [
      "terracotta",
      "tomato-red",
      "wheat-gold"
    ],
    "category": "家常菜",
    "tags": [
      "宴客",
      "酸甜",
      "经典"
    ],
    "duration": 45,
    "difficulty": "中等",
    "servings": 2,
    "date": "2026.11.14",
    "story": [
      "糖醋汁的口诀是「一酒二酱三糖四醋五水」，不过家常做记住糖和醋差不多 1:1，先尝再收汁最稳。",
      "排骨先煮去血沫再煎到金黄，挂汁才亮。"
    ],
    "ingredients": [
      {
        "name": "猪肋排",
        "amount": "500 g"
      },
      {
        "name": "冰糖",
        "amount": "30 g"
      },
      {
        "name": "香醋",
        "amount": "2 勺"
      },
      {
        "name": "生抽",
        "amount": "1 勺"
      },
      {
        "name": "料酒",
        "amount": "1 勺"
      },
      {
        "name": "姜",
        "amount": "2 片"
      }
    ],
    "steps": [
      {
        "index": 1,
        "description": "排骨冷水加料酒焯水，捞出冲净。"
      },
      {
        "index": 2,
        "description": "锅中少油下冰糖小火炒到枣红色，下排骨翻裹糖色。"
      },
      {
        "index": 3,
        "description": "加生抽、醋、姜片和水没过排骨，大火烧开转小火焖 30 分钟。"
      },
      {
        "index": 4,
        "description": "开大火收汁到浓稠挂亮，出锅前再淋半勺醋提香。"
      }
    ],
    "likeCount": 0
  },
  {
    "id": "d015",
    "title": "清炒西蓝花",
    "description": "翠绿爽口，解腻必备",
    "subtitle": "焯水再过油，颜色才绿得发亮",
    "coverKey": "leaf-green",
    "coverImgUrl": "",
    "images": [
      "leaf-green",
      "sage",
      "oat"
    ],
    "category": "清爽素菜",
    "tags": [
      "少油",
      "快手",
      "解腻"
    ],
    "duration": 8,
    "difficulty": "简单",
    "servings": 2,
    "date": "2026.11.14",
    "story": [
      "大鱼大肉一桌，总得有个清爽的。西蓝花过一遍盐水再炒，颜色能绿一整餐。",
      "别炒太久，塌了就出水还发黄。"
    ],
    "ingredients": [
      {
        "name": "西蓝花",
        "amount": "1 颗"
      },
      {
        "name": "蒜",
        "amount": "2 瓣"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "油",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "index": 1,
        "description": "西蓝花掰小朵，盐水泡十分钟冲洗干净。"
      },
      {
        "index": 2,
        "description": "沸水加几滴油和盐，焯 30 秒捞出过凉。"
      },
      {
        "index": 3,
        "description": "热油爆香蒜片，下西蓝花大火快炒，加盐翻匀出锅。"
      }
    ],
    "likeCount": 0
  },
  {
    "id": "d016",
    "title": "鹿茸菇排骨汤",
    "description": "鲜掉眉毛的一锅",
    "subtitle": "鹿茸菇的鲜，全炖进排骨汤里",
    "coverKey": "oat",
    "coverImgUrl": "",
    "images": [
      "oat",
      "sage",
      "wheat-gold"
    ],
    "category": "汤羹",
    "tags": [
      "煲汤",
      "鲜味",
      "家常"
    ],
    "duration": 60,
    "difficulty": "简单",
    "servings": 3,
    "date": "2026.11.14",
    "story": [
      "鹿茸菇也叫荷叶菇，菌柄细长、口感脆嫩，和排骨是绝配。一锅下去，汤头又鲜又甜。",
      "排骨先飞水，汤才清；菌菇别太早放，最后半小时下锅最鲜。"
    ],
    "ingredients": [
      {
        "name": "猪肋排",
        "amount": "400 g"
      },
      {
        "name": "鹿茸菇",
        "amount": "1 把"
      },
      {
        "name": "姜",
        "amount": "2 片"
      },
      {
        "name": "盐",
        "amount": "适量"
      },
      {
        "name": "枸杞",
        "amount": "少许（可选）"
      }
    ],
    "steps": [
      {
        "index": 1,
        "description": "排骨冷水下锅焯去血沫，温水冲净。"
      },
      {
        "index": 2,
        "description": "排骨、姜片入锅加足量水，大火烧开转小火炖 40 分钟。"
      },
      {
        "index": 3,
        "description": "鹿茸菇洗净撕小，下锅再炖 20 分钟。"
      },
      {
        "index": 4,
        "description": "出锅前加盐，撒几粒枸杞即可。"
      }
    ],
    "likeCount": 0
  },
  {
    "id": "d017",
    "title": "肥肠芋儿鸡",
    "description": "软糯入味，连汤都想泡饭",
    "subtitle": "肥肠耙软、芋儿一抿就化，鸡肉吸饱了红汤",
    "coverKey": "terracotta",
    "coverImgUrl": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Fr1CT25crgjU2tQoyHUxVUhYIrol3mffqW97fjoH03WI124RGbibK9qzb69TJtEx9uB7Lt735VEumicqn16Wh9O18MPT4mzFYC8BjrCxTvxfs/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1",
    "images": [
      "terracotta",
      "chili",
      "oat"
    ],
    "category": "下饭菜",
    "tags": [
      "家常",
      "下饭",
      "川味"
    ],
    "duration": 90,
    "difficulty": "中等",
    "servings": 2,
    "date": "2026.11.15",
    "story": [
      "肥肠芋儿鸡是重庆那边的家常菜，一盆端上来还咕嘟着，肥肠耙软、芋儿一抿就化，鸡肉吸饱了红汤，连汤汁都想拌两碗饭。",
      "最费功夫的是洗肥肠：里外都要用面粉和醋反复抓，再焯水去味，不然一锅都毁了。芋儿选小个的芋艿，烧到筷子一扎就透，粉糯还不碎。"
    ],
    "ingredients": [
      {
        "name": "猪肥肠",
        "amount": "400 g"
      },
      {
        "name": "小芋儿（芋艿）",
        "amount": "300 g"
      },
      {
        "name": "鸡腿肉",
        "amount": "300 g"
      },
      {
        "name": "郫县豆瓣酱",
        "amount": "1 勺"
      },
      {
        "name": "姜 / 蒜",
        "amount": "适量"
      },
      {
        "name": "花椒 / 干辣椒",
        "amount": "少许"
      },
      {
        "name": "生抽 / 老抽",
        "amount": "各 1 勺"
      },
      {
        "name": "料酒",
        "amount": "1 勺"
      },
      {
        "name": "盐 / 糖",
        "amount": "适量"
      },
      {
        "name": "面粉 + 醋（洗肥肠用）",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "index": 1,
        "description": "肥肠翻面，用面粉和醋反复抓洗去黏液，清水冲净；冷水加料酒焯水，捞出切滚刀块。"
      },
      {
        "index": 2,
        "description": "鸡腿肉切块焯水；芋儿去皮切滚刀块，泡清水防变色。"
      },
      {
        "index": 3,
        "description": "热油下姜蒜、花椒、干辣椒爆香，加豆瓣酱炒出红油。"
      },
      {
        "index": 4,
        "description": "下肥肠和鸡块翻炒上色，加生抽、老抽、糖和没过食材的热水，大火烧开转小火烧 30 分钟。"
      },
      {
        "index": 5,
        "description": "放芋儿继续烧 20 分钟到软糯，加盐调味，大火略收汁即可。"
      }
    ],
    "likeCount": 0
  },
  {
    "id": "d018",
    "title": "泡姜牛肉丝",
    "description": "酸辣下饭，牛肉丝滑嫩",
    "subtitle": "泡姜泡椒一爆，整盘都是下饭的味道",
    "coverKey": "chili",
    "coverImgUrl": "https://mmbiz.qpic.cn/mmbiz_jpg/Fr1CT25crgjzTVdPQnUGelyM9C78fwaUGgsJ77G4JhhqtvyLdMx6Cz05VBB1BBC7ibpib7YCt22MxMkOWnqdVWuicV2x34my6MkT8ar2GGZ1Ww/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1",
    "images": [
      "chili",
      "tomato-red",
      "oat"
    ],
    "category": "下饭菜",
    "tags": [
      "家常",
      "下饭",
      "川味"
    ],
    "duration": 20,
    "difficulty": "简单",
    "servings": 2,
    "date": "2026.11.15",
    "story": [
      "泡姜牛肉丝是最费米饭的一道小炒。泡姜的酸香和泡椒的辣一钻进油锅，整盘都是下饭的味道，牛肉丝要嫩，全靠逆纹切和封浆。",
      "牛肉丝先滑油再回锅，别在锅里恋战，老了就柴。这口味道重在一个「快」字：料头爆香、肉一变色就出锅，酸辣鲜才出得来。"
    ],
    "ingredients": [
      {
        "name": "牛里脊",
        "amount": "250 g"
      },
      {
        "name": "泡姜",
        "amount": "1 块"
      },
      {
        "name": "泡椒",
        "amount": "3 根"
      },
      {
        "name": "芹菜（或蒜苗）",
        "amount": "2 根"
      },
      {
        "name": "蒜",
        "amount": "2 瓣"
      },
      {
        "name": "生抽 / 料酒",
        "amount": "各 1 勺（腌肉）"
      },
      {
        "name": "淀粉",
        "amount": "1 勺（腌肉）"
      },
      {
        "name": "食用油",
        "amount": "适量"
      },
      {
        "name": "盐 / 糖",
        "amount": "少许"
      }
    ],
    "steps": [
      {
        "index": 1,
        "description": "牛肉逆纹切细丝，加生抽、料酒、淀粉抓匀，再淋一勺油封浆，腌 10 分钟。"
      },
      {
        "index": 2,
        "description": "泡姜、泡椒切丝，芹菜切段，蒜切片。"
      },
      {
        "index": 3,
        "description": "热锅宽油，下牛肉丝大火滑散到刚变色，立刻盛出。"
      },
      {
        "index": 4,
        "description": "底油爆香泡姜、泡椒、蒜片，下芹菜炒断生，倒回牛肉丝，加盐、糖翻匀出锅。"
      }
    ],
    "likeCount": 0
  },
  {
    "id": "d019",
    "title": "姜母鸭",
    "description": "姜香浓郁，暖身又下饭",
    "subtitle": "麻油老姜慢煸，鸭肉软嫩，天冷最馋这一锅",
    "coverKey": "terracotta",
    "coverImgUrl": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Fr1CT25crggqopCDXaQuezCMiakUIia4qsVTI9nNwQRPw7HBcI7Q39wdicDrrkN6CU3GgYrPubBGnWaMobicgGIeKH5zic9g3GNwzfMPoq321y40/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1",
    "images": [
      "terracotta",
      "chili",
      "oat"
    ],
    "category": "下饭菜",
    "tags": [
      "家常",
      "下饭",
      "姜香"
    ],
    "duration": 90,
    "difficulty": "中等",
    "servings": 2,
    "date": "2026.11.15",
    "story": [
      "姜母鸭是闽南和台湾一带的温补名菜，一锅端上来咕嘟咕嘟冒着泡，麻油和老姜的香气先把人勾住。天冷的时候炖上一锅，连汤带肉吃下去，浑身都暖了。",
      "这道菜姜要多、煸要透：老姜切厚片，用小火慢煸到边缘微卷、香气逼出来，鸭肉才不腥。全程用米酒和水同烧，不另外加清水，味道才醇厚。"
    ],
    "ingredients": [
      {
        "name": "鸭腿 / 半番鸭",
        "amount": "半只（约 600 g）"
      },
      {
        "name": "老姜",
        "amount": "1 大块"
      },
      {
        "name": "黑芝麻油",
        "amount": "2 勺"
      },
      {
        "name": "米酒",
        "amount": "300 ml"
      },
      {
        "name": "生抽 / 老抽",
        "amount": "各 1 勺"
      },
      {
        "name": "冰糖",
        "amount": "1 勺"
      },
      {
        "name": "枸杞",
        "amount": "少许（可选）"
      },
      {
        "name": "盐",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "index": 1,
        "description": "鸭子剁块，冷水下锅焯去血沫，捞出冲净沥干；老姜切厚片。"
      },
      {
        "index": 2,
        "description": "砂锅倒黑芝麻油，小火下姜片慢煸到边缘微卷、香气出来。"
      },
      {
        "index": 3,
        "description": "下鸭块中火翻炒到表皮收紧微黄，加生抽、老抽、冰糖翻匀上色。"
      },
      {
        "index": 4,
        "description": "倒入米酒和少许热水没过鸭块，大火烧开转小火加盖炖 60 分钟。"
      },
      {
        "index": 5,
        "description": "鸭肉软烂后加盐调味，撒枸杞，开大火略收汁即可。"
      }
    ],
    "likeCount": 0
  }
]

export const userFeed: FeedItem[] = [
  {
    "id": "f-u-202611121",
    "type": "meal",
    "refId": "202611121",
    "title": "【录入示例】雨夜的一碗热汤面",
    "subtitle": "来自 content/ 目录 · 改 JSON 即可替换",
    "coverKey": "warm-orange",
    "date": "2026.11.12",
    "meta": "11.12 · 晚餐 · 2 道菜",
    "tags": [
      "录入示例",
      "一人食"
    ],
    "coverHeight": 340,
    "coverImgUrl": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Fr1CT25crghkqWFYIlvrXY2pTsZz0eFYfOEzq6qkKHpIlH2GTQycfXyjyibG6XOnItylMn2vQ8HiasKAUuIvz9Yvj1QUib9YDoz2qyRibAGhFqA/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1"
  },
  {
    "id": "f-u-d019",
    "type": "dish",
    "refId": "d019",
    "title": "姜母鸭",
    "subtitle": "麻油老姜慢煸，鸭肉软嫩，天冷最馋这一锅",
    "coverKey": "terracotta",
    "date": "2026.11.15",
    "meta": "11.15 · 90 分钟 · 中等",
    "tags": [
      "家常",
      "下饭"
    ],
    "coverHeight": 320,
    "coverImgUrl": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Fr1CT25crggqopCDXaQuezCMiakUIia4qsVTI9nNwQRPw7HBcI7Q39wdicDrrkN6CU3GgYrPubBGnWaMobicgGIeKH5zic9g3GNwzfMPoq321y40/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1"
  },
  {
    "id": "f-u-d018",
    "type": "dish",
    "refId": "d018",
    "title": "泡姜牛肉丝",
    "subtitle": "泡姜泡椒一爆，整盘都是下饭的味道",
    "coverKey": "chili",
    "date": "2026.11.15",
    "meta": "11.15 · 20 分钟 · 简单",
    "tags": [
      "家常",
      "下饭"
    ],
    "coverHeight": 300,
    "coverImgUrl": "https://mmbiz.qpic.cn/mmbiz_jpg/Fr1CT25crgjzTVdPQnUGelyM9C78fwaUGgsJ77G4JhhqtvyLdMx6Cz05VBB1BBC7ibpib7YCt22MxMkOWnqdVWuicV2x34my6MkT8ar2GGZ1Ww/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1"
  },
  {
    "id": "f-u-d017",
    "type": "dish",
    "refId": "d017",
    "title": "肥肠芋儿鸡",
    "subtitle": "肥肠耙软、芋儿一抿就化，鸡肉吸饱了红汤",
    "coverKey": "terracotta",
    "date": "2026.11.15",
    "meta": "11.15 · 90 分钟 · 中等",
    "tags": [
      "家常",
      "下饭"
    ],
    "coverHeight": 320,
    "coverImgUrl": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Fr1CT25crgjU2tQoyHUxVUhYIrol3mffqW97fjoH03WI124RGbibK9qzb69TJtEx9uB7Lt735VEumicqn16Wh9O18MPT4mzFYC8BjrCxTvxfs/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1"
  },
  {
    "id": "f-u-d016",
    "type": "dish",
    "refId": "d016",
    "title": "鹿茸菇排骨汤",
    "subtitle": "鹿茸菇的鲜，全炖进排骨汤里",
    "coverKey": "oat",
    "date": "2026.11.14",
    "meta": "11.14 · 60 分钟 · 简单",
    "tags": [
      "煲汤",
      "鲜味"
    ],
    "coverHeight": 320,
    "coverImgUrl": ""
  },
  {
    "id": "f-u-d015",
    "type": "dish",
    "refId": "d015",
    "title": "清炒西蓝花",
    "subtitle": "焯水再过油，颜色才绿得发亮",
    "coverKey": "leaf-green",
    "date": "2026.11.14",
    "meta": "11.14 · 8 分钟 · 简单",
    "tags": [
      "少油",
      "快手"
    ],
    "coverHeight": 300,
    "coverImgUrl": ""
  },
  {
    "id": "f-u-d014",
    "type": "dish",
    "refId": "d014",
    "title": "糖醋排骨",
    "subtitle": "一勺糖一勺醋，裹住每块肋排",
    "coverKey": "terracotta",
    "date": "2026.11.14",
    "meta": "11.14 · 45 分钟 · 中等",
    "tags": [
      "宴客",
      "酸甜"
    ],
    "coverHeight": 320,
    "coverImgUrl": ""
  },
  {
    "id": "f-u-d013",
    "type": "dish",
    "refId": "d013",
    "title": "外婆菜炒蛋",
    "subtitle": "腌菜炒蛋，一口就想起外婆的味道",
    "coverKey": "wheat-gold",
    "date": "2026.11.14",
    "meta": "11.14 · 10 分钟 · 简单",
    "tags": [
      "下饭",
      "快手"
    ],
    "coverHeight": 300,
    "coverImgUrl": ""
  },
  {
    "id": "f-u-d012",
    "type": "dish",
    "refId": "d012",
    "title": "蒜苗回锅肉",
    "subtitle": "五花肉煸出灯盏窝，蒜苗一烫就香",
    "coverKey": "chili",
    "date": "2026.11.14",
    "meta": "11.14 · 25 分钟 · 中等",
    "tags": [
      "下饭",
      "川味"
    ],
    "coverHeight": 320,
    "coverImgUrl": ""
  },
  {
    "id": "f-u-202611141",
    "type": "meal",
    "refId": "202611141",
    "title": "周六午后的家常五样",
    "subtitle": "一荤一汤两小炒，刚好够两个人",
    "coverKey": "warm-orange",
    "date": "2026.11.14",
    "meta": "11.14 · 午餐 · 5 道菜",
    "tags": [
      "午餐",
      "家常"
    ],
    "coverHeight": 340,
    "coverImgUrl": ""
  },
  {
    "id": "f-u-d011",
    "type": "dish",
    "refId": "d011",
    "title": "青菜鸡蛋面",
    "subtitle": "水开下面、卧个蛋，最省心也最熨帖的一碗",
    "coverKey": "wheat-gold",
    "date": "2026.11.12",
    "meta": "11.12 · 12 分钟 · 简单",
    "tags": [
      "录入示例",
      "一人食"
    ],
    "coverHeight": 300,
    "coverImgUrl": "https://mmbiz.qpic.cn/mmbiz_jpg/Fr1CT25crghSKhT6PHIEib0OEL94pMlOMpJBzQicIsLcSb4VE2xPxRGQUEyht9GdpwceV7wgRGmghJib0bqHImamzDTfw2iaBIsrXGFQgW0qibps/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1"
  }
]
