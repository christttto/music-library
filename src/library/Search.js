import React, { Component } from "react"

class Search extends Component {
  handleSubmit(event) {
    event.preventDefault()
    console.log(event)
  }
  handleChange(event) {
    const { name, value } = event.target
    this.props.setState({ [name]: value })
  }
  render() {
    return (
      <div>
        <form className="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="keyword"
            placeholder="search"
            value={this.props.keyword}
            onChange={this.handleChange}
          />
          <button>search</button>
        </form>
        {this.props.keyword}
      </div>
    )
  }
}
export default Search
