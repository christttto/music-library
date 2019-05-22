import React from "react"
import logo from "./logo.svg"
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <div className="body">
        <div className="all">
          <div className="all-search" />
          <div className="all-list">
            <div className="all-list-song">
              <div className="star">empty star</div>
              <div className="Cover" />
              <div className="text">song name, artist name, album name</div>
            </div>
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
        <div className="star">
          <div className="star-search" />
          <div className="star-list">
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
