import React from 'react';

import { changeStatus } from '../redux/actions/tasksAction';

const Task = ({ task, ...props }) => {
  const ActionBtn = () => (
    <div className="action-btn">
      {!task.done ? (
        <p onClick={changeStatus()}>✔️</p>
      ) : (
        <p onClick={changeStatus()}>❌</p>
      )}
    </div>
  );

  const className = 'task ' + (task.done ? 'task-done' : '');

  return (
    <div className={className}>
      <p>{task.title}</p>
      <ActionBtn></ActionBtn>
    </div>
  );
};

export default Task;
