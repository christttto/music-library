import React, { Component } from "react"
import List from "./library/List"
import Search from "./library/Search"
import Header from "./layout/Header"
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      //store json
      tracksJson: {},

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
          tracksJson: data.tracks
        })
      })
  }
  handleStar(myUrl) {
    this.setState(prevState => {
      let index = prevState.star.indexOf(myUrl)
      if (index > -1) {
        //remove
        return {
          star: prevState.star.filter((_, i) => i !== index)
        }
      } else {
        //add
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
        <Header />
        <Search keyword={this.state.keyword} handleSubmit={this.handleSubmit} />
        {this.state && this.state.tracksJson.track && (
          <div>
            <span className="List">
              <List
                tracksJson={this.state.tracksJson.track}
                star={this.state.star}
                handleStar={this.handleStar}
                keyword={this.state.keyword}
                title="all"
              />
            </span>
            <span className="List">
              <List
                tracksJson={this.state.tracksJson.track}
                star={this.state.star}
                handleStar={this.handleStar}
                keyword={this.state.keyword}
                title="star"
              />
            </span>
          </div>
        )}
      </div>
    )
  }
}

export default App
