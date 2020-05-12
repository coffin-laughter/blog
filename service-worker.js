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
    "revision": "b9403e78a5187d55e57a5a9aaed1888f"
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
    "url": "assets/js/app.dd1d7109.js",
    "revision": "1660c5ca04aa72bf474f21ea8463f19f"
  },
  {
    "url": "categories/index.html",
    "revision": "cd1c9cb6b2a6917801771980245bcf35"
  },
  {
    "url": "categories/前端开发/index.html",
    "revision": "ede28da5e71dd214b194425bbba77488"
  },
  {
    "url": "categories/前端开发/page/2/index.html",
    "revision": "eac345a08172000627b4b3acf7b1d144"
  },
  {
    "url": "categories/前端开发/page/3/index.html",
    "revision": "72128dda6f20195eff36c164853fd247"
  },
  {
    "url": "categories/前端开发/page/4/index.html",
    "revision": "34f3b3df5852dd52bcfb3e5c302bf9e7"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "bf491535983d86f56d819152fbb4b8ba"
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
    "revision": "404d5ec886e930fa9a4427abfa578b63"
  },
  {
    "url": "note/git 常用命令清单.html",
    "revision": "45cfb23c93b06d519d649b92c13570d5"
  },
  {
    "url": "note/linux 常用命令.html",
    "revision": "c51515a0eff2ca10055108f6b4875874"
  },
  {
    "url": "note/前端知识体系汇总.html",
    "revision": "5bf8ea689e1ae1fbe5d63b483d553f71"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "107352eaaf8dbdf31635cf003cd70d17"
  },
  {
    "url": "tag/CSS3/index.html",
    "revision": "7ca54dbd67633a8a5f0dfbe543f7bb66"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "ac568caf34a7949ec0c20d1572e0a3bc"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "596743a2bc98f76d88aa58b80c24dfad"
  },
  {
    "url": "tag/Excel/index.html",
    "revision": "a962c070b3c3a92e3ceccc120d4cca8e"
  },
  {
    "url": "tag/flex/index.html",
    "revision": "5de5095858ed54cfe555c057a9bf7b28"
  },
  {
    "url": "tag/git/index.html",
    "revision": "a92205cf9e9b5ced6651b81f60f51ac3"
  },
  {
    "url": "tag/hack/index.html",
    "revision": "c8febd5ea8f31c93a159345b104347a9"
  },
  {
    "url": "tag/http/index.html",
    "revision": "9726627deefa3929812e5343d4f11a7d"
  },
  {
    "url": "tag/index.html",
    "revision": "0286b4857194c6f54dcca84ec1d5efae"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "305496bfd7de2dd734bdfb59702f7fb8"
  },
  {
    "url": "tag/JSON/index.html",
    "revision": "675e2d3b4ef97f931ac6292f4983aaf0"
  },
  {
    "url": "tag/LESS/index.html",
    "revision": "9ee22a29c62f49a428ca6bf748400367"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "8bc78b4d611a4e0ba12355310a38fdc5"
  },
  {
    "url": "tag/loading/index.html",
    "revision": "25d321b9cf90c8b1098eb34f7f6d6e9e"
  },
  {
    "url": "tag/plugin/index.html",
    "revision": "2d1e678316a4f8604df98e977b198a1a"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "1ef3c2bd7def7d046f75ae4b94267d5a"
  },
  {
    "url": "tag/原生JS/index.html",
    "revision": "67f67bae38f9dd059c4e2e8eb00fec0d"
  },
  {
    "url": "tag/开发规范/index.html",
    "revision": "e94336646f4f5a5a591372b949f6be0a"
  },
  {
    "url": "timeline/index.html",
    "revision": "e9341fc6d37b5bf386903a895d994553"
  },
  {
    "url": "web/html.css/CSS__flex 弹性盒模型.html",
    "revision": "7c799b949bf16512346b245bf9a91edf"
  },
  {
    "url": "web/html.css/CSS__Hack.html",
    "revision": "658aaa4415f9fa807e11035246709c5b"
  },
  {
    "url": "web/html.css/CSS__LESS-Grid-实现栅格布局.html",
    "revision": "19e3b9bd25ba7a091adfadb0de1ded28"
  },
  {
    "url": "web/html.css/CSS__LESS-函数方法.html",
    "revision": "cd6bec3c01ad4133b80dd460cb9518a2"
  },
  {
    "url": "web/html.css/CSS__LESS-学习总结.html",
    "revision": "09a3fd93c42a74997020ebf502bcf8ef"
  },
  {
    "url": "web/html.css/CSS__常用样式.html",
    "revision": "d622524517d99e120ccfac48cbecd1fc"
  },
  {
    "url": "web/html.css/HTML__页面加载过程.html",
    "revision": "73c3d8824aab4974011af24e7f67aab9"
  },
  {
    "url": "web/html.css/Mobile__CSS使用的尺寸与设计稿（PSD）保持一致.html",
    "revision": "ecceb941a237846de15dd6530bca63a9"
  },
  {
    "url": "web/html.css/Mobile__常见问题及解决方案.html",
    "revision": "364c02962653f674b902c5eef4125571"
  },
  {
    "url": "web/javascript/ES6__学习笔记.html",
    "revision": "ff326a37083515593e27129b9a2f3ea7"
  },
  {
    "url": "web/javascript/JS__事件.html",
    "revision": "5f8be0d1ca575878462407bf9b4168ed"
  },
  {
    "url": "web/javascript/JS__内置属性与方法.html",
    "revision": "be79355856074f2ba82a193902b5179a"
  },
  {
    "url": "web/javascript/JS__字符串.html",
    "revision": "fa0dec7019dfadf50f061d2859503842"
  },
  {
    "url": "web/javascript/JS__对象属性操作.html",
    "revision": "d7d12ebc4925d4a00fbd0fea84539368"
  },
  {
    "url": "web/javascript/JS__常用工具函数.html",
    "revision": "16aee04cad1e4bed8e3dd5725702c275"
  },
  {
    "url": "web/javascript/JS__常用正则验证.html",
    "revision": "2d9b4077940f2aa91ee6866a1b94499b"
  },
  {
    "url": "web/javascript/JS__异步加载JS.html",
    "revision": "1d3b67def8debe26a62043a98d0fa974"
  },
  {
    "url": "web/javascript/JS__性能优化.html",
    "revision": "05afccd391637518e1a387cb4a218f0b"
  },
  {
    "url": "web/javascript/JS__操作JSON.html",
    "revision": "7350766ee2c526efed2d620c8d5aa959"
  },
  {
    "url": "web/javascript/JS__数组.html",
    "revision": "11182d1ce03750b89415a97b007136ee"
  },
  {
    "url": "web/javascript/JS__类型检查.html",
    "revision": "b29f1be56bfb3c7d7a958abd3ffcb825"
  },
  {
    "url": "web/javascript/JS__节点操作.html",
    "revision": "1da860666ed6bb78641be6c83a27668c"
  },
  {
    "url": "web/javascript/JS__预编译-预解析.html",
    "revision": "706c7b0744d3d0e569f94e2dddc36c63"
  },
  {
    "url": "web/plugin/Axios__HTTP 请求库.html",
    "revision": "3cc98076df7dbed7944a462e45d8bb04"
  },
  {
    "url": "web/plugin/Handsontable__在线Excel表格.html",
    "revision": "6bf6ab07b00704cc04f6234b189ef0b1"
  },
  {
    "url": "web/plugin/jQuery__对应JavaScript书写.html",
    "revision": "408b60f06aab64cca4e334635b2786cf"
  },
  {
    "url": "web/plugin/jQuery__常用方法.html",
    "revision": "683eaebe2542f944362b0f83d393f068"
  },
  {
    "url": "web/plugin/Plugin__JS-粒子动画.html",
    "revision": "a56fc37ae665ac1fdb23e43ae20e2649"
  },
  {
    "url": "web/vue/Vue__事件修饰符.html",
    "revision": "2f27a8f5b55c42858cbf1a8cbaf09650"
  },
  {
    "url": "web/vue/Vue__指令.html",
    "revision": "5d639c8e42af5132c86cf43a7b6255b0"
  },
  {
    "url": "web/vue/Vue__生命周期钩子.html",
    "revision": "5816074a06afcf37bc32989902391e7b"
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
