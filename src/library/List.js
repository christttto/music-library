import React, { Component } from "react"
import Song from "./Song"

function List(props) {
  //needs to fetch json
  //if json is empty, render empty
  //if all, show empty star next to it
  //if star, show yellow star

  return (
    <div>
      list starts here
      {console.log("inside List")}
      {console.log(props)}
      {props.tracksJson.map((t, index) => {
        return <h1>{t.name}</h1>
      })}
    </div>
  )
}

export default List
