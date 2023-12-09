
import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoListApp = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list-app">
      <h1>Todo List</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default TodoListApp;
