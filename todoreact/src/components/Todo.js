import React from 'react';

const Todo = props => {
  const {
    done, title, description, id, toggleTodo, removeTodo,
  } = props;
  return (
    <article
      className={`${done ? 'done' : 'not-done'}`}
      onClick={() => toggleTodo(id)}
    >
      <h4>{title}</h4>
      <p className='description'>{description}</p>
      {done ? <button className='remove-btn' onClick={e => removeTodo(e, id)}>Remove</button> : ''}
    </article>
  );
};

export default Todo;
