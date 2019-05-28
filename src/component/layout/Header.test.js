import React from "react"
import { shallow } from "enzyme"
import Header from "./Header"
import { isTSAnyKeyword, exportAllDeclaration } from "@babel/types"

describe("Header Component", () => {
  it("It should render without errrors", () => {
    const component = shallow(<Header />)
    const logo = component.find(".headerComponent")
    expect(logo.length).toBe(1)
  })
})
