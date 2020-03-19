import React from 'react'
import PropTypes from "prop-types"
import classNames from 'classnames'

const person = props => {
	const {
		name,
		age,
		classname
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
		</div>
	)
}

person.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	classname: PropTypes.string
}

export default person
