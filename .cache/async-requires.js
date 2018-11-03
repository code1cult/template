// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-page-js": () => import("/home/ilovetraffic/template/src/pages/page.js" /* webpackChunkName: "component---src-pages-page-js" */),
  "component---cache-dev-404-page-js": () => import("/home/ilovetraffic/template/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/home/ilovetraffic/template/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/home/ilovetraffic/template/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import("/home/ilovetraffic/template/.cache/data.json")

