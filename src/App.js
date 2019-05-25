import React, { Component } from "react"
import List from "./library/List"
import logo from "./logo.svg"
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
      starred: []
    }
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
  render() {
    return (
      <div className="App">
        App.js is here
        {console.log("this is what isbeing put in")}
        {console.log(this.state.tracksJson)}
        {console.log("looking at the file version")}
        {console.log(tracks)}
        {tracks.track.map((t, index) => {
          return <h1>{t.name}</h1>
        })}
        <div>search bar</div>
        <List tracksJson={this.state.tracksJson} />
      </div>
    )
  }
}

export default App
