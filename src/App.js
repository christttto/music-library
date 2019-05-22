import React, { Component } from "react"
import List from "./List"
import logo from "./logo.svg"
import "./App.css"

function App() {
  return (
    <div className="App">
      <List />
      {/*list of all */}
      <List />
      {/*list of starred */}
    </div>
  )
}

export default App
