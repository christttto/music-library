import React from "react"
import "../App.css"
function Song(props) {
  return (
    <div className="all-list-song">
      <span className="star">star</span>
      <span className="track-name">{props.track.name} - </span>
      <span className="text">{props.track.artist.name}</span>
    </div>
  )
}
export default Song
