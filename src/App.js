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
      star: []
    }
    this.handleStar = this.handleStar.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
    this.setState(prevState => {
      let index = prevState.star.indexOf(myUrl)
      if (index > -1) {
        console.log("remove")
        return {
          star: prevState.star.filter((_, i) => i !== index)
        }
      } else {
        console.log("add")
        return {
          star: prevState.star.concat([myUrl])
        }
      }
    })
  }
  handleSubmit(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="App">
        App.js is here
        <Search keyword={this.state.keyword} handleSubmit={this.handleSubmit} />
        <div>
          <span className="List">
            <List
              tracksJson={tracks.track}
              star={this.state.star}
              handleStar={this.handleStar}
              keyword={this.state.keyword}
              title="all"
            />
          </span>
          <span className="List">
            <List
              tracksJson={tracks.track}
              star={this.state.star}
              handleStar={this.handleStar}
              keyword={this.state.keyword}
              title="star"
            />
          </span>
        </div>
      </div>
    )
  }
}

export default App
