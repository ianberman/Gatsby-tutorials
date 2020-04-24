const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-about-js": hot(preferDefault(require("/Users/ianberman/Documents/GitHub/Gatsby-tutorials/tutorial-part-4-8/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ianberman/Documents/GitHub/Gatsby-tutorials/tutorial-part-4-8/src/pages/index.js"))),
  "component---src-pages-my-files-js": hot(preferDefault(require("/Users/ianberman/Documents/GitHub/Gatsby-tutorials/tutorial-part-4-8/src/pages/my-files.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/ianberman/Documents/GitHub/Gatsby-tutorials/tutorial-part-4-8/src/templates/blog-post.js")))
}

