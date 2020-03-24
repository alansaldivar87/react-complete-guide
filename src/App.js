import React, { Fragment, useState } from 'react'
import Person from './components/Person'
import './App.css'

const ONE = 1
const TWO = 2
const THREE = 3

const App = props => {

	const [ state, setState ] = useState({
		persons: new Map([
			[ONE, { name: 'Jhon Doe', age: 27 }],
			[TWO, { name: 'Jane Doe', age: 19 }],
			[THREE, { name: 'George Doe', age: 32, children: <div>Hello</div> }]
		]),
		otherText: 'Change me dude!'
	})

	const updatePersonsNames = () => {
		const {
			persons
		} = state

		const newPersons = new Map([...persons])

		newPersons.forEach(person => {
			person.name = 'not of your business'
		})

		setState({
			...state,
			persons: newPersons
		})
	}

	const updateOtherText = () => {
		setState({
			...state,
			otherText: 'Sweet! I am the new text'
		})
	}

	const {
		persons,
		otherText
	} = state

	return (
		<div className="App">
			<button
				onClick={ updatePersonsNames }
			>
				Update All Names
			</button>

			<button
				onClick={ updateOtherText }
			>
				Update Other text
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
			<p>{ otherText }</p>

		</div>
	)
}

export default App
