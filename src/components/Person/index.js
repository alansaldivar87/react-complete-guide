import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const person = props => {
	const {
		name,
		age,
		classname,
		children
	} = props

	return (
		<div
			className={
				classNames(
					classname,
					'person'
				)
			}
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
	children: PropTypes.any
}

export default person
