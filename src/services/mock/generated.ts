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
