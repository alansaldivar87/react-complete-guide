import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Radium from 'radium'
import './styles.scss'

const person = props => {
	const {
		name,
		age,
		classname,
		children,
		customClick
	} = props

	// Possible with Radium
	const style = {
		'@media (min-width: 500px)': {
			width: '450px'
		}
	}

	return (
		<div
			style={ style }
			className={
				classNames(
					classname,
					'person'
				)
			}
			onClick={ customClick }
		>
			My name is { name } and my age is { age }
			{ children }
		</div>
	)
}

person.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	classname: PropTypes.string,
	children: PropTypes.any,
	customClick: PropTypes.func
}

export default Radium(person)
