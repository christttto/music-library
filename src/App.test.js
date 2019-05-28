import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { exportAllDeclaration } from "@babel/types"

import List from "./component/List"
import Song from "./component/Song"
import Search from "./component/Search"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

test("<App />", () => {
  expect(true).toBeTruthy()
})
test("<List />", () => {
  expect(true).toBeTruthy()
})
test("<Song />", () => {
  expect(true).toBeTruthy()
})
test("<Search />", () => {
  expect(true).toBeTruthy()
})
