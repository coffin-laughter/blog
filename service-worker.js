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
    "revision": "3cbb6882fce8b57556175b42874000b4"
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
    "url": "assets/js/app.1bec3bd4.js",
    "revision": "7b45fa9db5f154267e77a75b8c8b55a0"
  },
  {
    "url": "categories/index.html",
    "revision": "e60c66ef0f0fe6ecc91f99b1387f528c"
  },
  {
    "url": "categories/前端开发/index.html",
    "revision": "1ad4c9611d55cbd5994e39e37d8e4194"
  },
  {
    "url": "categories/前端开发/page/2/index.html",
    "revision": "600f8b6eb855823a117afb7afa8b167f"
  },
  {
    "url": "categories/前端开发/page/3/index.html",
    "revision": "209eabf9305eb320896bf896f908674c"
  },
  {
    "url": "categories/前端开发/page/4/index.html",
    "revision": "9f14aa2418fe70d61b7955fbe5c57172"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "62554279164b10dcfe4db0b4648260ce"
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
    "revision": "5310b7ed29e63fcbce33234199ea57ff"
  },
  {
    "url": "note/git 常用命令清单.html",
    "revision": "15882c6b1d03bc4e67c6ba1875ad194d"
  },
  {
    "url": "note/linux 常用命令.html",
    "revision": "2fa29038e0f08058e9dc8c22847b8409"
  },
  {
    "url": "note/前端知识体系汇总.html",
    "revision": "91e193ce07a6c7f263e2a27254ce96f1"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "a27978602fbbcb0b1624bf088a1f56c2"
  },
  {
    "url": "tag/CSS3/index.html",
    "revision": "aef106e0e1053532c3d8c3545436b993"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "7249d93b0676c8a6da778a7e9fd08537"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "8db14102c1a0a4df67ada116c9179259"
  },
  {
    "url": "tag/Excel/index.html",
    "revision": "ffd8163d8f776eea24778f121a63c0a4"
  },
  {
    "url": "tag/flex/index.html",
    "revision": "f868b3741c6c16ee858c915b6e0252b8"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e0a47acb047f00dfc405fb65d7b6a756"
  },
  {
    "url": "tag/hack/index.html",
    "revision": "3d02ca653e2c74dade6a9e32aedfe291"
  },
  {
    "url": "tag/http/index.html",
    "revision": "8219a8d01f29c43d8b1c3a3b97fe1b42"
  },
  {
    "url": "tag/index.html",
    "revision": "d2851ccdd2b6448073b19a8c94dd258d"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "efe0fe25149066f0e7c1888af4f0223f"
  },
  {
    "url": "tag/JSON/index.html",
    "revision": "c06059ad5021cc431034d6d7d89a809d"
  },
  {
    "url": "tag/LESS/index.html",
    "revision": "a8fc24f0fad0f52e50e463dd0a40a030"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "78813c0f818a0a9970b75e97f0320065"
  },
  {
    "url": "tag/loading/index.html",
    "revision": "ede023782a9eb2a433296459b2556050"
  },
  {
    "url": "tag/plugin/index.html",
    "revision": "8e35ec6e3ae7b9fbd0e731b2e2738349"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "32c1ca769dfb41387e4bcaa152bd6c12"
  },
  {
    "url": "tag/原生JS/index.html",
    "revision": "53109364b2cda76e6f2e71a5dbc5597d"
  },
  {
    "url": "tag/开发规范/index.html",
    "revision": "f04f476368e78d45e9342dd980038ffc"
  },
  {
    "url": "timeline/index.html",
    "revision": "8f56bfdc2e3f2ec5dfd990e669c9d262"
  },
  {
    "url": "web/html.css/CSS__flex 弹性盒模型.html",
    "revision": "ecdcff2bfc0a11f90a16704808ef2b0a"
  },
  {
    "url": "web/html.css/CSS__Hack.html",
    "revision": "cbe6c621df50a012e6cf0c6e86f0a9b1"
  },
  {
    "url": "web/html.css/CSS__LESS-Grid-实现栅格布局.html",
    "revision": "6f550fcc1d7f08e0f832c114fb4afdbc"
  },
  {
    "url": "web/html.css/CSS__LESS-函数方法.html",
    "revision": "bca787606f14e6f7da311c817ca48cc5"
  },
  {
    "url": "web/html.css/CSS__LESS-学习总结.html",
    "revision": "8fdbd7929bdc219d6f521db1d1472fb0"
  },
  {
    "url": "web/html.css/CSS__常用样式.html",
    "revision": "aaa3ee2d1f1cad72f5ae69bfea3e64fc"
  },
  {
    "url": "web/html.css/HTML__页面加载过程.html",
    "revision": "240db49b12d3bda4c383635616cc3485"
  },
  {
    "url": "web/html.css/Mobile__CSS使用的尺寸与设计稿（PSD）保持一致.html",
    "revision": "e857ecfb8ad0c291b467b918b3e97fc9"
  },
  {
    "url": "web/html.css/Mobile__常见问题及解决方案.html",
    "revision": "cf8737457bf790902d291543bd6ac9cf"
  },
  {
    "url": "web/javascript/ES6__学习笔记.html",
    "revision": "aff08fd951914389ed5c92dc8b93293e"
  },
  {
    "url": "web/javascript/JS__事件.html",
    "revision": "acce98b52134baf730c964c04d9001ec"
  },
  {
    "url": "web/javascript/JS__内置属性与方法.html",
    "revision": "5995f5435a2366c1d6270f4772818e1f"
  },
  {
    "url": "web/javascript/JS__字符串.html",
    "revision": "85a4b03d0604b19282343e6adbef912d"
  },
  {
    "url": "web/javascript/JS__对象属性操作.html",
    "revision": "854e5a445ca94ad12ab48307928c23ef"
  },
  {
    "url": "web/javascript/JS__常用工具函数.html",
    "revision": "6cc2562ac233f7f38d7acc1db5d4cb8f"
  },
  {
    "url": "web/javascript/JS__常用正则验证.html",
    "revision": "60cba9cfc490812945b864c4587d6264"
  },
  {
    "url": "web/javascript/JS__异步加载JS.html",
    "revision": "480904a0fb1070ecb607fee8683d1234"
  },
  {
    "url": "web/javascript/JS__性能优化.html",
    "revision": "b4861bfeb2c9dd467e4b53a60a7129ba"
  },
  {
    "url": "web/javascript/JS__操作JSON.html",
    "revision": "910726db66e06c01d3da4c1175213571"
  },
  {
    "url": "web/javascript/JS__数组.html",
    "revision": "acca5b6c17f19a82cd8f15bea158155c"
  },
  {
    "url": "web/javascript/JS__类型检查.html",
    "revision": "526732534addbfba1d891473d201bf3c"
  },
  {
    "url": "web/javascript/JS__节点操作.html",
    "revision": "89425f8c9c93178d85e72941ffae9935"
  },
  {
    "url": "web/javascript/JS__预编译-预解析.html",
    "revision": "f99b376f7c17ee6a595cd74ae7a1a7a3"
  },
  {
    "url": "web/plugin/Axios__HTTP 请求库.html",
    "revision": "f6784f4220c2dd167c24d7410ab03035"
  },
  {
    "url": "web/plugin/Handsontable__在线Excel表格.html",
    "revision": "23871eded303e4dafad13447eb18464f"
  },
  {
    "url": "web/plugin/jQuery__对应JavaScript书写.html",
    "revision": "423d4b4a78ab63a0316339e699f81f9b"
  },
  {
    "url": "web/plugin/jQuery__常用方法.html",
    "revision": "2b2c96dffa7bcc22ffbe1ca643d6f5a1"
  },
  {
    "url": "web/plugin/Plugin__JS-粒子动画.html",
    "revision": "16355bc6565002a44c6268434a32f923"
  },
  {
    "url": "web/vue/Vue__事件修饰符.html",
    "revision": "feb40e2ebec1ba884a91e0dab250dbb6"
  },
  {
    "url": "web/vue/Vue__指令.html",
    "revision": "91b3fa7299070f4ba09c66b4d129533a"
  },
  {
    "url": "web/vue/Vue__生命周期钩子.html",
    "revision": "bd08003d1fc983df26e775c12a668501"
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
