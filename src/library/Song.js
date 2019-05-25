import React from "react"
import ReactStars from "react-stars"
import Rating from "react-rating"
import "../App.css"
function Song(props) {
  const rateChange = newRate => {
    console.log(newRate)
  }
  return (
    <div className="all-list-song">
      {/**onChange={} is to reflect change, value={} should be changed */}
      <span>
        <ReactStars count={1} size={24} color2={"teal"} half={false} />
      </span>
      <span>
        <Rating
          stop={1}
          initialRating={0}
          onChange={rateChange}
          emptySymbol=""
        />
      </span>

      <span className="track-name">{props.track.name} - </span>
      <span className="text">{props.track.artist.name}</span>
      <div>{props.track.url}</div>
    </div>
  )
}
export default Song
