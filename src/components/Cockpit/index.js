import React from 'react'
import PropTypes from 'prop-types'

const cockpit = ({
	updateAll,
	togglePersons,
	show
}) => (
	<div
		className="cockpit"
	>
		<button
			key="buttonUpdate"
			onClick={ updateAll }
		>
			Update All Names
		</button>
		<button
			key="buttonToggle"
			onClick={ togglePersons }
		>
			{ show ? 'Hide' : 'Show' }
		</button>
	</div>
)

cockpit.propTypes = {
	updateAll: PropTypes.func,
	togglePersons: PropTypes.func,
	show: PropTypes.bool
}

export default cockpit
