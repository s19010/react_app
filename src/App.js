import React from 'react'

const Hello = props => {
  return <h1>Hello World!</h1>
}

class App extends React.Component {
  render () {
    return (
      <div>
          <Hello />
      </div>
    )
  }
}

export default App
