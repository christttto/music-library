import React, { Component } from "react"
import List from "./library/List"
import "./App.css"

import tracks from "./data/tracks.json"

class App extends Component {
  constructor() {
    super()
    this.state = {
      //store json
      tracksJson: {},
      tracksJsonFile: {},
      //arrays of songid
      all: [],
      star: [
        "https://www.last.fm/music/Ariana+Grande/_/7+rings",
        "https://www.last.fm/music/Ariana+Grande/_/Thank+U,+Next"
      ]
    }
    this.handleChange = this.handleChange.bind(this)
  }
  //bringing json
  componentDidMount() {
    //use fetch, promise
    //fetch music here, put it into state
    fetch(
      "https://gist.githubusercontent.com/paul-tcell/3803920c0570eb5ce83309bdd5d07ce4/raw/174eac7dc721cf83e2cee98710be947b8f526f87/100songs.json"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          tracksJson: data
        })
      })
    this.setState({ tracksJsonFile: tracks })
  }
  handleChange(myUrl) {
    console.log("app handlechange")
    console.log(myUrl)
    let index = this.state.star.indexOf(myUrl)
    if (index > -1) {
      //myUrl exists
      console.log("removing from star")
      this.setState(prevState => {
        star: prevState.star.splice(index, 1)
      })
      console.log(this.state.star)
    } else {
      console.log("adding to star")
      this.setState({
        star: this.state.star.concat([myUrl])
      })
      console.log(this.state.star)
    }
  }
  render() {
    return (
      <div className="App">
        App.js is here
        <div>search should be here</div>
        <div>
          <span className="List">
            <List
              tracksJson={tracks.track}
              star={this.state.star}
              handleChange={this.handleChange}
            />
          </span>
          <span className="List">
            <List
              tracksJson={tracks.track}
              star={this.state.star}
              handleChange={this.handleChange}
            />
          </span>
        </div>
        <div>search bar</div>
      </div>
    )
  }
}

export default App
