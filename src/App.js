import React, { Component } from 'react'

const Hello = props => {
  return <h1>Hello World!</h1>
}

class App extends Component {
  render () {
    return (
      <div>
          <Hello />
      </div>
    )
  }
}

export default App
