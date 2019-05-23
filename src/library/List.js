import React, { Component } from "react"
import Song from "./Song"
function List(props) {
  //needs to fetch json
  //if json is empty, render empty
  //if all, show empty star next to it
  //if star, show yellow star

  return (
    <span className="outside">
      list starts here
      <div className="all-search">searchbar</div>
      <div className="all-list">
        {console.log("list here")}
        {console.log(props)}

        {props.tracks.map(track => {
          return <Song song={track} />
        })}
      </div>
    </span>
  )
}

export default List
