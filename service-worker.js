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
    "revision": "28917363edb175955ff63ef1fe49ad0d"
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
    "url": "assets/js/app.0741e5b5.js",
    "revision": "8f8ee5a12de082c8d9fd56b6c18b3826"
  },
  {
    "url": "categories/index.html",
    "revision": "fb918070b9768c6a7378cb6ca9a40675"
  },
  {
    "url": "categories/前端开发/index.html",
    "revision": "4b5b27191d5efbddf964bc502e0f200b"
  },
  {
    "url": "categories/前端开发/page/2/index.html",
    "revision": "65c3161e977c1a379cf208d618020bbc"
  },
  {
    "url": "categories/前端开发/page/3/index.html",
    "revision": "4ab2d9119feb74431701ff295b323204"
  },
  {
    "url": "categories/前端开发/page/4/index.html",
    "revision": "3f99b1c4bd45bf17b402e953532df0fe"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "c10e5ed396b75e96927d9392d3c20b34"
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
    "revision": "b995875c5a34587a4a5d9d2be54b4353"
  },
  {
    "url": "note/git 常用命令清单.html",
    "revision": "9de37ae16a69f34d2d8d5cf7b872de18"
  },
  {
    "url": "note/linux 常用命令.html",
    "revision": "9e61ed58d66f2cc096d3f345373fab68"
  },
  {
    "url": "note/前端知识体系汇总.html",
    "revision": "8583f8816ebc064050356c9c0feb9c69"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "5dd1db74e499261a74a8cc4a03e7a656"
  },
  {
    "url": "tag/CSS3/index.html",
    "revision": "18f67fa19e7f99f2440033a0192d1d13"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "af3c1f7513cf5b99c416e72e0b86001f"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "435ff16ae49423e9675785034ac4e444"
  },
  {
    "url": "tag/Excel/index.html",
    "revision": "20fb812f376554d343ca3d4361b29653"
  },
  {
    "url": "tag/flex/index.html",
    "revision": "3f46cfe6b1e14229467cfe74664e4322"
  },
  {
    "url": "tag/git/index.html",
    "revision": "bd1ffbf84a7d4eef15e4f56196f9b0a8"
  },
  {
    "url": "tag/hack/index.html",
    "revision": "59b540790215340c521b60e100653a49"
  },
  {
    "url": "tag/http/index.html",
    "revision": "fbc950dcc20171decf0a8738d9b08c54"
  },
  {
    "url": "tag/index.html",
    "revision": "45f0eccc15a4f324d9df55bcd4920085"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "a90622aeaebcf9f95af0b90f27bbfd15"
  },
  {
    "url": "tag/JSON/index.html",
    "revision": "de12cb695550b5c5736850a287b4b92a"
  },
  {
    "url": "tag/LESS/index.html",
    "revision": "9f968991347641bbc548e3d20c9bf2a4"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "acb0c003ad76fb1f33c5c8f509e60a6e"
  },
  {
    "url": "tag/loading/index.html",
    "revision": "c8f2de8ae3de51930bac8807859638bf"
  },
  {
    "url": "tag/plugin/index.html",
    "revision": "04d2ae21c575de200bc99775e71e7f7c"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "22161e5a820f5a24f6bad5f57c1e2308"
  },
  {
    "url": "tag/原生JS/index.html",
    "revision": "6860a0acb9b3d2ef3d95488229fcc8a6"
  },
  {
    "url": "tag/开发规范/index.html",
    "revision": "3cd101327c5d2f4c0fcdae2215641b54"
  },
  {
    "url": "timeline/index.html",
    "revision": "e2282b77f7b522ded7bc669355a6620d"
  },
  {
    "url": "web/html.css/CSS__flex 弹性盒模型.html",
    "revision": "2e76bf09bddeefc36765a989bc8c0127"
  },
  {
    "url": "web/html.css/CSS__Hack.html",
    "revision": "cb49c91ffe997c32d842f9c1412af0d3"
  },
  {
    "url": "web/html.css/CSS__LESS-Grid-实现栅格布局.html",
    "revision": "f3b5c8f7af6b9c73b57813922c3f7075"
  },
  {
    "url": "web/html.css/CSS__LESS-函数方法.html",
    "revision": "721b765c61fde4d481eb8851995f8199"
  },
  {
    "url": "web/html.css/CSS__LESS-学习总结.html",
    "revision": "16d1a95859ea0797a6e1e72ba1d7acbb"
  },
  {
    "url": "web/html.css/CSS__常用样式.html",
    "revision": "1cbe520aaa6e4cd2785e622289f6e4dc"
  },
  {
    "url": "web/html.css/HTML__页面加载过程.html",
    "revision": "1b748136cf010fb1a478ae99ebfc346b"
  },
  {
    "url": "web/html.css/Mobile__CSS使用的尺寸与设计稿（PSD）保持一致.html",
    "revision": "156a0f9b07cdf77cb5306c2d04cc0fe2"
  },
  {
    "url": "web/html.css/Mobile__常见问题及解决方案.html",
    "revision": "f35ffd668887e610ea8b1afd7ca16d27"
  },
  {
    "url": "web/javascript/ES6__学习笔记.html",
    "revision": "51d3522f6d4b4435e2ae437c6cec29a9"
  },
  {
    "url": "web/javascript/JS__事件.html",
    "revision": "15d67899a8ca35892793c77ad3d15579"
  },
  {
    "url": "web/javascript/JS__内置属性与方法.html",
    "revision": "ffed2028f49adc9cdc8df83f3435eb06"
  },
  {
    "url": "web/javascript/JS__字符串.html",
    "revision": "7683e97e4152bf2cff96d8e4717a3a79"
  },
  {
    "url": "web/javascript/JS__对象属性操作.html",
    "revision": "810f0a1efca822d3b8210efa232a27e8"
  },
  {
    "url": "web/javascript/JS__常用工具函数.html",
    "revision": "0740d6b9732dd3324c2aa1694f54682c"
  },
  {
    "url": "web/javascript/JS__常用正则验证.html",
    "revision": "f343fedbce1d9903f06d57a2d4e31bc5"
  },
  {
    "url": "web/javascript/JS__异步加载JS.html",
    "revision": "dca06027c6a2ed09279f805b1992ff85"
  },
  {
    "url": "web/javascript/JS__性能优化.html",
    "revision": "162d32ce328cbf961154a5221ec022a9"
  },
  {
    "url": "web/javascript/JS__操作JSON.html",
    "revision": "c208f63b2766d279eda5b39db2c89c4f"
  },
  {
    "url": "web/javascript/JS__数组.html",
    "revision": "14404c07fbb6b6809f8850bb8f0a8046"
  },
  {
    "url": "web/javascript/JS__类型检查.html",
    "revision": "1c0a6069bb47a83e506568e2f11c109b"
  },
  {
    "url": "web/javascript/JS__节点操作.html",
    "revision": "fb818125e3069ca4d52121d1c2f80b28"
  },
  {
    "url": "web/javascript/JS__预编译-预解析.html",
    "revision": "b34eb66b568912d539e35b5b946a044c"
  },
  {
    "url": "web/plugin/Axios__HTTP 请求库.html",
    "revision": "18c7340f6bcf85e31b58d9a6687a5a98"
  },
  {
    "url": "web/plugin/Handsontable__在线Excel表格.html",
    "revision": "97a83a635057fd052240a18c38a6bf33"
  },
  {
    "url": "web/plugin/jQuery__对应JavaScript书写.html",
    "revision": "24ef6a077a528d0ed7f198bfcdd0daf6"
  },
  {
    "url": "web/plugin/jQuery__常用方法.html",
    "revision": "6d1f0bbf967b68f81eae0a836bbfe8b2"
  },
  {
    "url": "web/plugin/Plugin__JS-粒子动画.html",
    "revision": "4e3ecd6e5b555fe170876b7d4863cb30"
  },
  {
    "url": "web/vue/Vue__事件修饰符.html",
    "revision": "e9a83f54e5affaea4007bb5acdfa94ce"
  },
  {
    "url": "web/vue/Vue__指令.html",
    "revision": "be9fccce653650a94dacfab17803e242"
  },
  {
    "url": "web/vue/Vue__生命周期钩子.html",
    "revision": "7056eb7be93a423742a04d74b6d1eb2b"
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
