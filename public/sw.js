if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>a(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-2e6be583"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"cf17a17efae39849a90f90c21098e387"},{url:"/_next/static/chunks/2458e504.8b7dd9d1d9a6172f.js",revision:"8b7dd9d1d9a6172f"},{url:"/_next/static/chunks/45-538b680fa3ebefb0.js",revision:"rawp4IeEaACRIT8LmqK_9"},{url:"/_next/static/chunks/482.121edecfaa6c5c73.js",revision:"121edecfaa6c5c73"},{url:"/_next/static/chunks/77.ddb8d1fa9689533d.js",revision:"ddb8d1fa9689533d"},{url:"/_next/static/chunks/790-e406d91cb616fea2.js",revision:"rawp4IeEaACRIT8LmqK_9"},{url:"/_next/static/chunks/809.62c124e8ae6220fd.js",revision:"62c124e8ae6220fd"},{url:"/_next/static/chunks/8d1b86a7.0ba146b6261f9970.js",revision:"0ba146b6261f9970"},{url:"/_next/static/chunks/951.65dbbd437e156339.js",revision:"65dbbd437e156339"},{url:"/_next/static/chunks/aea5067d.5803d59f880aefdf.js",revision:"5803d59f880aefdf"},{url:"/_next/static/chunks/aeef19d4-dfe1c2a502b12a70.js",revision:"rawp4IeEaACRIT8LmqK_9"},{url:"/_next/static/chunks/app/_not-found/page-ca730ff60eec3903.js",revision:"rawp4IeEaACRIT8LmqK_9"},{url:"/_next/static/chunks/app/layout-a33d016063df9a2a.js",revision:"rawp4IeEaACRIT8LmqK_9"},{url:"/_next/static/chunks/app/page-ec1692f5404ec6af.js",revision:"rawp4IeEaACRIT8LmqK_9"},{url:"/_next/static/chunks/b140f4c8.ca392faff72e1d5b.js",revision:"ca392faff72e1d5b"},{url:"/_next/static/chunks/framework-c25027af42eb8c45.js",revision:"rawp4IeEaACRIT8LmqK_9"},{url:"/_next/static/chunks/main-2545a58a2da54271.js",revision:"rawp4IeEaACRIT8LmqK_9"},{url:"/_next/static/chunks/main-app-3099bedac0ab4da8.js",revision:"rawp4IeEaACRIT8LmqK_9"},{url:"/_next/static/chunks/pages/_app-866c675654994a55.js",revision:"rawp4IeEaACRIT8LmqK_9"},{url:"/_next/static/chunks/pages/_error-4eec2c730e81cc74.js",revision:"rawp4IeEaACRIT8LmqK_9"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-82f8b12e7e882df9.js",revision:"rawp4IeEaACRIT8LmqK_9"},{url:"/_next/static/css/13873719d3b9e9d6.css",revision:"13873719d3b9e9d6"},{url:"/_next/static/css/3905b3e2a4bd28e0.css",revision:"3905b3e2a4bd28e0"},{url:"/_next/static/css/6fd850daca8b25ab.css",revision:"6fd850daca8b25ab"},{url:"/_next/static/css/d98a3d1d7be63db4.css",revision:"d98a3d1d7be63db4"},{url:"/_next/static/media/46c21389e888bf13-s.woff2",revision:"272930c09ba14c81bb294be1fe18b049"},{url:"/_next/static/media/eafabf029ad39a43-s.p.woff2",revision:"43751174b6b810eb169101a20d8c26f8"},{url:"/_next/static/rawp4IeEaACRIT8LmqK_9/_buildManifest.js",revision:"cf45b3c8f1413fce5320ebfcc801f6c6"},{url:"/_next/static/rawp4IeEaACRIT8LmqK_9/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/sound/Hope.mp3",revision:"2735acf3dc44a2c1b645b084f573cc50"},{url:"/sound/Just-Relax.mp3",revision:"ead5c7cec5cc1b8b6120522928fddfc6"},{url:"/sound/Lofi-Stuty.mp3",revision:"38e68bd45cd67467e0cf7668a44910b5"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
