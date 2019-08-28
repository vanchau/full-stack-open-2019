import React from 'react'

const Total = (props) => {
    const total = props.parts.reduce((total, {exercises}) => total+exercises, 0)
    return (
        <p>Number of exercises {total}</p>
    )
}

export default Total;