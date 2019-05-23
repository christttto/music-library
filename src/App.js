import React, { Component } from "react"
import List from "./library/List"
import logo from "./logo.svg"
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      tracksJson: {},
      starred: {}
    }
  }
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
  }
  //needs handle change when star pushed
  //json is added to our starred state
  //which will re-render the component
  render() {
    return (
      <div className="App">
        <List />
        {/*list of all, needs parameter to receive the tracks
        this.state.tracksJson.tracks.track
         */}
        <List />
        {/*list of starred, parameter set to starred 
        the starred will have same format as track: Array[100]
        */}
      </div>
    )
  }
}

export default App
