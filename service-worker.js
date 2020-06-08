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
    "revision": "5aaf6b81ee76ea6ee0e0a416a83d2735"
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
    "url": "assets/js/10.a1a27010.js",
    "revision": "ed0f2bf57de2c0d9d0e545a730b61bb8"
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
    "url": "assets/js/29.1e08df90.js",
    "revision": "f4a71355c95b204915e1c5f92776e73b"
  },
  {
    "url": "assets/js/3.3e9e19a5.js",
    "revision": "36b721f393ffa71d0a37013d9cd8941e"
  },
  {
    "url": "assets/js/30.135cea5b.js",
    "revision": "3a34152977f28e7ae4e74dcb7f56852f"
  },
  {
    "url": "assets/js/31.3b80b733.js",
    "revision": "6b0cd681476dd1254d2aca4f5d8dec75"
  },
  {
    "url": "assets/js/32.aac4783d.js",
    "revision": "e67743c9a1db7b077168e22bad7a7694"
  },
  {
    "url": "assets/js/33.20f1b4f3.js",
    "revision": "3cdb3580a0889434a0bbcc15354aed41"
  },
  {
    "url": "assets/js/34.aab6d135.js",
    "revision": "0c3e1eb993782ef02222e81c8d6424db"
  },
  {
    "url": "assets/js/35.a53f52f3.js",
    "revision": "b98bf1b8226822d6b95b840b9f9f8a1b"
  },
  {
    "url": "assets/js/36.87471edd.js",
    "revision": "d58ccf27ff389dc3894a2fba8dbd0583"
  },
  {
    "url": "assets/js/37.ae96c1f8.js",
    "revision": "54b3e0f10ee09e9b94ad5ff826a3e698"
  },
  {
    "url": "assets/js/38.99baa98b.js",
    "revision": "e426d4814819c6410d1e3afd8be77cbe"
  },
  {
    "url": "assets/js/39.a87719fe.js",
    "revision": "a6ed4941abce11ef9f768a9bf6b23295"
  },
  {
    "url": "assets/js/4.6e35690b.js",
    "revision": "d7e720ee9bacb277ce0eddb90b19af89"
  },
  {
    "url": "assets/js/40.7d016895.js",
    "revision": "d0d0efeced712ab738365686c0df7e2f"
  },
  {
    "url": "assets/js/41.87bcbce2.js",
    "revision": "ea97a96178645caf88cf985791eef52f"
  },
  {
    "url": "assets/js/42.675ec34e.js",
    "revision": "689e75c84e19c279753447163c0dfe87"
  },
  {
    "url": "assets/js/43.58387c47.js",
    "revision": "6b91c238dd2b79dd47b9207023e773e4"
  },
  {
    "url": "assets/js/44.c2a7d1c8.js",
    "revision": "b8e128c7545fa606a04baccb23e3d5e1"
  },
  {
    "url": "assets/js/45.1e8df907.js",
    "revision": "c31da134e6401ccce9df216ac56048a0"
  },
  {
    "url": "assets/js/46.0516c830.js",
    "revision": "b39683951056b387ce564aabedfa127f"
  },
  {
    "url": "assets/js/47.edfeac2f.js",
    "revision": "f9a27a0e3412f089c2ea829b7e4e4c11"
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
    "url": "assets/js/app.54ad1a4d.js",
    "revision": "9004124cc796794057a6f58e5f115bb1"
  },
  {
    "url": "categories/index.html",
    "revision": "6f608a24fd0f5194d8a3c1ebdbe242e4"
  },
  {
    "url": "categories/前端开发/index.html",
    "revision": "11101212b1f7921a1082264a8a3dfa4e"
  },
  {
    "url": "categories/前端开发/page/2/index.html",
    "revision": "09aaf8227347294c72757569c14d3975"
  },
  {
    "url": "categories/前端开发/page/3/index.html",
    "revision": "ea9649763a37e2768cc954bf4e8d7772"
  },
  {
    "url": "categories/前端开发/page/4/index.html",
    "revision": "32f7daa15da50f95803a3e3fc5032e28"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "da76611eb555c48476353578f374f6a5"
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
    "revision": "7157b77883366749d5900491573171ed"
  },
  {
    "url": "note/git 常用命令清单.html",
    "revision": "32b083a623fdc54f49557a14f982293d"
  },
  {
    "url": "note/linux 常用命令.html",
    "revision": "d8aaa440e9af12ee6f0f3d4d0ed38170"
  },
  {
    "url": "note/前端知识体系汇总.html",
    "revision": "780924a3428ddcc463cbdb4b014452ab"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "f6440ce4478693ef635333ddac41fc71"
  },
  {
    "url": "tag/CSS3/index.html",
    "revision": "b8df1040122ff3732396a93ef53d768d"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "5badecf8b35592a17bca982a6ea8e034"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "3720471ea01f8fd7a15eb721eb66dadd"
  },
  {
    "url": "tag/Excel/index.html",
    "revision": "f8ea138e3d488f348b53527e14a505f4"
  },
  {
    "url": "tag/flex/index.html",
    "revision": "44e5b2215ba5c61fc1bc4fde917c40e8"
  },
  {
    "url": "tag/git/index.html",
    "revision": "fee82f9e77842d31f722ff9cf87212b4"
  },
  {
    "url": "tag/hack/index.html",
    "revision": "934ddc938927a1274ffe83f7c7d42a33"
  },
  {
    "url": "tag/http/index.html",
    "revision": "c3e74baf0c872ac362ce8e2f22d8794e"
  },
  {
    "url": "tag/index.html",
    "revision": "4254320530bc1f85aade625a56fbf830"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "6d7303a1dcedcbb90ced82bcdc1518eb"
  },
  {
    "url": "tag/JSON/index.html",
    "revision": "ad5817609e132b43889e83fceec40cc7"
  },
  {
    "url": "tag/LESS/index.html",
    "revision": "cbd9becc7013a694ff2279200b8005fd"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "4802ef6ef64f81a0f12ea2817551d3d4"
  },
  {
    "url": "tag/loading/index.html",
    "revision": "b0beef20220e0240839596108471c196"
  },
  {
    "url": "tag/plugin/index.html",
    "revision": "c7c46ce7b1450d7001e31b6ec5e8e31e"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "c03b2b881b13d2f964ea91c28f65a8cf"
  },
  {
    "url": "tag/原生JS/index.html",
    "revision": "a5217678e01a4ba1490520ad7c54ec4e"
  },
  {
    "url": "tag/原生JS/page/2/index.html",
    "revision": "cde2baf154c60b5e1c42bdb95c1b7847"
  },
  {
    "url": "tag/开发规范/index.html",
    "revision": "13b596191986d925e6838f1b1bdb5503"
  },
  {
    "url": "timeline/index.html",
    "revision": "2b5022be8c4e761be8dcc4d6a6ea6edb"
  },
  {
    "url": "web/html.css/CSS__flex 弹性盒模型.html",
    "revision": "06c80911e3e15a3a98c3ac26f39cc41d"
  },
  {
    "url": "web/html.css/CSS__Hack.html",
    "revision": "e1c88ce8537884634ff6aa62a29cb2a1"
  },
  {
    "url": "web/html.css/CSS__LESS-Grid-实现栅格布局.html",
    "revision": "9f27b6480bdec0210fdee2bef7ecb263"
  },
  {
    "url": "web/html.css/CSS__LESS-函数方法.html",
    "revision": "6dc417fbe16ee05ab6ee9605c57f1b51"
  },
  {
    "url": "web/html.css/CSS__LESS-学习总结.html",
    "revision": "1bc7d7de7c396c1ae777d89d1254b52a"
  },
  {
    "url": "web/html.css/CSS__常用样式.html",
    "revision": "50337e8782ca97ce5b65863eb37b14ec"
  },
  {
    "url": "web/html.css/HTML__页面加载过程.html",
    "revision": "c6e818fde5950d46188ed2a141293387"
  },
  {
    "url": "web/html.css/Mobile__CSS使用的尺寸与设计稿（PSD）保持一致.html",
    "revision": "482adb297dd6d150ffab1cdd98547506"
  },
  {
    "url": "web/html.css/Mobile__常见问题及解决方案.html",
    "revision": "954558e0edd90eae4b91f976b1980787"
  },
  {
    "url": "web/javascript/ES6__学习笔记.html",
    "revision": "baaafd3862e5697e3ec4ca87a7067124"
  },
  {
    "url": "web/javascript/JS__事件.html",
    "revision": "f00ff4371c5b73d1f66478e464b16278"
  },
  {
    "url": "web/javascript/JS__内置属性与方法.html",
    "revision": "e16bf9a7b836b716828f513922d8438c"
  },
  {
    "url": "web/javascript/JS__字符串.html",
    "revision": "d509c2a7451bcda5656ed1f4779e1d5e"
  },
  {
    "url": "web/javascript/JS__对象属性操作.html",
    "revision": "3cedb8e5826026ce1e05294d6503e4df"
  },
  {
    "url": "web/javascript/JS__常用工具函数.html",
    "revision": "7540b8cb5a70af6c2c2c21d8c3c7f330"
  },
  {
    "url": "web/javascript/JS__常用工具函数(二).html",
    "revision": "239e4776d79a89e033b5a2fa977865c2"
  },
  {
    "url": "web/javascript/JS__常用正则验证.html",
    "revision": "3ec2dedd195c81a88e78eb4523e267ac"
  },
  {
    "url": "web/javascript/JS__异步加载JS.html",
    "revision": "c14878c009c27de6e05b05745abc8ad3"
  },
  {
    "url": "web/javascript/JS__性能优化.html",
    "revision": "982e882db32d46e08332876997631eae"
  },
  {
    "url": "web/javascript/JS__操作JSON.html",
    "revision": "9a6e724d5c6b15665baa95c934aee701"
  },
  {
    "url": "web/javascript/JS__数组.html",
    "revision": "541f952968d2c1efd4c8e0d47c530a78"
  },
  {
    "url": "web/javascript/JS__类型检查.html",
    "revision": "67cc9317a8a58b386e8d90b38e032d5d"
  },
  {
    "url": "web/javascript/JS__节点操作.html",
    "revision": "e9b90bd2473e35d175376354a0223504"
  },
  {
    "url": "web/javascript/JS__预编译-预解析.html",
    "revision": "f5c8053ccfe24be48472c43040c355a7"
  },
  {
    "url": "web/plugin/Axios__HTTP 请求库.html",
    "revision": "84d3abda9e21108334e5a22dd18a5e5c"
  },
  {
    "url": "web/plugin/Handsontable__在线Excel表格.html",
    "revision": "24dc2b6ce06a5b94fc2dee5dd6ea5b4c"
  },
  {
    "url": "web/plugin/jQuery__对应JavaScript书写.html",
    "revision": "778008cc4b5174f401fb74c7f92bd1f4"
  },
  {
    "url": "web/plugin/jQuery__常用方法.html",
    "revision": "511a1a81647b70c5522740bed6a02687"
  },
  {
    "url": "web/plugin/Plugin__JS-粒子动画.html",
    "revision": "2e40d51ab8c0fcbc478a6b4d7f793a2d"
  },
  {
    "url": "web/vue/Vue__事件修饰符.html",
    "revision": "35ab8fae7b406dcbd065b0f959674a5e"
  },
  {
    "url": "web/vue/Vue__指令.html",
    "revision": "e25772231ca3f98f3e572f29ffaa2c5b"
  },
  {
    "url": "web/vue/Vue__生命周期钩子.html",
    "revision": "15db7aeb4b8d426bb386893430556d74"
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
