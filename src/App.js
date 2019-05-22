import React, { Component } from "react"
import List from "./List"
import logo from "./logo.svg"
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="body">
        <List />
        {/*list of all */}
        <List />
        {/*list of starred */}
      </div>
    </div>
  )
}

export default App
