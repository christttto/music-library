import React from "react"
import ReactStars from "react-stars"
import "../App.css"
function Song(props) {
  const rateChange = newRate => {
    console.log(newRate)
  }
  return (
    <div className="all-list-song">
      {/**onChange={} is to reflect change, value={} should be changed */}
      <ReactStars
        className="star"
        count={1}
        size={24}
        color2={"teal"}
        half={false}
        onChange={newRate => {
          rateChange(newRate)
        }}
      />
      <span className="track-name">{props.track.name} - </span>
      <span className="text">{props.track.artist.name}</span>
      <div className="text">{props.track.url}</div>
    </div>
  )
}
export default Song
