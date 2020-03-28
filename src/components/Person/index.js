import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './styles.scss'

const person = props => {
	const {
		name,
		age,
		classname,
		children,
		customClick
	} = props

	return (
		<div
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

export default person
