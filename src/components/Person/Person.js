import React from 'react'

const person = (props) => {
    const {
        name,
        age
    } = props

    return (
        <div>
            My name is { name } and my age is { age }
        </div>
    )
}

export default person