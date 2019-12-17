import React from 'react'

const Greeting = props => (
  <h1>
    <messages />
  </h1>
)

const messages = [
  '今日も頑張りましょう。',
  'こんにちは。',
  '朗らかな日ですね。'
]

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <messages />
      </div>
    )
  }
}

export default App
