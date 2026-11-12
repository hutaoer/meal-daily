import { userContents } from './generated'
import type { ContentItem } from '../../types/content'

/**
 * 内置静态内容（一餐）数据：7 条，id 为 9 位日期戳。
 * id = yyyymmdd + 当天序号；列表展示时按 Number(id) 降序。
 * content/ 录入的内容会合并到前面，见文件末尾。见 PRD §5.3 §6。
 */
const baseContents: ContentItem[] = [
  {
    id: '202611081',
    date: '2026.11.08',
    mealType: '晚餐',
    weekday: '周六',
    title: '周末的三菜一汤',
    subtitle: '慢一点的周六，做了三道想吃很久的家常菜',
    coverKey: 'terracotta',
    totalMinutes: 60,
    servings: 2,
    tags: ['周末', '家常', '三菜一汤'],
    note: [
      '周六不用赶时间，早上去菜场挑了新鲜的番茄和排骨。汤先炖上，再慢慢把三道菜一道道做完。',
      '桌子不大，但摆满的时候心里特别踏实。',
    ],
    dishIds: ['d001', 'd002', 'd005'],
    likeCount: 12,
  },
  {
    id: '202611071',
    date: '2026.11.07',
    mealType: '晚餐',
    weekday: '周五',
    title: '立冬的一锅炖菜',
    subtitle: '天冷了就想吃点热的，一锅炖到软烂',
    coverKey: 'sage',
    totalMinutes: 55,
    servings: 2,
    tags: ['节气', '暖胃', '炖菜'],
    note: [
      '立冬这天风很大，下班路上就惦记着家里那口砂锅。排骨和冬瓜慢慢炖着，厨房的玻璃起了一层雾。',
      '配一碗香菇鸡肉饭，一热一香，冬天就算正式开场了。',
    ],
    dishIds: ['d005', 'd009'],
    likeCount: 8,
  },
  {
    id: '202611061',
    date: '2026.11.06',
    mealType: '午餐',
    weekday: '周四',
    title: '一个人的周末午餐',
    subtitle: '不用凑合，一个人也值得好好摆一桌',
    coverKey: 'wheat-gold',
    totalMinutes: 35,
    servings: 1,
    tags: ['一人食', '快手', '周末'],
    note: [
      '一个人在家吃饭最容易随便对付，今天偏不。剩米饭炒一锅蛋炒饭，再配两道小菜，摆齐了才动筷子。',
      '慢慢吃完，碗洗好，下午的阳光刚好照进来。',
    ],
    dishIds: ['d001', 'd003', 'd002', 'd008'],
    likeCount: 23,
  },
  {
    id: '202611021',
    date: '2026.11.02',
    mealType: '晚餐',
    weekday: '周日',
    title: '入秋的第一锅热汤',
    subtitle: '起风的晚上，先给自己盛一碗热汤',
    coverKey: 'oat',
    totalMinutes: 50,
    servings: 2,
    tags: ['汤类', '入秋', '暖胃'],
    note: [
      '天气一夜之间就凉了。把砂锅翻出来，炖一锅冬瓜排骨汤，顺手拌了碗葱油面。',
      '汤喝到见底的时候，整个人才算是缓过来了。',
    ],
    dishIds: ['d005', 'd006', 'd010'],
    likeCount: 15,
  },
  {
    id: '202610281',
    date: '2026.10.28',
    mealType: '晚餐',
    weekday: '周三',
    title: '家里来客人的一桌菜',
    subtitle: '朋友临时来吃饭，冰箱里凑出满满一桌',
    coverKey: 'terracotta',
    totalMinutes: 90,
    servings: 4,
    tags: ['待客', '下饭', '热闹'],
    note: [
      '下班前接到消息说要来两个人，路上顺手多买了块豆腐和一把蒜苗。回锅肉、麻婆豆腐一起上，米饭煮了两锅。',
      '客厅聊到很晚，菜其实没剩多少，这就算最好的夸奖了。',
    ],
    dishIds: ['d007', 'd004', 'd001', 'd002', 'd005'],
    likeCount: 31,
  },
  {
    id: '202610251',
    date: '2026.10.25',
    mealType: '晚餐',
    weekday: '周日',
    title: '工作日快手晚餐',
    subtitle: '二十分钟搞定，给加班的自己一点交代',
    coverKey: 'warm-orange',
    totalMinutes: 20,
    servings: 1,
    tags: ['一人食', '快手', '工作日'],
    note: [
      '到家已经八点，没什么力气折腾。一碗蛋炒饭，配一碗葱油拌面，听起来碳水叠碳水，但那天就是想这么吃。',
      '吃完早早就睡了，也算好好过了一天。',
    ],
    dishIds: ['d003', 'd006'],
    likeCount: 9,
  },
  {
    id: '202610061',
    date: '2026.10.06',
    mealType: '晚餐',
    weekday: '周二',
    title: '中秋家宴',
    subtitle: '一家人围着桌子，菜要多到摆不下才好',
    coverKey: 'chili',
    totalMinutes: 120,
    servings: 6,
    tags: ['家宴', '节日', '热闹'],
    note: [
      '中秋那天厨房从下午就没停过。我爸负责炖汤，我妈炒回锅肉，我只在旁边打下手，顺手做了可乐鸡翅。',
      '桌子拼了两张才够放，最后一道菜端上来的时候，大家都在笑。',
    ],
    dishIds: ['d007', 'd004', 'd009', 'd010', 'd005'],
    likeCount: 47,
  },
]

/** 对外数据 = content/ 录入的一餐 + 内置 7 条；列表按 id 数值降序展示 */
export const contents: ContentItem[] = [...userContents, ...baseContents]
