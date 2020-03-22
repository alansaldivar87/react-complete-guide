import React, { Component } from 'react'
import Person from './components/Person'
import './App.css'

class App extends Component {
	render() {
		return (
			<div className="App">
				<Person
					name="Alan"
					age={ 32 }
				/>
				<hr/>
				<Person
					name="Monica"
					age={ 35 }
				>
					<p>Children example</p>
				</Person>
			</div>
		)
	}
}

export default App
