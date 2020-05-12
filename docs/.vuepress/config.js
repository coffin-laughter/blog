module.exports = {
  title: 'coffin\'s laughter',
  description: '苦非苦,乐非乐，只是一时的执念而已!',
  evergreen: true,
  dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: '/icons/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],
  // 配置永久链接
  permalink: '/:regular',
  markdown: {
    // 代码显示行号
    lineNumbers: true,
    // markdown-it-anchor 的选项
    anchor: { permalink: true },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2, 3] },
    // markdown 插件
    extendMarkdown: md => {
      md.set({ html: true });
      md.use(require("@iktakahiro/markdown-it-katex"));
      md.use(require("markdown-it-mark"));
      md.use(require("markdown-it-task-lists"));
      md.use(require("markdown-it-vuepress-code-snippet-enhanced"));
    }
  },
  plugins: [
    ["vuepress-plugin-boxx"],
    '@vuepress-reco/extract-code',
    ['@vuepress/medium-zoom', true],
    // 开启 PWA
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    // 彩带背景
    [
      "ribbon",
      {
        size: 90,
        opacity: 0.8,
        zIndex: -1
      }
    ],
  ],
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    logo: '/images/avatar.png',
    // 自动隐藏导航
    autoHideNavbar: true,
    // 主题颜色选择
    themePicker: true,
    // 搜索设置
    search: true,
    // 搜索显示条目数量
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    // 侧边导航层级
    sidebarDepth: 2,
    // 最后更新时间
    lastUpdated: '上次更新',
    // 作者
    author: 'coffin\'s laughter',
    // 项目开始时间，只填写年份
    startYear: '2020',
    // 备案号
    record: "",
    // 顶部导航设置
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      {
        text: '知识体系',
        icon: 'reco-category',
        link: '/note/前端知识体系汇总.md',
      },
      { text: '时间线', link: '/timeLine/', icon: 'reco-date' },
      { text: 'GitHub', link: 'https://github.com/coffin-laughter/coffin_laughter.github.io', icon: 'reco-github' },
    ],
    // 博客设置
    blogConfig: {
      tag: {
        location: 2, // 在导航栏菜单中所占的位置，默认3
        text: '标签', // 默认 “标签”
      },
    },
    valineConfig: {
      appId: 'fGlHnzqDtqV9gly96mYDpjmK-gzGzoHsz', // your appId
      appKey: '5P1oe1uOLisNaOfQWxCcTo2C',
      placeholder: '苦非苦,乐非乐，只是一时的执念而已！',
      notify: true,
      recordIP: true,
    },
  },
}
