import logo from './logo.svg';
import './App.css';
import TodoContainer from './components/TodoContainer';
import Input from './components/Input';
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


function App() {
  const [initState,dispatch] = useReducer(reducer, initialState)
  const [inputValue, setState] = useState('')


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(initState.todos))
  }, [initState])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({
        type: 'ADD_TODO',
        payload: {todo: inputValue, completed: false}
    });
  }

  const changeHandler = (e) => {
    const { value } = e.target;
    setState(value)
  }

  const deleteHandler = (id) => {
    const todos = initState.todos;
    const payload = todos.filter(todo => todo !== todos[id]);
    dispatch({
      type: 'DELETE_TODO',
      payload: payload
    })
  }

  const completedHandler = (id) => {
    const todos = initState.todos;
    todos[id] = {...todos[id], completed: !todos[id].completed}
    dispatch({
      type: 'COMPLETE_TODO',
      payload: todos
    })
  }

  return (
    <div className="App p-2">
      <h1>Header</h1>
      <Input submitHandler={submitHandler} changeHandler={changeHandler} value={inputValue} />
      <TodoContainer todos={initState.todos} deleteHandler={deleteHandler} completedHandler={completedHandler} />
    </div>
  );
}

export default App;
