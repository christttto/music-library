import React, { Component } from "react"
import List from "./library/List"
import logo from "./logo.svg"
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {
    console.log("h1")
  }

  render() {
    return (
      <div className="App">
        <List />
        {/*list of all */}
        <List />
        {/*list of starred */}
      </div>
    )
  }
}

export default App
