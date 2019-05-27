import React, { Component } from "react"
import Song from "./Song"
import "../App.css"

class List extends Component {
  render() {
    //need to take care of keyword

    if (this.props.title === "star") {
      return (
        <div>
          list starts here
          {this.props.tracksJson.map((t, index) => {
            if (
              this.props.star.includes(t.url) &&
              (this.props.keyword === "" ||
                t.name.includes(this.props.keyword) ||
                t.artist.name.includes(this.props.keyword))
            ) {
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
    } else {
      return (
        <div>
          list starts here
          {this.props.tracksJson.map((t, index) => {
            if (
              this.props.keyword === "" ||
              t.name.includes(this.props.keyword) ||
              t.artist.name.includes(this.props.keyword)
            ) {
              return (
                <Song
                  track={t}
                  key={index}
                  star={this.props.star}
                  handleStar={this.props.handleStar}
                />
              )
            }
          })}
        </div>
      )
    }
  }
}

export default List
