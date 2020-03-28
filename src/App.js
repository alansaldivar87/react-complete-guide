import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import Person from './components/Person'
import './App.css'

const ONE = 1
const TWO = 2
const THREE = 3

const App = props => {

	// Initial state
	const [state, setState] = useState({
		persons: new Map([
			[ONE, { name: 'Jhon Doe', age: 27 }],
			[TWO, { name: 'Jane Doe', age: 19 }],
			[THREE, { name: 'George Doe', age: 32, children: <div>Hello</div> }]
		]),
		otherText: 'Change me dude!',
		inputValue: ''
	})

	// Update persons map
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

	// Update other state
	const updateOtherText = () => {
		setState({
			...state,
			otherText: 'Sweet! I am the new text'
		})
	}

	const handleCustomClick = name => {
		alert(`You clicked on ${name}`)
	}

	const updateInput = event => {
		const {
			target: {
				value
			}
		} = event

		setState({
			...state,
			inputValue: value
		})

	}

	// Render the person shelve
	const renderPerson = ({
		name,
		age,
		children
	}, index) => (
		<Fragment
			key={ index }
		>
			<Person
				name={name}
				age={age}
				customClick={ () => handleCustomClick(name) }
			>
				{ children }
			</Person>
			{ index < persons.length - ONE && <hr/> }
		</Fragment>
	)

	// Validate arguments of renderPerson method
	renderPerson.propTypes = {
		name: PropTypes.string,
		age: PropTypes.number,
		children: PropTypes.any
	};

	const {
		persons,
		otherText,
		inputValue
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

			{ persons && [...persons.values()].map(renderPerson) }

			<div>{ otherText }</div>

			<div>
				<h2>Two way binding</h2>
				<input
					value={ inputValue }
					onChange={ updateInput }
				/>
				<p>Result: { inputValue }</p>
			</div>

		</div>
	)
}

export default App
