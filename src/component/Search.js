import React, { Component } from "react"
import Button from "@material-ui/core/Button"
import Input from "@material-ui/core/Input"
class Search extends Component {
  //   handleSubmit(event) {
  //     event.preventDefault()
  //     console.log("search handleSubmit called")
  //     this.props.handleChange(event)
  //   }
  render() {
    return (
      <div className="Search">
        <form className="search-form" onSubmit={this.props.handleSubmit}>
          <Input
            type="text"
            name="keyword"
            placeholder="search"
            value={this.props.keyword.toLowerCase()}
            onChange={this.props.handleSubmit}
          />
          <Button>go</Button>
        </form>
      </div>
    )
  }
}
export default Search
