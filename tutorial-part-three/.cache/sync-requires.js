const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ianberman/Documents/GitHub/tutorial-part-three/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/ianberman/Documents/GitHub/tutorial-part-three/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/ianberman/Documents/GitHub/tutorial-part-three/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ianberman/Documents/GitHub/tutorial-part-three/src/pages/index.js")))
}

