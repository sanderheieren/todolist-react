import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  const { todos, toggleTodo, removeTodo } = props;

  return <section className='todos-container'>
    {todos.map(todo => (
      <Todo {...todo} key={todo.id} toggleTodo={toggleTodo} removeTodo={removeTodo} />))}
  </section>;
};

export default TodoList;
