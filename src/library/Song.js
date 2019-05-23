import React from "react"

function Song(props) {
  return (
    <div className="all-list-song">
      individual song
      <span className="star">empty star</span>
      <span className="album image">{/*props.image*/}</span>
      <span className="text">{/**props.name */}</span>
    </div>
  )
}
export default Song
