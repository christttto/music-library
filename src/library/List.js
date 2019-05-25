import React from "react"
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
      {props.tracksJson.map((t, index) => {
        return <Song track={t} key={index} />
      })}
    </div>
  )
}

export default List
