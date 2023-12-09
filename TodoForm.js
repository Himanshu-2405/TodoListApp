

import React, { useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={handleInputChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
