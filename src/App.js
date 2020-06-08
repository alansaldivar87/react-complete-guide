import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import Person from './components/Person'
import './App.css'

const App = props => {

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
				children: <div>I am just a div children here</div>
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

	// Render the person shelve
	const renderPerson = ({
		id,
		name,
		age,
		children
	}) => (
		<Fragment
			key={ id }
		>
			<Person
				name={name}
				age={age}
				customClick={ () => handlePersonClick(name) }
			>
				{ children }
			</Person>
		</Fragment>
	)

	// Validate arguments of renderPerson method
	renderPerson.propTypes = {
		id: PropTypes.string,
		name: PropTypes.string,
		age: PropTypes.number,
		children: PropTypes.any
	};

	const {
		persons,
		showPersons
	} = state

	return (
		<div className="App">
			<button
				onClick={ updateAllNames }
			>
				Update All Names
			</button>
			<button
				onClick={ toggleShowPersons }
			>
				{ showPersons ? 'Hide' : 'Show' }
			</button>

			{ showPersons && [...persons.values()].map(renderPerson) }
		</div>
	)
}

export default App
