# 静态内容录入手册

这里放**给人编辑的内容文件**。改完 JSON 跑一次同步，首页、内容列表、菜品列表、详情页会一起更新，不需要改任何 TypeScript 代码。

> 为什么需要「同步」这一步？微信小程序运行时**不能遍历目录、也不能读取包内的 JSON 文件**，所有展示数据必须编译进 JS。所以 `content/` 是编辑态，`src/services/mock/generated.ts` 是编译产物，由脚本自动生成。

## 目录结构

```
content/
├── README.md              ← 本文件
├── manifest.json          ← 首页顺序 / 置顶 / 不上首页的名单
├── entries/
│   ├── _TEMPLATE.json     ← 一餐模板（下划线开头，脚本会跳过）
│   └── 202611121.json     ← 示例：一餐，当前固定在首页 Banner 第一张
└── dishes/
    ├── _TEMPLATE.json     ← 菜品模板
    └── d011.json          ← 示例：一道菜
```

## 录入三步

**1）复制模板并改名**（文件名 = 内容 id，这点脚本会校验）

```bash
cp content/entries/_TEMPLATE.json content/entries/202611131.json   # 一餐
cp content/dishes/_TEMPLATE.json  content/dishes/d012.json         # 一道菜
```

**2）按字段填写 JSON**，重点：

| 字段 | 说明 |
| --- | --- |
| `id` | 一餐 = `yyyymmdd` + 当天序号（9 位数字，如 `202611131`）；菜品 = `d` + 3 位数字 |
| `date` | `YYYY.MM.DD`，内容列表按它倒序 |
| `coverKey` | 色块名，只能用：`warm-orange` `tomato-red` `sage` `leaf-green` `wheat-gold` `terracotta` `chili` `oat` |
| `coverImgUrl` | **可选**，线上封面图链接，默认 `""` 不展示；只接受 `https://`，见下方「线上封面图」 |
| `dishIds` | 这一餐包含哪些菜，可引用内置 `d001…d010` 或自己在 `dishes/` 新建的菜 |
| `steps[].index` | 必须从 1 开始连续 |
| `feed`（可选） | 覆盖首页卡片的 `title` / `subtitle` / `meta` / `tags` / `coverHeight`；不写就自动从实体生成 |

**3）同步 + 运行**

```bash
yarn content:sync       # 生成 src/services/mock/generated.ts
yarn dev:weapp          # 或 yarn build:weapp，已内置自动同步
```

日常开发时 `yarn build:weapp` / `yarn dev:weapp` / `yarn test` 都会先自动同步，只有**在 watch 模式开着的时候新增文件**才需要手动执行一次 `yarn content:sync`。

## 线上封面图（可选）

每条一餐 / 菜品 / 首页卡片都有 `coverImgUrl` 字段，**默认是空字符串**：

- 留空 `""` → 只显示 `coverKey` 渐变色块（原来的样子）
- 填 `"https://..."` → 显示线上图片，按 `aspectFill` 铺满；首页 Banner 会自动叠一层暗色蒙层，保证白色标题在照片上仍可读

示例里 `entries/202611121.json` 和 `dishes/d011.json` 都填了公众号图片链接，所以**首页 Banner 第一张和「青菜鸡蛋面」卡片都是真实照片**；没有填链接的条目仍是色块。一餐详情、内容列表、菜品列表、菜品详情也共用同一个字段，改一处全站生效。

只接受 `https://`，写 `http://` 或其它格式同步时会报错。公众号图床（`mmbiz.qpic.cn`）可能有防盗链 / 域名白名单限制，真机若显示空白，检查小程序后台的 downloadFile 合法域名，或换成可直连的图床；把值改回 `""` 就会立刻退回色块。

## 首页顺序由谁决定

`manifest.json` 的 `pinned` 数组就是首页置顶顺序：

```json
{ "pinned": ["entries/202611121.json"], "excludeFromFeed": [] }
```

- `pinned[0]` = **首页 Banner 第一张**（当前就是示例那餐）
- 其余录入文件按 `date` 倒序排在 `pinned` 之后、内置数据之前
- `excludeFromFeed` 里填文件名的条目仍会进入内容列表 / 菜品列表，但不生成首页卡片
- 首页始终取最终 `feed` 的前 5 条做 Banner，其余进瀑布流——录入内容和内置数据共用同一条规则

每个录入文件默认都会生成一张 `FeedItem` 卡片（`type` 由所在目录决定），所以 Banner 和瀑布流的数据结构完全一致。

## 同步脚本会帮你检查

文件名与 `id` 一致、id 格式、必填字段、色块名合法、`steps` 序号连续、`feed.coverHeight` 是数字、`coverImgUrl` 必须是 `https://` 或空字符串。同步时会自动给每条数据补上 `coverImgUrl: ""` 默认值，所以 `generated.ts` 里始终能看到这个字段。引用关系（`dishIds` 是否命中菜品）由运行时的 `validateMockData()` 和 `yarn test` 兜底，任一处失败都会打印具体文件名，不会静默出错。

## 想换掉首页第一张 Banner

把 `manifest.json` 的 `pinned` 第一项改成你的文件即可；或者直接改 `entries/202611121.json` 的 `title` / `subtitle` / `coverKey`，同步后首页第一张立刻跟着变。

## 常见疑问

- **线上图不显示？** 先确认是 `https://` 开头；再看真机上该域名是否被防盗链、或需要配小程序后台 downloadFile 合法域名。把值改回 `""` 会立刻退回色块，不影响其它数据。
- **改了 JSON 没生效？** 先跑 `yarn content:sync`，再看终端输出的「Banner 第 1 张」。
- **能直接删示例吗？** 可以，删掉两个示例 JSON 并把 `pinned` 清空，同步后项目回到内置 13 条数据。
- **以后要换真实图片？** 只改 `src/services/mock/covers.ts` 与 `ColorBlock`，这里的 `coverKey` 字段名不用动。
