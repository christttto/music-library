import React from "react"
import ReactStars from "react-stars"
import "../App.css"
function Song(props) {
  let myValue = 0 //depends on the original value
  const rateChange = newRate => {
    myValue === 0 ? (myValue = 1) : (myValue = 0)
    console.log(newRate)
    //props.handleChange
    return myValue
  }
  const isStar = () => {
    if (props.star.includes(props.track.url)) {
      return 1
    } else {
      console.log("not a star")
      return 0
    }
  }
  function reactStars() {
    return (
      <ReactStars
        className="star"
        count={1}
        size={24}
        color2={"teal"}
        value={isStar(props.track.url)} //needs to be receiving from the parent component
        half={false}
        onChange={newRate => {
          rateChange(newRate)
        }}
      />
    )
  }
  function myStar() {
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
    <div className="all-list-song">
      {/**onChange={} is to reflect change, value={} should be changed */}
      <div className="star" style={myStar()} onClick={}>
        ★
      </div>
      <span className="track-name">{props.track.name} - </span>
      <span className="text">{props.track.artist.name}</span>
      <div className="text">{props.track.url}</div>
    </div>
  )
}
export default Song
