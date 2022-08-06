import React from 'react'

const Car = ({ model, color, year }) => {
    return (
        <div>
            <h1>Model: {model}</h1>
            <h1>Color: {color}</h1>
            <h1>Year: {year}</h1>
        </div>
    )
}

export default Car