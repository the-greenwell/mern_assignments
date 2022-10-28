import React from 'react'
import Todo from './Todo'
import Input from './Input';
import { useReducer, useState, useEffect } from 'react';

const saved = localStorage.getItem("todos");
const initialState = {
    todos: JSON.parse(saved) || []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'ADD_TODO':
        return { ...state, todos: [...state['todos'], payload] }
        case 'DELETE_TODO':
        return { ...state, todos: payload }
        case 'COMPLETE_TODO':
        return {...state, todos: payload }
        default:
        return state
    }
}

const TodoContainer = (props) => {
    const [inputValue, setState] = useState('')
    const [initState,dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(initState.todos))
    }, [initState])

    const saveTodo = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TODO',
            payload: {todo: inputValue, completed: false}
        });
    }

    const inputChange = (e) => {
        const { value } = e.target;
        setState(value)
    }

    const deleteTodo = (id) => {
        const todos = initState.todos;
        const payload = todos.filter(todo => todo !== todos[id]);
        dispatch({
            type: 'DELETE_TODO',
            payload: payload
        })
    }   

    const completeTodo = (id) => {
        const todos = initState.todos;
        todos[id] = {...todos[id], completed: !todos[id].completed}
        dispatch({
            type: 'COMPLETE_TODO',
            payload: todos
        })
    }

    return (
        <>      
            <Input submitHandler={saveTodo} changeHandler={inputChange} value={inputValue} />
            <ul className='list-group mt-2'>
                {initState.todos.map((todo, i) => <Todo todo={todo.todo} completed={todo.completed} key={i} completedHandler={() => completeTodo(i)} deleteHandler={() => deleteTodo(i)}/>)}
            </ul>
        </>
    )
}

export default TodoContainer