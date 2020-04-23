import React from "react"
// this file creates a sub-component usable on multiple pages
// defined as name of file "Header"
// you can then import Header from "../components/header"
// and call <Header /> in a div of another file


export default props => <h1>{props.headerText}</h1>
// props stands for property
// you can call this props with <Header headerText="string" />
// in JSX you can write javascript in HTML with {}
// this allows you to access headerText property from props object
