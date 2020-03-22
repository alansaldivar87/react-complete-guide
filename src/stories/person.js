import React from 'react'
import { Person } from './components/Person'

export default {
	title: 'PersonComponent',
	component: Person
}

export const person = () => <Person name="John Doe" age={32} />
