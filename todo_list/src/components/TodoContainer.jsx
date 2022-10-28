import React from 'react'
import Todo from './Todo'

const TodoContainer = (props) => {
    return (
        <ul className='list-group mt-2'>
            {props.todos.map((todo, i) => <Todo todo={todo.todo} completed={todo.completed} key={i} completedHandler={() => props.completedHandler(i)} deleteHandler={() => props.deleteHandler(i)}/>)}
        </ul>
    )
}

export default TodoContainer