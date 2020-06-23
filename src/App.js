import React, { useState } from 'react'
import Persons from './components/Persons'
import Cockpit from './components/Cockpit'
import './App.css'

const App = () => {

	// Initial state
	const [state, setState] = useState({
		persons: new Map([
			['person1', {
				id: '1',
				name: 'Jhon Doe',
				age: 27
			}],
			['person2', {
				id: '2',
				name: 'Jane Doe',
				age: 19
			}],
			['person3', {
				id: '3',
				name: 'George Doe',
				age: 32,
				children: <p>George is cool</p>
			},]
		]),
		showPersons: false
	})

	// Update persons map
	const updateAllNames = () => {
		const { persons } = state
		const updatedPersons = new Map([...persons])

		updatedPersons.forEach(person => {
			person.name = 'not of your business'
		})

		// Update unique key in the persons map object
		updatedPersons.get('person3').children = <>
			<p>Ups...someone has updated my parent. I am now a P element</p>
		</>

		setState({
			...state,
			persons: updatedPersons
		})
	}

	const handlePersonClick = name => {
		alert(`You clicked on ${name}`)
	}

	const toggleShowPersons = () => {
		const { showPersons } = state;

		setState({
			...state,
			showPersons: !showPersons
		})
	}

	const {
		persons,
		showPersons
	} = state

	return (
		<div className="App">
			<Cockpit
				updateAll={updateAllNames}
				togglePersons={toggleShowPersons}
				show={showPersons}
			/>

			{
				showPersons && (
					<div className="personsList">
						<Persons
							persons={persons}
							clicked={handlePersonClick}
						/>
					</div>
				)
			}
		</div>
	)
}

export default App
