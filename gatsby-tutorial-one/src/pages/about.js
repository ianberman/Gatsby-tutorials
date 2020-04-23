import React from "react"
// automatically makes pages accessible
// any react component defined in src/pages/x.js will become a page
import Header from "../components/header"
// allows you to call component Header as replacement for h1

export default () => (
  <div style={{ color: `teal` }}>
    <Header headerText="About Gatsby" />
    <Header headerText="It's pretty cool" />
    <p>Such wow. Very React.</p>
  </div>
)
