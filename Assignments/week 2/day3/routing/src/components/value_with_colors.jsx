import React from 'react'

const Values = props => {
    return (
        <div>
            {
            isNaN(props.value) ? <h1 style={{backgroundColor : props.background, color : props.text}}>The word is {props.value}</h1> : <h1 style={{backgroundColor : props.background, color : props.text}}>The number is {props.value}</h1>
            }
        </div>
    )
}

export default Values