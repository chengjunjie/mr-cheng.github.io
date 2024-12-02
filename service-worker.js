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
    "revision": "5413e66627ac4a087a2f84f24998d702"
  },
  {
    "url": "assets/css/0.styles.66d684e8.css",
    "revision": "9e79f2ae8329ebab3e41ebe1b62e79f1"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.5d0e71a8.js",
    "revision": "cccbd75d2772ec4802f36ed0165a5088"
  },
  {
    "url": "assets/js/10.3b7a3947.js",
    "revision": "64c138b0aef0752f80d07b68cc7c92c3"
  },
  {
    "url": "assets/js/14.2898ae83.js",
    "revision": "d0f2c82113367c13c5c8c8f88970b8c6"
  },
  {
    "url": "assets/js/15.178132ee.js",
    "revision": "ae29aaf6b2b506aa4f9b848999a9023c"
  },
  {
    "url": "assets/js/16.9e75cd16.js",
    "revision": "ddcc2d93ea251facfa8d49dc469ef1a3"
  },
  {
    "url": "assets/js/17.f293e94a.js",
    "revision": "df82b60b5da17102653afb9f02b4914c"
  },
  {
    "url": "assets/js/18.bb5b1c7f.js",
    "revision": "5bf24d880f28147b3e4c6bc0da74eb54"
  },
  {
    "url": "assets/js/19.16db9836.js",
    "revision": "c8cfbf95560e58341f03dd76083b4107"
  },
  {
    "url": "assets/js/2.f9d7a0f3.js",
    "revision": "a8ee827ba0ef398570b79e08f3eab3c9"
  },
  {
    "url": "assets/js/20.9620fc46.js",
    "revision": "174eb4154fd9b8218d5c7f1757413083"
  },
  {
    "url": "assets/js/21.050f23af.js",
    "revision": "a273d6144b720e8d5064c0b95dfdacb4"
  },
  {
    "url": "assets/js/22.b999658d.js",
    "revision": "0c2980ef1dc34c29352aee1bcc664ed0"
  },
  {
    "url": "assets/js/23.7843034e.js",
    "revision": "cf43e692685409edc384ecaedfbca633"
  },
  {
    "url": "assets/js/24.e0a0bba3.js",
    "revision": "64116e9d53289ff3d6e644989106b1c7"
  },
  {
    "url": "assets/js/25.04c447c0.js",
    "revision": "3e5485d861e7cd15c3a082084644e6d5"
  },
  {
    "url": "assets/js/26.187d7bde.js",
    "revision": "48c460122ef556d81cfa5598ebf21f8b"
  },
  {
    "url": "assets/js/27.a53fe289.js",
    "revision": "ba4292ebd3bcae03788f31d844f1934d"
  },
  {
    "url": "assets/js/28.276de8aa.js",
    "revision": "78d8a066161b8c257df3e7ff70fb663e"
  },
  {
    "url": "assets/js/29.7c8c6763.js",
    "revision": "f0f7f71eaffb7204fb64169e13292a21"
  },
  {
    "url": "assets/js/3.853b2168.js",
    "revision": "29eb755712719ad7689f2e9c2c322989"
  },
  {
    "url": "assets/js/30.5f1f462a.js",
    "revision": "140b37bee97341689bb159e40ec1c37d"
  },
  {
    "url": "assets/js/31.d9f0c71d.js",
    "revision": "4a2eb7651505f013c6fe786cad5c7502"
  },
  {
    "url": "assets/js/32.a91ffb2f.js",
    "revision": "ae96d696a1b9f60e148eb58ed1709ace"
  },
  {
    "url": "assets/js/33.62ab7120.js",
    "revision": "37ab31fbfe70229eb94fbbd2236df9f9"
  },
  {
    "url": "assets/js/34.2bc533f0.js",
    "revision": "438024a0a124b692a440ab458b6bdacb"
  },
  {
    "url": "assets/js/35.5ff98fb9.js",
    "revision": "b4a3142404cbbaa07c4af25c9109823b"
  },
  {
    "url": "assets/js/36.2db3d2c9.js",
    "revision": "81fc1247f0a8ed2e3dff7cf32c50c7d8"
  },
  {
    "url": "assets/js/37.261d2573.js",
    "revision": "cb47a6d996d6cadf3bc9c4bfa3b589bf"
  },
  {
    "url": "assets/js/38.7c81c1c0.js",
    "revision": "b1c20a98ad3439e6ce6da2ed9f2f4cf6"
  },
  {
    "url": "assets/js/39.57b29af2.js",
    "revision": "6284001c5645c280a4c2b8e7e4881e96"
  },
  {
    "url": "assets/js/4.4d746a28.js",
    "revision": "5a5cf431babb2166b2bdcb69ecc64361"
  },
  {
    "url": "assets/js/40.7d6da595.js",
    "revision": "66feddcc7acc9e09c5406e2f9cd461cc"
  },
  {
    "url": "assets/js/41.e8379033.js",
    "revision": "24ff9cbac7b72d31dd850fa5f1b44dc9"
  },
  {
    "url": "assets/js/42.c3ca47b2.js",
    "revision": "adff4fbe934996494ffd6d70614bc0b9"
  },
  {
    "url": "assets/js/43.35985a1e.js",
    "revision": "1b66169201edb3ed4e950c9e20a91b81"
  },
  {
    "url": "assets/js/44.3902e7c3.js",
    "revision": "301520b4662c19aa4f282c6889b746d6"
  },
  {
    "url": "assets/js/45.3535e058.js",
    "revision": "a7770254d28ba6af265cfda1369528b8"
  },
  {
    "url": "assets/js/5.d9464ae9.js",
    "revision": "3922a9d013baf670a6e4d2bdfce896c0"
  },
  {
    "url": "assets/js/6.b2a869e7.js",
    "revision": "162bdfaefe99407e994ec4091a0ee2e1"
  },
  {
    "url": "assets/js/7.7ae969d4.js",
    "revision": "067c78e4ed4232899c3e75d53037c54a"
  },
  {
    "url": "assets/js/8.f61e2b53.js",
    "revision": "6d10e30e89d92392e9917dd08c4db22f"
  },
  {
    "url": "assets/js/9.15abf2dd.js",
    "revision": "635c40ebd2c26f8d6e1d0f1fdae0aa85"
  },
  {
    "url": "assets/js/app.63a04a49.js",
    "revision": "656b71e4ce86b73cdc7c77d6fafd11b2"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~docsearch.21d99c40.js",
    "revision": "e5b75c8e7f940255f8a0db0287c1604c"
  },
  {
    "url": "assets/js/vendors~flowchart.fcca14c2.js",
    "revision": "acf8fed1416be6c070f6173755d56dff"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "5f7c43e2650955d2d37d70068eb5648f"
  },
  {
    "url": "categories/java/index.html",
    "revision": "fafe636d55730ae903471effe9391730"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "e2f8ff9035b9433917395629867ab1c5"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "20fd25246b9f050d7ce1bd19ab8c7579"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "3c43647d25b1eec429b7882a760675a5"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "5f8b96ed1aaec6a294a898bf0ec69d15"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "185d4b67766f721e045e088ab87a4cff"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "10786c8170df639779131ea4a3e1838e"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "2c0429b2ed378a7db16a01cd1dbdf76c"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "97f9663671936b15fc4cb0a405c9f88c"
  },
  {
    "url": "tags/js/index.html",
    "revision": "5179ce529772e5b860364a0eff5d6b29"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "dbc8c3aa2a656bc4289c617c8aaf379d"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "7c4607ef13ba6845d91463b7054b79b9"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "05a68097d3e26b7f17fffb7751d00d42"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "738926840b120132229bc25565a22886"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "e6bc6f75b6a50927a12f0103e32c7ec8"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "97d12c2f74159d7768dbed45fac32489"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "381b18f2ae3056009452ce5510e4b710"
  },
  {
    "url": "timeline/index.html",
    "revision": "fc3395f5567bbba1640fbc61316bacef"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "1fa2a2a5b4080278958d951a4d967869"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "4492af90f3f9573aaa4085a40ecd213e"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "5db47521929f9c9451d6fe59a399cbb2"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "be143782295847c4c2b099e5d5f6c177"
  },
  {
    "url": "生活分享/life.html",
    "revision": "22f4dfb6b7a38eb2f34696833f4b14c3"
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
