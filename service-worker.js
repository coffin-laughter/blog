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
    "revision": "c2f54f9ec1c9a23ddd5e75834da0e69c"
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
    "url": "assets/js/app.c8e5440f.js",
    "revision": "f2f76466a03c6553a95638297ffe3647"
  },
  {
    "url": "categories/index.html",
    "revision": "ae82090dee558cb558ef7bbfb681af76"
  },
  {
    "url": "categories/前端开发/index.html",
    "revision": "fa18064b12ea36bbae8958e43456366d"
  },
  {
    "url": "categories/前端开发/page/2/index.html",
    "revision": "8491964d143840f08781bf8a28b15c22"
  },
  {
    "url": "categories/前端开发/page/3/index.html",
    "revision": "79499cfbb560994b1aebdfafa2576adb"
  },
  {
    "url": "categories/前端开发/page/4/index.html",
    "revision": "c27053ef3259ab3499e1fc1b4118e1f3"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "2e37372b58d43dfb9426a6fa2a90d6b6"
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
    "revision": "747e41080ffeb2643a538772ccadb73c"
  },
  {
    "url": "note/git 常用命令清单.html",
    "revision": "32a0c28f87685190521d48f3af8c51cd"
  },
  {
    "url": "note/linux 常用命令.html",
    "revision": "3929d6d855a88ac82af6354a91de2ef1"
  },
  {
    "url": "note/前端知识体系汇总.html",
    "revision": "584f83a13f593b96ed0c8a50d0450826"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "280df349d18c9284d8c00d3b4e15cdc6"
  },
  {
    "url": "tag/CSS3/index.html",
    "revision": "91eb8477fb7d8080e145164658d1008c"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "884c093dbccdc002325c8f78e0faf8d7"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "1a838da9bfa743f8689c2a512095aa47"
  },
  {
    "url": "tag/Excel/index.html",
    "revision": "deac1146f73740f9734ba55c62dda74f"
  },
  {
    "url": "tag/flex/index.html",
    "revision": "ec66cf08f987db5813c6f7241d0c66a1"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d885c7ecb70a20063080e9a702169cc9"
  },
  {
    "url": "tag/hack/index.html",
    "revision": "aafe4af37497d5bd53b4f66aa0c1d7ae"
  },
  {
    "url": "tag/http/index.html",
    "revision": "18baec30430513ebe83447cd267a0e55"
  },
  {
    "url": "tag/index.html",
    "revision": "c15aa44e17acfb36cf66bfa4f5c7399e"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "e347c3f3b29e34c39787a0f1ae9d181b"
  },
  {
    "url": "tag/JSON/index.html",
    "revision": "8f4a1a481753fc32042cc603e8cd8e4d"
  },
  {
    "url": "tag/LESS/index.html",
    "revision": "da7161dd2986966a08f06222f9959f26"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "c2756d9f57b1010161a4f0d4f197dca8"
  },
  {
    "url": "tag/loading/index.html",
    "revision": "c8fbee158ec8541e40f48ac1407409f4"
  },
  {
    "url": "tag/plugin/index.html",
    "revision": "a1b7ce89fd217cfa757a2312a67882ad"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "11c9f55a1a83657038ecde949566d13f"
  },
  {
    "url": "tag/原生JS/index.html",
    "revision": "0c6b8e4d741a8517e89076c77ec508a3"
  },
  {
    "url": "tag/开发规范/index.html",
    "revision": "6167a3d57c47c0a88a3d3f3d7b678885"
  },
  {
    "url": "timeline/index.html",
    "revision": "aef37ee69768375966060a316b2d624d"
  },
  {
    "url": "web/html.css/CSS__flex 弹性盒模型.html",
    "revision": "f7640878dc958f998374c6b077d525fb"
  },
  {
    "url": "web/html.css/CSS__Hack.html",
    "revision": "d8489c260abaa9cba5e1939f457d8713"
  },
  {
    "url": "web/html.css/CSS__LESS-Grid-实现栅格布局.html",
    "revision": "5954b9783a7f67ff217475d934be0c8d"
  },
  {
    "url": "web/html.css/CSS__LESS-函数方法.html",
    "revision": "26c803504bd695d72a0b2eea31120e7f"
  },
  {
    "url": "web/html.css/CSS__LESS-学习总结.html",
    "revision": "76494e044945845e9e2aff5e06998a1e"
  },
  {
    "url": "web/html.css/CSS__常用样式.html",
    "revision": "3ed48c7272498222448c30cfdccca40b"
  },
  {
    "url": "web/html.css/HTML__页面加载过程.html",
    "revision": "f8bd07f02388c0f4e71b0dbe7f929a3d"
  },
  {
    "url": "web/html.css/Mobile__CSS使用的尺寸与设计稿（PSD）保持一致.html",
    "revision": "2cfd73e2d7002151017043b044234cfd"
  },
  {
    "url": "web/html.css/Mobile__常见问题及解决方案.html",
    "revision": "19add8e30f9d84e46a732d25156b3061"
  },
  {
    "url": "web/javascript/ES6__学习笔记.html",
    "revision": "c2095671f18e91f71293e9643d28ef51"
  },
  {
    "url": "web/javascript/JS__事件.html",
    "revision": "82c3b0c42c7f0bf7bd53af1e31e87efe"
  },
  {
    "url": "web/javascript/JS__内置属性与方法.html",
    "revision": "ae1ea01b02bde505f7dd634bd84c348d"
  },
  {
    "url": "web/javascript/JS__字符串.html",
    "revision": "6879f6c7e0c95aa28120edf24f31dad8"
  },
  {
    "url": "web/javascript/JS__对象属性操作.html",
    "revision": "d99f59827567abad5dfd534affd6ce5b"
  },
  {
    "url": "web/javascript/JS__常用工具函数.html",
    "revision": "97ee9bac0ccee99df53a312f9dd2f5f7"
  },
  {
    "url": "web/javascript/JS__常用正则验证.html",
    "revision": "ec331df3905242aebc41ffc7e0eba5e3"
  },
  {
    "url": "web/javascript/JS__异步加载JS.html",
    "revision": "8ce40c677cbb36b6863a45177410744c"
  },
  {
    "url": "web/javascript/JS__性能优化.html",
    "revision": "0a0c26c83fc27f367f516f5c625e5a36"
  },
  {
    "url": "web/javascript/JS__操作JSON.html",
    "revision": "3d53633f0933c4924bacf1c672245fd1"
  },
  {
    "url": "web/javascript/JS__数组.html",
    "revision": "7657a3aef84004bc5b5adc65edb2776c"
  },
  {
    "url": "web/javascript/JS__类型检查.html",
    "revision": "49f9021c75ab11f2b11e50474e745734"
  },
  {
    "url": "web/javascript/JS__节点操作.html",
    "revision": "ad31d5be1040c15e812ccb59e6354f62"
  },
  {
    "url": "web/javascript/JS__预编译-预解析.html",
    "revision": "45abf182e942bc7d8c91a4d4b2389989"
  },
  {
    "url": "web/plugin/Axios__HTTP 请求库.html",
    "revision": "7858acba3b936c573e36fc63dc85ba71"
  },
  {
    "url": "web/plugin/Handsontable__在线Excel表格.html",
    "revision": "abc49cee0bca9eb7869a93a9ce257222"
  },
  {
    "url": "web/plugin/jQuery__对应JavaScript书写.html",
    "revision": "7829ca1d9764c2f6dbb06dc0316e17d7"
  },
  {
    "url": "web/plugin/jQuery__常用方法.html",
    "revision": "f39ffe5647a5cf7db09a8363f13059e3"
  },
  {
    "url": "web/plugin/Plugin__JS-粒子动画.html",
    "revision": "ff0a15efcc06528d580d2d77aa1624a4"
  },
  {
    "url": "web/vue/Vue__事件修饰符.html",
    "revision": "fac0a39a78dd04852531dcf6be7bbc8a"
  },
  {
    "url": "web/vue/Vue__指令.html",
    "revision": "3444233045944764533f1ad64dcac6de"
  },
  {
    "url": "web/vue/Vue__生命周期钩子.html",
    "revision": "52f1d08f6b8daf235cb2d86600b7af5c"
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
