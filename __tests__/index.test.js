import {
  validateMockData,
  bannerItems,
  waterfallItems,
  feed,
  contents,
  dishes,
  sortedContents,
  findContent,
  findDish,
  makeContentId,
  resolveLikedContents,
  resolveLikedDishes,
} from '../src/services/mock'
import { displayLikes } from '../src/services/likes'

describe('v2.0 静态数据一致性（PRD §5.7）', () => {
  test('mock 数据校验无问题', () => {
    expect(validateMockData()).toEqual([])
  })

  test('数据规模：内置 13 条 feed / 7 条内容 / 10 道菜 + content/ 录入内容', () => {
    // 用下限断言，避免之后往 content/ 加内容就要改测试
    expect(feed.length).toBeGreaterThanOrEqual(13)
    expect(contents.length).toBeGreaterThanOrEqual(7)
    expect(dishes.length).toBeGreaterThanOrEqual(10)
  })
})

describe('首页切分规则（PRD §5.1）', () => {
  test('前 5 条进 Banner，其余进瀑布流，无重叠无重复', () => {
    expect(bannerItems).toHaveLength(5)
    expect(bannerItems.map((i) => i.id)).toEqual(feed.slice(0, 5).map((i) => i.id))
    expect(waterfallItems.map((i) => i.id)).toEqual(feed.slice(5).map((i) => i.id))
    const allIds = [...bannerItems, ...waterfallItems].map((i) => i.id)
    expect(new Set(allIds).size).toBe(feed.length)
  })

  test('feed 同时包含一餐与菜品两类内容', () => {
    expect(feed.some((i) => i.type === 'meal')).toBe(true)
    expect(feed.some((i) => i.type === 'dish')).toBe(true)
  })
})

describe('content/ 静态录入通道（见 content/README.md、PRD §14）', () => {
  test('manifest.pinned 第一项 = 首页 Banner 第一张', () => {
    expect(feed[0].id).toBe(bannerItems[0].id)
    expect(bannerItems[0].type).toBe('meal')
    expect(bannerItems[0].refId).toBe('202611121')
    expect(bannerItems[0].title).toContain('录入示例')
  })

  test('录入的一餐与菜品都进了实体库，可反查且引用完整', () => {
    const meal = findContent('202611121')
    expect(meal).toBeDefined()
    expect(meal.dishIds).toEqual(['d011', 'd008'])
    expect(findDish('d011')).toBeDefined()
    expect(sortedContents()[0].id).toBe('202611121')
  })

  test('录入内容生成的 FeedItem 与内置卡片同结构', () => {
    const mealCard = feed.find((i) => i.id === 'f-u-202611121')
    const dishCard = feed.find((i) => i.id === 'f-u-d011')
    expect(mealCard).toBeDefined()
    expect(dishCard).toBeDefined()
    ;[mealCard, dishCard].forEach((card) => {
      expect(card).toEqual(expect.objectContaining({
        id: expect.any(String),
        type: expect.any(String),
        refId: expect.any(String),
        title: expect.any(String),
        subtitle: expect.any(String),
        coverKey: expect.any(String),
        date: expect.any(String),
        meta: expect.any(String),
        tags: expect.any(Array),
        coverHeight: expect.any(Number),
      }))
    })
  })
})

describe('coverImgUrl 线上封面图（默认空则不展示）', () => {
  test('Banner 第一张带上 https 线上链接，实体与卡片一致', () => {
    const meal = findContent('202611121')
    expect(bannerItems[0].coverImgUrl).toMatch(/^https:\/\//)
    expect(meal?.coverImgUrl).toMatch(/^https:\/\//)
    expect(feed[0].coverImgUrl).toBe(bannerItems[0].coverImgUrl)
    expect(feed[0].coverImgUrl).toBe(meal?.coverImgUrl)
  })

  test('录入菜品 d011 的线上链接同步到实体与首页卡片', () => {
    const url = findDish('d011')?.coverImgUrl
    expect(url).toMatch(/^https:\/\//)
    expect(url).toContain('mmbiz_jpg/Fr1CT25crghSKhT6P')
    expect(feed.find((i) => i.id === 'f-u-d011')?.coverImgUrl).toBe(url)
  })

  test('未填的内容默认为空字符串，回退到色块', () => {
    // 录入模板里默认是空字符串，只有填了链接才展示线上图
    const template = require('fs').readFileSync(
      require('path').resolve(__dirname, '../content/dishes/_TEMPLATE.json'),
      'utf8'
    )
    expect(JSON.parse(template).coverImgUrl).toBe('')
    // 内置数据没有该字段，等价于「不展示」
    expect(findDish('d001')?.coverImgUrl).toBeUndefined()
  })

  test('所有 coverImgUrl 只允许 https 或空，自检无告警', () => {
    ;[feed, contents, dishes].forEach((list) => {
      list.forEach((entry) => {
        if (entry.coverImgUrl) expect(entry.coverImgUrl).toMatch(/^https:\/\//)
      })
    })
    expect(validateMockData()).toEqual([])
  })
})

describe('ID 规则（PRD §5.3）', () => {
  test('内容 id 是 9 位日期戳且唯一', () => {
    contents.forEach((c) => expect(c.id).toMatch(/^\d{9}$/))
    expect(new Set(contents.map((c) => c.id)).size).toBe(contents.length)
  })

  test('内容列表按数值降序', () => {
    const ids = sortedContents().map((c) => Number(c.id))
    expect(ids).toEqual([...ids].sort((a, b) => b - a))
    expect(ids[0]).toBe(Math.max(...ids))
  })

  test('makeContentId 生成正确日期戳', () => {
    expect(makeContentId(new Date(2026, 10, 8), 1)).toBe('202611081')
  })

  test('菜品 id 独立命名空间且格式统一', () => {
    dishes.forEach((d) => expect(d.id).toMatch(/^d\d{3}$/))
    expect(new Set(dishes.map((d) => d.id)).size).toBe(dishes.length)
  })
})

describe('引用完整性（PRD §5.4 §5.7）', () => {
  test('所有 feed.refId 命中对应类型实体', () => {
    feed.forEach((item) => {
      const target = item.type === 'meal' ? findContent(item.refId) : findDish(item.refId)
      expect(target).toBeDefined()
    })
  })

  test('每餐的 dishIds 都能反查到菜品', () => {
    contents.forEach((c) => c.dishIds.forEach((id) => expect(findDish(id)).toBeDefined()))
  })

  test('失效的喜欢 id 静默跳过', () => {
    expect(resolveLikedContents(['202611061', 'invalid-id']).map((c) => c.id)).toEqual(['202611061'])
    expect(resolveLikedDishes(['d002', 'invalid-id']).map((d) => d.id)).toEqual(['d002'])
  })
})

describe('点赞展示数（PRD §5.5）', () => {
  test('已赞 +1，未赞保持基数，取消后回落', () => {
    expect(displayLikes(28, false)).toBe(28)
    expect(displayLikes(28, true)).toBe(29)
    expect(displayLikes(28, false)).toBe(28)
  })
})
