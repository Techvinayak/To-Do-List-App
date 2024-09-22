import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import taskService from './taskService';
import './App.css';

const App = () => {
  const [selectedTask, setSelectedTask] = useState(null); 
  const [showForm, setShowForm] = useState(false); 
  
  const handleEdit = (task) => {
    setSelectedTask(task);
    setShowForm(true);
  };

  const handleAddTask = () => {
    setSelectedTask(null);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSaveTask = (task) => {
    taskService.saveTask(task).then(() => {
      setShowForm(false); 
    });
  };

  return (
    <div className="app-container slds-m-around_medium">
      <h1 className="slds-text-heading_large">To-Do List Application</h1>
      
      <button className="slds-button slds-button_brand" onClick={handleAddTask}>
        New Task
      </button>
      
      <TaskList onEdit={handleEdit} />

      {showForm && (
        <TaskForm 
          task={selectedTask} 
          onSave={handleSaveTask} 
          onCancel={handleCloseForm} 
        />
      )}
    </div>
  );
};

export default App;
