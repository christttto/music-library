import React from "react"
import "../App.css"
function Song(props) {
  const myStar = () => {
    if (props.star.includes(props.track.url)) {
      return {
        color: "yellow"
      }
    } else {
      return {
        color: "grey"
      }
    }
  }

  return (
    <div className="Song">
      <span
        className="star"
        style={myStar()}
        onClick={() => {
          props.handleStar(props.track.url)
        }}
      >
        ★
      </span>

      <img src={props.track.image[0]["#text"]} alt="album" />
      <span>{props.track.name} - </span>
      <span>{props.track.artist.name}</span>
    </div>
  )
}
export default Song
