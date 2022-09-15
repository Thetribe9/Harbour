'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "0290909e1ff1da04b0f0e224e62498b5",
"assets/assets/fonts/Inter-Bold.ttf": "2a14de21f3809a78ea601cef2b2fb61a",
"assets/assets/fonts/Inter-Light.ttf": "bd68bbe6f33671b4e0aff5e4e44511d2",
"assets/assets/fonts/Inter-Medium.ttf": "e5f18cb987385760e628a9671f975412",
"assets/assets/fonts/Inter-Regular.ttf": "851660f90f21dba5ec35b1765fdd426a",
"assets/assets/fonts/Inter-SemiBold.ttf": "a2c4e8821556fa8b48d943a39f9da10c",
"assets/assets/fonts/Inter-Thin.ttf": "5a53d5e09d390202234ede487e34de14",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/images/1.png": "e7aeba13a13725cf1d0fb0193b7e40c9",
"assets/assets/images/2.png": "827117b301006fa0cc2717a0216c0f3f",
"assets/assets/images/3.png": "4a11808fe47656e59d29988eddfc7dd7",
"assets/assets/images/4.png": "3b20036fddc8c16e4eb8b9f5fde8e250",
"assets/assets/images/addNewRequest-icon.png": "4d3afde7f645cfda4b5c2f6134fdf699",
"assets/assets/images/appStrings.dart": "23f51917c9a5a580ecd423f3d41666a6",
"assets/assets/images/arrowForward-img.png": "8469156c83e3e5a2e196be9d672d9c8c",
"assets/assets/images/arrow_forward-icon.svg": "0ec55f1fec7e19e2b0d138f97546ee67",
"assets/assets/images/backIcon.svg": "1f428723bcf3edae025321fb02dc34af",
"assets/assets/images/badmintonRackets-icon.svg": "c3a0b1d6b2f6ce387d58633307176456",
"assets/assets/images/bannerImg.png": "f3f647a7cd7c39300f588156ece2891e",
"assets/assets/images/basketBall.svg": "3654a43f20d91e0bfd2d52c0cbb82965",
"assets/assets/images/batmintonCourts.svg": "e4f97af60c8465855aff02d00b8f77e5",
"assets/assets/images/bookingsIcon.svg": "60f1f5d8dd3c036946aaac60975246ea",
"assets/assets/images/bookingsLogo.svg": "74e1b57ed2c8850d031c173abbc976d5",
"assets/assets/images/CoverIMG.png": "e6e43b8267a1d3967dcfc48225bc238a",
"assets/assets/images/cricketBall-icon.svg": "144307c7740a83a5cd3b065a2e435050",
"assets/assets/images/cricketBat-icon.svg": "d52c7fafcfd5eaf2184a0766750d8287",
"assets/assets/images/customMenuIcon.svg": "2426501ef1c26ec85b187081590620b4",
"assets/assets/images/cycle-icon.svg": "2ec5fa803df9f8f7aa4949b15f25cb48",
"assets/assets/images/designRepair-icon.svg": "55a5440a5498e81ec112c79d989e21cc",
"assets/assets/images/doneIcon.svg": "990ae748b11d4caf1b3f64c992793706",
"assets/assets/images/download-icon.svg": "777434c23739b5c9556931af888bf47b",
"assets/assets/images/editImage-icon.png": "5ebeda8f46aa183e9555482b2bdd5b5b",
"assets/assets/images/empAvtar-img.png": "171ce6d17edb559e836c0a883a1d1441",
"assets/assets/images/empImage.png": "73676f8a2cc386a23c72647e8673d33d",
"assets/assets/images/employee-icon.png": "14c50f9f95280ffba0465b4dd94c845b",
"assets/assets/images/events-icon.png": "9ec5a7fd9f6b2006bb47d62de299efb4",
"assets/assets/images/eventsIcon.svg": "3246f6188060d0cbbbf1c19d71de747f",
"assets/assets/images/expenses-icon.png": "3e3ac27583aa3cc91319e5bb6795c1fb",
"assets/assets/images/filter-icon.svg": "b0d0bb74e9a7b854b83b9ade610705fa",
"assets/assets/images/FoIcon.png": "16e087240298815c69b1d2b7a5704ee8",
"assets/assets/images/footballCricket.svg": "2dc2c0779d5bd6c5004087fcd47d6dd8",
"assets/assets/images/footballs-icon.svg": "c72da942d466aa8fadfc8cf70351eb0a",
"assets/assets/images/googleIcon.svg": "7cd1ad3113fc2ac834b60ed369fd9c11",
"assets/assets/images/groundCricket.svg": "a96afc322533d2db62df12d6afc201fe",
"assets/assets/images/Guest%2520Icon.svg": "245a7a3efbd30c8c215f9a116aa281d5",
"assets/assets/images/hamberger.svg": "101aa244c917af87a77c0cfb7dcee0f6",
"assets/assets/images/harborSplash.png": "1cb01d32e2d2a5ab1871b49147072b34",
"assets/assets/images/inflow-icon.png": "cad3c7ba44306cd39e429eeb43d7cc23",
"assets/assets/images/inventory-icon.png": "b191e029158ecb22f8886f8aa1e7f7e8",
"assets/assets/images/kidsPlayRoom.svg": "059c3e5d8e72faa218fab1f9093bb53e",
"assets/assets/images/lock%2520(1).svg": "85dbc3f3e2fee7e8a67b3627ad00c955",
"assets/assets/images/lock%2520(3).png": "3dcfb46a848af77a367bc9fe4b06f19a",
"assets/assets/images/lock.svg": "c797732c2b19a2215fcc28710e2aab06",
"assets/assets/images/LogoHarbor.png": "0a3e37ace5b35f8515a46151f57592d4",
"assets/assets/images/mail-icon.svg": "b06292b9b6f0e71b72f98965784c788b",
"assets/assets/images/mailImage-icon.png": "8757e8463bc9ed276a2a953f2737ac9d",
"assets/assets/images/mesgIcon.svg": "dde6f0240c076c8a9a964799185e2742",
"assets/assets/images/multiselect-icon.svg": "4f36af46c6840450a89b23124da9e90b",
"assets/assets/images/nav_disable_expenseIcon.svg": "7e3c5192cc53587c1a8ab4a39eb3928c",
"assets/assets/images/nav_disable_financeIcon.svg": "932d4c9eaacef2f0dc482872bf8e85c7",
"assets/assets/images/nav_disable_homeIcon.svg": "a7fe5a2624fdccfb79fa68a14c10ad68",
"assets/assets/images/nav_disable_leaveIcon.svg": "78ce3bd871d708c86dbc0354235f9969",
"assets/assets/images/nav_disable_profileIcon.svg": "76606f0d450e998dacd983d14259dd4f",
"assets/assets/images/nav_disable_timeSheet.svg": "eb83173c07aee9f30357a60c81b0511e",
"assets/assets/images/nav_enable_expenseIcon.svg": "ce401d0e3eb26d54b98ef3c6ea820f1e",
"assets/assets/images/nav_enable_financeIcon.svg": "8781501407282af924511c449fcd1eef",
"assets/assets/images/nav_enable_homeIcon.svg": "2c8bc13c840fffab91ddbc73d38cbd5e",
"assets/assets/images/nav_enable_leaveIcon.svg": "85f6ddbe771c314242571a1b6b5216e8",
"assets/assets/images/nav_enable_profileIcon.svg": "cb55080164a9388ba469b41aab19d85a",
"assets/assets/images/nav_enable_timeSheet.svg": "03dde8ce6f1f9700002aed77dfc6555d",
"assets/assets/images/netCricketCourts.svg": "63141e4f66d15a8747c19e7eba2ddc85",
"assets/assets/images/newBookingsLogo.svg": "7ed27efd5915265a95b03e30c86288d2",
"assets/assets/images/newCricketCourt5.svg": "b59846c59fb0b6c4d42a495790ec3345",
"assets/assets/images/newEventsIcon.svg": "0cfd5195fb1164e43ff038afe637a167",
"assets/assets/images/newRefundsIcon.svg": "6d967f2b195f64333c0bdf041dcc7ca9",
"assets/assets/images/newSubscriptionIcon.svg": "b25915a42a2e43b45908057d714a2f4b",
"assets/assets/images/notificationIcon.svg": "e918465201615514e197b5887b96581c",
"assets/assets/images/outflow-icon.png": "92403b42acb3819f49ff7febb6583358",
"assets/assets/images/outlookIcon.svg": "4e959bf7079416257f75e7d9f40577e6",
"assets/assets/images/passwordIcon.svg": "65f97c0996185ac46aa24dd44a3323ca",
"assets/assets/images/phone-icon.svg": "65f9b251a3d8fed9871f4371ac3fa0d9",
"assets/assets/images/playoImg.png": "efdfc8251a504d2cb37411ee392c87a6",
"assets/assets/images/playoRound.png": "7559eb3f65346e49d6528523a962bd02",
"assets/assets/images/profileIcon.svg": "b0bcdae989aae27254cfd1cb763a3537",
"assets/assets/images/refundIcon.svg": "bd2cd66cda51a0f226855bd58f8fd4e7",
"assets/assets/images/repairs-icon.png": "3f5754e1690e9b51638eaa5c8b6ac590",
"assets/assets/images/rescheduleicon.svg": "d005640d99f7dd2ded1c74dca83aa7f0",
"assets/assets/images/scanIcon.svg": "afeb8208eb21ef4dd42a324d1e00670e",
"assets/assets/images/search-icon.svg": "0ed664da6cec314a3b1b468c3621fc56",
"assets/assets/images/secondaryBackIcon.svg": "e1233a6a9ee770c45ea13e86f4a454f4",
"assets/assets/images/secondaryNotification.svg": "66f1fe79502ce7bae8c6e0f213d118e8",
"assets/assets/images/settingIcon.svg": "fb033f48dc2f5f30262f1a6ac046352b",
"assets/assets/images/shuttleCock-icon.svg": "563c505cc897f22512327ec5291f3c42",
"assets/assets/images/skatingTrack.svg": "b0413c65a23c9694e9ce91bf33932255",
"assets/assets/images/subscriptionIcon.png": "0d6fd881133a1ecac387ed26651e8370",
"assets/assets/images/subScriptionIcon.svg": "93abb42631a4dbf783af07dd36179ab3",
"assets/assets/images/successfullTick.png": "0a15555380c03d7da500b7867ffa6a95",
"assets/assets/images/successLogo.svg": "3457a3aa83fad044e8c62b45dac622e3",
"assets/assets/images/tightEndHam.png": "6ab48f774b11a4942936d2f943485126",
"assets/assets/images/tightEndLogo.png": "b143ea65165e554784054c283b90e15f",
"assets/assets/images/TightEndLogo.svg": "9fdc322161727b851becdd134adfbbe8",
"assets/assets/images/timesheets-icon.svg": "a55b2ea1fad427b8e9e395eb6425e8af",
"assets/assets/images/TribeLogo.png": "4feda5a2f56a4679660902949e4661bc",
"assets/assets/images/TribeLogoFav.png": "be62f04c6b33bc04d3e446e5dae4b5db",
"assets/assets/images/valleyBall.svg": "8fbb91f63ac45061ad26278b578393d9",
"assets/assets/images/videoRecorder-icon.svg": "a7ecf1a5fce752d3adf5ba0530313e58",
"assets/assets/images/volleyBalls-icon.svg": "f8dec7cc5cb4f38f642970c830c71c9a",
"assets/assets/images/walkInIcon.svg": "476e7fce4e446d81b41fadfb123c6326",
"assets/FontManifest.json": "30422b9f9bc4013a41be32b6e92a6f51",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "0f4b6a35735f634ca3153cb75f8d6da6",
"assets/packages/csc_picker/lib/assets/country.json": "11b8187fd184a2d648d6b5be8c5e9908",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/timezone/data/2020a.tzf": "84285f1f81b999f1de349a723574b3e5",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "873334b9a5a37d11a31b6ad62f9a81f7",
"/": "873334b9a5a37d11a31b6ad62f9a81f7",
"main.dart.js": "0048b56bb8faa2855dc7ffd1b683f02d",
"manifest.json": "8ef95d3397c7b63d7565e6eeac2754b4",
"version.json": "e11da3a6143bf654a25e156a65061054"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
