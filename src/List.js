import React, { Component } from "react"

function List() {
  return (
    <div className="all">
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
    </div>
  )
}

export default List
