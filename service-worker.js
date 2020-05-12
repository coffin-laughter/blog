/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1fa09cb7bb7c6d6f8ece8fd205a65f78"
  },
  {
    "url": "assets/css/0.styles.b40e1b27.css",
    "revision": "80fd85bb42ed9c550be335459aca41d0"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.ead6e502.js",
    "revision": "f0a7332f36780b49387fb0604b8724e8"
  },
  {
    "url": "assets/js/10.32087cfc.js",
    "revision": "4d1efb4a2c0c151f04d35a85ff4cf7c2"
  },
  {
    "url": "assets/js/11.fee32a41.js",
    "revision": "e7833cd48a388d24b1258926d36bd936"
  },
  {
    "url": "assets/js/12.c8e7f88c.js",
    "revision": "38084b385e4ea86898cc984650004de1"
  },
  {
    "url": "assets/js/13.5f81c120.js",
    "revision": "0d63be951697c6d8de67ded73efd72b0"
  },
  {
    "url": "assets/js/14.cefc96fb.js",
    "revision": "3a437afbbcf87615f1120a40950a90fe"
  },
  {
    "url": "assets/js/15.b7f3264d.js",
    "revision": "7e42d85ba74ae7b6cd679602cca87be4"
  },
  {
    "url": "assets/js/16.9ad9b0ab.js",
    "revision": "70099d2a9e430329599531a9fc7b3b31"
  },
  {
    "url": "assets/js/17.5adde41a.js",
    "revision": "62aef28542d7c67fa5e3be03c99009ac"
  },
  {
    "url": "assets/js/18.eb61c3fc.js",
    "revision": "989e34c807f6ea8218b1c7bde1133df7"
  },
  {
    "url": "assets/js/19.792c83ea.js",
    "revision": "d34ccd1de6b6320ec7368bf53485408d"
  },
  {
    "url": "assets/js/20.bedf669d.js",
    "revision": "c7ecb282ece507d199d489c25988b4d6"
  },
  {
    "url": "assets/js/21.df5b219b.js",
    "revision": "37d7e9fab778935b4d60d1930f4e973f"
  },
  {
    "url": "assets/js/22.a7caffe8.js",
    "revision": "fba1322387edfd62af79a79e19879cf2"
  },
  {
    "url": "assets/js/23.d2bcb193.js",
    "revision": "ae8be75057a32219235cf7f8f25f49c2"
  },
  {
    "url": "assets/js/24.1916efb3.js",
    "revision": "c92019d9f4fe1800d41ab20d05a695b1"
  },
  {
    "url": "assets/js/25.edcb1b98.js",
    "revision": "bc6e46dfa55bbb325b0505037a628ff3"
  },
  {
    "url": "assets/js/26.403a5dc4.js",
    "revision": "518e5ff3ad3d057d5197c94347719b07"
  },
  {
    "url": "assets/js/27.716cd257.js",
    "revision": "5c6675945ce8fe8ec4612dbc9d83408b"
  },
  {
    "url": "assets/js/28.1a650543.js",
    "revision": "f69f6c5a5e7615e11adad35c1fdad7e2"
  },
  {
    "url": "assets/js/29.9a91fd4c.js",
    "revision": "9313a71f15b2b5dda808fdf698d1f7d8"
  },
  {
    "url": "assets/js/3.3e9e19a5.js",
    "revision": "36b721f393ffa71d0a37013d9cd8941e"
  },
  {
    "url": "assets/js/30.93d39d90.js",
    "revision": "13a1a7e6a215bb3dca426cc9421d209f"
  },
  {
    "url": "assets/js/31.cb6f9d5c.js",
    "revision": "5fed4f68eed6f31b9239eb32f70c919a"
  },
  {
    "url": "assets/js/32.e5494127.js",
    "revision": "acafd7b6a23f76b3c99714a2aa1cfbf2"
  },
  {
    "url": "assets/js/33.130121af.js",
    "revision": "0814ba06dd08b6208e7e2cce1065894b"
  },
  {
    "url": "assets/js/34.44d52e09.js",
    "revision": "848420b4b1edc59cc3aa7429e39c0fe3"
  },
  {
    "url": "assets/js/35.413c5ae2.js",
    "revision": "06028a5afd5edba05624fc4d2a4284c4"
  },
  {
    "url": "assets/js/36.72fe5d6c.js",
    "revision": "10415d009e0ec4d572ecced15f63bd87"
  },
  {
    "url": "assets/js/37.0f808c16.js",
    "revision": "6bbb56e12aa45319ba626be833d00b65"
  },
  {
    "url": "assets/js/38.ea0e6d86.js",
    "revision": "b2d9b58583548f98aae11fc4486d65c4"
  },
  {
    "url": "assets/js/39.5acb2492.js",
    "revision": "f895a28df0a6391caa987bcfa8954283"
  },
  {
    "url": "assets/js/4.6e35690b.js",
    "revision": "d7e720ee9bacb277ce0eddb90b19af89"
  },
  {
    "url": "assets/js/40.2eb0608b.js",
    "revision": "bfcc360cb7c3b1b31a5708aa54a1f7d7"
  },
  {
    "url": "assets/js/41.96c5b8a2.js",
    "revision": "3553c85a7b84f594a9a16829f5bc40f5"
  },
  {
    "url": "assets/js/42.4dd5b4bd.js",
    "revision": "ee0a4045e4899f87cfd33939614310b2"
  },
  {
    "url": "assets/js/43.21e7792d.js",
    "revision": "9de480c0ea40f36c3cda9cb462b3a973"
  },
  {
    "url": "assets/js/44.298127d3.js",
    "revision": "31bfe251b32fa1d7744dcaf43a0528a8"
  },
  {
    "url": "assets/js/45.db749415.js",
    "revision": "dc68d08d9a3ca05b01a6377acd0e7604"
  },
  {
    "url": "assets/js/46.b7451a71.js",
    "revision": "32c4190d97ed4ce0d443e5ef447d1a03"
  },
  {
    "url": "assets/js/5.7af8b50b.js",
    "revision": "ffdc566c18bb0ae800d87762c9791026"
  },
  {
    "url": "assets/js/6.d00e6743.js",
    "revision": "a34cc41552073aa3836bf84eb45e5383"
  },
  {
    "url": "assets/js/7.91afb748.js",
    "revision": "a3378f772a864f7af27ea1e17396e4f3"
  },
  {
    "url": "assets/js/8.dbdab067.js",
    "revision": "25381afbdee1c32c5ea3adc793dedba0"
  },
  {
    "url": "assets/js/9.71f8ec94.js",
    "revision": "480449326d0700afaeb51cece720933e"
  },
  {
    "url": "assets/js/app.1e33857b.js",
    "revision": "12e42d14c58e46e3c3810b6ed3b7e20b"
  },
  {
    "url": "categories/index.html",
    "revision": "f24177496254b7e0209faecf5713e307"
  },
  {
    "url": "categories/前端开发/index.html",
    "revision": "5de09ede6ee63aa69986c0abb51f8c74"
  },
  {
    "url": "categories/前端开发/page/2/index.html",
    "revision": "52ca7840c9256fbcbdcf849d85aff07a"
  },
  {
    "url": "categories/前端开发/page/3/index.html",
    "revision": "032357657ba5e43c209905e48f2becb9"
  },
  {
    "url": "categories/前端开发/page/4/index.html",
    "revision": "50dfbdb45721c3dc16a68983efb6183e"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "8bcd7818884d50a2feed3f3b1a7709d2"
  },
  {
    "url": "images/avatar.png",
    "revision": "6ccb4abbca3ce50377a188553e8a34a8"
  },
  {
    "url": "images/banner.jpg",
    "revision": "464d213730d898cdf3fcc367ee53fe9e"
  },
  {
    "url": "images/line_bg.svg",
    "revision": "5825f033c6ff12cd1ed1f3c99dff5e4b"
  },
  {
    "url": "index.html",
    "revision": "eb020818af6b3cca4963eaa20f4922e1"
  },
  {
    "url": "note/git 常用命令清单.html",
    "revision": "7d1b3e70397cda3f9d49b532d6706721"
  },
  {
    "url": "note/linux 常用命令.html",
    "revision": "d414d5131a71a593c08ff5de73499757"
  },
  {
    "url": "note/前端知识体系汇总.html",
    "revision": "807c79dc1c49cf59de91a7b34017e4e5"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "fefcdb7857726411124460f010b26e4f"
  },
  {
    "url": "tag/CSS3/index.html",
    "revision": "fd68b2e3c9f72ac4e89021c57e1cd672"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "5582d87ef539be7ecbeba88be6266fd9"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "0a2534d85fb8ae0f5a3ee486f40138d4"
  },
  {
    "url": "tag/Excel/index.html",
    "revision": "37830e2e8644911119e76f875ab11604"
  },
  {
    "url": "tag/flex/index.html",
    "revision": "705aa8678766aacae26c7fa848e4028d"
  },
  {
    "url": "tag/git/index.html",
    "revision": "9184cde63f824eec65354058bfb3b510"
  },
  {
    "url": "tag/hack/index.html",
    "revision": "eb9902a694a7a58d6f3f59d236c9859d"
  },
  {
    "url": "tag/http/index.html",
    "revision": "c8db0a6c6e0261315db0c3fa36280f8c"
  },
  {
    "url": "tag/index.html",
    "revision": "21ff278fa0cf1b8d5606238b2fe0d0b2"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "db143397f78005686c87d101e7ca2cee"
  },
  {
    "url": "tag/JSON/index.html",
    "revision": "3a2c14a5f4452187fda2497713d4f38b"
  },
  {
    "url": "tag/LESS/index.html",
    "revision": "cc5980a935adb5b2ad2c0ccd5a467f2a"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "8195815cf94dc2e603b8fd9c9664060d"
  },
  {
    "url": "tag/loading/index.html",
    "revision": "e1bd1000b877408d11cf953322a25a70"
  },
  {
    "url": "tag/plugin/index.html",
    "revision": "0256663209d1621d1ce11afb163f01f6"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "32754a834ce6e59acf54d69d15abef36"
  },
  {
    "url": "tag/原生JS/index.html",
    "revision": "b37f290e362376f5e4a90d951e9960bf"
  },
  {
    "url": "tag/开发规范/index.html",
    "revision": "e8b588d9e8016984e31dd3b8fbf091ff"
  },
  {
    "url": "timeline/index.html",
    "revision": "5dd197e9a4c0988d0ae75cfb3d96ca31"
  },
  {
    "url": "web/html.css/CSS__flex 弹性盒模型.html",
    "revision": "40fe8e8a0ec795d71bd1844c188ea797"
  },
  {
    "url": "web/html.css/CSS__Hack.html",
    "revision": "6d391d6af250da0d548eba7f0e94c150"
  },
  {
    "url": "web/html.css/CSS__LESS-Grid-实现栅格布局.html",
    "revision": "577830dce1f867a3520647d952429115"
  },
  {
    "url": "web/html.css/CSS__LESS-函数方法.html",
    "revision": "8e0574d383cfa34351096b975ac933c8"
  },
  {
    "url": "web/html.css/CSS__LESS-学习总结.html",
    "revision": "4bde9403fa3e111471f490d81c2ee256"
  },
  {
    "url": "web/html.css/CSS__常用样式.html",
    "revision": "88278b168406e994430f9671b4c89ebc"
  },
  {
    "url": "web/html.css/HTML__页面加载过程.html",
    "revision": "18358565b543a66dc28bc817977015db"
  },
  {
    "url": "web/html.css/Mobile__CSS使用的尺寸与设计稿（PSD）保持一致.html",
    "revision": "791a83534184502188a6cf6eff88bbe2"
  },
  {
    "url": "web/html.css/Mobile__常见问题及解决方案.html",
    "revision": "90ad21f335609b51343728d49468473f"
  },
  {
    "url": "web/javascript/ES6__学习笔记.html",
    "revision": "332f5ec623726684f1b17a0f8044088a"
  },
  {
    "url": "web/javascript/JS__事件.html",
    "revision": "81faf66e399638d69adc0384b198b5fb"
  },
  {
    "url": "web/javascript/JS__内置属性与方法.html",
    "revision": "37e32aadb407cb3c26e9e63f8f94d26b"
  },
  {
    "url": "web/javascript/JS__字符串.html",
    "revision": "5bcf1c5355e2aa629509ee5ff58a657d"
  },
  {
    "url": "web/javascript/JS__对象属性操作.html",
    "revision": "2b161bf3be5b9a91e5be2ac317d93ea7"
  },
  {
    "url": "web/javascript/JS__常用工具函数.html",
    "revision": "b763e578dc21e3fce9125dc813749bd2"
  },
  {
    "url": "web/javascript/JS__常用正则验证.html",
    "revision": "48a09c956d253f108bb4336150baeb8d"
  },
  {
    "url": "web/javascript/JS__异步加载JS.html",
    "revision": "4697e76e39a06917d0bfc3eb74ddbc09"
  },
  {
    "url": "web/javascript/JS__性能优化.html",
    "revision": "9bb04997e6c1bd8afe9c75e19710f19e"
  },
  {
    "url": "web/javascript/JS__操作JSON.html",
    "revision": "e13068fe40595227ed6319bf5956cf52"
  },
  {
    "url": "web/javascript/JS__数组.html",
    "revision": "2fae6d8bde6f12ed49abdd5284e370b1"
  },
  {
    "url": "web/javascript/JS__类型检查.html",
    "revision": "53eee4bb1966fa2cbaf51c200926b126"
  },
  {
    "url": "web/javascript/JS__节点操作.html",
    "revision": "873af0393dc50a6d815a1c42b6b6fee7"
  },
  {
    "url": "web/javascript/JS__预编译-预解析.html",
    "revision": "f501d50a42909ed90352902a3163e54c"
  },
  {
    "url": "web/plugin/Axios__HTTP 请求库.html",
    "revision": "3210d6f2d9c25b846e0557ecf8269ce0"
  },
  {
    "url": "web/plugin/Handsontable__在线Excel表格.html",
    "revision": "38b6cfd6f840d1dbbbb0b3a4bd360282"
  },
  {
    "url": "web/plugin/jQuery__对应JavaScript书写.html",
    "revision": "76fa71ae945afa84c0da077de44d51fa"
  },
  {
    "url": "web/plugin/jQuery__常用方法.html",
    "revision": "b31f11dc9288ba34d79ba8f2391dd00d"
  },
  {
    "url": "web/plugin/Plugin__JS-粒子动画.html",
    "revision": "3dee138cc751cdf0194e45d95651a732"
  },
  {
    "url": "web/vue/Vue__事件修饰符.html",
    "revision": "101737e8a49e49f907c1fb8e84f1c4de"
  },
  {
    "url": "web/vue/Vue__指令.html",
    "revision": "bb21965550dcf5dfbd7247b73467c21a"
  },
  {
    "url": "web/vue/Vue__生命周期钩子.html",
    "revision": "1adfb3242c5b15dbe8307ebd223c6449"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
