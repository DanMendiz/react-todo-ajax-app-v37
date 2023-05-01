import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';

const ENDPOINT = 'https://jsonplaceholder.typicode.com/todos/';



function TodoApp() {
  const [state, setState] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch(ENDPOINT);
      const data = await response.json();
      console.log(data);
      setState(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  //   [
  //   // { title: 'Feed Pet' },
  //   // { title: 'Wash Thing' },
  // ]

  // [{n:1}, {n:2}, {n:3}]

  const deleteFn = (i) => {
    const newState = [...state.slice(0, i), ...state.slice(i + 1)];
    setState(newState);
  };

  const addTodo = () => {
    const newTodo = {
      title: 'New Todo',
    };

    const newState = [...state, newTodo];

    setState(newState);
  };

  return (
    <TodoList
      todos={state}
      title="TodoApp"
      deleteHandler={deleteFn}
      addTodo={addTodo}
    />
  );
}

export default TodoApp;
