module.exports = {
  title: "vuex笔记", //页面左侧头部标题
  description: "",
  home: true,
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    [
      "link",
      {
        rel: "icon",
        href: "/logo.jpg",
      },
    ], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: "/", // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      // 导航栏配置
      {
        text: "API",
        link: "/api/",
      },
    ],

    sidebar: [
      {
        title: "核心概念",
        collapsable: true, //是否展开
        children: [
          ["/核心概念/State", "State"],
          ["/核心概念/Action", "Action（异步操作）"],
          ["/核心概念/Mutation", "Mutation（同步操作）"],
          ["/核心概念/Getter", "Getter"],
          ["/核心概念/Module", "Module(模块化)"],
        ],
      },
    ],
    sidebarDepth: 5, // 侧边栏显示2级
  },
};
