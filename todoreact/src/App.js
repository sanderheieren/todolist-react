import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);

  const handleTodo = e => {
    e.preventDefault();
    if (title && description) {
      const todo = {
        done: false, title, description, id: Date.now(),
      };
      setTodos(prevTodos => [...prevTodos, todo]);
      setTitle('');
      setDescription('');
    }
  };

  const toggleTodo = id => {
    const index = todos.findIndex(item => item.id === id);
    todos[index].done = !todos[index].done;
    const updatedTodos = [...todos];
    setTodos(updatedTodos);
  };

  const removeTodo = (e, id) => {
    e.stopPropagation();
    const index = todos.findIndex(item => item.id === id);
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className='App'>
      <h4 className='headline'>Register New ToDo</h4>
      <TodoForm
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
        handleTodo={handleTodo}
      />

      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
