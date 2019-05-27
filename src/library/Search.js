import React, { Component } from "react"

class Search extends Component {
  //   handleSubmit(event) {
  //     event.preventDefault()
  //     console.log("search handleSubmit called")
  //     this.props.handleChange(event)
  //   }
  render() {
    return (
      <div>
        <form className="search-form" onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            name="keyword"
            placeholder="search"
            value={this.props.keyword}
            onChange={this.props.handleSubmit}
          />
          <button>search</button>
        </form>
        {this.props.keyword}
      </div>
    )
  }
}
export default Search
