import React, { Component } from "react"
import Song from "./Song"
import "../App.css"

class List extends Component {
  //<List tracksJson={tracks.track} star={this.star} />

  render() {
    return (
      <div>
        list starts here
        {this.props.tracksJson.map((t, index) => {
          if (this.props.star.includes(t.url)) {
            return (
              <Song
                track={t}
                key={index}
                star={this.props.star}
                handleChange={this.props.handleChange}
              />
            )
          }
        })}
      </div>
    )
  }
}

export default List
