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
    "revision": "142bad538b356b156c6b1b39b3f47c20"
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
    "url": "assets/js/app.f095d9c6.js",
    "revision": "1a9869179839b456191b966106a70532"
  },
  {
    "url": "categories/index.html",
    "revision": "76d356c0de815481ca82a155d7cbd985"
  },
  {
    "url": "categories/前端开发/index.html",
    "revision": "0d3a19a98f7920ca3d3440b6e6be3e1c"
  },
  {
    "url": "categories/前端开发/page/2/index.html",
    "revision": "0088d9bbaa525c0ee52db70a70f89f2b"
  },
  {
    "url": "categories/前端开发/page/3/index.html",
    "revision": "9077a6a65f7bb380c25e418ad374451d"
  },
  {
    "url": "categories/前端开发/page/4/index.html",
    "revision": "fcce338bd08a3edb7bd9d55833c5a6e4"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "f26a762355574e2f57e87d6d186a9edc"
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
    "revision": "12d36ad7b0672bad90c2349f426a1d6e"
  },
  {
    "url": "note/git 常用命令清单.html",
    "revision": "5784962388e6bb540549adf4e6c1b078"
  },
  {
    "url": "note/linux 常用命令.html",
    "revision": "d72eb5fb6a60e6c4a281f37b93c77b3a"
  },
  {
    "url": "note/前端知识体系汇总.html",
    "revision": "7519c212738bab62b178488cc7a3f264"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "448f1b7223adb250c2b7c7f6c4cc65ac"
  },
  {
    "url": "tag/CSS3/index.html",
    "revision": "12206ef9f4c3d662042b4d6e201a7988"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "eb4c0de735b843fb6de5725244494a94"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "eef35fb5e349adb2aae988253e0b870f"
  },
  {
    "url": "tag/Excel/index.html",
    "revision": "8e4385c8849826431a524882a8f14564"
  },
  {
    "url": "tag/flex/index.html",
    "revision": "ee10e817df696ed3b30cf7db6d53edee"
  },
  {
    "url": "tag/git/index.html",
    "revision": "6926ac733c64401036d5745b5443ea10"
  },
  {
    "url": "tag/hack/index.html",
    "revision": "60697829fa175f7a0013cde65dc424e6"
  },
  {
    "url": "tag/http/index.html",
    "revision": "b9d6c2e9c8058cc4d39d4260d7297115"
  },
  {
    "url": "tag/index.html",
    "revision": "b7ef3b08ad8a2a438820baa81a1751c9"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "03b25e72eef772468ca01493c94b41cc"
  },
  {
    "url": "tag/JSON/index.html",
    "revision": "32fd575699a6921aaeeecd4b67d64a9b"
  },
  {
    "url": "tag/LESS/index.html",
    "revision": "f49873e5bd5d5d03be741b81a0bab35b"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "e6278dac6a50841f84971b81c6d27a56"
  },
  {
    "url": "tag/loading/index.html",
    "revision": "e202a5167c5becc8576fb918bd771de2"
  },
  {
    "url": "tag/plugin/index.html",
    "revision": "cd2fadc092bc34bd67817568d47b50ee"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "5c2e9987c5e0511f43feb66bdd1d0fd0"
  },
  {
    "url": "tag/原生JS/index.html",
    "revision": "1b74fbee28cfceb976352ca81c3d3aee"
  },
  {
    "url": "tag/原生JS/page/2/index.html",
    "revision": "3c509fea7c22135a7c5dc279b0e43bfd"
  },
  {
    "url": "tag/开发规范/index.html",
    "revision": "17f4c8365c6e1b22d90987c3b83f26b7"
  },
  {
    "url": "timeline/index.html",
    "revision": "24d00b2dcf73ed010c04a2be6aafc765"
  },
  {
    "url": "web/html.css/CSS__flex 弹性盒模型.html",
    "revision": "a688b576edc69f245b977face13d7937"
  },
  {
    "url": "web/html.css/CSS__Hack.html",
    "revision": "2993277f7d3f75c9301f2d5d56e7f3fe"
  },
  {
    "url": "web/html.css/CSS__LESS-Grid-实现栅格布局.html",
    "revision": "c8658245a6a6dc1eab626915cc293a8d"
  },
  {
    "url": "web/html.css/CSS__LESS-函数方法.html",
    "revision": "af07b1a3835119645d5c53756b7aab2a"
  },
  {
    "url": "web/html.css/CSS__LESS-学习总结.html",
    "revision": "326e681e01dc9f703e01226012cb3019"
  },
  {
    "url": "web/html.css/CSS__常用样式.html",
    "revision": "fc2a468341cfb864ecdfb12fbbe37ebc"
  },
  {
    "url": "web/html.css/HTML__页面加载过程.html",
    "revision": "9eb4a859e8f9fcf7cdb48485e8f3ec3f"
  },
  {
    "url": "web/html.css/Mobile__CSS使用的尺寸与设计稿（PSD）保持一致.html",
    "revision": "96b1a2aadf49b1d18d95d937df145da5"
  },
  {
    "url": "web/html.css/Mobile__常见问题及解决方案.html",
    "revision": "912dd1947adbe2fa8e712d79b065d27d"
  },
  {
    "url": "web/javascript/ES6__学习笔记.html",
    "revision": "b487080300d7de06cdb2c4c076c73a61"
  },
  {
    "url": "web/javascript/JS__事件.html",
    "revision": "ee57b4aca1444783de1a8ab639007792"
  },
  {
    "url": "web/javascript/JS__内置属性与方法.html",
    "revision": "b510f5e30ae460aef4386a6bb4f578d1"
  },
  {
    "url": "web/javascript/JS__字符串.html",
    "revision": "43a4b34223d216f9331ca190d89b3863"
  },
  {
    "url": "web/javascript/JS__对象属性操作.html",
    "revision": "d12409324ecd874227f1fce4481b9c7d"
  },
  {
    "url": "web/javascript/JS__常用工具函数.html",
    "revision": "e9aa8feb215052ded555ccfb9895be70"
  },
  {
    "url": "web/javascript/JS__常用工具函数(二).html",
    "revision": "2643d00072b483f9ffc9d74883f74a9d"
  },
  {
    "url": "web/javascript/JS__常用正则验证.html",
    "revision": "1a41df37509d10bf9e6819c0808b7c5c"
  },
  {
    "url": "web/javascript/JS__异步加载JS.html",
    "revision": "324c5e3a1eb3890a3c9bf5e76c8804b6"
  },
  {
    "url": "web/javascript/JS__性能优化.html",
    "revision": "a91d3a511ac67920358ff1ee380981ae"
  },
  {
    "url": "web/javascript/JS__操作JSON.html",
    "revision": "4e35a51a23d5a9aaee5d5a173e93ec34"
  },
  {
    "url": "web/javascript/JS__数组.html",
    "revision": "d1a10d9fb843c8e69e55272f29c4337e"
  },
  {
    "url": "web/javascript/JS__类型检查.html",
    "revision": "87aacf6c2d502e5e2758d709cce934fe"
  },
  {
    "url": "web/javascript/JS__节点操作.html",
    "revision": "d52edfdede93d049d9cbc5086e9cf638"
  },
  {
    "url": "web/javascript/JS__预编译-预解析.html",
    "revision": "4812bd6b4618a32d2fd4a68e3e9c6a90"
  },
  {
    "url": "web/plugin/Axios__HTTP 请求库.html",
    "revision": "f16f9111f11cf9689b18a77c1faa7821"
  },
  {
    "url": "web/plugin/Handsontable__在线Excel表格.html",
    "revision": "6478e33aa1264ac356b5c68417c36a97"
  },
  {
    "url": "web/plugin/jQuery__对应JavaScript书写.html",
    "revision": "81bd3c70bf5cffbd19ff87a7008c3bde"
  },
  {
    "url": "web/plugin/jQuery__常用方法.html",
    "revision": "1d4daad4c4fd7f57e441128e4ab7bd9c"
  },
  {
    "url": "web/plugin/Plugin__JS-粒子动画.html",
    "revision": "be077b7621ed0fd5996e1095d5d50002"
  },
  {
    "url": "web/vue/Vue__事件修饰符.html",
    "revision": "f2486cb940671b1f8513b4f9b2e72884"
  },
  {
    "url": "web/vue/Vue__指令.html",
    "revision": "f017ec38fe734b931d838e187a7cae3d"
  },
  {
    "url": "web/vue/Vue__生命周期钩子.html",
    "revision": "d532afa27e6e2beb912736be1419fe34"
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
