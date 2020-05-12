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
    "revision": "a1e91705171dbda950847b6f07d52fbb"
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
    "url": "assets/js/app.c2bc9b8b.js",
    "revision": "5f4ca562e4b54f1ca86188d0ac0e3c9b"
  },
  {
    "url": "categories/index.html",
    "revision": "62d1919bf518d31b43ad63014c1f38fc"
  },
  {
    "url": "categories/前端开发/index.html",
    "revision": "851217293810e6648d7372cd1a777899"
  },
  {
    "url": "categories/前端开发/page/2/index.html",
    "revision": "654ebd3e8dbdc06a603cc97575d95a55"
  },
  {
    "url": "categories/前端开发/page/3/index.html",
    "revision": "440ff1d26c8909b800ac34ef16782538"
  },
  {
    "url": "categories/前端开发/page/4/index.html",
    "revision": "517d1434ed9669b1e2c653603e38aff5"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "e61e79cae64ca9553c8728bdbae26578"
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
    "revision": "a1e1acad5f578af1f94be88ddcac6604"
  },
  {
    "url": "note/git 常用命令清单.html",
    "revision": "ababbaafc427d3bef088d53098d0bf5c"
  },
  {
    "url": "note/linux 常用命令.html",
    "revision": "c5822d5e2866130bfd11852980a4a874"
  },
  {
    "url": "note/前端知识体系汇总.html",
    "revision": "500d0a8b245af99ed0d689ad01fb6262"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "06ca1c00eac2985f60e9a734e807dd3f"
  },
  {
    "url": "tag/CSS3/index.html",
    "revision": "259e818551e7763d348253cfca010942"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "e50aff0191efb8121a95052841ccd55d"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "862456297be0aaff74c404a6e4f07cb7"
  },
  {
    "url": "tag/Excel/index.html",
    "revision": "a1ef5208512be07bf5f5abc714b3fe4a"
  },
  {
    "url": "tag/flex/index.html",
    "revision": "74ca3eb204fba174deae81847c6c082a"
  },
  {
    "url": "tag/git/index.html",
    "revision": "af5020b2773d2fec0fffbe787734fcf3"
  },
  {
    "url": "tag/hack/index.html",
    "revision": "6d6b4770aa64438c908607be83aafb34"
  },
  {
    "url": "tag/http/index.html",
    "revision": "8fff1eb55de09bdf5084d93eb16dc271"
  },
  {
    "url": "tag/index.html",
    "revision": "68b8594f11e979993b5cdfb0f709addd"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "375b77d55f9acd67cd7cf2d09bebd415"
  },
  {
    "url": "tag/JSON/index.html",
    "revision": "35f02655513cf116939a9ac44dcf0ec5"
  },
  {
    "url": "tag/LESS/index.html",
    "revision": "2d7ce99b0ebf85cf010a8c1c5df1ac05"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "d005015b5940e4eb5548a1536f5771db"
  },
  {
    "url": "tag/loading/index.html",
    "revision": "eed5a5098265ea59293141fb4cdf11ac"
  },
  {
    "url": "tag/plugin/index.html",
    "revision": "2dcb47b98c4ae11fe793aff5f0b2b59c"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "be73c7abb80cb47ea9b189b33ba1bb3f"
  },
  {
    "url": "tag/原生JS/index.html",
    "revision": "7e1af71fbd5607a777e2d8da11599f22"
  },
  {
    "url": "tag/开发规范/index.html",
    "revision": "92f3d6cb5d5ae754ec815fea40946dab"
  },
  {
    "url": "timeline/index.html",
    "revision": "6cbd6d264041f033a3938a73e189bb0f"
  },
  {
    "url": "web/html.css/CSS__flex 弹性盒模型.html",
    "revision": "b07268e2ccc606012e8744900697e681"
  },
  {
    "url": "web/html.css/CSS__Hack.html",
    "revision": "6de3d7cd6de958761ef676961a0351b3"
  },
  {
    "url": "web/html.css/CSS__LESS-Grid-实现栅格布局.html",
    "revision": "6fb9af863f1c1b8d93583c6d09e6a309"
  },
  {
    "url": "web/html.css/CSS__LESS-函数方法.html",
    "revision": "5cd70cabc406953017d721f9935afbf7"
  },
  {
    "url": "web/html.css/CSS__LESS-学习总结.html",
    "revision": "d299e9a82d2b4a2cc9ca74ea0214931d"
  },
  {
    "url": "web/html.css/CSS__常用样式.html",
    "revision": "60e47959e9488a83343d85bf6f971ea7"
  },
  {
    "url": "web/html.css/HTML__页面加载过程.html",
    "revision": "a599be70cd2e122dab39f86d438c91af"
  },
  {
    "url": "web/html.css/Mobile__CSS使用的尺寸与设计稿（PSD）保持一致.html",
    "revision": "67177a44bb5d4b83ff3db0a44c2114be"
  },
  {
    "url": "web/html.css/Mobile__常见问题及解决方案.html",
    "revision": "91dfdd76b556df3803539e0e802fdaf7"
  },
  {
    "url": "web/javascript/ES6__学习笔记.html",
    "revision": "fe88bf495c6571f3114141844f0f34cb"
  },
  {
    "url": "web/javascript/JS__事件.html",
    "revision": "5f7edab1d43797e610dd99bf48f859a1"
  },
  {
    "url": "web/javascript/JS__内置属性与方法.html",
    "revision": "498ce21b1c85420b4b64cbce56445c51"
  },
  {
    "url": "web/javascript/JS__字符串.html",
    "revision": "9027af46931e7ba6fa8b641199ddfe56"
  },
  {
    "url": "web/javascript/JS__对象属性操作.html",
    "revision": "e54da2b0189f7c8ef85907593a7c6084"
  },
  {
    "url": "web/javascript/JS__常用工具函数.html",
    "revision": "2822b9929f2669d044f19bed405882bc"
  },
  {
    "url": "web/javascript/JS__常用正则验证.html",
    "revision": "d76474cb82d3bbbd3255b105ca267540"
  },
  {
    "url": "web/javascript/JS__异步加载JS.html",
    "revision": "3e2387b7982abdff74f2ca0691e2f2cf"
  },
  {
    "url": "web/javascript/JS__性能优化.html",
    "revision": "2e7c19e479fc8586c1c72d9df101dba1"
  },
  {
    "url": "web/javascript/JS__操作JSON.html",
    "revision": "257cc3e2321c365ac570cfda9b732101"
  },
  {
    "url": "web/javascript/JS__数组.html",
    "revision": "e1c4dad7a03bcb9de7a286c16baa2dd1"
  },
  {
    "url": "web/javascript/JS__类型检查.html",
    "revision": "cfb6ac3b2705632f57ab883879ad5324"
  },
  {
    "url": "web/javascript/JS__节点操作.html",
    "revision": "fc98289873fcca496548a2af20e320e8"
  },
  {
    "url": "web/javascript/JS__预编译-预解析.html",
    "revision": "ef4a0ea3519c29f3a68d658791a40828"
  },
  {
    "url": "web/plugin/Axios__HTTP 请求库.html",
    "revision": "dd813c4534192d3c39cdf84bb9101af1"
  },
  {
    "url": "web/plugin/Handsontable__在线Excel表格.html",
    "revision": "c51f8c3ba10bbd2ad6f6169beeab22aa"
  },
  {
    "url": "web/plugin/jQuery__对应JavaScript书写.html",
    "revision": "a035c27c0a81b8d597d6d8a2da904679"
  },
  {
    "url": "web/plugin/jQuery__常用方法.html",
    "revision": "3a4cc575fda391e678b06bf24b3ecb28"
  },
  {
    "url": "web/plugin/Plugin__JS-粒子动画.html",
    "revision": "c4a84a27abe8dade0d2ab739a45816f0"
  },
  {
    "url": "web/vue/Vue__事件修饰符.html",
    "revision": "1054a525b374b5189a6723b341c178d8"
  },
  {
    "url": "web/vue/Vue__指令.html",
    "revision": "9ab1fbca585448a0a6b0e6689e448fe4"
  },
  {
    "url": "web/vue/Vue__生命周期钩子.html",
    "revision": "e07d6923097645f3f8fcfca7c0802749"
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
