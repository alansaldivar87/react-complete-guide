import React from 'react'
import PropTypes from 'prop-types'
import Person from './Person'

const persons = ({
	persons,
	clicked
}) => [...persons.values()].map(({
	id,
	name,
	age,
	children
}) => (
	<Person
		key={id}
		name={name}
		age={age}
		customClick={ () => clicked(name) }
	>
		{ children }
	</Person>
))

persons.propTypes = {
	persons: PropTypes.instanceOf(Map).isRequired,
	clicked: PropTypes.func
}

export default persons
