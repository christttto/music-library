import React from "react"
import "../App.css"
function Song(props) {
  // let myValue = 0 //depends on the original value
  // const rateChange = newRate => {
  //   myValue === 0 ? (myValue = 1) : (myValue = 0)
  //   console.log(newRate)
  //   //props.handleChange
  //   return myValue
  // }
  // const isStar = () => {
  //   if (props.star.includes(props.track.url)) {
  //     return 1
  //   } else {
  //     console.log("not a star")
  //     return 0
  //   }
  // }
  // function reactStars() {
  //   return (
  //     <ReactStars
  //       className="star"
  //       count={1}
  //       size={24}
  //       color2={"teal"}
  //       value={isStar(props.track.url)} //needs to be receiving from the parent component
  //       half={false}
  //       onChange={newRate => {
  //         rateChange(newRate)
  //       }}
  //     />
  //   )
  // }
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
    <div className="all-list-song">
      <div
        className="star"
        style={myStar()}
        onClick={() => {
          //myClick(props.track.url)
          //here, after unstar, need to re-assign style value
          props.handleStar(props.track.url)
          console.log("please")
        }}
      >
        ★
      </div>
      <span>{props.track.name} - </span>
      <span>{props.track.artist.name}</span>
      <div>{props.track.url}</div>
    </div>
  )
}
export default Song
