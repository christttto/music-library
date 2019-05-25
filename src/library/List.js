import React, { Component } from "react"
import Song from "./Song"
import "../App.css"
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
        return <Song track={t} />
      })}
    </div>
  )
}

export default List
