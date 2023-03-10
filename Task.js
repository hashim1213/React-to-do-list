import React, { useState } from 'react';
import './styles.css';

function Task(props) {
  const { name, dueDate, isCompleted } = props.task;

  function handleGrowClick() {
    props.onGrow(isCompleted);
  }

  function handleDeleteClick() {
    props.onDelete();
  }

  return (
    <div className="task">
      <div className="task-name">
        {isCompleted ? <strike>{name}</strike> : name}
      </div>
      <div className="task-due-date">{dueDate.toLocaleString()}</div>
      <button className="grow-button" onClick={handleGrowClick}>
        Grow a flower
      </button>
      <button className="delete-button" onClick={handleDeleteClick}>
        Delete
      </button>
    
    </div>
  );
}

export default Task;



