import React from 'react';

const TodoForm = props => {
  const {
    title, description, handleTodo, setDescription, setTitle,
  } = props;
  return (
    <article className='form-container'>
      <form onSubmit={handleTodo}>
        <div>
          <label htmlFor='title'>Title </label>
          <input
            type='text'
            id='title'
            name='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='description'>Description </label>
          <input
            type='text'
            id='description'
            name='description'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <button className='add-btn' type='submit'>
          Add
        </button>
      </form>
    </article>
  );
};

export default TodoForm;
