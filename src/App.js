import React, { Component } from "react"
import List from "./library/List"

import Search from "./library/Search"
import "./App.css"

import tracks from "./data/tracks.json"

class App extends Component {
  constructor() {
    super()
    this.state = {
      //store json
      tracksJson: {},
      tracksJsonFile: {},

      //keyword used for
      keyword: "",
      star: [
        "https://www.last.fm/music/Ariana+Grande/_/7+rings",
        "https://www.last.fm/music/Ariana+Grande/_/Thank+U,+Next"
      ]
    }
    this.handleStar = this.handleStar.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    //this.handleChange = this.handleChange.bind(this)
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
  handleStar(myUrl) {
    console.log("app handlechange")
    console.log(myUrl)
    let index = this.state.star.indexOf(myUrl)
    if (index > -1) {
      //myUrl exists
      console.log("removing from star")
      this.setState(prevState => {
        star: prevState.star.splice(index, 1)
      })
    } else {
      console.log("adding to star")
      this.setState({
        star: this.state.star.concat([myUrl])
      })
    }
    console.log(this.state.star)
  }
  handleSubmit(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  // handleChange(event) {
  //   const { name, value } = event.target
  //   this.setState({ [name]: value })
  // }
  render() {
    return (
      <div className="App">
        App.js is here
        <Search keyword={this.state.keyword} handleSubmit={this.handleSubmit} />
        <div>
          <span className="List">
            {/**filter */}
            <List
              tracksJson={tracks.track}
              star={this.state.star}
              handleStar={this.handleStar}
              keyword={this.state.keyword}
              title="all"
            />
          </span>
          <span className="List">
            {/**filter */}
            <List
              tracksJson={tracks.track}
              star={this.state.star}
              handleStar={this.handleStar}
              keyword={this.state.keyword}
              title="star"
            />
          </span>
        </div>
        <div>search bar</div>
      </div>
    )
  }
}

export default App
