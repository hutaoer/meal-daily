/**
 * 本文件由 yarn content:sync 自动生成，请勿手动修改。
 * 数据源：content/（录入手册见 content/README.md）
 * 顺序由 content/manifest.json 的 pinned 决定，第一项即首页 Banner 第一张。
 */
import type { ContentItem, Dish, FeedItem } from '../../types/content'

export const userContents: ContentItem[] = [
  {
    "id": "202606261",
    "date": "2026.06.26",
    "mealType": "晚餐",
    "weekday": "周六",
    "title": "父亲来杭州了，接风洗尘，简单一餐",
    "subtitle": "慢一点的周六，做了三道想吃很久的家常菜",
    "coverImgUrl": "https://mmbiz.qpic.cn/mmbiz_jpg/Fr1CT25crgj3WaG0hlNQGqibbUZZ2x02zxeh0icHBvB56njzd9iaic5qBumtfKTl1yG3icSZtdxS7eKxRNkoOfzlSMT1XCo25laxWeP3b32ic8baE/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1",
    "coverKey": "terracotta",
    "totalMinutes": 60,
    "servings": 2,
    "tags": [
      "家常",
      "川菜"
    ],
    "note": [
      "父亲来杭州了，老婆准备了一桌好菜。晚上陪父亲喝一杯。",
      "家常菜：酸菜鱼、凉拌黄瓜、魔芋烧鸡、春笋炖五花肉"
    ],
    "dishIds": [
      "d032",
      "d035",
      "d033",
      "d034"
    ],
    "likeCount": 12
  },
  {
    "id": "202611121",
    "date": "2026.11.12",
    "mealType": "晚餐",
    "weekday": "周四",
    "title": "雨夜的一碗热汤面",
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
    "date": "2026.07.20",
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
    "date": "2026.09.16",
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
    "date": "2026.10.19",
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
    "date": "2026.07.07",
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
    "date": "2026.10.31",
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
    "date": "2026.10.30",
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
    "date": "2026.10.08",
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
    "date": "2026.11.12",
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
    "date": "2026.06.01",
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
  },
  {
    "id": "d020",
    "title": "小炒鸡",
    "description": "干香下饭，越嚼越香",
    "subtitle": "剁小快炒，辣椒干香，一锅米饭见了底",
    "coverKey": "chili",
    "coverImgUrl": "https://mmbiz.qpic.cn/mmbiz_jpg/Fr1CT25crgjrciaaLO0Zl6LiblCicn9Ph3icehx1icpqmWabMrWwVXUBv0HfPZDXvwV68JLNWxDdDZff0iccicwmiahGo0BGzr1gEmxcVWtv3JIsmxU/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1",
    "images": [
      "chili",
      "terracotta",
      "oat"
    ],
    "category": "下饭菜",
    "tags": [
      "家常",
      "下饭",
      "湘菜"
    ],
    "duration": 25,
    "difficulty": "简单",
    "servings": 2,
    "date": "2026.07.28",
    "story": [
      "小炒鸡是湖南人的家常杀手锏，鸡块剁得小小的，和辣椒一起大火快炒，干香扑鼻，端上桌没几分钟就能把一锅米饭扫光。",
      "好吃的关键在一个「小」和一个「快」：鸡剁成指尖大小才进味，锅要烧到冒烟再下油，鸡块炒到微微发焦最香。辣椒用青线椒，辣得清爽不呛喉。"
    ],
    "ingredients": [
      {
        "name": "三黄鸡 / 鸡腿肉",
        "amount": "半只（约 500 g）"
      },
      {
        "name": "青线椒",
        "amount": "6 根"
      },
      {
        "name": "小米辣（可选）",
        "amount": "2 根"
      },
      {
        "name": "姜 / 蒜",
        "amount": "适量"
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
        "name": "食用油",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "index": 1,
        "description": "鸡肉剁成指尖大小的块，加生抽、料酒抓匀腌 10 分钟；青线椒、小米辣切圈，姜蒜切末。"
      },
      {
        "index": 2,
        "description": "锅烧到微微冒烟，倒油下鸡块大火快炒，炒到鸡块收紧、边缘微焦，盛出。"
      },
      {
        "index": 3,
        "description": "底油爆香姜蒜末，下青线椒、小米辣翻炒出辣味。"
      },
      {
        "index": 4,
        "description": "倒回鸡块，加老抽、糖、盐大火翻匀，炒到酱汁收干裹满鸡块即可出锅。"
      }
    ],
    "likeCount": 0
  },
  {
    "id": "d021",
    "title": "烤鱼",
    "description": "外焦里嫩，越煮越入味",
    "subtitle": "腌好的鱼先烤后炖，配菜吸满汤汁，一盆端上桌",
    "coverKey": "chili",
    "coverImgUrl": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Fr1CT25crgia2r9Bh2oTOP8QVwiajScQQMBuA05jZQGA0QrIMtpsjePZiciaibjEdEzGaxTvT4keCXJCfdlUfRMKFaxOs9LRup4q9n2XjsHuUMTw/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1",
    "images": [
      "chili",
      "terracotta",
      "oat"
    ],
    "category": "下饭菜",
    "tags": [
      "硬菜",
      "下饭",
      "聚餐"
    ],
    "duration": 40,
    "difficulty": "中等",
    "servings": 3,
    "date": "2026.07.03",
    "story": [
      "烤鱼的灵魂在最后那十几分钟的咕嘟。鱼先腌透、烤到表皮发脆，再连汤带配菜倒进烤盘，小火慢炖，汤汁收浓了就一锅端上桌。",
      "小技巧：腌鱼时用一点料酒和盐抹匀，肚子里塞姜片去腥；烤之前把鱼擦干，表皮才会脆。配菜选吸汤的——魔芋、豆皮、藕片，最后放进去煮两分钟最入味。"
    ],
    "ingredients": [
      {
        "name": "草鱼 / 鲈鱼",
        "amount": "1 条（约 750 g）"
      },
      {
        "name": "洋葱",
        "amount": "半个"
      },
      {
        "name": "藕片 / 魔芋 / 豆皮",
        "amount": "各 1 小盘"
      },
      {
        "name": "姜 / 蒜 / 干辣椒",
        "amount": "适量"
      },
      {
        "name": "豆瓣酱",
        "amount": "1 勺"
      },
      {
        "name": "生抽 / 料酒",
        "amount": "各 1 勺"
      },
      {
        "name": "盐 / 糖",
        "amount": "适量"
      },
      {
        "name": "食用油",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "index": 1,
        "description": "鱼处理干净，两面划刀，用料酒、盐抹匀，肚子塞姜片，腌 20 分钟。"
      },
      {
        "index": 2,
        "description": "烤箱 220℃ 预热，鱼擦干刷油，烤 15 分钟至表皮微焦。"
      },
      {
        "index": 3,
        "description": "炒锅爆香姜蒜、干辣椒，下豆瓣酱炒出红油，加生抽、糖和一碗水煮开。"
      },
      {
        "index": 4,
        "description": "烤盘里铺洋葱和配菜，放上烤鱼，倒入汤汁，烤箱 200℃ 再烤 10 分钟即可。"
      }
    ],
    "likeCount": 0
  },
  {
    "id": "d022",
    "title": "白灼大虾、鲍鱼、秋葵",
    "description": "一烫即熟，鲜得掉眉毛",
    "subtitle": "三样食材分别白灼，淋一勺豉油，吃的就是本味",
    "coverKey": "sage",
    "coverImgUrl": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Fr1CT25crgjtQHzYFow5v9218IR6nsU5orqibWKICvU3wBFDdxUd1N7zicuFMhqPqKp11WoiaVUWibFhDHaicfkT8IlibJibS2bdIFuOdqW5Zs4wE0/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1",
    "images": [
      "sage",
      "leaf-green",
      "oat"
    ],
    "category": "凉菜",
    "tags": [
      "海鲜",
      "快手",
      "清淡"
    ],
    "duration": 15,
    "difficulty": "简单",
    "servings": 2,
    "date": "2026.10.15",
    "story": [
      "白灼吃的就是一个「鲜」字。水烧开，三样食材按易熟程度依次下锅，烫到刚好就捞，淋一勺热油豉油，原味全都锁住了。",
      "小技巧：大虾变红卷曲就熟，别煮老；鲍鱼片薄片烫 10 秒最嫩；秋葵整根下锅，烫好过凉水再切，黏液不流失。"
    ],
    "ingredients": [
      {
        "name": "大虾",
        "amount": "半斤"
      },
      {
        "name": "鲍鱼",
        "amount": "4 只"
      },
      {
        "name": "秋葵",
        "amount": "6 根"
      },
      {
        "name": "姜 / 葱",
        "amount": "适量"
      },
      {
        "name": "蒸鱼豉油",
        "amount": "2 勺"
      },
      {
        "name": "食用油",
        "amount": "1 勺"
      },
      {
        "name": "料酒",
        "amount": "1 勺"
      }
    ],
    "steps": [
      {
        "index": 1,
        "description": "大虾剪须开背去虾线，鲍鱼去壳片薄片，秋葵洗净整根备用。"
      },
      {
        "index": 2,
        "description": "锅里烧水，加姜片和料酒，水开后先下秋葵烫 2 分钟，捞出过凉。"
      },
      {
        "index": 3,
        "description": "同一锅水下大虾，烫到变红卷曲（约 1 分钟）捞出；最后下鲍鱼片烫 10 秒捞出。"
      },
      {
        "index": 4,
        "description": "三样摆盘，淋蒸鱼豉油，浇一勺烧热的油激香即可。"
      }
    ],
    "likeCount": 0
  },
  {
    "id": "d023",
    "title": "牛肉鱼丸锅仔",
    "description": "咕嘟咕嘟，一锅暖到胃里",
    "subtitle": "牛肉先炖软，下鱼丸和蔬菜，小火慢滚越煮越鲜",
    "coverKey": "warm-orange",
    "coverImgUrl": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Fr1CT25crghkqWFYIlvrXY2pTsZz0eFYfOEzq6qkKHpIlH2GTQycfXyjyibG6XOnItylMn2vQ8HiasKAUuIvz9Yvj1QUib9YDoz2qyRibAGhFqA/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1",
    "images": [
      "warm-orange",
      "terracotta",
      "oat"
    ],
    "category": "汤羹",
    "tags": [
      "汤羹",
      "暖胃",
      "家常"
    ],
    "duration": 35,
    "difficulty": "中等",
    "servings": 2,
    "date": "2026.07.17",
    "story": [
      "天冷的时候就爱这种咕嘟咕嘟的锅仔。牛肉先炖到软烂，再下鱼丸和青菜，小火慢慢滚着，端上桌还冒着泡，连汤带肉吃一碗，整个人都暖了。",
      "小技巧：牛肉用牛腩，冷水下锅焯去血沫再炖，汤才清；鱼丸后放，煮到浮起就好，煮久了会老。最后丢一把青菜，烫软就关火。"
    ],
    "ingredients": [
      {
        "name": "牛腩",
        "amount": "300 g"
      },
      {
        "name": "鱼丸",
        "amount": "8 个"
      },
      {
        "name": "青菜 / 娃娃菜",
        "amount": "1 把"
      },
      {
        "name": "姜 / 葱",
        "amount": "适量"
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
        "name": "盐",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "index": 1,
        "description": "牛腩切块，冷水下锅加姜片、料酒焯水，捞出洗净。"
      },
      {
        "index": 2,
        "description": "牛肉放回锅里，加没过的水、生抽、老抽、姜片，大火烧开转小火炖 25 分钟至软烂。"
      },
      {
        "index": 3,
        "description": "下鱼丸，煮到浮起（约 3 分钟），加盐调味。"
      },
      {
        "index": 4,
        "description": "放青菜烫软，连汤一起倒进锅仔，小火保温上桌即可。"
      }
    ],
    "likeCount": 0
  },
  {
    "id": "d024",
    "title": "烤鸡翅",
    "description": "皮脆肉嫩，啃着停不下来",
    "subtitle": "腌够味再进烤箱，蜜汁焦香，一盘端上桌秒光",
    "coverKey": "wheat-gold",
    "coverImgUrl": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Fr1CT25crggT4k3bVzXibJm7DasndN0DoO7eM3osibVRyhW6hAu8cGRszcYavyLo8hmdtptulKWRhibNZL06T3KmUUPv3E9n4qBDLnzFhbAibds/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1",
    "images": [
      "wheat-gold",
      "terracotta",
      "oat"
    ],
    "category": "下饭菜",
    "tags": [
      "家常",
      "烤箱",
      "下酒"
    ],
    "duration": 35,
    "difficulty": "简单",
    "servings": 2,
    "date": "2026.07.16",
    "story": [
      "烤鸡翅是烤箱入门的第一道菜，几乎不会失败。鸡翅腌透了进烤箱，中途刷一层蜂蜜，烤到表皮焦黄起皱，咬一口汁还锁在里面。",
      "小技巧：腌之前用牙签在鸡翅上扎几下更入味，腌至少 20 分钟；烤箱先高温 200℃ 烤 15 分钟，再转 180℃ 刷蜜烤 5 分钟上色，表皮才会脆而不糊。"
    ],
    "ingredients": [
      {
        "name": "鸡翅中",
        "amount": "10 个"
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
        "name": "蜂蜜",
        "amount": "1 勺"
      },
      {
        "name": "姜 / 蒜",
        "amount": "适量"
      },
      {
        "name": "盐 / 黑胡椒",
        "amount": "少许"
      },
      {
        "name": "食用油",
        "amount": "少许"
      }
    ],
    "steps": [
      {
        "index": 1,
        "description": "鸡翅洗净两面划刀，用牙签扎几下，加生抽、老抽、料酒、姜蒜、盐、黑胡椒抓匀，腌 20 分钟以上。"
      },
      {
        "index": 2,
        "description": "烤箱 200℃ 预热，鸡翅刷薄油摆进烤盘，烤 15 分钟。"
      },
      {
        "index": 3,
        "description": "取出刷一层蜂蜜，翻面再刷，转 180℃ 烤 5 分钟至上色。"
      },
      {
        "index": 4,
        "description": "再翻回正面烤 2 分钟至表皮焦脆，出炉撒少许熟芝麻即可。"
      }
    ],
    "likeCount": 0
  },
  {
    "id": "d025",
    "title": "芦笋炒牛肉",
    "description": "脆嫩爽口，牛肉滑嫩",
    "subtitle": "牛肉逆纹切丝封浆，芦笋快炒，翠绿配红亮",
    "coverKey": "leaf-green",
    "coverImgUrl": "https://mmbiz.qpic.cn/mmbiz_jpg/Fr1CT25crgjj6rNHibHJOTmELAHAA23PJaIAbN1NNlaDBr9CZPXCLm0km8MVo20q9usQJ44FZJg9EA8TFTmLaiaymXjfSDK5dh9VnwnRO3GG8/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1",
    "images": [
      "leaf-green",
      "sage",
      "oat"
    ],
    "category": "下饭菜",
    "tags": [
      "家常",
      "快手",
      "清淡"
    ],
    "duration": 15,
    "difficulty": "简单",
    "servings": 2,
    "date": "2026.11.09",
    "story": [
      "芦笋炒牛肉讲究一个「快」字。牛肉逆纹切丝、封浆滑嫩，芦笋焯水去涩，大火翻匀就出锅，脆的脆、嫩的嫩。",
      "小技巧：牛肉丝用生抽、淀粉、少许油抓匀封浆，炒出来才不老；芦笋先在开水里烫 30 秒过凉，颜色更绿也更脆，下锅翻炒几下即可。"
    ],
    "ingredients": [
      {
        "name": "牛里脊 / 牛腿肉",
        "amount": "200 g"
      },
      {
        "name": "芦笋",
        "amount": "1 把"
      },
      {
        "name": "蒜",
        "amount": "3 瓣"
      },
      {
        "name": "生抽",
        "amount": "1 勺"
      },
      {
        "name": "淀粉",
        "amount": "1 勺"
      },
      {
        "name": "盐 / 糖",
        "amount": "少许"
      },
      {
        "name": "食用油",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "index": 1,
        "description": "牛肉逆纹切丝，加生抽、淀粉、少许油抓匀封浆，腌 10 分钟；芦笋去老根切斜段。"
      },
      {
        "index": 2,
        "description": "烧一锅开水，芦笋烫 30 秒捞出过凉，沥干备用。"
      },
      {
        "index": 3,
        "description": "热锅凉油下牛肉丝大火滑散，炒到变色立即盛出。"
      },
      {
        "index": 4,
        "description": "底油爆香蒜末，下芦笋翻炒，倒回牛肉丝，加盐、糖大火翻匀即可出锅。"
      }
    ],
    "likeCount": 0
  },
  {
    "id": "d026",
    "title": "猪肝瘦肉汤",
    "description": "鲜嫩不腥，一碗暖身",
    "subtitle": "猪肝滑嫩、瘦肉清甜，姜丝去腥，滚一滚就好",
    "coverKey": "warm-orange",
    "coverImgUrl": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Fr1CT25crgjyKg0CC0uXYhcwnJMwIeRoy57NonJd2dBopUcY52n3f2hbg0qAKk5icJ5WPWHJ9Rq4icZAazvMTO1lcbrPngYRFEJU4jMjS1Hico/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1",
    "images": [
      "warm-orange",
      "oat",
      "sage"
    ],
    "category": "汤羹",
    "tags": [
      "汤羹",
      "快手",
      "清淡"
    ],
    "duration": 15,
    "difficulty": "简单",
    "servings": 2,
    "date": "2026.08.02",
    "story": [
      "猪肝瘦肉汤是最快手的一道暖汤，十来分钟就能端上桌。猪肝处理得干净就不腥，切薄片用淀粉抓一抓，滚水里一烫立刻捞，嫩得入口即化。",
      "小技巧：猪肝要多换几次水泡出血水，下锅前用料酒、淀粉抓匀封浆；汤里多放姜丝和白胡椒去腥，出锅淋几滴香油，撒葱花最香。"
    ],
    "ingredients": [
      {
        "name": "猪肝",
        "amount": "150 g"
      },
      {
        "name": "瘦肉",
        "amount": "100 g"
      },
      {
        "name": "姜",
        "amount": "1 小块"
      },
      {
        "name": "葱花",
        "amount": "少许"
      },
      {
        "name": "料酒 / 淀粉",
        "amount": "各 1 勺"
      },
      {
        "name": "盐 / 白胡椒",
        "amount": "少许"
      },
      {
        "name": "香油",
        "amount": "几滴"
      }
    ],
    "steps": [
      {
        "index": 1,
        "description": "猪肝切薄片，多换几次水泡出血水；瘦肉切薄片，分别加料酒、淀粉、少许盐抓匀腌 5 分钟；姜切丝。"
      },
      {
        "index": 2,
        "description": "锅里烧水，放姜丝，水开后先下瘦肉片搅散，煮到变色。"
      },
      {
        "index": 3,
        "description": "下猪肝片，大火烫 30 秒至变色熟透，立即关火。"
      },
      {
        "index": 4,
        "description": "加盐、白胡椒调味，淋香油，撒葱花即可。"
      }
    ],
    "likeCount": 0
  },
  {
    "id": "d027",
    "title": "簸箕板",
    "description": "客家米香，软滑咸香",
    "subtitle": "米浆蒸成薄皮，裹上时蔬馅，浇一勺葱油豉油",
    "coverKey": "wheat-gold",
    "coverImgUrl": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Fr1CT25crggT47EGY5JP2fyRJ1Dgev97I41tztZCweyoPJgCXpcQwoS1gNIOFicS2PicpZaezg7wNWlxOueQibNPq9IyicKM2XjaarY9nOm0yX4/0?wxfrom=12&wx_fmt=jpg&tp=webp&watermark=1",
    "images": [
      "wheat-gold",
      "oat",
      "sage"
    ],
    "category": "主食",
    "tags": [
      "客家",
      "主食",
      "小吃"
    ],
    "duration": 25,
    "difficulty": "中等",
    "servings": 2,
    "date": "2026.11.09",
    "story": [
      "簸箕板是客家的一道传统米食，把米浆舀在刷了油的平盘里蒸熟，揭下来就是一张软滑的米皮，卷上炒香的时蔬馅，浇葱油豉油，一口咬下去米香裹着菜香。",
      "小技巧：米浆要调得像浓牛奶一样，盘底刷薄油才好揭皮；馅料用豆芽、笋丝、香菇、虾米炒香最经典，蒸的时间别太长，米皮老了就不软滑了。"
    ],
    "ingredients": [
      {
        "name": "粘米粉 / 大米",
        "amount": "1 碗（磨浆或直接用粉）"
      },
      {
        "name": "绿豆芽",
        "amount": "1 把"
      },
      {
        "name": "笋丝 / 香菇",
        "amount": "各 1 小把"
      },
      {
        "name": "虾米",
        "amount": "少许"
      },
      {
        "name": "蒜 / 葱",
        "amount": "适量"
      },
      {
        "name": "蒸鱼豉油 / 生抽",
        "amount": "2 勺"
      },
      {
        "name": "食用油 / 盐",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "index": 1,
        "description": "大米泡软磨成米浆（或粘米粉加水调成浓牛奶状），加少许盐搅匀；平盘刷一层薄油。"
      },
      {
        "index": 2,
        "description": "舀一勺米浆倒入平盘晃匀，水开后上锅蒸 1 分钟至米皮凝固起泡，趁热揭下。"
      },
      {
        "index": 3,
        "description": "虾米、香菇、笋丝、豆芽下锅炒香，加盐调味成馅料。"
      },
      {
        "index": 4,
        "description": "米皮铺上馅料卷起切段，淋蒸鱼豉油，浇一勺烧热的葱油激香即可。"
      }
    ],
    "likeCount": 0
  },
  {
    "id": "d028",
    "title": "干菜蒸五花肉",
    "description": "肥而不腻，干菜吸满肉香",
    "subtitle": "五花肉煸香垫底，干菜铺上面蒸透，咸鲜下饭",
    "coverKey": "terracotta",
    "coverImgUrl": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Fr1CT25crghmdYTe5icgzfIEgP1r1IUmH7QgFP6YPSiafhITKTneLJSf7t3gsus5y2AjOthtAwib6icLYmNKz7wqBsMibALhXxnskA6RHibewLyUA/0?wxfrom=12&wx_fmt=jpg&tp=webp&watermark=1",
    "images": [
      "terracotta",
      "warm-orange",
      "oat"
    ],
    "category": "下饭菜",
    "tags": [
      "家常",
      "下饭",
      "蒸菜"
    ],
    "duration": 60,
    "difficulty": "中等",
    "servings": 3,
    "date": "2026.10.24",
    "story": [
      "干菜蒸五花肉是梅菜扣肉的家常简化版，不用炸、不用扣，五花肉煸出油，和泡发的干菜一层一层码好上锅蒸，肉的油渗进干菜，干菜的咸香又回润到肉里。",
      "小技巧：五花肉先下锅煸出多余油脂，吃起来才不腻；干菜要提前泡软洗去泥沙，蒸的时间够长（至少 40 分钟）肉才会软糯，出锅前撒一把葱花。"
    ],
    "ingredients": [
      {
        "name": "五花肉",
        "amount": "400 g"
      },
      {
        "name": "梅干菜 / 干菜",
        "amount": "1 把"
      },
      {
        "name": "姜 / 蒜",
        "amount": "适量"
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
        "name": "糖 / 盐",
        "amount": "少许"
      },
      {
        "name": "葱花",
        "amount": "少许"
      }
    ],
    "steps": [
      {
        "index": 1,
        "description": "干菜提前泡软，反复洗去泥沙，挤干切碎；五花肉切薄片。"
      },
      {
        "index": 2,
        "description": "五花肉下锅小火煸出油脂，加姜蒜、生抽、老抽、料酒、糖翻炒上色。"
      },
      {
        "index": 3,
        "description": "碗底铺一层煸好的五花肉，上面铺满干菜，再淋少许炒肉的汤汁。"
      },
      {
        "index": 4,
        "description": "上锅大火蒸 40 分钟至肉软糯，倒扣到盘里，撒葱花即可。"
      }
    ],
    "likeCount": 0
  },
  {
    "id": "d029",
    "title": "笋干蒸五花肉",
    "description": "笋干脆嫩，肉香浓郁",
    "subtitle": "笋干泡发垫底，五花肉铺上面蒸，山珍遇上红烧肉",
    "coverKey": "sage",
    "coverImgUrl": "https://mmbiz.qpic.cn/mmbiz_jpg/Fr1CT25crgjlTP1lOBfSSgTr8eUMP0bxWy8PobBq8e8FFJXA9egj0kaKPYeWG8jYCC01B7n9pH0j3dtNPpS87nL4YDaN7wyAa5EPRPCgYCA/0?wxfrom=12&wx_fmt=jpg&tp=webp&watermark=1",
    "images": [
      "sage",
      "terracotta",
      "oat"
    ],
    "category": "下饭菜",
    "tags": [
      "家常",
      "下饭",
      "蒸菜"
    ],
    "duration": 70,
    "difficulty": "中等",
    "servings": 3,
    "date": "2026.08.20",
    "story": [
      "笋干吸饱了肉的汤汁，咬下去脆中带韧，满口都是鲜；五花肉被蒸得软糯，油脂渗进笋干里，一点都不腻，是山珍和肉最朴素也最下饭的组合。",
      "小技巧：笋干要提前半天泡软，中途换几次水，泡透了蒸出来才不硬、不涩；五花肉先煸出多余油脂再蒸，口感更清爽，蒸够 50 分钟肉才会软糯。"
    ],
    "ingredients": [
      {
        "name": "五花肉",
        "amount": "400 g"
      },
      {
        "name": "笋干",
        "amount": "1 把（提前泡发）"
      },
      {
        "name": "姜 / 蒜",
        "amount": "适量"
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
        "name": "糖 / 盐",
        "amount": "少许"
      },
      {
        "name": "葱花",
        "amount": "少许"
      }
    ],
    "steps": [
      {
        "index": 1,
        "description": "笋干提前泡软泡透，撕成条切段；五花肉切薄片。"
      },
      {
        "index": 2,
        "description": "五花肉下锅煸出油脂，加姜蒜、生抽、老抽、料酒、糖翻炒上色。"
      },
      {
        "index": 3,
        "description": "碗底铺笋干，上面码好五花肉，淋少许炒肉的汤汁。"
      },
      {
        "index": 4,
        "description": "上锅大火蒸 50 分钟至肉软糯、笋干入味，倒扣装盘，撒葱花即可。"
      }
    ],
    "likeCount": 0
  },
  {
    "id": "d030",
    "title": "瘦肉海鲜粉",
    "description": "汤鲜粉滑，一碗满足",
    "subtitle": "瘦肉海鲜熬汤底，米粉吸饱汤汁，鲜美又顶饱",
    "coverKey": "warm-orange",
    "coverImgUrl": "https://mmbiz.qpic.cn/mmbiz_jpg/Fr1CT25crgjhAGicgK5VROfGOD6OQas7jDSk3icRibrUJfT2j1yxibicelzymlK1TGpxX2NqVicTcQBrp5keMyrHNUSeIyFSqbOKHtoiaEdFMujibdE/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1",
    "images": [
      "warm-orange",
      "sage",
      "oat"
    ],
    "category": "主食",
    "tags": [
      "主食",
      "海鲜",
      "快手"
    ],
    "duration": 20,
    "difficulty": "简单",
    "servings": 2,
    "date": "2026.10.28",
    "story": [
      "瘦肉海鲜粉是家常版的鲜汤米粉，用瘦肉和虾、花蛤熬出一锅奶白的汤底，米粉在汤里一滚，吸饱了鲜，连汤带粉吃下去，从胃暖到心。",
      "小技巧：瘦肉切薄片用淀粉抓一抓，煮出来才嫩；海鲜先下锅煮出鲜味再下米粉，米粉别煮太久，太软就不弹了；出锅撒白胡椒和葱花，鲜得掉眉毛。"
    ],
    "ingredients": [
      {
        "name": "米粉 / 河粉",
        "amount": "2 人份"
      },
      {
        "name": "瘦肉",
        "amount": "150 g"
      },
      {
        "name": "鲜虾 / 花蛤",
        "amount": "各 1 小盘"
      },
      {
        "name": "青菜",
        "amount": "1 把"
      },
      {
        "name": "姜 / 葱",
        "amount": "适量"
      },
      {
        "name": "淀粉 / 料酒",
        "amount": "各 1 勺"
      },
      {
        "name": "盐 / 白胡椒",
        "amount": "少许"
      }
    ],
    "steps": [
      {
        "index": 1,
        "description": "瘦肉切薄片，加淀粉、料酒、少许盐抓匀腌 5 分钟；鲜虾剪须，花蛤吐沙洗净。"
      },
      {
        "index": 2,
        "description": "锅里烧水放姜片，水开后下鲜虾、花蛤煮 2 分钟出鲜味。"
      },
      {
        "index": 3,
        "description": "下瘦肉片搅散，再下米粉煮 2 分钟，放青菜烫软。"
      },
      {
        "index": 4,
        "description": "加盐、白胡椒调味，撒葱花即可。"
      }
    ],
    "likeCount": 0
  },
  {
    "id": "d031",
    "title": "牛肉面",
    "description": "汤浓肉烂，一碗过瘾",
    "subtitle": "牛腩慢炖出红汤，面条筋道，撒一把香菜",
    "coverKey": "terracotta",
    "coverImgUrl": "https://mmbiz.qpic.cn/mmbiz_jpg/Fr1CT25crgiahic3kEh1SgWyibNTSxPMcEbUuuicXpXsgRBYWX5ic7ZB2otYaibcJa1OF3lGOeUWmk9KCoz7X8q2kexVAzmf5FhqT64HpzbZrnf7U/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1",
    "images": [
      "terracotta",
      "wheat-gold",
      "oat"
    ],
    "category": "主食",
    "tags": [
      "主食",
      "面食",
      "汤面"
    ],
    "duration": 90,
    "difficulty": "中等",
    "servings": 2,
    "date": "2026.06.17",
    "story": [
      "好吃的牛肉面，灵魂全在那锅红烧牛肉汤里。牛腩炖到软烂，汤色红亮、香气逼人，煮一把筋道的面条，连汤带肉浇上去，撒一把香菜，一碗下肚浑身舒坦。",
      "小技巧：牛腩要冷水下锅焯水去血沫，炒糖色时别糊，加开水炖汤色才不浑；至少炖一个小时，肉才会入口即化；面条另起锅煮好再浇汤，汤头才不被稀释。"
    ],
    "ingredients": [
      {
        "name": "牛腩",
        "amount": "500 g"
      },
      {
        "name": "面条",
        "amount": "2 人份"
      },
      {
        "name": "姜 / 葱 / 蒜",
        "amount": "适量"
      },
      {
        "name": "八角 / 桂皮 / 香叶",
        "amount": "各少许"
      },
      {
        "name": "生抽 / 老抽",
        "amount": "各 1 勺"
      },
      {
        "name": "豆瓣酱 / 番茄酱",
        "amount": "各 1 勺"
      },
      {
        "name": "糖 / 盐",
        "amount": "少许"
      },
      {
        "name": "香菜",
        "amount": "1 把"
      }
    ],
    "steps": [
      {
        "index": 1,
        "description": "牛腩切块，冷水下锅加姜片、料酒焯水，捞出洗净。"
      },
      {
        "index": 2,
        "description": "锅里炒糖色，下牛腩翻炒上色，加姜蒜、香料、豆瓣酱、番茄酱炒香。"
      },
      {
        "index": 3,
        "description": "加没过牛肉的开水，放生抽、老抽、糖，大火烧开转小火炖 1 小时至软烂，加盐调味。"
      },
      {
        "index": 4,
        "description": "另起锅煮面，面熟捞入碗中，浇上牛肉和红汤，撒香菜即可。"
      }
    ],
    "likeCount": 0
  },
  {
    "id": "d032",
    "title": "酸菜鱼",
    "description": "酸辣开胃，鱼片嫩滑",
    "subtitle": "酸菜熬出酸香汤底，鱼片下锅一烫就熟，连汤喝都鲜",
    "coverKey": "wheat-gold",
    "coverImgUrl": "https://mmbiz.qpic.cn/mmbiz_jpg/Fr1CT25crghibMPsGvgIpITTU3ZvwqKoL7Vibl7RT0rgTgdqjuHPQviaSg24yRdfl5KNIZkDdaEQMC7l9jbJLOPtaPx1Dia1EicaYZFKznTJ3Ux8/0?wxfrom=12&wx_fmt=jpg&tp=webp&watermark=1",
    "images": [
      "wheat-gold",
      "sage",
      "oat"
    ],
    "category": "下饭菜",
    "tags": [
      "下饭菜",
      "酸辣",
      "川菜"
    ],
    "duration": 25,
    "difficulty": "中等",
    "servings": 2,
    "date": "2026.06.23",
    "story": [
      "酸菜鱼的精华在那锅酸汤。酸菜先炒香再加水熬出味，鱼片用蛋清淀粉抓嫩，下锅一烫就熟，嫩滑得筷子都夹不稳，酸辣的汤底拌饭能多吃一碗。",
      "小技巧：鱼片要逆纹切薄片，用蛋清、淀粉、少许盐抓匀封浆，汤开后再下，烫到变色立刻关火，煮久了就老；最后浇一勺热油激香花椒和干辣椒，香味一下就出来了。"
    ],
    "ingredients": [
      {
        "name": "草鱼 / 黑鱼",
        "amount": "1 条（约 750 g）"
      },
      {
        "name": "酸菜",
        "amount": "1 包"
      },
      {
        "name": "蛋清",
        "amount": "1 个"
      },
      {
        "name": "淀粉",
        "amount": "1 勺"
      },
      {
        "name": "姜 / 蒜 / 干辣椒",
        "amount": "适量"
      },
      {
        "name": "花椒",
        "amount": "少许"
      },
      {
        "name": "盐 / 糖 / 料酒",
        "amount": "适量"
      },
      {
        "name": "食用油",
        "amount": "适量"
      }
    ],
    "steps": [
      {
        "index": 1,
        "description": "鱼肉逆纹切薄片，加蛋清、淀粉、盐、料酒抓匀腌 10 分钟；鱼骨留着熬汤。"
      },
      {
        "index": 2,
        "description": "酸菜切段，下锅炒干水汽出香味，加水和鱼骨熬 10 分钟成酸汤，捞去鱼骨。"
      },
      {
        "index": 3,
        "description": "汤开后下鱼片，大火烫到变色（约 1 分钟），加盐、糖调味，连汤倒入碗中。"
      },
      {
        "index": 4,
        "description": "鱼片上放干辣椒、花椒、蒜末，浇一勺烧热的油激香即可。"
      }
    ],
    "likeCount": 0
  },
  {
    "id": "d033",
    "title": "魔芋烧鸡",
    "description": "魔芋吸饱汤汁，鸡肉入味",
    "subtitle": "鸡块烧到入味，下魔芋同煮，弹牙的魔芋比肉还香",
    "coverKey": "terracotta",
    "coverImgUrl": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Fr1CT25crgiavgShcb9GFOOazHdWvbHq6s9llzmuaKHb0AZlfey1DTWkgic0XP6RVchm5ktKAeL5CTuY14emNEVU4HSbJTlGXfcmCafJVea1k/0?wxfrom=12&wx_fmt=jpg&tp=webp&watermark=1",
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
    "duration": 30,
    "difficulty": "中等",
    "servings": 2,
    "date": "2026.06.24",
    "story": [
      "魔芋烧鸡是川渝家常的下饭神器。鸡块炒出红油，加水烧到入味，再下魔芋同煮，弹牙的魔芋吸饱了鸡肉和辣油的汤汁，咬下去一口爆汁，往往比肉还先被抢光。",
      "小技巧：鸡肉先用热油煸到表皮收紧再下调料，香气更足；魔芋要提前焯水去碱味，最后下锅煮几分钟就行，煮久了会失去弹牙的口感。"
    ],
    "ingredients": [
      {
        "name": "鸡腿 / 半只鸡",
        "amount": "约 500 g"
      },
      {
        "name": "魔芋",
        "amount": "1 盒"
      },
      {
        "name": "姜 / 蒜 / 干辣椒",
        "amount": "适量"
      },
      {
        "name": "豆瓣酱",
        "amount": "1 勺"
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
        "amount": "少许"
      },
      {
        "name": "葱花",
        "amount": "少许"
      }
    ],
    "steps": [
      {
        "index": 1,
        "description": "鸡肉剁块，冷水下锅加姜片、料酒焯水，捞出洗净；魔芋切片焯水去碱味。"
      },
      {
        "index": 2,
        "description": "热锅下鸡块煸到表皮收紧，加姜蒜、干辣椒、豆瓣酱炒出红油。"
      },
      {
        "index": 3,
        "description": "加生抽、老抽、糖和没过鸡肉的水，大火烧开转小火烧 15 分钟。"
      },
      {
        "index": 4,
        "description": "下魔芋煮 5 分钟入味，加盐调味，大火收汁，撒葱花出锅。"
      }
    ],
    "likeCount": 0
  },
  {
    "id": "d034",
    "title": "春笋炖五花肉",
    "description": "春笋鲜甜，肉香四溢",
    "subtitle": "春笋和五花肉一起慢炖，笋吸油、肉解腻，一锅鲜",
    "coverKey": "leaf-green",
    "coverImgUrl": "https://mmbiz.qpic.cn/mmbiz_jpg/Fr1CT25crgjou3P6j14eBvS6TT4Mk0MqvibFws0ibufiaPcbxuRsq2Obgs8DzFLpuZSYVatLZ8noxll5gCwTa9jtVM1K0cDAgibicExt5JlkFiaTM/0?wxfrom=12&wx_fmt=jpg&tp=webp&watermark=1",
    "images": [
      "leaf-green",
      "terracotta",
      "oat"
    ],
    "category": "下饭菜",
    "tags": [
      "家常",
      "下饭",
      "时令"
    ],
    "duration": 50,
    "difficulty": "中等",
    "servings": 3,
    "date": "2026.09.25",
    "story": [
      "春笋和五花肉是春天里最搭的一对。笋子吸饱了肉的油脂，鲜甜脆嫩；五花肉被笋解了腻，炖到软糯，一锅端上桌，连汤都想泡饭吃。",
      "小技巧：春笋要先焯水去涩，切滚刀块更容易入味；五花肉先煸出多余油脂再炖，汤色清亮不油腻；炖够 40 分钟，笋和肉的味道才会真正融到一起。"
    ],
    "ingredients": [
      {
        "name": "五花肉",
        "amount": "400 g"
      },
      {
        "name": "春笋",
        "amount": "2 根"
      },
      {
        "name": "姜 / 葱",
        "amount": "适量"
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
        "name": "糖 / 盐",
        "amount": "少许"
      },
      {
        "name": "葱花",
        "amount": "少许"
      }
    ],
    "steps": [
      {
        "index": 1,
        "description": "春笋去皮切滚刀块，开水焯 3 分钟去涩，捞出过凉；五花肉切块。"
      },
      {
        "index": 2,
        "description": "五花肉下锅煸出油脂，加姜片、生抽、老抽、料酒、糖翻炒上色。"
      },
      {
        "index": 3,
        "description": "加没过的水，大火烧开转小火炖 30 分钟。"
      },
      {
        "index": 4,
        "description": "下春笋继续炖 15 分钟至入味，加盐调味，大火收汁，撒葱花出锅。"
      }
    ],
    "likeCount": 0
  },
  {
    "id": "d035",
    "title": "凉拌黄瓜",
    "description": "清爽脆嫩，开胃解腻",
    "subtitle": "拍碎的黄瓜拌上蒜香辣椒油，几分钟搞定的下酒小菜",
    "coverKey": "sage",
    "coverImgUrl": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Fr1CT25crgh8HwxuibT9ibNjr1HC1YKBCiaLlWdfiaWcuGkTsyWzHEU8efVgPyY5rAEkmdPic2pcJb8mtyjhP6sSAdUbibPO4UTsd3q2wTXKah77c/0?wxfrom=12&wx_fmt=jpg&tp=webp&watermark=1",
    "images": [
      "sage",
      "leaf-green",
      "oat"
    ],
    "category": "凉菜",
    "tags": [
      "凉菜",
      "快手",
      "下酒"
    ],
    "duration": 10,
    "difficulty": "简单",
    "servings": 2,
    "date": "2026.06.26",
    "story": [
      "凉拌黄瓜是夏天最不能少的一道小菜。黄瓜用刀拍碎，断面参差更入味，拌上蒜末、辣椒油和香醋，冰一下再吃，脆生生的，一口下去暑气全消。",
      "小技巧：黄瓜要拍不要切，拍出来的断面粗糙更容易挂住调料；拌之前先撒一点盐腌 5 分钟杀出多余水分，挤干再拌，口感更脆也不会出水塌掉。"
    ],
    "ingredients": [
      {
        "name": "黄瓜",
        "amount": "2 根"
      },
      {
        "name": "蒜",
        "amount": "4 瓣"
      },
      {
        "name": "辣椒油",
        "amount": "1 勺"
      },
      {
        "name": "香醋 / 生抽",
        "amount": "各 1 勺"
      },
      {
        "name": "盐 / 糖",
        "amount": "少许"
      },
      {
        "name": "香油",
        "amount": "几滴"
      },
      {
        "name": "熟芝麻",
        "amount": "少许"
      }
    ],
    "steps": [
      {
        "index": 1,
        "description": "黄瓜洗净，用刀拍碎成段，加少许盐腌 5 分钟，挤干水分。"
      },
      {
        "index": 2,
        "description": "蒜切末，和黄瓜一起放入碗中。"
      },
      {
        "index": 3,
        "description": "加生抽、香醋、糖、辣椒油、香油，抓拌均匀。"
      },
      {
        "index": 4,
        "description": "撒熟芝麻，冷藏 10 分钟更入味，取出即可。"
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
    "title": "雨夜的一碗热汤面",
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
    "id": "f-u-202606261",
    "type": "meal",
    "refId": "202606261",
    "title": "父亲来杭州了，接风洗尘，简单一餐",
    "subtitle": "慢一点的周六，做了三道想吃很久的家常菜",
    "coverKey": "terracotta",
    "date": "2026.06.26",
    "meta": "晚餐 · 接风洗尘",
    "tags": [
      "川味家常菜"
    ],
    "coverHeight": 400,
    "coverImgUrl": "https://mmbiz.qpic.cn/mmbiz_jpg/Fr1CT25crgj3WaG0hlNQGqibbUZZ2x02zxeh0icHBvB56njzd9iaic5qBumtfKTl1yG3icSZtdxS7eKxRNkoOfzlSMT1XCo25laxWeP3b32ic8baE/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1"
  },
  {
    "id": "f-u-d018",
    "type": "dish",
    "refId": "d018",
    "title": "泡姜牛肉丝",
    "subtitle": "泡姜泡椒一爆，整盘都是下饭的味道",
    "coverKey": "chili",
    "date": "2026.11.12",
    "meta": "11.12 · 20 分钟 · 简单",
    "tags": [
      "家常",
      "下饭"
    ],
    "coverHeight": 300,
    "coverImgUrl": "https://mmbiz.qpic.cn/mmbiz_jpg/Fr1CT25crgjzTVdPQnUGelyM9C78fwaUGgsJ77G4JhhqtvyLdMx6Cz05VBB1BBC7ibpib7YCt22MxMkOWnqdVWuicV2x34my6MkT8ar2GGZ1Ww/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1"
  },
  {
    "id": "f-u-d027",
    "type": "dish",
    "refId": "d027",
    "title": "簸箕板",
    "subtitle": "米浆蒸成薄皮，裹上时蔬馅，浇一勺葱油豉油",
    "coverKey": "wheat-gold",
    "date": "2026.11.09",
    "meta": "11.09 · 25 分钟 · 中等",
    "tags": [
      "客家",
      "主食"
    ],
    "coverHeight": 300,
    "coverImgUrl": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Fr1CT25crggT47EGY5JP2fyRJ1Dgev97I41tztZCweyoPJgCXpcQwoS1gNIOFicS2PicpZaezg7wNWlxOueQibNPq9IyicKM2XjaarY9nOm0yX4/0?wxfrom=12&wx_fmt=jpg&tp=webp&watermark=1"
  },
  {
    "id": "f-u-d025",
    "type": "dish",
    "refId": "d025",
    "title": "芦笋炒牛肉",
    "subtitle": "牛肉逆纹切丝封浆，芦笋快炒，翠绿配红亮",
    "coverKey": "leaf-green",
    "date": "2026.11.09",
    "meta": "11.09 · 15 分钟 · 简单",
    "tags": [
      "家常",
      "快手"
    ],
    "coverHeight": 300,
    "coverImgUrl": "https://mmbiz.qpic.cn/mmbiz_jpg/Fr1CT25crgjj6rNHibHJOTmELAHAA23PJaIAbN1NNlaDBr9CZPXCLm0km8MVo20q9usQJ44FZJg9EA8TFTmLaiaymXjfSDK5dh9VnwnRO3GG8/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1"
  },
  {
    "id": "f-u-d015",
    "type": "dish",
    "refId": "d015",
    "title": "清炒西蓝花",
    "subtitle": "焯水再过油，颜色才绿得发亮",
    "coverKey": "leaf-green",
    "date": "2026.10.31",
    "meta": "10.31 · 8 分钟 · 简单",
    "tags": [
      "少油",
      "快手"
    ],
    "coverHeight": 300,
    "coverImgUrl": ""
  },
  {
    "id": "f-u-d016",
    "type": "dish",
    "refId": "d016",
    "title": "鹿茸菇排骨汤",
    "subtitle": "鹿茸菇的鲜，全炖进排骨汤里",
    "coverKey": "oat",
    "date": "2026.10.30",
    "meta": "10.30 · 60 分钟 · 简单",
    "tags": [
      "煲汤",
      "鲜味"
    ],
    "coverHeight": 320,
    "coverImgUrl": ""
  },
  {
    "id": "f-u-d030",
    "type": "dish",
    "refId": "d030",
    "title": "瘦肉海鲜粉",
    "subtitle": "瘦肉海鲜熬汤底，米粉吸饱汤汁，鲜美又顶饱",
    "coverKey": "warm-orange",
    "date": "2026.10.28",
    "meta": "10.28 · 20 分钟 · 简单",
    "tags": [
      "主食",
      "海鲜"
    ],
    "coverHeight": 300,
    "coverImgUrl": "https://mmbiz.qpic.cn/mmbiz_jpg/Fr1CT25crgjhAGicgK5VROfGOD6OQas7jDSk3icRibrUJfT2j1yxibicelzymlK1TGpxX2NqVicTcQBrp5keMyrHNUSeIyFSqbOKHtoiaEdFMujibdE/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1"
  },
  {
    "id": "f-u-d028",
    "type": "dish",
    "refId": "d028",
    "title": "干菜蒸五花肉",
    "subtitle": "五花肉煸香垫底，干菜铺上面蒸透，咸鲜下饭",
    "coverKey": "terracotta",
    "date": "2026.10.24",
    "meta": "10.24 · 60 分钟 · 中等",
    "tags": [
      "家常",
      "下饭"
    ],
    "coverHeight": 320,
    "coverImgUrl": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Fr1CT25crghmdYTe5icgzfIEgP1r1IUmH7QgFP6YPSiafhITKTneLJSf7t3gsus5y2AjOthtAwib6icLYmNKz7wqBsMibALhXxnskA6RHibewLyUA/0?wxfrom=12&wx_fmt=jpg&tp=webp&watermark=1"
  },
  {
    "id": "f-u-d013",
    "type": "dish",
    "refId": "d013",
    "title": "外婆菜炒蛋",
    "subtitle": "腌菜炒蛋，一口就想起外婆的味道",
    "coverKey": "wheat-gold",
    "date": "2026.10.19",
    "meta": "10.19 · 10 分钟 · 简单",
    "tags": [
      "下饭",
      "快手"
    ],
    "coverHeight": 300,
    "coverImgUrl": ""
  },
  {
    "id": "f-u-d022",
    "type": "dish",
    "refId": "d022",
    "title": "白灼大虾、鲍鱼、秋葵",
    "subtitle": "三样食材分别白灼，淋一勺豉油，吃的就是本味",
    "coverKey": "sage",
    "date": "2026.10.15",
    "meta": "10.15 · 15 分钟 · 简单",
    "tags": [
      "海鲜",
      "快手"
    ],
    "coverHeight": 300,
    "coverImgUrl": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Fr1CT25crgjtQHzYFow5v9218IR6nsU5orqibWKICvU3wBFDdxUd1N7zicuFMhqPqKp11WoiaVUWibFhDHaicfkT8IlibJibS2bdIFuOdqW5Zs4wE0/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1"
  },
  {
    "id": "f-u-d017",
    "type": "dish",
    "refId": "d017",
    "title": "肥肠芋儿鸡",
    "subtitle": "肥肠耙软、芋儿一抿就化，鸡肉吸饱了红汤",
    "coverKey": "terracotta",
    "date": "2026.10.08",
    "meta": "10.08 · 90 分钟 · 中等",
    "tags": [
      "家常",
      "下饭"
    ],
    "coverHeight": 320,
    "coverImgUrl": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Fr1CT25crgjU2tQoyHUxVUhYIrol3mffqW97fjoH03WI124RGbibK9qzb69TJtEx9uB7Lt735VEumicqn16Wh9O18MPT4mzFYC8BjrCxTvxfs/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1"
  },
  {
    "id": "f-u-d034",
    "type": "dish",
    "refId": "d034",
    "title": "春笋炖五花肉",
    "subtitle": "春笋和五花肉一起慢炖，笋吸油、肉解腻，一锅鲜",
    "coverKey": "leaf-green",
    "date": "2026.09.25",
    "meta": "09.25 · 50 分钟 · 中等",
    "tags": [
      "家常",
      "下饭"
    ],
    "coverHeight": 320,
    "coverImgUrl": "https://mmbiz.qpic.cn/mmbiz_jpg/Fr1CT25crgjou3P6j14eBvS6TT4Mk0MqvibFws0ibufiaPcbxuRsq2Obgs8DzFLpuZSYVatLZ8noxll5gCwTa9jtVM1K0cDAgibicExt5JlkFiaTM/0?wxfrom=12&wx_fmt=jpg&tp=webp&watermark=1"
  },
  {
    "id": "f-u-d012",
    "type": "dish",
    "refId": "d012",
    "title": "蒜苗回锅肉",
    "subtitle": "五花肉煸出灯盏窝，蒜苗一烫就香",
    "coverKey": "chili",
    "date": "2026.09.16",
    "meta": "09.16 · 25 分钟 · 中等",
    "tags": [
      "下饭",
      "川味"
    ],
    "coverHeight": 320,
    "coverImgUrl": ""
  },
  {
    "id": "f-u-d029",
    "type": "dish",
    "refId": "d029",
    "title": "笋干蒸五花肉",
    "subtitle": "笋干泡发垫底，五花肉铺上面蒸，山珍遇上红烧肉",
    "coverKey": "sage",
    "date": "2026.08.20",
    "meta": "08.20 · 70 分钟 · 中等",
    "tags": [
      "家常",
      "下饭"
    ],
    "coverHeight": 320,
    "coverImgUrl": "https://mmbiz.qpic.cn/mmbiz_jpg/Fr1CT25crgjlTP1lOBfSSgTr8eUMP0bxWy8PobBq8e8FFJXA9egj0kaKPYeWG8jYCC01B7n9pH0j3dtNPpS87nL4YDaN7wyAa5EPRPCgYCA/0?wxfrom=12&wx_fmt=jpg&tp=webp&watermark=1"
  },
  {
    "id": "f-u-d026",
    "type": "dish",
    "refId": "d026",
    "title": "猪肝瘦肉汤",
    "subtitle": "猪肝滑嫩、瘦肉清甜，姜丝去腥，滚一滚就好",
    "coverKey": "warm-orange",
    "date": "2026.08.02",
    "meta": "08.02 · 15 分钟 · 简单",
    "tags": [
      "汤羹",
      "快手"
    ],
    "coverHeight": 300,
    "coverImgUrl": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Fr1CT25crgjyKg0CC0uXYhcwnJMwIeRoy57NonJd2dBopUcY52n3f2hbg0qAKk5icJ5WPWHJ9Rq4icZAazvMTO1lcbrPngYRFEJU4jMjS1Hico/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1"
  },
  {
    "id": "f-u-d020",
    "type": "dish",
    "refId": "d020",
    "title": "小炒鸡",
    "subtitle": "剁小快炒，辣椒干香，一锅米饭见了底",
    "coverKey": "chili",
    "date": "2026.07.28",
    "meta": "07.28 · 25 分钟 · 简单",
    "tags": [
      "家常",
      "下饭"
    ],
    "coverHeight": 300,
    "coverImgUrl": "https://mmbiz.qpic.cn/mmbiz_jpg/Fr1CT25crgjrciaaLO0Zl6LiblCicn9Ph3icehx1icpqmWabMrWwVXUBv0HfPZDXvwV68JLNWxDdDZff0iccicwmiahGo0BGzr1gEmxcVWtv3JIsmxU/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1"
  },
  {
    "id": "f-u-d011",
    "type": "dish",
    "refId": "d011",
    "title": "青菜鸡蛋面",
    "subtitle": "水开下面、卧个蛋，最省心也最熨帖的一碗",
    "coverKey": "wheat-gold",
    "date": "2026.07.20",
    "meta": "07.20 · 12 分钟 · 简单",
    "tags": [
      "录入示例",
      "一人食"
    ],
    "coverHeight": 300,
    "coverImgUrl": "https://mmbiz.qpic.cn/mmbiz_jpg/Fr1CT25crghSKhT6PHIEib0OEL94pMlOMpJBzQicIsLcSb4VE2xPxRGQUEyht9GdpwceV7wgRGmghJib0bqHImamzDTfw2iaBIsrXGFQgW0qibps/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1"
  },
  {
    "id": "f-u-d023",
    "type": "dish",
    "refId": "d023",
    "title": "牛肉鱼丸锅仔",
    "subtitle": "牛肉先炖软，下鱼丸和蔬菜，小火慢滚越煮越鲜",
    "coverKey": "warm-orange",
    "date": "2026.07.17",
    "meta": "07.17 · 35 分钟 · 中等",
    "tags": [
      "汤羹",
      "暖胃"
    ],
    "coverHeight": 320,
    "coverImgUrl": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Fr1CT25crghkqWFYIlvrXY2pTsZz0eFYfOEzq6qkKHpIlH2GTQycfXyjyibG6XOnItylMn2vQ8HiasKAUuIvz9Yvj1QUib9YDoz2qyRibAGhFqA/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1"
  },
  {
    "id": "f-u-d024",
    "type": "dish",
    "refId": "d024",
    "title": "烤鸡翅",
    "subtitle": "腌够味再进烤箱，蜜汁焦香，一盘端上桌秒光",
    "coverKey": "wheat-gold",
    "date": "2026.07.16",
    "meta": "07.16 · 35 分钟 · 简单",
    "tags": [
      "家常",
      "烤箱"
    ],
    "coverHeight": 300,
    "coverImgUrl": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Fr1CT25crggT4k3bVzXibJm7DasndN0DoO7eM3osibVRyhW6hAu8cGRszcYavyLo8hmdtptulKWRhibNZL06T3KmUUPv3E9n4qBDLnzFhbAibds/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1"
  },
  {
    "id": "f-u-d014",
    "type": "dish",
    "refId": "d014",
    "title": "糖醋排骨",
    "subtitle": "一勺糖一勺醋，裹住每块肋排",
    "coverKey": "terracotta",
    "date": "2026.07.07",
    "meta": "07.07 · 45 分钟 · 中等",
    "tags": [
      "宴客",
      "酸甜"
    ],
    "coverHeight": 320,
    "coverImgUrl": ""
  },
  {
    "id": "f-u-d021",
    "type": "dish",
    "refId": "d021",
    "title": "烤鱼",
    "subtitle": "腌好的鱼先烤后炖，配菜吸满汤汁，一盆端上桌",
    "coverKey": "chili",
    "date": "2026.07.03",
    "meta": "07.03 · 40 分钟 · 中等",
    "tags": [
      "硬菜",
      "下饭"
    ],
    "coverHeight": 320,
    "coverImgUrl": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Fr1CT25crgia2r9Bh2oTOP8QVwiajScQQMBuA05jZQGA0QrIMtpsjePZiciaibjEdEzGaxTvT4keCXJCfdlUfRMKFaxOs9LRup4q9n2XjsHuUMTw/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1"
  },
  {
    "id": "f-u-d035",
    "type": "dish",
    "refId": "d035",
    "title": "凉拌黄瓜",
    "subtitle": "拍碎的黄瓜拌上蒜香辣椒油，几分钟搞定的下酒小菜",
    "coverKey": "sage",
    "date": "2026.06.26",
    "meta": "06.26 · 10 分钟 · 简单",
    "tags": [
      "凉菜",
      "快手"
    ],
    "coverHeight": 280,
    "coverImgUrl": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Fr1CT25crgh8HwxuibT9ibNjr1HC1YKBCiaLlWdfiaWcuGkTsyWzHEU8efVgPyY5rAEkmdPic2pcJb8mtyjhP6sSAdUbibPO4UTsd3q2wTXKah77c/0?wxfrom=12&wx_fmt=jpg&tp=webp&watermark=1"
  },
  
  {
    "id": "f-u-d033",
    "type": "dish",
    "refId": "d033",
    "title": "魔芋烧鸡",
    "subtitle": "鸡块烧到入味，下魔芋同煮，弹牙的魔芋比肉还香",
    "coverKey": "terracotta",
    "date": "2026.06.24",
    "meta": "06.24 · 30 分钟 · 中等",
    "tags": [
      "家常",
      "下饭"
    ],
    "coverHeight": 320,
    "coverImgUrl": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Fr1CT25crgiavgShcb9GFOOazHdWvbHq6s9llzmuaKHb0AZlfey1DTWkgic0XP6RVchm5ktKAeL5CTuY14emNEVU4HSbJTlGXfcmCafJVea1k/0?wxfrom=12&wx_fmt=jpg&tp=webp&watermark=1"
  },
  {
    "id": "f-u-d032",
    "type": "dish",
    "refId": "d032",
    "title": "酸菜鱼",
    "subtitle": "酸菜熬出酸香汤底，鱼片下锅一烫就熟，连汤喝都鲜",
    "coverKey": "wheat-gold",
    "date": "2026.06.23",
    "meta": "06.23 · 25 分钟 · 中等",
    "tags": [
      "下饭菜",
      "酸辣"
    ],
    "coverHeight": 320,
    "coverImgUrl": "https://mmbiz.qpic.cn/mmbiz_jpg/Fr1CT25crghibMPsGvgIpITTU3ZvwqKoL7Vibl7RT0rgTgdqjuHPQviaSg24yRdfl5KNIZkDdaEQMC7l9jbJLOPtaPx1Dia1EicaYZFKznTJ3Ux8/0?wxfrom=12&wx_fmt=jpg&tp=webp&watermark=1"
  },
  {
    "id": "f-u-d031",
    "type": "dish",
    "refId": "d031",
    "title": "牛肉面",
    "subtitle": "牛腩慢炖出红汤，面条筋道，撒一把香菜",
    "coverKey": "terracotta",
    "date": "2026.06.17",
    "meta": "06.17 · 90 分钟 · 中等",
    "tags": [
      "主食",
      "面食"
    ],
    "coverHeight": 320,
    "coverImgUrl": "https://mmbiz.qpic.cn/mmbiz_jpg/Fr1CT25crgiahic3kEh1SgWyibNTSxPMcEbUuuicXpXsgRBYWX5ic7ZB2otYaibcJa1OF3lGOeUWmk9KCoz7X8q2kexVAzmf5FhqT64HpzbZrnf7U/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1"
  },
  {
    "id": "f-u-d019",
    "type": "dish",
    "refId": "d019",
    "title": "姜母鸭",
    "subtitle": "麻油老姜慢煸，鸭肉软嫩，天冷最馋这一锅",
    "coverKey": "terracotta",
    "date": "2026.06.01",
    "meta": "06.01 · 90 分钟 · 中等",
    "tags": [
      "家常",
      "下饭"
    ],
    "coverHeight": 320,
    "coverImgUrl": "https://mmbiz.qpic.cn/sz_mmbiz_jpg/Fr1CT25crggqopCDXaQuezCMiakUIia4qsVTI9nNwQRPw7HBcI7Q39wdicDrrkN6CU3GgYrPubBGnWaMobicgGIeKH5zic9g3GNwzfMPoq321y40/0?wxfrom=12&wx_fmt=jpg&tp=webp&usePicPrefetch=1&watermark=1"
  }
]
