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
    "revision": "fb2f9b599c3e9e7d137bfe4cad67e1ca"
  },
  {
    "url": "api/application-api.html",
    "revision": "421b264912c8d4389c2c976308a85698"
  },
  {
    "url": "api/application-config.html",
    "revision": "38a1b85361b5156897a3adcaa998f04a"
  },
  {
    "url": "api/basic-reactivity.html",
    "revision": "44878d9fed474c7f3162b8eea9dba2f8"
  },
  {
    "url": "api/built-in-components.html",
    "revision": "442937bb594006df639c60088e641f42"
  },
  {
    "url": "api/composition-api.html",
    "revision": "f65bca501a3f7e48f1045fe6cac649f1"
  },
  {
    "url": "api/computed-watch-api.html",
    "revision": "632c1f77f1cd02d85b71833523745315"
  },
  {
    "url": "api/directives.html",
    "revision": "b07d82f9c869e462881287c57382bd13"
  },
  {
    "url": "api/global-api.html",
    "revision": "9c546bb122afe68f71e244ea16cba210"
  },
  {
    "url": "api/index.html",
    "revision": "e12e39de504d36a3673e3f07e4382d16"
  },
  {
    "url": "api/instance-methods.html",
    "revision": "bd3bd41895f1284fb494dc2c1e2bd117"
  },
  {
    "url": "api/instance-properties.html",
    "revision": "3a8aa71828c3bb9f8225696f6cd0c5b6"
  },
  {
    "url": "api/options-api.html",
    "revision": "7803a069bcdd4b0f492dc8d86fc2a95d"
  },
  {
    "url": "api/options-assets.html",
    "revision": "78abe5ccc8547092a375f27e8a27ed6e"
  },
  {
    "url": "api/options-composition.html",
    "revision": "0b2b35a7fa0a1ebdda9d26f4cbb52d92"
  },
  {
    "url": "api/options-data.html",
    "revision": "abd981474288f2ca04a4ce1841079590"
  },
  {
    "url": "api/options-dom.html",
    "revision": "ecffe0359622dd8b5f4fa4044c3b40d0"
  },
  {
    "url": "api/options-lifecycle-hooks.html",
    "revision": "bd8783317d916c90580abefe8aa9cda6"
  },
  {
    "url": "api/options-misc.html",
    "revision": "98954c4a11c49587033c6cd1756e03b0"
  },
  {
    "url": "api/reactivity-api.html",
    "revision": "24e74aedb515cdba5a3f334f8b857ae3"
  },
  {
    "url": "api/refs-api.html",
    "revision": "0f4dedc2f5857e01a28db2d8fdfa7cba"
  },
  {
    "url": "api/special-attributes.html",
    "revision": "706a7723a8082f11e8f16bbd6d66997d"
  },
  {
    "url": "assets/css/0.styles.162b4578.css",
    "revision": "0174926e31ce6aa2c4ef5809e9196a8b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.e96c5df3.js",
    "revision": "c53d3752b7a5655a4401f9d70ae515da"
  },
  {
    "url": "assets/js/10.d5312442.js",
    "revision": "bf52e8ff14ded8fb3c5fb001cf217b27"
  },
  {
    "url": "assets/js/100.3068e83c.js",
    "revision": "91616d5218cf6396381edd7b46afe6f5"
  },
  {
    "url": "assets/js/101.6031a6be.js",
    "revision": "ce068cd0aa26763069f47a7302553573"
  },
  {
    "url": "assets/js/102.de33b9ec.js",
    "revision": "bba8140c9dbd578a7b52bf8ecd38e7e6"
  },
  {
    "url": "assets/js/103.ddd4fb99.js",
    "revision": "969c7f26c8c296d4c362b711c0632ddd"
  },
  {
    "url": "assets/js/104.e8466d63.js",
    "revision": "ac96a3561b6d8d5528af4130ea6ffad4"
  },
  {
    "url": "assets/js/105.5a9aea78.js",
    "revision": "44ce1847cdb52b66908bac10ff906738"
  },
  {
    "url": "assets/js/106.3f1afc25.js",
    "revision": "0b37097370a283e65b9a4265b1159281"
  },
  {
    "url": "assets/js/107.01b2c2cd.js",
    "revision": "a88c2e25566f5162af356dfc5dcd278d"
  },
  {
    "url": "assets/js/108.9b3ff3c8.js",
    "revision": "1b66ef2c6f7ac0be2b94d76472ab0324"
  },
  {
    "url": "assets/js/109.f56076a1.js",
    "revision": "2010db1e54ac57db4c5da97b8d398a27"
  },
  {
    "url": "assets/js/11.dfb33700.js",
    "revision": "65cde96422c791810094b832942bc743"
  },
  {
    "url": "assets/js/110.c75062cc.js",
    "revision": "d04fcc5df704e0d2eee801c5c6695071"
  },
  {
    "url": "assets/js/111.285b9f15.js",
    "revision": "c6825e17e4430d3f4d90a308ace118fd"
  },
  {
    "url": "assets/js/112.0ef9f125.js",
    "revision": "9fc7e28ccac483df45472b501e729989"
  },
  {
    "url": "assets/js/113.cc6274f0.js",
    "revision": "ebce835d8522e0d80c48685bf563ad6b"
  },
  {
    "url": "assets/js/114.8afcf832.js",
    "revision": "6e9f3d2514c66258fcbdf145f0e0e547"
  },
  {
    "url": "assets/js/115.dc711bc7.js",
    "revision": "c1027d1364e9f78cfbd526643f257e1c"
  },
  {
    "url": "assets/js/116.41dc3cb9.js",
    "revision": "466a2b57d1120f90baf649eb3d325287"
  },
  {
    "url": "assets/js/117.a944439c.js",
    "revision": "42fbb2325be561e59c990c6384884d34"
  },
  {
    "url": "assets/js/118.862732e4.js",
    "revision": "3d0f731b04d42d4b48e637de10df2a69"
  },
  {
    "url": "assets/js/119.3ba912cc.js",
    "revision": "7ed7a9629189e9642691aeb9d54d3c69"
  },
  {
    "url": "assets/js/12.3a03e216.js",
    "revision": "4ecf38d5bc255619e003d190f052a7ab"
  },
  {
    "url": "assets/js/120.b7716d35.js",
    "revision": "eef5a3b1f6ec4de9ba0970c45a8b5b11"
  },
  {
    "url": "assets/js/121.a9c80df6.js",
    "revision": "02223366a0a060e7737e5a3fffe33554"
  },
  {
    "url": "assets/js/122.efe6d9a2.js",
    "revision": "0a476fa43fe4dd2f594d5bc67d83e2cb"
  },
  {
    "url": "assets/js/123.dd69611c.js",
    "revision": "cff8eb93228172e056850ec04d59051c"
  },
  {
    "url": "assets/js/124.a003e52c.js",
    "revision": "b6aab7df34e865de6e131f1c3c6df190"
  },
  {
    "url": "assets/js/125.eab53e95.js",
    "revision": "8c9ede8d52b48d85e49ccd613f5424e7"
  },
  {
    "url": "assets/js/126.740fca58.js",
    "revision": "78e8b1a531767eeecb37e300b322d32e"
  },
  {
    "url": "assets/js/127.6a101b29.js",
    "revision": "94d90364c76d26f81fe37915fc90b367"
  },
  {
    "url": "assets/js/128.9d22f7ea.js",
    "revision": "dc4f648ea43165207023100df7767fc2"
  },
  {
    "url": "assets/js/129.b46a395d.js",
    "revision": "9cf31d025168442194a56816a3781373"
  },
  {
    "url": "assets/js/13.bade339e.js",
    "revision": "4508d7bf489e1563f5bf861b27c67e5d"
  },
  {
    "url": "assets/js/130.a303b79e.js",
    "revision": "9ae50b3b075a543a6d14a5eba392a1c5"
  },
  {
    "url": "assets/js/131.f1773607.js",
    "revision": "02a7f60218ac8795f752ada5f39d5066"
  },
  {
    "url": "assets/js/132.0902eef6.js",
    "revision": "9edc795d5a1e5bd12a4b0fbffb0c956a"
  },
  {
    "url": "assets/js/133.f161483b.js",
    "revision": "74c2fe1a81b43560b940d9d507944c2a"
  },
  {
    "url": "assets/js/134.5b90b8ed.js",
    "revision": "b592a68f27d133e186fb24c5048e3941"
  },
  {
    "url": "assets/js/135.812bfc21.js",
    "revision": "a5a28e4527c62d0a26ee25be067e22ad"
  },
  {
    "url": "assets/js/136.9776bc1c.js",
    "revision": "6fc2d4ef91447230389bf49be6feedc0"
  },
  {
    "url": "assets/js/137.3a0989c5.js",
    "revision": "d193c156bde92a00cb75c611012385cd"
  },
  {
    "url": "assets/js/138.d39fdeb7.js",
    "revision": "c05cbf8d192e676a47f4c1168d126da5"
  },
  {
    "url": "assets/js/139.d2437d1b.js",
    "revision": "843f0402526077af85275310694bd460"
  },
  {
    "url": "assets/js/14.ab4c720d.js",
    "revision": "5b6e12c81500fecbb0a7d6db013c1365"
  },
  {
    "url": "assets/js/140.46dac6da.js",
    "revision": "54c904b183ead238c5e061747ce9b343"
  },
  {
    "url": "assets/js/141.48950f9f.js",
    "revision": "f2793ca05f06e46b12885c466cdec53e"
  },
  {
    "url": "assets/js/142.697f19c0.js",
    "revision": "59f076510a8afc4ff3561f5241e25a70"
  },
  {
    "url": "assets/js/143.2f63b1ad.js",
    "revision": "3ed30802d90d0bf4236eb56ea33e774a"
  },
  {
    "url": "assets/js/144.4c7b8da6.js",
    "revision": "13c40cb36444d40b9a8084db9da8e19e"
  },
  {
    "url": "assets/js/145.d559c756.js",
    "revision": "dae8cf8bbf6ab404e39bd64abd528192"
  },
  {
    "url": "assets/js/146.21676995.js",
    "revision": "fe2568ed277e60837227bad59479665d"
  },
  {
    "url": "assets/js/147.b3fe8d97.js",
    "revision": "d560b1bd3ba65659ca84a51a1a018708"
  },
  {
    "url": "assets/js/148.3ea6eb51.js",
    "revision": "4d54d20decfe7eff638915b0143f672e"
  },
  {
    "url": "assets/js/149.9ab9115b.js",
    "revision": "446b6da8cb8a77eaa437645cd3138d47"
  },
  {
    "url": "assets/js/15.76257af1.js",
    "revision": "2a6721b0328dfbbb18341d1b515c286c"
  },
  {
    "url": "assets/js/150.a1861b32.js",
    "revision": "31b6903edf885f3d822fe26c5efa96da"
  },
  {
    "url": "assets/js/151.3da027e8.js",
    "revision": "9649389ac1c582ee942d1b7a69d8ea7b"
  },
  {
    "url": "assets/js/152.6952bb20.js",
    "revision": "eb97123e2b50bdce5fe8f5d8e83dbc73"
  },
  {
    "url": "assets/js/153.93c757fe.js",
    "revision": "940ca27b9ad195b302f51f194a24532d"
  },
  {
    "url": "assets/js/16.4c1799fd.js",
    "revision": "c2cc8f2e32f220fa02fc98aaa44c7662"
  },
  {
    "url": "assets/js/17.3bd44e13.js",
    "revision": "e5fc9a53cb34dc9409d1d75b7b5fdfb2"
  },
  {
    "url": "assets/js/18.216da023.js",
    "revision": "1db808b80126e8e52173df670b7be6c9"
  },
  {
    "url": "assets/js/19.4762fd89.js",
    "revision": "507519c7e45332d0629020f8e2fb97d7"
  },
  {
    "url": "assets/js/2.cd166e03.js",
    "revision": "0026387c6ecfa22b586a003cdf76a5b7"
  },
  {
    "url": "assets/js/20.13cfc518.js",
    "revision": "6131cb4772b0f92f2fab5acd00dd168a"
  },
  {
    "url": "assets/js/21.93fb291c.js",
    "revision": "306e0cc2d2f268daef7f9f650aa666b9"
  },
  {
    "url": "assets/js/22.37878064.js",
    "revision": "91131ac5c815d7b81e0228a447004d66"
  },
  {
    "url": "assets/js/23.0e97d24d.js",
    "revision": "0c7a46b297889c9fb5ad4585a0a13db1"
  },
  {
    "url": "assets/js/24.c1db2b93.js",
    "revision": "76562da284f36c7a580375a90f75554d"
  },
  {
    "url": "assets/js/25.cdfd7532.js",
    "revision": "d88401c775ffccc141eb831321a6e261"
  },
  {
    "url": "assets/js/26.3c8d741d.js",
    "revision": "2965f31f92771b777b2f8746049f6a10"
  },
  {
    "url": "assets/js/27.0c1ac630.js",
    "revision": "9945d7e668b6b6cf4d5955f795fe6ff4"
  },
  {
    "url": "assets/js/28.10b919aa.js",
    "revision": "4085ffb771a4c6005cd06323ccf1a665"
  },
  {
    "url": "assets/js/29.d27d8100.js",
    "revision": "01227ebb0b526164a4ca7024b97ad170"
  },
  {
    "url": "assets/js/3.becf7241.js",
    "revision": "7900483006d40e7a91c99e48e508442d"
  },
  {
    "url": "assets/js/30.b2f95914.js",
    "revision": "35cc33745c07618083f5ed3afc050e95"
  },
  {
    "url": "assets/js/31.461db0c6.js",
    "revision": "5ea94c2a6f5dc001a1687f17caf263f7"
  },
  {
    "url": "assets/js/32.1ad1b04b.js",
    "revision": "839004a900d9fa0a6be5be6878277790"
  },
  {
    "url": "assets/js/33.95b1411f.js",
    "revision": "f9e7012cf978c85526f67db5f74cb03a"
  },
  {
    "url": "assets/js/34.15c1e6b6.js",
    "revision": "f27eabf67e3aafd086125fc2bb29303d"
  },
  {
    "url": "assets/js/35.03cddb66.js",
    "revision": "b170e1a7986ea8cba73480ffa51ce3e2"
  },
  {
    "url": "assets/js/36.0527ed2b.js",
    "revision": "71023e3e52837436c8d12b8cde69bd3b"
  },
  {
    "url": "assets/js/37.2e12b028.js",
    "revision": "f51d15dc8a15724cf8027e62aebfedb2"
  },
  {
    "url": "assets/js/38.486e2352.js",
    "revision": "43019feba91be4bccb925a6a71c18592"
  },
  {
    "url": "assets/js/39.c2b5d199.js",
    "revision": "ae5205b6a3607785a2352a5d4a61b630"
  },
  {
    "url": "assets/js/4.f0b4b359.js",
    "revision": "5cb26faff5adf7e32345f058a7e288a1"
  },
  {
    "url": "assets/js/40.2f18d6e5.js",
    "revision": "9250b1688b3e9e4a8819819cb723260e"
  },
  {
    "url": "assets/js/41.e78cc6b8.js",
    "revision": "3dbcd9c066030644e07e0de1faea8b8c"
  },
  {
    "url": "assets/js/42.f8657e9c.js",
    "revision": "354720987a54e5c4b6ae7543e2121acd"
  },
  {
    "url": "assets/js/43.dc335df5.js",
    "revision": "8fbd2cb36b10d110145a6deb167330e4"
  },
  {
    "url": "assets/js/44.cbad23f8.js",
    "revision": "315ffb07ea92a8f6028b6a5d722bd2df"
  },
  {
    "url": "assets/js/45.fc868456.js",
    "revision": "ecb3000852187ddd5dde44f7846865b8"
  },
  {
    "url": "assets/js/46.67dd7fd8.js",
    "revision": "b94e565e76c2c9c46d1174901c0f76c7"
  },
  {
    "url": "assets/js/47.f8e6c256.js",
    "revision": "dbf8cc50677683376db2a7ec0bd3a5d5"
  },
  {
    "url": "assets/js/48.221a488e.js",
    "revision": "98aba8c7aa5758d42d3af57ad1b7f514"
  },
  {
    "url": "assets/js/49.35e87662.js",
    "revision": "851767051eb54847edd439828df079cb"
  },
  {
    "url": "assets/js/5.2d83ccb8.js",
    "revision": "4ad08155e0daf656a0773fde32555cfb"
  },
  {
    "url": "assets/js/50.4d87c9a8.js",
    "revision": "3ccd88bf564fe03efd8bfcb9319f705f"
  },
  {
    "url": "assets/js/51.439a517a.js",
    "revision": "7de8fc22c94033e78e6d931845fd40b4"
  },
  {
    "url": "assets/js/52.43ab0290.js",
    "revision": "3af359654c51d131e3a363ce368baee2"
  },
  {
    "url": "assets/js/53.6329e72b.js",
    "revision": "bc412c3dd0f795e145addfdb63d2e768"
  },
  {
    "url": "assets/js/54.e93c44d7.js",
    "revision": "d7ed80b17691d306e0d1aaabab4dd83e"
  },
  {
    "url": "assets/js/55.349a9d5c.js",
    "revision": "f987f89bd7717f08b35aaf982e46d738"
  },
  {
    "url": "assets/js/56.5aae19c4.js",
    "revision": "f7181e6ae29d95104907678f72ee5eaf"
  },
  {
    "url": "assets/js/57.27cb8ec8.js",
    "revision": "d7c9be73008a771ce7c126aa33b9da70"
  },
  {
    "url": "assets/js/58.55d2d38e.js",
    "revision": "076d7b93c61778e86f972f109d9f48d4"
  },
  {
    "url": "assets/js/59.f3d3ccbc.js",
    "revision": "8b12c884847d814022e17320eed798d1"
  },
  {
    "url": "assets/js/6.5fc89dde.js",
    "revision": "604d8742039ab3d23592dad9b0c2edf2"
  },
  {
    "url": "assets/js/60.2ed72a82.js",
    "revision": "07b4682149bb0a50cc72d3d8ada0c253"
  },
  {
    "url": "assets/js/61.8fc79800.js",
    "revision": "6f3e5138d577c20e2f301cab60893bff"
  },
  {
    "url": "assets/js/62.b018f44b.js",
    "revision": "224ebb1e742f7e4e1a5372d8297eec4c"
  },
  {
    "url": "assets/js/63.92186bbb.js",
    "revision": "ae3027152dd28e1824f6caab32750fc3"
  },
  {
    "url": "assets/js/64.5b52854d.js",
    "revision": "1b73714d6a20213c282be7aad0d14393"
  },
  {
    "url": "assets/js/65.b8125e1e.js",
    "revision": "0ce984dc96e0ab8803e64ed04ded4c60"
  },
  {
    "url": "assets/js/66.e49b9297.js",
    "revision": "659967072380a0332bcbe765a552c9d2"
  },
  {
    "url": "assets/js/67.75618e97.js",
    "revision": "f86dc4fac93a0317e2a08c2e740d1b40"
  },
  {
    "url": "assets/js/68.5b5d4bd6.js",
    "revision": "50b7c5e5e30bd583b512fefe3f035818"
  },
  {
    "url": "assets/js/69.e30b36d6.js",
    "revision": "a5b0ce5127b577d531377879b466bb36"
  },
  {
    "url": "assets/js/70.6d9afb08.js",
    "revision": "862a53968917539eed48bbaf8959c3b1"
  },
  {
    "url": "assets/js/71.f354a5fa.js",
    "revision": "74cef9981db696295769c3386f08ed0a"
  },
  {
    "url": "assets/js/72.8aa1e67d.js",
    "revision": "849bfc6b8ea66b72ea885857463cb68a"
  },
  {
    "url": "assets/js/73.7fdafed8.js",
    "revision": "643120bed2ed50f219dd003437e34271"
  },
  {
    "url": "assets/js/74.df766f41.js",
    "revision": "177891f2995684eb97f4b725c9737ca9"
  },
  {
    "url": "assets/js/75.f9c16a42.js",
    "revision": "5c1c9583ad20f0ef768b4961b3858531"
  },
  {
    "url": "assets/js/76.56943211.js",
    "revision": "264066703fe14f7ebabdf15f6a9a5de9"
  },
  {
    "url": "assets/js/77.0d1bc39d.js",
    "revision": "d33570e497bc6e1f01876312b82966c0"
  },
  {
    "url": "assets/js/78.e26edeb1.js",
    "revision": "f167e29d87d1677680466977778811d8"
  },
  {
    "url": "assets/js/79.4ab8a4a9.js",
    "revision": "473f595f01557f7d5e1c55f807b22cba"
  },
  {
    "url": "assets/js/80.8feef22e.js",
    "revision": "ff9388dfacb36a4b34c2bf3e5ef28ea0"
  },
  {
    "url": "assets/js/81.02275471.js",
    "revision": "f2b529fdd7e543e36454ecedf6603379"
  },
  {
    "url": "assets/js/82.06c73369.js",
    "revision": "809f4cf74ea49558bd45f79f477fe26a"
  },
  {
    "url": "assets/js/83.68d5694e.js",
    "revision": "7e37137d1721d601b037ae8c10f019fc"
  },
  {
    "url": "assets/js/84.c441416b.js",
    "revision": "430ad3370373f9b1dae97463b62306bb"
  },
  {
    "url": "assets/js/85.5de46f21.js",
    "revision": "c844b199e2bf575780ead6234643cd8d"
  },
  {
    "url": "assets/js/86.ce0d9afe.js",
    "revision": "84371d478b383e9442ce318490f0afe5"
  },
  {
    "url": "assets/js/87.2a4d6173.js",
    "revision": "cd96be37b1b587c0fc9ea4f2b98ba389"
  },
  {
    "url": "assets/js/88.4bc8f72a.js",
    "revision": "34331c8b9da73fd11e3520fbbd0ea4c2"
  },
  {
    "url": "assets/js/89.377dbebe.js",
    "revision": "9b5d56577b1ddb66c7524f4a939aa4d1"
  },
  {
    "url": "assets/js/9.70adf458.js",
    "revision": "9c1c8de22a482a95afbcac4bce1ac8e3"
  },
  {
    "url": "assets/js/90.65e2d7f9.js",
    "revision": "2bbd9f916c9fae7d55e71d149c20d31c"
  },
  {
    "url": "assets/js/91.9e824859.js",
    "revision": "8d9304d516aa66b830f3ea83ce4656ec"
  },
  {
    "url": "assets/js/92.3983840c.js",
    "revision": "3556b657f3a35eb8e4032b3a76e19daf"
  },
  {
    "url": "assets/js/93.a4a671ab.js",
    "revision": "887e7c5dd8baf643ea524e9a85d997f5"
  },
  {
    "url": "assets/js/94.df3aa2bb.js",
    "revision": "c870a74d204c20fae1c943c42278301f"
  },
  {
    "url": "assets/js/95.ccf76a87.js",
    "revision": "0bf5b742f570fd3b5a1eb50333d4060d"
  },
  {
    "url": "assets/js/96.c39f2aee.js",
    "revision": "1f5ee7b1559e81cbcdef9a787835b3e7"
  },
  {
    "url": "assets/js/97.e42837c2.js",
    "revision": "c8efd610853e6a8284646c0ea353a47d"
  },
  {
    "url": "assets/js/98.a54c06e9.js",
    "revision": "0bef9836454277655aa1c52407bda93c"
  },
  {
    "url": "assets/js/99.574e6f1a.js",
    "revision": "c7d2e01ecb134e63a684154efb571b36"
  },
  {
    "url": "assets/js/app.b77a6508.js",
    "revision": "9054aadc642225cbfc048c803f06555f"
  },
  {
    "url": "assets/js/vendors~docsearch.ae7f4fdb.js",
    "revision": "37bc6b3da2a1e8fcf2d07d6706aba3e7"
  },
  {
    "url": "coc/index.html",
    "revision": "a9dc591f60c0b381a8ee9c83c935f43c"
  },
  {
    "url": "community/join.html",
    "revision": "734ae5249202901f01a2463e0a6e801f"
  },
  {
    "url": "community/partners.html",
    "revision": "de79e3561c5acc57ee7dafdefa0378a9"
  },
  {
    "url": "community/team.html",
    "revision": "1016b32ff7aa657fdfc19f10491b8d28"
  },
  {
    "url": "community/themes.html",
    "revision": "491c8316185c4a0f2e96559c29ab73fc"
  },
  {
    "url": "cookbook/editable-svg-icons.html",
    "revision": "b1213772f1be67b05c7bad66e877838d"
  },
  {
    "url": "cookbook/index.html",
    "revision": "580da197410b4e1eeceee4e9d4745da3"
  },
  {
    "url": "examples/commits.html",
    "revision": "c4756c77d784b787b232d13b8b4f7443"
  },
  {
    "url": "examples/elastic-header.html",
    "revision": "87021a501a176b8def7ef9f3f08793ed"
  },
  {
    "url": "examples/grid-component.html",
    "revision": "0b932972e256244eb06276ae03030122"
  },
  {
    "url": "examples/markdown.html",
    "revision": "daa6e29040f79560d45dab9e9a0befc3"
  },
  {
    "url": "examples/modal.html",
    "revision": "7f5967cc67e3a122879f8da0ae07c797"
  },
  {
    "url": "examples/select2.html",
    "revision": "c28e93028ac580892978342c4b2fd9b2"
  },
  {
    "url": "examples/svg.html",
    "revision": "435f954e55a3d21f426566384499846f"
  },
  {
    "url": "examples/todomvc.html",
    "revision": "de88fbaaa1a7924119d84999ca8b1e86"
  },
  {
    "url": "examples/tree-view.html",
    "revision": "d353e1ddc2d7a01b7e47a7de1f3d7648"
  },
  {
    "url": "guide/a11y-basics.html",
    "revision": "953e0e02ed35e069f365741c73d95f95"
  },
  {
    "url": "guide/a11y-resources.html",
    "revision": "c8877e14b6e6e19483079e7bd187060c"
  },
  {
    "url": "guide/a11y-semantics.html",
    "revision": "5aedc21e35e08bf50bd7f338369d7006"
  },
  {
    "url": "guide/a11y-standards.html",
    "revision": "ed782a6651d25683e4b8b7b71d31b436"
  },
  {
    "url": "guide/change-detection.html",
    "revision": "e4f473416e1506d32d7a21d3022dfd6b"
  },
  {
    "url": "guide/class-and-style.html",
    "revision": "7088ddff270e3a11b0eb00dced6daa0a"
  },
  {
    "url": "guide/component-attrs.html",
    "revision": "70330fc5423face41f0333799aa9d6a3"
  },
  {
    "url": "guide/component-basics.html",
    "revision": "2c9ed888044d97e44b19e919e9c4f2b8"
  },
  {
    "url": "guide/component-custom-events.html",
    "revision": "079dfdb3f1daf7c2e49c7801e08a16a9"
  },
  {
    "url": "guide/component-dynamic-async.html",
    "revision": "275459379de0d269b7f3ac21db80b8a3"
  },
  {
    "url": "guide/component-edge-cases.html",
    "revision": "5416bd0a3b51ed1981a75c7040cbf738"
  },
  {
    "url": "guide/component-props.html",
    "revision": "f66ebdcd930b920a83ace472bcc6ea86"
  },
  {
    "url": "guide/component-provide-inject.html",
    "revision": "14aa562ee0c552eb0879bbe7489fd196"
  },
  {
    "url": "guide/component-registration.html",
    "revision": "9ce37d349dbeb842bf88ec5c58a82d12"
  },
  {
    "url": "guide/component-slots.html",
    "revision": "ca8efd7cb3b3f49d7a6d2ef091bbba32"
  },
  {
    "url": "guide/component-template-refs.html",
    "revision": "d12ddf076dbe18ff908f7960b7603bd0"
  },
  {
    "url": "guide/composition-api-introduction.html",
    "revision": "fd179fde9ff18eaad3d4f29103028af1"
  },
  {
    "url": "guide/composition-api-lifecycle-hooks.html",
    "revision": "0ac3a77eda3a60a575c2668bbbfc1103"
  },
  {
    "url": "guide/composition-api-provide-inject.html",
    "revision": "147934f812c8fb7f88649f59af1c8205"
  },
  {
    "url": "guide/composition-api-setup.html",
    "revision": "a4101502e2d140a908eb2bb85879cde2"
  },
  {
    "url": "guide/composition-api-template-refs.html",
    "revision": "d67f3eec9480988f9b63c5c2d3518804"
  },
  {
    "url": "guide/computed.html",
    "revision": "a71e95a7d27eb4294749176a43906232"
  },
  {
    "url": "guide/conditional.html",
    "revision": "df1729d0475aa4ae6ac7fc42c61a016c"
  },
  {
    "url": "guide/contributing/doc-style-guide.html",
    "revision": "a9ffdb1919145ed953618e194e8cc4fa"
  },
  {
    "url": "guide/contributing/translations.html",
    "revision": "0310e5447086f4433306f32cad037554"
  },
  {
    "url": "guide/contributing/writing-guide.html",
    "revision": "efdb2dd1a06c63788853dadc5420d2b9"
  },
  {
    "url": "guide/custom-directive.html",
    "revision": "0c5fe1cfcf949f981964999a63a83cf1"
  },
  {
    "url": "guide/data-methods.html",
    "revision": "1258d6d2df42dec0908475e351fb67a0"
  },
  {
    "url": "guide/events.html",
    "revision": "7e697f10c8fc8c1b1964f175428f4659"
  },
  {
    "url": "guide/forms.html",
    "revision": "6d34b811dabfda98535f8546d08060eb"
  },
  {
    "url": "guide/installation.html",
    "revision": "978959fba31d8a69486b493960693df9"
  },
  {
    "url": "guide/instance.html",
    "revision": "2ad462704329df07fa63ca416cf490e2"
  },
  {
    "url": "guide/introduction.html",
    "revision": "84d6110514de0d34a6f8ed59daacbcbd"
  },
  {
    "url": "guide/list.html",
    "revision": "02a7bbe8a0fe39851c0a6bc0760a2c9e"
  },
  {
    "url": "guide/migration/array-refs.html",
    "revision": "2de3a6f8d66f6ad1aded511b32aca12f"
  },
  {
    "url": "guide/migration/async-components.html",
    "revision": "4a4a9ce871a54e9f86f9204fb4bcede3"
  },
  {
    "url": "guide/migration/attribute-coercion.html",
    "revision": "705115ae9d39a7f1d004eebb59bc3997"
  },
  {
    "url": "guide/migration/custom-directives.html",
    "revision": "a6e05253f90eb65fe027c313830b7523"
  },
  {
    "url": "guide/migration/custom-elements-interop.html",
    "revision": "83a85bbfa095626f681f3298a0f5881a"
  },
  {
    "url": "guide/migration/data-option.html",
    "revision": "eb42c9b0c503cda084c4e1561b089cb0"
  },
  {
    "url": "guide/migration/events-api.html",
    "revision": "cf5e3e42fbe58a8022b454551902afe6"
  },
  {
    "url": "guide/migration/filters.html",
    "revision": "56af144837407093bdbe7f5776b4ecd8"
  },
  {
    "url": "guide/migration/fragments.html",
    "revision": "75d682e32f9421c0b46cacecd3a17985"
  },
  {
    "url": "guide/migration/functional-components.html",
    "revision": "7ec2a6fc8eddb2d5beb9945e50263db0"
  },
  {
    "url": "guide/migration/global-api-treeshaking.html",
    "revision": "1a23752aa8ae1acb97fe0ddf1be56bf7"
  },
  {
    "url": "guide/migration/global-api.html",
    "revision": "c5189c7e6c1808f60b68cc13dc88df52"
  },
  {
    "url": "guide/migration/inline-template-attribute.html",
    "revision": "e832732c7b07707742277c66d7738abf"
  },
  {
    "url": "guide/migration/introduction.html",
    "revision": "43df4efddb5e073bb9fd1003193feed1"
  },
  {
    "url": "guide/migration/key-attribute.html",
    "revision": "342d7811869f3c598edf919b2c0210c7"
  },
  {
    "url": "guide/migration/keycode-modifiers.html",
    "revision": "4e0affdea4021f6d55d6ce5543a1d8ab"
  },
  {
    "url": "guide/migration/props-default-this.html",
    "revision": "81041f369f3bccd263e532833a847858"
  },
  {
    "url": "guide/migration/render-function-api.html",
    "revision": "37c2866a4305d0a4feb880e93ebd08c3"
  },
  {
    "url": "guide/migration/slots-unification.html",
    "revision": "47b20efab16fcf1d05d32285141f97d2"
  },
  {
    "url": "guide/migration/transition.html",
    "revision": "8600f5a2c123802115396cb4b29ce5ff"
  },
  {
    "url": "guide/migration/v-bind.html",
    "revision": "e9e6bdbf70e95e7166f9bb72f4625bfb"
  },
  {
    "url": "guide/migration/v-if-v-for.html",
    "revision": "c78ee06b61b8246f6b1a23bec39b6f16"
  },
  {
    "url": "guide/migration/v-model.html",
    "revision": "b133a51ac621f2438f852c758b596f03"
  },
  {
    "url": "guide/migration/watch.html",
    "revision": "6bc8fed6aff92597a766417b88359287"
  },
  {
    "url": "guide/mixins.html",
    "revision": "c49546f01c16419c976f3cf35cb94b62"
  },
  {
    "url": "guide/mobile.html",
    "revision": "1eac377ed65b593e8a5a096d04f2f3bb"
  },
  {
    "url": "guide/optimizations.html",
    "revision": "cd209f9a9e2d01b0382209b0bfa32ddf"
  },
  {
    "url": "guide/plugins.html",
    "revision": "3dde86db684df1a0b5e8e9f7cbcdcd27"
  },
  {
    "url": "guide/reactivity-computed-watchers.html",
    "revision": "72b2972aaec59848d0887cdb0e56ff04"
  },
  {
    "url": "guide/reactivity-fundamentals.html",
    "revision": "670b46d664f58b7d79f33289a514c07b"
  },
  {
    "url": "guide/reactivity.html",
    "revision": "3cb037a8fca6634af977b75434c60bea"
  },
  {
    "url": "guide/render-function.html",
    "revision": "757fd9ad1a228217eb3bce597d152082"
  },
  {
    "url": "guide/routing.html",
    "revision": "77a81e68bfc40e035c33d5e7a794a0d2"
  },
  {
    "url": "guide/single-file-component.html",
    "revision": "c9d8f23ed42635f808f127ae6d4eca0d"
  },
  {
    "url": "guide/ssr.html",
    "revision": "cbd33ee8f83859e17b6ae69a3afcf5dc"
  },
  {
    "url": "guide/state-management.html",
    "revision": "d96289bc10d4e3167d5471c05dbab522"
  },
  {
    "url": "guide/teleport.html",
    "revision": "9ee0daa8a2268b5e8a5e242db8870d7c"
  },
  {
    "url": "guide/template-syntax.html",
    "revision": "77cd294eb5b677441d9276ecc7696fed"
  },
  {
    "url": "guide/testing.html",
    "revision": "22835b619a816ac7e2aa97a4fbf4cc5c"
  },
  {
    "url": "guide/transitions-enterleave.html",
    "revision": "c94b6405fb1075a81c7f43bfb8f9b47e"
  },
  {
    "url": "guide/transitions-list.html",
    "revision": "4f5fca93ebc2cdd219e7b1a1642d1f12"
  },
  {
    "url": "guide/transitions-overview.html",
    "revision": "1041c489580670fc15b2c4fafc3f5552"
  },
  {
    "url": "guide/transitions-state.html",
    "revision": "aa1fe2aa6208ef294a1e3fc098715b88"
  },
  {
    "url": "guide/typescript-support.html",
    "revision": "171c108b23d814c75845e07fc04a22dc"
  },
  {
    "url": "images/AccessibilityChromeDeveloperTools.png",
    "revision": "25c2a61b52ea8753aa4693a16abaa43f"
  },
  {
    "url": "images/AccessibleARIAdescribedby.png",
    "revision": "d2b26eb9ae0006509801691c289a86d3"
  },
  {
    "url": "images/AccessibleARIAlabelDevTools.png",
    "revision": "05cb34b380cef9627d5c9a3c0ba64dca"
  },
  {
    "url": "images/AccessibleARIAlabelledbyDevTools.png",
    "revision": "1554e00985256ca1042caffbf59709cc"
  },
  {
    "url": "images/AccessibleLabelChromeDevTools.png",
    "revision": "5b9d491c368093887624f4dfacdb6431"
  },
  {
    "url": "images/components_provide.png",
    "revision": "f7110a1bae2d0744997012ca656d8fa1"
  },
  {
    "url": "images/components.png",
    "revision": "b5c08269dfc26ae6d7db3801e9efd296"
  },
  {
    "url": "images/css-vs-js-ease.svg",
    "revision": "698b44c0a912788e52ea14ee10ce2846"
  },
  {
    "url": "images/dom-tree.png",
    "revision": "f70b86bfbbfe1962dc5d6125105f1122"
  },
  {
    "url": "images/icons/android-icon-144x144.png",
    "revision": "e67b8d54852c2fbf40be2a8eb0590f5b"
  },
  {
    "url": "images/icons/android-icon-192x192.png",
    "revision": "5d10eaab941eb596ee59ffc53652d035"
  },
  {
    "url": "images/icons/android-icon-36x36.png",
    "revision": "bb757d234def1a6b53d793dbf4879578"
  },
  {
    "url": "images/icons/android-icon-48x48.png",
    "revision": "0d33c4fc51e2bb020bf8dd7cd05db875"
  },
  {
    "url": "images/icons/android-icon-72x72.png",
    "revision": "702c4fafca31d670f9bd8b2d185ced39"
  },
  {
    "url": "images/icons/android-icon-96x96.png",
    "revision": "0ebff702851985ea6ba891cf6e6e7ddd"
  },
  {
    "url": "images/icons/apple-icon-114x114.png",
    "revision": "f4fd30f3a26b932843b8c5cef9f2186e"
  },
  {
    "url": "images/icons/apple-icon-120x120.png",
    "revision": "b6a574d63d52ef9c89189b67bcac5cbd"
  },
  {
    "url": "images/icons/apple-icon-144x144.png",
    "revision": "e67b8d54852c2fbf40be2a8eb0590f5b"
  },
  {
    "url": "images/icons/apple-icon-152x152.png",
    "revision": "f53787bf41febf2b044931a305ccaf2a"
  },
  {
    "url": "images/icons/apple-icon-180x180.png",
    "revision": "9f6b1e3b92b2c5bd5b7d79501bb6e612"
  },
  {
    "url": "images/icons/apple-icon-57x57.png",
    "revision": "83f622ba0994866abc56ace068b6551c"
  },
  {
    "url": "images/icons/apple-icon-60x60.png",
    "revision": "643f761bc39f86c70f17cd1fed3b8e08"
  },
  {
    "url": "images/icons/apple-icon-72x72.png",
    "revision": "702c4fafca31d670f9bd8b2d185ced39"
  },
  {
    "url": "images/icons/apple-icon-76x76.png",
    "revision": "94d9af047b86d99657b5efb88a0d1c7b"
  },
  {
    "url": "images/icons/apple-icon-precomposed.png",
    "revision": "707758f591323153a4f1cb3a8d9641fa"
  },
  {
    "url": "images/icons/apple-icon.png",
    "revision": "707758f591323153a4f1cb3a8d9641fa"
  },
  {
    "url": "images/icons/bacancy_technology.png",
    "revision": "5810bb8253b1e35ba437373ff83f82d3"
  },
  {
    "url": "images/icons/bulb.svg",
    "revision": "570fe3dff7ac341af799819240c4c735"
  },
  {
    "url": "images/icons/danger.svg",
    "revision": "65fd301d5e1cdff7fa2f3911622bb504"
  },
  {
    "url": "images/icons/favicon-16x16.png",
    "revision": "a5a9da66870189b0539223c38c8a7749"
  },
  {
    "url": "images/icons/favicon-32x32.png",
    "revision": "3d60db0d77303b2414ddd50cf2472bf7"
  },
  {
    "url": "images/icons/favicon-96x96.png",
    "revision": "0ebff702851985ea6ba891cf6e6e7ddd"
  },
  {
    "url": "images/icons/info.svg",
    "revision": "a1e5ee15c1a7cf19a66663a168a52ca4"
  },
  {
    "url": "images/icons/ms-icon-144x144.png",
    "revision": "e67b8d54852c2fbf40be2a8eb0590f5b"
  },
  {
    "url": "images/icons/ms-icon-150x150.png",
    "revision": "e8cdf492981122a2548bc247c7b4067d"
  },
  {
    "url": "images/icons/ms-icon-310x310.png",
    "revision": "1721f8303ec2349002b5980a01f27cef"
  },
  {
    "url": "images/icons/ms-icon-70x70.png",
    "revision": "a110cf0132b00b23a8605ca72a8874ba"
  },
  {
    "url": "images/icons/stop.svg",
    "revision": "6f57b84257162dde4203c0439c0ad90e"
  },
  {
    "url": "images/imooc-ad3.png",
    "revision": "a8b8084e0bb616cef5637f589d0c3a49"
  },
  {
    "url": "images/lifecycle.png",
    "revision": "55ca3bcd54e2ee9bd7e3575eb02a1e13"
  },
  {
    "url": "images/partners/monterail.png",
    "revision": "db165491374f80cc4f3190a0ebd918ad"
  },
  {
    "url": "images/partners/vehikl.png",
    "revision": "65f4ae56972001f689053fba43129433"
  },
  {
    "url": "images/paypal.png",
    "revision": "067bd556ce9e4c76538a8057adb6d596"
  },
  {
    "url": "images/scoped-slot.png",
    "revision": "c6ef14ba02eac288245c5c5009d966cc"
  },
  {
    "url": "images/sfc-with-preprocessors.png",
    "revision": "2e57ecfafeac2237d5a003ad9a0ef7bc"
  },
  {
    "url": "images/sfc.png",
    "revision": "e333ce3bf8119bef381ac7c7b2bbd4ba"
  },
  {
    "url": "images/slot.png",
    "revision": "00cf6bd787014eb22b2821d72b80212a"
  },
  {
    "url": "images/sponsors/autocode.svg",
    "revision": "4319bc58220eb3ffaa993488c171c0dc"
  },
  {
    "url": "images/sponsors/bacancy_technology.png",
    "revision": "9a0590eb4ce29289b454240415611162"
  },
  {
    "url": "images/sponsors/bestvpn_co.png",
    "revision": "afbe252b6b59bc3cdac2e7dec69eac39"
  },
  {
    "url": "images/sponsors/bit.png",
    "revision": "9638a3f44bf471876effb80ea0659f73"
  },
  {
    "url": "images/sponsors/chaitin.png",
    "revision": "549e43997790dc624c477424acbfe228"
  },
  {
    "url": "images/sponsors/cloudstudio.png",
    "revision": "fc480cf4c2b06591f58e7e91666226af"
  },
  {
    "url": "images/sponsors/dcloud.gif",
    "revision": "ade7c64e66506b6cff10292efea16ee8"
  },
  {
    "url": "images/sponsors/devexpress.png",
    "revision": "a6d9c786a373088c8d238ca643293c17"
  },
  {
    "url": "images/sponsors/devsquad.png",
    "revision": "e639ea4fd0d7053fc0928d4ff9fefb2a"
  },
  {
    "url": "images/sponsors/fastcoding_inc.png",
    "revision": "08a0a7652db79fa3395c0ef28d49f0cd"
  },
  {
    "url": "images/sponsors/fastcoding_inc.svg",
    "revision": "ff35e14cb519fe5d76e6e8d9444e4fa6"
  },
  {
    "url": "images/sponsors/firestick_tricks.png",
    "revision": "1ee05223a5b12fe910cb8428d57223d8"
  },
  {
    "url": "images/sponsors/flatlogic_templates.svg",
    "revision": "925f0c4421cc6d86ebc9d6788b519220"
  },
  {
    "url": "images/sponsors/foo.png",
    "revision": "1c9cde53bb9c98a316edc93d57684e4d"
  },
  {
    "url": "images/sponsors/frontend_love.png",
    "revision": "b514babc53a0f3ddc854b0b14a54a489"
  },
  {
    "url": "images/sponsors/frontendlove.png",
    "revision": "b514babc53a0f3ddc854b0b14a54a489"
  },
  {
    "url": "images/sponsors/gridsome.png",
    "revision": "e82a2f872ec319bbb5d0a804288cd9b7"
  },
  {
    "url": "images/sponsors/happy_programmer_llc.png",
    "revision": "3f3303d42a57ff9edf36373f59d376af"
  },
  {
    "url": "images/sponsors/html_burger.png",
    "revision": "c7ce1344d001e7a236a89694ed59d988"
  },
  {
    "url": "images/sponsors/icons_8.png",
    "revision": "ffcdd01817ecdb32b92bd2f1e4d75e84"
  },
  {
    "url": "images/sponsors/icons.png",
    "revision": "ad6ee8c400066e15712cdef4342023da"
  },
  {
    "url": "images/sponsors/imooc-sponsor.png",
    "revision": "7ddc7f938fbbc08f816a888225786a4c"
  },
  {
    "url": "images/sponsors/imooc-sponsor2.png",
    "revision": "ce9575f62520e0ac8b7d93ada2c6b274"
  },
  {
    "url": "images/sponsors/inkoop.png",
    "revision": "1cff77d2c927657d3aceeba2c12db892"
  },
  {
    "url": "images/sponsors/intygrate.png",
    "revision": "fdd390b44a4aeed763f53f4e8f6529e4"
  },
  {
    "url": "images/sponsors/isolutions_uk_limited.png",
    "revision": "0f76512940c38b72fcf48337b4d64692"
  },
  {
    "url": "images/sponsors/laravel.png",
    "revision": "26ece85fc10e3d137564a414a0168b7b"
  },
  {
    "url": "images/sponsors/modus.png",
    "revision": "6498c04fee5b8542449b350e77180379"
  },
  {
    "url": "images/sponsors/Monterail.png",
    "revision": "bf1ec94a0ca48f0e6be0c97fa60a42c0"
  },
  {
    "url": "images/sponsors/moovweb.png",
    "revision": "8183954731fdeb0f136fac1485198184"
  },
  {
    "url": "images/sponsors/neds.png",
    "revision": "1f1a2a46c2575019ae07a90205f60b65"
  },
  {
    "url": "images/sponsors/onsen_ui.png",
    "revision": "e41569bcb10fbca3f361d818b29ed7fd"
  },
  {
    "url": "images/sponsors/passionate_people.png",
    "revision": "03e59e28347e1dcd165e4e1525afb545"
  },
  {
    "url": "images/sponsors/primevue copy.png",
    "revision": "60f2e8fb0dce3e9045fc3a2a8039fa82"
  },
  {
    "url": "images/sponsors/primevue.png",
    "revision": "60f2e8fb0dce3e9045fc3a2a8039fa82"
  },
  {
    "url": "images/sponsors/programmers_io.png",
    "revision": "02cb415eb9a8e9ce6579c7aff03759dd"
  },
  {
    "url": "images/sponsors/pullrequest.svg",
    "revision": "50847513b306736d33234d50b11c5e1d"
  },
  {
    "url": "images/sponsors/retool.png",
    "revision": "aaad6a749deb625da5771750dcb51920"
  },
  {
    "url": "images/sponsors/roadster.png",
    "revision": "080fb711e736d686f182358a582d7c6b"
  },
  {
    "url": "images/sponsors/shopware_ag.png",
    "revision": "e2ded483c0660bd629938e37f388d9fb"
  },
  {
    "url": "images/sponsors/storekit.png",
    "revision": "cacf47116e5efe9fc2dcd60ebc197707"
  },
  {
    "url": "images/sponsors/storyblok.png",
    "revision": "64ec1772109b769e91138b58526484ad"
  },
  {
    "url": "images/sponsors/tidelift.png",
    "revision": "831935bd53d7d2d4eea9427c5f874816"
  },
  {
    "url": "images/sponsors/tighten_co.png",
    "revision": "003364e7044150e2979cbfe03d640cec"
  },
  {
    "url": "images/sponsors/tooltwist.png",
    "revision": "b81bfd5ae608e965d03aaa5a4164373e"
  },
  {
    "url": "images/sponsors/unicorn.png",
    "revision": "e0c072bd78f366471a393b9c366c9b74"
  },
  {
    "url": "images/sponsors/usave.png",
    "revision": "5cffd5053b1d75ae49c9b6eb176e0ccf"
  },
  {
    "url": "images/sponsors/valuecoders.png",
    "revision": "818ca42a745e018ace0c55c36a7ae3dd"
  },
  {
    "url": "images/sponsors/vehikl.png",
    "revision": "3bd1b88aa9d242d308e838f2342d7660"
  },
  {
    "url": "images/sponsors/vpnranks.png",
    "revision": "35d7392e773d487e13358d8b5f7fb646"
  },
  {
    "url": "images/sponsors/vuejobs.png",
    "revision": "77ed618e17571d1a2d77ad7bc53e8fc4"
  },
  {
    "url": "images/sponsors/vuemastery.png",
    "revision": "6f09ce143467fba22039bde3f2070c19"
  },
  {
    "url": "images/sponsors/vueschool.png",
    "revision": "3d92b4f1a8fcbe3be0d0e89950a1a705"
  },
  {
    "url": "images/sponsors/vuetify.png",
    "revision": "c7cfff77abb10162cb0b7c2ed3b6ac51"
  },
  {
    "url": "images/sponsors/watchcartoononline.png",
    "revision": "f7cf1082b14003908496f02f9eb2ae00"
  },
  {
    "url": "images/sponsors/webdock.png",
    "revision": "6b8d3d271ba4d05daf83ad75d21221d1"
  },
  {
    "url": "images/sponsors/webucator.png",
    "revision": "3c87885f4c36bc1b07f8c2b547e84b6f"
  },
  {
    "url": "images/sponsors/wilderminds.png",
    "revision": "cd98b69653b51369da2e765097f13d6f"
  },
  {
    "url": "images/sponsors/writers_per_hour.jpg",
    "revision": "2033e6d7e88969e97e78e38d8d030eb9"
  },
  {
    "url": "images/sponsors/x_team.png",
    "revision": "a6cfaebb0c0dc17d348bc9c6fd5758ef"
  },
  {
    "url": "images/sponsors/y8.png",
    "revision": "3cdd8826d3419751f40a8aa7f90cd539"
  },
  {
    "url": "images/sponsors/yakaz.png",
    "revision": "f1918919114e35d6091e67370450e8bd"
  },
  {
    "url": "images/sponsors/youku.png",
    "revision": "1cce2782971aed63d38b17e28614d512"
  },
  {
    "url": "images/state.png",
    "revision": "6a05b01942c7d2cff4ea0033ded59ebb"
  },
  {
    "url": "images/transition.png",
    "revision": "5990c1dff7dc7a8fb3b34b4462bd0105"
  },
  {
    "url": "images/transitions.svg",
    "revision": "66096c1a18d223228032d26a80737c5c"
  },
  {
    "url": "images/v-bind-instead-of-sync.png",
    "revision": "cb59705b61fd5a75b1903f6a0b497cb1"
  },
  {
    "url": "index.html",
    "revision": "4a643b6caff0797102dde685ff67e4de"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "style-guide/index.html",
    "revision": "e509099a5d528a6a0f60ba0bf808a752"
  },
  {
    "url": "support-vuejs/index.html",
    "revision": "1124c19412b8795280ca36b77a86fdd7"
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
