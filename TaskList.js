
import React, { useState, useEffect } from 'react';
import taskService from './taskService'; 



const TaskList = ({ onEdit, onDelete }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    taskService.getTasks().then(setTasks);
  }, []);

  return (
    <div className="slds-card">
      <div className="slds-card__header">
        <h2 className="slds-text-heading_medium">Tasks</h2>
        <button className="slds-button slds-button_neutral">New Task</button>
        <button className="slds-button slds-button_neutral">Refresh</button>
      </div>
      <div className="slds-card__body">
        <table className="slds-table slds-table_bordered slds-table_fixed-layout">
          <thead>
            <tr>
              <th scope="col">Assigned To</th>
              <th scope="col">Status</th>
              <th scope="col">Due Date</th>
              <th scope="col">Priority</th>
              <th scope="col">Comments</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.id}>
                <td>{task.assignedTo}</td>
                <td>{task.status}</td>
                <td>{task.dueDate}</td>
                <td>{task.priority}</td>
                <td>
                  {task.comments}
                  <button onClick={() => onEdit(task)} className="slds-button_icon">
                    Edit
                  </button>
                  <button onClick={() => onDelete(task.id)} className="slds-button_icon">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
