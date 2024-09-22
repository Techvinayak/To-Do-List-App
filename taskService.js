
const tasks = [
    { id: 1, assignedTo: 'User 1', status: 'Completed', dueDate: '2024-10-12', priority: 'Low', comments: 'This task is good' },
    { id: 2, assignedTo: 'User 2', status: 'In Progress', dueDate: '2024-09-14', priority: 'High', comments: 'This task is good' },
    { id: 3, assignedTo: 'User 3', status: 'Not Started', dueDate: '2024-08-18', priority: 'Low', comments: 'This task is good' },
    { id: 4, assignedTo: 'User 4', status: 'In Progress', dueDate: '2024-06-12', priority: 'Normal', comments: 'This task is good' },
  ];
  
  const getTasks = () => Promise.resolve(tasks);
  
  const saveTask = (task) => {
    if (task.id) {
      // Update existing task
      const index = tasks.findIndex(t => t.id === task.id);
      tasks[index] = task;
    } else {
      // Add new task
      task.id = tasks.length + 1;
      tasks.push(task);
    }
    return Promise.resolve();
  };
  
  const deleteTask = (id) => {
    const index = tasks.findIndex(t => t.id === id);
    tasks.splice(index, 1);
    return Promise.resolve();
  };
  
  export default { getTasks, saveTask, deleteTask };
  