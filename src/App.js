import React, { Component, Fragment } from 'react'
import Person from './components/Person'
import './App.css'

const ONE = 1
const TWO = 2
const THREE = 3

class App extends Component {
	state = {
		persons: new Map([
			[ONE, { name: 'Jhon Doe', age: 27 }],
			[TWO, { name: 'Jane Doe', age: 19 }],
			[THREE, { name: 'George Doe', age: 32 }]
		])
	}

	updatePersonsNames = () => {
		const {
			persons
		} = this.state

		const newPersons = new Map([...persons])

		newPersons.forEach(person => {
			person.name = 'not of your business'
		})

		this.setState({
			persons: newPersons
		})
	}

	render() {
		const {
			persons
		} = this.state

		return (
			<div className="App">
				<button
					onClick={ this.updatePersonsNames }
				>
					Update All Names
				</button>

				{
					persons && [...persons.values()].map(({
						name,
						age,
						children
					}, index) => (
						<Fragment
							key={ index }
						>
							<Person
								name={ name }
								age={ age }
							>
								{ children }
							</Person>
							{ index < persons.length - ONE && <hr/> }
						</Fragment>
					))
				}
			</div>
		)
	}
}

export default App
