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
    "revision": "ca75c84d8ab7dac268feab16b572879b"
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
    "url": "assets/js/app.94adcc45.js",
    "revision": "51891f4a10fc1fb6536c983c962d71bc"
  },
  {
    "url": "categories/index.html",
    "revision": "374e4e9707b3f3d2cbfd6c9a90c14e99"
  },
  {
    "url": "categories/前端开发/index.html",
    "revision": "20eb526ea1495f12f48b4ed0b969263f"
  },
  {
    "url": "categories/前端开发/page/2/index.html",
    "revision": "4246a189c015b27d46f7908421c1d26d"
  },
  {
    "url": "categories/前端开发/page/3/index.html",
    "revision": "e88cef1ae05a02e491809701c994b85b"
  },
  {
    "url": "categories/前端开发/page/4/index.html",
    "revision": "4b9df8fd5b545158b3e2730b6c07aff7"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "458084aafe88c98598420a60f8f06f69"
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
    "revision": "b2a4706b138b705975ef629777e09d09"
  },
  {
    "url": "note/git 常用命令清单.html",
    "revision": "5621d17b062b64d13bf3750bb7c8962b"
  },
  {
    "url": "note/linux 常用命令.html",
    "revision": "e2ce5a721f109881d4e032caae49aa90"
  },
  {
    "url": "note/前端知识体系汇总.html",
    "revision": "7366fbc10ebe77997c2c33183e6a7e6f"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "1b90993ec4ca046186e8b99300b65b87"
  },
  {
    "url": "tag/CSS3/index.html",
    "revision": "4acf04142756701c3776c07820c6c716"
  },
  {
    "url": "tag/DOM/index.html",
    "revision": "c7a3c3277c2721e040e160081d70950a"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "3810356c198752fb284c3a6f9aa723d7"
  },
  {
    "url": "tag/Excel/index.html",
    "revision": "86ad48a28358128235dd771274b34cb3"
  },
  {
    "url": "tag/flex/index.html",
    "revision": "32f753c406d2c7c87aebda0b6ba40f65"
  },
  {
    "url": "tag/git/index.html",
    "revision": "11091294088ccb87ecc9b1df70dca6ee"
  },
  {
    "url": "tag/hack/index.html",
    "revision": "1464b187f366656fbf4b44fec4821fb5"
  },
  {
    "url": "tag/http/index.html",
    "revision": "7ccd470e94e2ecd44125d030428fb75c"
  },
  {
    "url": "tag/index.html",
    "revision": "a1d1be9bb9b501276f421aeeff122071"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "99710b465e60eaadf37e9645900a3fd4"
  },
  {
    "url": "tag/JSON/index.html",
    "revision": "f24dd72db004e1bb66c5ec98d0100dcb"
  },
  {
    "url": "tag/LESS/index.html",
    "revision": "f568d16d944272a3b1d678475615e055"
  },
  {
    "url": "tag/linux/index.html",
    "revision": "fc0cabded7c2535416fc9e8f521045ce"
  },
  {
    "url": "tag/loading/index.html",
    "revision": "6c2bc0bc385445a559f486eb3669eb9a"
  },
  {
    "url": "tag/plugin/index.html",
    "revision": "33414142224e734b8fd8c09c28015243"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "9d3657c7645e874e1b36290fa1fbd41b"
  },
  {
    "url": "tag/原生JS/index.html",
    "revision": "982afaf81b2daba49cb02f561ee25b4d"
  },
  {
    "url": "tag/原生JS/page/2/index.html",
    "revision": "4ac1138bec3f12880d8776cdb4b34b73"
  },
  {
    "url": "tag/开发规范/index.html",
    "revision": "431cb21408c9eada37a0739eb3611682"
  },
  {
    "url": "timeline/index.html",
    "revision": "70a7a4a37da49b35bb63196626f52ae1"
  },
  {
    "url": "web/html.css/CSS__flex 弹性盒模型.html",
    "revision": "b3e08e591640fa7f7de801374752cc22"
  },
  {
    "url": "web/html.css/CSS__Hack.html",
    "revision": "0f56dfed4bde20afdcb299b5573e13a1"
  },
  {
    "url": "web/html.css/CSS__LESS-Grid-实现栅格布局.html",
    "revision": "daa25c427498c01bfd31894fab300164"
  },
  {
    "url": "web/html.css/CSS__LESS-函数方法.html",
    "revision": "53d149a93c1d94931815a528cc106260"
  },
  {
    "url": "web/html.css/CSS__LESS-学习总结.html",
    "revision": "adab4dae4aded14a106b51164c713470"
  },
  {
    "url": "web/html.css/CSS__常用样式.html",
    "revision": "885f84f15edf5d8e461c30cd283cb4b1"
  },
  {
    "url": "web/html.css/HTML__页面加载过程.html",
    "revision": "e1027340074fc38d64d3c6356e2abe8a"
  },
  {
    "url": "web/html.css/Mobile__CSS使用的尺寸与设计稿（PSD）保持一致.html",
    "revision": "adcf4666d143e51e86e7725356aa0f43"
  },
  {
    "url": "web/html.css/Mobile__常见问题及解决方案.html",
    "revision": "cc0f1ef7522d7ab1813573569c768129"
  },
  {
    "url": "web/javascript/ES6__学习笔记.html",
    "revision": "cc7d40d4aefe417a357c6dd06d3a4817"
  },
  {
    "url": "web/javascript/JS__事件.html",
    "revision": "5ffdbe0b9df8773f59a6645a96d5354f"
  },
  {
    "url": "web/javascript/JS__内置属性与方法.html",
    "revision": "0a333464b10bf7b1478a79ef8acb2162"
  },
  {
    "url": "web/javascript/JS__字符串.html",
    "revision": "5f63e9f2978736e0c5c12e4c1b2fe1b6"
  },
  {
    "url": "web/javascript/JS__对象属性操作.html",
    "revision": "b5bcb97c92d14b9a9ad0f1a1fd8629a8"
  },
  {
    "url": "web/javascript/JS__常用工具函数.html",
    "revision": "294482834035aec860b6871e196f4df3"
  },
  {
    "url": "web/javascript/JS__常用工具函数(二).html",
    "revision": "93ed34f90d8e5ab0199ccf4c88ec10dc"
  },
  {
    "url": "web/javascript/JS__常用正则验证.html",
    "revision": "cf5c07b8b37fd16c806dacf48063191d"
  },
  {
    "url": "web/javascript/JS__异步加载JS.html",
    "revision": "90c3e4b5720f2492a583b803a63972ef"
  },
  {
    "url": "web/javascript/JS__性能优化.html",
    "revision": "2d58e4a6b8cff0716a05d7c0884e650a"
  },
  {
    "url": "web/javascript/JS__操作JSON.html",
    "revision": "baf6a73772e2b17960c4eefb241062de"
  },
  {
    "url": "web/javascript/JS__数组.html",
    "revision": "6dfd529dddfafec80ffad7ef4e40f85f"
  },
  {
    "url": "web/javascript/JS__类型检查.html",
    "revision": "92de57a39fb5a4ee2199306b4d19b647"
  },
  {
    "url": "web/javascript/JS__节点操作.html",
    "revision": "2a718a9b64a406c00b95d155381e2ede"
  },
  {
    "url": "web/javascript/JS__预编译-预解析.html",
    "revision": "824b8f4e2618eed208bce38b2ad3469c"
  },
  {
    "url": "web/plugin/Axios__HTTP 请求库.html",
    "revision": "02a9c8a2bad69efb1c0560322c097b66"
  },
  {
    "url": "web/plugin/Handsontable__在线Excel表格.html",
    "revision": "8e97a46dc32e9b6c83dfc3e38b32f73a"
  },
  {
    "url": "web/plugin/jQuery__对应JavaScript书写.html",
    "revision": "ff7604de92aaed45dcc6d0554e45be67"
  },
  {
    "url": "web/plugin/jQuery__常用方法.html",
    "revision": "851ef8c55258ab870883c1745cb51a32"
  },
  {
    "url": "web/plugin/Plugin__JS-粒子动画.html",
    "revision": "9245ab199dc45628e6ca4bb5c8d8de6e"
  },
  {
    "url": "web/vue/Vue__事件修饰符.html",
    "revision": "b5c1708e4d90a17265e16d87366e2143"
  },
  {
    "url": "web/vue/Vue__指令.html",
    "revision": "e8a26d5fc57b50efbf1a503674870efb"
  },
  {
    "url": "web/vue/Vue__生命周期钩子.html",
    "revision": "c4496a4fa0c9373d710c8884b5bddc19"
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
