import React, { Component } from 'react'

const Title = props => {
  return <h1>{props.text}</h1>
}

class App extends Component {
  render () {
    return (
      <div className='App'>
        <h1>Hello World!</h1>
      </div>
    )
  }
}

export default App
