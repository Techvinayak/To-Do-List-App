
import React, { useState, useEffect } from 'react';
import './TaskForm.css';

const TaskForm = ({ task: initialTask, onSave, onCancel }) => {
  const [task, setTask] = useState(initialTask || {});

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(task);
  };

  return (
    <form className="slds-form" onSubmit={handleSubmit}>
      <div className="slds-form-element">
        <label className="slds-form-element__label" htmlFor="assignedTo">Assigned To</label>
        <div className="slds-form-element__control">
          <input
            id="assignedTo"
            type="text"
            value={task.assignedTo || ''}
            onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
            required
          />
        </div>
      </div>
      
      <div className="slds-form-element">
        <label className="slds-form-element__label" htmlFor="status">Status</label>
        <div className="slds-form-element__control">
          <select
            id="status"
            value={task.status || ''}
            onChange={(e) => setTask({ ...task, status: e.target.value })}
            required
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      <div className="slds-form-element">
        <label className="slds-form-element__label" htmlFor="dueDate">Due Date</label>
        <div className="slds-form-element__control">
          <input
            id="dueDate"
            type="date"
            value={task.dueDate || ''}
            onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="slds-form-element">
        <label className="slds-form-element__label" htmlFor="priority">Priority</label>
        <div className="slds-form-element__control">
          <select
            id="priority"
            value={task.priority || ''}
            onChange={(e) => setTask({ ...task, priority: e.target.value })}
            required
          >
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
        </div>
      </div>

      <div className="slds-form-element">
        <label className="slds-form-element__label" htmlFor="comments">Description</label>
        <div className="slds-form-element__control">
          <textarea
            id="comments"
            value={task.comments || ''}
            onChange={(e) => setTask({ ...task, comments: e.target.value })}
          />
        </div>
      </div>

      <button className="slds-button slds-button_neutral" onClick={onCancel}>Cancel</button>
      <button className="slds-button slds-button_brand" type="submit">Save</button>
    </form>
  );
};




export default TaskForm;
