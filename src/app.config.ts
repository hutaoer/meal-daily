export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/content-list/index',
    'pages/dish-list/index',
    'pages/profile/index',
    'pages/meal-detail/index',
    'pages/dish-detail/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#F8F3EC',
    navigationBarTitleText: '林小厨家常食记',
    navigationBarTextStyle: 'black',
    backgroundColor: '#F8F3EC',
  },
  tabBar: {
    color: '#9A8A73',
    selectedColor: '#E07856',
    backgroundColor: '#FFFFFF',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'assets/tabbar/home.png',
        selectedIconPath: 'assets/tabbar/home-active.png',
      },
      {
        pagePath: 'pages/content-list/index',
        text: '内容列表',
        iconPath: 'assets/tabbar/content.png',
        selectedIconPath: 'assets/tabbar/content-active.png',
      },
      {
        pagePath: 'pages/dish-list/index',
        text: '菜品列表',
        iconPath: 'assets/tabbar/dish.png',
        selectedIconPath: 'assets/tabbar/dish-active.png',
      },
      {
        pagePath: 'pages/profile/index',
        text: '我的',
        iconPath: 'assets/tabbar/profile.png',
        selectedIconPath: 'assets/tabbar/profile-active.png',
      },
    ],
  },
})
