---
name: dish-content-import
description: 从菜名加封面图链接批量录入本项目菜品，生成完整 JSON 并同步校验。用户给出菜品名称与图片地址、其余文案待补全时使用。不要用于修改单个已有菜品文件。
---

# 菜品批量录入

把一批「菜名 + 封面图链接」补全成完整菜品数据，写进 `content/dishes/`，同步生成 `src/services/mock/generated.ts`，并校验无回归。

## 输入约定

- 输入可以是用户直接贴在对话里的清单，也可以是用户放在**仓库根目录**的文件（如 `dish-import.json`）。
- 清单格式：数组，每项 `{ "title": "...", "coverImgUrl": "https://..." }`，可选 `"id": "d021"`、`"overwrite": true`（同名时覆盖而非跳过，见下方去重规则）。
- **不要把清单文件放进 `content/` 目录**：`scripts/sync-content.mjs` 会把 `content/` 下每个 `.json` 当成一条菜品解析，清单放进去会校验失败。

## 去重规则（默认跳过，显式才覆盖）

同步脚本**不校验重复菜名**，所以去重必须在生成文件前由本流程完成，否则重复运行会产生同名重复卡片：

1. 先扫描 `content/dishes/*.json`（跳过 `_TEMPLATE`），收集已有的 `title` 集合。
2. 对清单中每一项：
   - `title` 已存在 **且未** 标 `"overwrite": true` → **跳过**，不新建、不覆盖；最终汇报里列为「跳过（已存在）」。
   - `title` 已存在 **且** 标了 `"overwrite": true`（或对话里明确说覆盖）→ **覆盖**已有同名文件：保留原 id 与文件名，用新内容整体重写（`title`/`coverImgUrl` 用用户给的，其余字段重新补全）。
   - 显式给了 `id`，但该 id 已存在且其 `title` 与清单项不一致 → 停下问用户，不要擅自覆盖或改名。
3. 只有未命中的新菜，才走「分配新 id → 生成文件」。

## 碰撞检测（导入前必查，命中即停下问用户）

生成文件之前，除了菜名去重，还要检测两类容易被忽略的冲突——命中就先问用户，**不要擅自导入**：

1. **重复封面图地址**：收集 `content/dishes/*.json` 已有的全部 `coverImgUrl`，若清单某项的地址已被其他菜占用 → 极可能是粘贴错误（会导致 A 菜显示 B 菜的图）。停下问用户：去修正 / 就用这张 / 跳过。
2. **与内置菜重名**：从 `src/services/mock/dishes.ts` 的 `baseDishes` 提取 `title`（正则 `title:\s*'([^']+)'`）。若清单菜名与内置重名 → 导入后菜品列表会出现两张同名卡（一张内置、一张用户录入）。停下问用户：换名 / 仍导入接受重复 / 跳过。

## 执行步骤

1. **确定下一个可用 id**：扫描 `content/dishes/*.json`（跳过 `_TEMPLATE.json`）取最大 id，加 1。内置菜品占 `d001–d010`（在 `src/services/mock/dishes.ts` 的 `baseDishes`，不在 `content/`），用户录入从 `d011` 起递增。用户指定了 id 就用用户的，但必须校验不与已有冲突。
2. **为每道菜生成 `content/dishes/<id>.json`**：
   - `id` 必须等于文件名（去掉 `.json`）。绝不能出现 `d019..json` 这种多一个点的文件名——会让整次同步失败。
   - `title`、`coverImgUrl` 原样保留用户给的值，不要改。
   - 其余字段按菜名补全，风格与字段集合对齐 `content/dishes/` 下已有文件（参考 `d017.json`–`d020.json`）。字段要点见下方「字段约定」，骨架见 `assets/dish.template.json`。
3. **同步**：跑 `yarn content:sync`，确认终端输出「录入文件 N 个 → X 餐 / Y 菜 / Z 张首页卡片」且无报错。若报错（文件名/id 不一致、非 https、色块非法、`steps` 不连续等），按报错修正对应文件后重跑。
4. **校验**：
   - `npx tsc --noEmit` 必须 0 错误；
   - `yarn test` 必须全绿（`pretest` 会再跑一次同步）；
   - 需要出包确认时再跑 `yarn build:weapp`，并在 `dist/common.js` 里 grep 菜名或 id，确认数据打进入口包。
5. **汇报**：新增了哪些 id、跳过了哪些（同名已存在）、覆盖更新了哪些、哪些触发了碰撞检测及用户如何决定；是否通过校验、是否已出包。提醒用户在微信开发者工具里点「编译」（必要时清缓存重编译）才会看到新卡片。

## 字段约定

生成每个 `content/dishes/d0XX.json` 时：

- 必填且**不改**：`id`（=文件名）、`title`、`coverImgUrl`（用户给的值）。
- `coverKey`：回退背景色块，**只能用** `warm-orange` `tomato-red` `sage` `leaf-green` `wheat-gold` `terracotta` `chili` `oat` 这 8 个（来自 `src/services/mock/covers.ts`，非法值同步会失败）。选与菜品色调相近的。
- `images`：3 个合法色块 key，作为详情图图集的回退色。
- `category`：与已有菜品一致的分类名（如 下饭菜 / 家常菜 / 家常快手 / 汤羹 / 凉菜 / 一人食）。
- `tags`：2–3 个短标签；首页卡片只取前 2 个。
- `duration`：整数分钟；`difficulty`：**只能填 `简单` 或 `中等`**（同步脚本只认这两个，填 `困难` 会报错）；`servings`：整数。
- `date`：今天，格式 `YYYY.MM.DD`。
- `story`：2 段，口语化、带一条做菜小技巧，与 `d017`–`d020` 文风一致。
- `ingredients`：`[{ name, amount }]`，真实食材。
- `steps`：`[{ index, description }]`，`index` 从 1 开始连续。
- `likeCount`：`0`。
- `feed`：`{ "meta": "MM.DD · X 分钟 · 难度", "coverHeight": 300 }`（coverHeight 取 300 或 320）。
- 不写 `_readme` 字段（下划线字段同步会跳过，保持文件干净）。

## 不要做

- 不要改 `title` / `coverImgUrl`。
- 不要改页面源码（如 `src/pages/dish-list/index.tsx`）：菜品列表是数据驱动的，`dishes` 来自 `services/mock`，数据进了包页面自动更新，无需改页面。
- 不要把清单文件放进 `content/`。
- 不要让 id 与 `d001–d010` 内置菜或已有用户菜冲突。
- 想把几道菜归进「一餐」（首页 Banner / 一餐详情）是单独的事，需在 `content/entries/` 新建记录并在 `dishIds` 引用——不在本流程内，需要时单独处理。
