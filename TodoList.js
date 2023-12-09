import React from 'react';

const TodoList = ({ tasks, removeTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => removeTask(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
