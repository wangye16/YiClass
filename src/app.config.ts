const tabPageArr = [{
  pagePath: 'pages/HomePage/index',
  text: '主页',
  iconPath:'./assets/icons/home_gray.png',
  selectedIconPath: "./assets/icons/home.png",
},
{
  pagePath: 'pages/Class/ClassList/index',
  text: '课程列表',
  iconPath:'./assets/icons/book_gray.png',
  selectedIconPath: "./assets/icons/book.png",
},
{
  pagePath: 'pages/My/index',
  text: '我的',
  iconPath:'./assets/icons/my_gray.png',
  selectedIconPath: "./assets/icons/my.png",
}]

const allPageArr = [
  
  ...tabPageArr,
  {
    pagePath: 'pages/Class/ClassDesc/index',
    text: '课程详情',
    iconPath:'./assets/icons/book_gray.png',
    selectedIconPath: "./assets/icons/book.png",
  }
]

export default defineAppConfig({
  pages: allPageArr.map((i)=>(i.pagePath)),
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    // custom: true,
    color: '#9CA3AF',
    selectedColor: '#000000',
    backgroundColor: '#fff',
    list: tabPageArr,
  },
})

