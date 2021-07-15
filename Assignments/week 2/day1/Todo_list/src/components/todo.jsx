import React from "react"

const ToDo = props => {
    
    const {index, todo, handleDelete, handleChange} = props

    const style = {
        "textDecoration" : "line-through"
    }

    return (
        <div>
            {
                (todo.isComplete)? <h2 style={style}>{todo.title}</h2> : <h2>{todo.title}</h2>
            }
            <input type="checkbox"  checked={todo.isComplete} onChange={ () => handleChange(index)}/>
            <button onClick={ () => handleDelete(index)}>Delete</button>
        </div>
    )
}

export default ToDo