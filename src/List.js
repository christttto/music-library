import React, { Component } from "react"

function List() {
  //needs to fetch json
  //if json is empty, render empty
  //if all, show empty star next to it
  //if star, show yellow star
  return (
    <span className="all">
      list starts here
      <div className="all-search">searchbar</div>
      <div className="all-list">
        this is list
        <div className="all-list-song">
          individual song
          <span className="star">empty star</span>
          <span className="Cover">album cover</span>
          <span className="text">song name, artist name, album name</span>
        </div>
      </div>
    </span>
  )
}

export default List
