import React, { Component } from "react"
import Song from "./Song"
import "../App.css"

class List extends Component {
  render() {
    //need to take care of keyword

    if (this.props.title === "star") {
      return (
        <div>
          <div>{this.props.title}</div>
          {this.props.tracksJson.map((t, index) => {
            if (
              this.props.star.includes(t.url) &&
              (this.props.keyword === "" ||
                t.name.toLowerCase().includes(this.props.keyword) ||
                t.artist.name.toLowerCase().includes(this.props.keyword))
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
            return null
          })}
        </div>
      )
    } else {
      return (
        <div>
          <div>{this.props.title}</div>
          {this.props.tracksJson.map((t, index) => {
            if (
              this.props.keyword === "" ||
              t.name.toLowerCase().includes(this.props.keyword) ||
              t.artist.name.toLowerCase().includes(this.props.keyword)
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
            return null
          })}
        </div>
      )
    }
  }
}

export default List
