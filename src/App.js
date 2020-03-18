import React, { Component } from 'react'
import Person from './components/Person/Person'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person
          name="Alan"
          age="32"
        />
      </div>
    )
  }
}

export default App
