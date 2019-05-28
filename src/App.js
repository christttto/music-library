import React, { Component } from "react"
import List from "./component/List"
import Search from "./component/Search"
import Header from "./component/layout/Header"
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      //store json
      tracksJson: {},

      //keyword used for search
      keyword: "",
      //array of url of starred songs
      star: []
    }
    this.handleStar = this.handleStar.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  //bringing json
  componentDidMount() {
    //fetch music object here, put it into state
    fetch(
      "https://gist.githubusercontent.com/paul-tcell/3803920c0570eb5ce83309bdd5d07ce4/raw/174eac7dc721cf83e2cee98710be947b8f526f87/100songs.json"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          tracksJson: data.tracks
        })
      })
  }
  //handles star and unstar process, adding removing from star array
  handleStar(myUrl) {
    this.setState(prevState => {
      let index = prevState.star.indexOf(myUrl) //search for the song
      if (index > -1) {
        //song exists inside
        //remove
        return {
          star: prevState.star.filter((_, i) => i !== index)
        }
      } else {
        //song does not exist
        //add
        return {
          star: prevState.star.concat([myUrl])
        }
      }
    })
  }
  //abstracted handleChange just search for now
  handleSubmit(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="App">
        <Header className="" />
        <Search keyword={this.state.keyword} handleSubmit={this.handleSubmit} />
        {this.state && this.state.tracksJson.track && (
          <div>
            <span className="List">
              <List
                title="all"
                tracksJson={this.state.tracksJson.track}
                star={this.state.star}
                handleStar={this.handleStar}
                keyword={this.state.keyword}
              />
            </span>
            <span className="List">
              <List
                title="star"
                tracksJson={this.state.tracksJson.track}
                star={this.state.star}
                handleStar={this.handleStar}
                keyword={this.state.keyword}
              />
            </span>
          </div>
        )}
      </div>
    )
  }
}

export default App
