import React from "react"
import ReactStars from "react-stars"
import "../App.css"
function Song(props) {
  return (
    <div className="all-list-song">
      <span className="star">
        {/**onChange={} is to reflect change, value={} should be changed */}
        <ReactStars
          count={1}
          size={24}
          color2={"teal"}
          half={false}
          value={0}
        />
      </span>
      <span className="track-name">{props.track.name} - </span>
      <span className="text">{props.track.artist.name}</span>
    </div>
  )
}
export default Song
