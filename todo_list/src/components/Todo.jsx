import React, { useState } from 'react'


const Todo = (props) => {
    const [checked, setChecked] = useState(props.completed)

    const checkedHandler = (e) => {
        setChecked(!checked)
        props.completedHandler(props.key)
    }
    console.log(props)
    return (
        <li className='list-group-item d-flex align-items-center justify-content-between' key={props.key}>
            { !checked ? <p className='m-0'>{props.todo}</p> : <p className='m-0' style={{textDecoration: 'line-through'}}>{props.todo}</p>}
            <div>
                <input type="checkbox" onChange={checkedHandler} checked={props.completed} /> | <button className='btn btn-outline-danger' onClick={props.deleteHandler}>Delete</button> 
            </div>
        </li>
    )
}

export default Todo