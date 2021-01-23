if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"f70d88b8ae535ec5e62a77f6d336e350","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"f70d88b8ae535ec5e62a77f6d336e350","url":"index.html"},{"revision":"fd2c0420da6251c7b63623485e9404d9","url":"precache-manifest.fd2c0420da6251c7b63623485e9404d9.js"},{"revision":"40aae3fc0bf6250d96e2b633934d069a","url":"static/css/15.c5ef3726.chunk.css"},{"revision":"43ddfab04472ad3eab0de5f165a6e66b","url":"static/js/0.97329efb.chunk.js"},{"revision":"0380a3c7e2d2f6067cb0beb6782736d1","url":"static/js/1.40e3062c.chunk.js"},{"revision":"14a26ea1e0181690ccc8047d5c034e5a","url":"static/js/10.2ad371b3.chunk.js"},{"revision":"eb832b24c1355078971c5ab9d9f94213","url":"static/js/11.f2158af0.chunk.js"},{"revision":"d588a5a86af5eca355e26289a6d27b0c","url":"static/js/12.dcbc0e9a.chunk.js"},{"revision":"7af3a8a38485f88146ff7fb3686942a0","url":"static/js/13.a82bf7d8.chunk.js"},{"revision":"be196d4d0d017e73c859d6abcd13eada","url":"static/js/14.f1122b16.chunk.js"},{"revision":"6b37eacf4fa4fad9d85e3a1b48c73653","url":"static/js/15.12690652.chunk.js"},{"revision":"efe5c6112047d189e7fc175015be7602","url":"static/js/16.9239a837.chunk.js"},{"revision":"966981bf2586971e8b3835228a8b82c4","url":"static/js/17.cfb58ddf.chunk.js"},{"revision":"0e0178cda670e08343d691e526869b8d","url":"static/js/18.2a05b531.chunk.js"},{"revision":"cb9f8f04e426eee2cf9a234570813ea3","url":"static/js/19.44fa96b8.chunk.js"},{"revision":"cdce98af7cb58f01e5b2932d4350f571","url":"static/js/2.0b21f440.chunk.js"},{"revision":"b97b87f46a18e7895d6bf0d5740c04ac","url":"static/js/20.d5a10fa5.chunk.js"},{"revision":"57bd6fe6df6bafabe0a5650219891e5e","url":"static/js/21.cdc14079.chunk.js"},{"revision":"b747fa87c168123e27bf8f32115b91ef","url":"static/js/22.dd952a32.chunk.js"},{"revision":"a094c3eb9b8e9a08cc20e66943e4fd23","url":"static/js/23.296566e4.chunk.js"},{"revision":"e663c4e093f970a2067f27c75b97ebba","url":"static/js/24.e1bf936b.chunk.js"},{"revision":"147810eb8483268b80dabd57081bfea6","url":"static/js/25.09ddb2ae.chunk.js"},{"revision":"df4a984cf3d3e695c52c2a0cd135f472","url":"static/js/26.e8edcc6a.chunk.js"},{"revision":"174cf845e493f94729332c0c61426f04","url":"static/js/27.7b508304.chunk.js"},{"revision":"67e7c4e15f9f4d92b45fd474356d68dc","url":"static/js/28.30731399.chunk.js"},{"revision":"3fe06760c4d2a30857680fa57471e93d","url":"static/js/29.0c6de728.chunk.js"},{"revision":"0e4670f6fb42e0d4d8b44449c3112857","url":"static/js/3.ad5b463c.chunk.js"},{"revision":"ccd8f77f97e1f3e6c9ab1edd5291a22f","url":"static/js/30.03189e26.chunk.js"},{"revision":"b7e14075b83dbb8cffabf33ecaec4a1b","url":"static/js/31.7b517a68.chunk.js"},{"revision":"2185fd5781d4e94697186dadda39f0f6","url":"static/js/32.e5aba17c.chunk.js"},{"revision":"13ac60ba2863905b2621d3b6b011d82b","url":"static/js/33.ccba0bec.chunk.js"},{"revision":"297233d966d145401ea52fe436a9c741","url":"static/js/34.eda345db.chunk.js"},{"revision":"62169c53050daaa05a58e3e31cc0890c","url":"static/js/35.3b353bab.chunk.js"},{"revision":"4f2f8ce3d25024b4a1591ce3465e767a","url":"static/js/36.524fcf1d.chunk.js"},{"revision":"aecdf311a5936bed44dda8071bda50d6","url":"static/js/37.9cc572e2.chunk.js"},{"revision":"ebb27a915239d55887748a12ac16e2af","url":"static/js/4.8f21e211.chunk.js"},{"revision":"54cfd95fef2b88a87068c2d82b2768b7","url":"static/js/5.259dd5ac.chunk.js"},{"revision":"ebaac58bd7b4dd0a833b8d9b32ccc3a2","url":"static/js/6.eb75ae15.chunk.js"},{"revision":"736a92e54732ac54e303cd66d8962595","url":"static/js/9.8c988082.chunk.js"},{"revision":"2cf039247ab134b9298a1e519d111639","url":"static/js/main.f1256539.chunk.js"},{"revision":"559043f109d1b30cc19fe9e600f36bb2","url":"static/js/runtime-main.44456032.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
