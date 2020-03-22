import React, { Component, Fragment } from 'react'
import Person from './components/Person'
import './App.css'

const ONE = 1

class App extends Component {
	state = {
		persons: [
			{ id: 1, name: 'Jhon Doe', age: 27 },
			{ id: 2, name: 'Jane Foo', age: 24 },
			{ id: 3, name: 'Jim Fig', age: 32, children: <p>Hello</p> }
		]
	}
	render() {
		const {
			persons
		} = this.state;

		return (
			<div className="App">
				{ persons && persons.map(({
					id,
					name,
					age,
					children
				}, index) => (
					<Fragment
						key={ id }
					>
						<Person
							name={ name }
							age={ age }
						>
							{ children }
						</Person>
						{ index < persons.length - ONE && <hr/> }
					</Fragment>
				)) }
			</div>
		)
	}
}

export default App
