import React from 'react'

const Value = props => {
    return (
        <div>
            {
            isNaN(props.value) ? <h1>The word is {props.value}</h1> : <h1>The number is {props.value}</h1>
            }
        </div>
    )
}

export default Value