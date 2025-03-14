const tabPageArr = [{
  pagePath: 'pages/HomePage/index',
  text: '大师简介',
  iconPath:'./assets/icons/home_gray.png',
  selectedIconPath: "./assets/icons/home.png",
},
{
  pagePath: 'pages/Class/ClassList/index',
  text: '课堂',
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
  },
  {
    pagePath: 'pages/Login/index',
    text: '登录',
  },
  {
    pagePath: 'pages/PayResult/index',
    text: '支付结果',
  },
  
]

export default defineAppConfig({
  pages: allPageArr.map((i)=>(i.pagePath)),
  lazyCodeLoading: "requiredComponents",
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '富山德易堂',
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

