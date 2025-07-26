import { useState, useEffect } from 'react';
import './App.css';
import CoreConcepts from './CoreConcepts';
import ErrorBoundary from './ErrorBoundary';

interface Task {
  id: number;
  text: string;
  completed: boolean;
  dueDate?: string;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [
      { id: 1, text: 'Learn React', completed: false, dueDate: '' },
      { id: 2, text: 'Build a project', completed: false, dueDate: '' },
    ];
  });
  
  const [newTask, setNewTask] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    
    const newTaskObj: Task = {
      id: Date.now(),
      text: newTask,
      completed: false,
      dueDate: dueDate || undefined
    };
    
    setTasks([...tasks, newTaskObj]);
    setNewTask('');
    setDueDate('');
  };

  const toggleTask = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="card">
      <h2>Task Manager</h2>
      <form onSubmit={addTask} className="task-form">
        <div className="form-group">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Task description"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
          />
          <span className="date-hint">(Optional)</span>
        </div>
        <button type="submit">Add Task</button>
      </form>
      
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
            />
            <span>{task.text}</span>
            <button 
              onClick={() => deleteTask(task.id)}
              className="delete-btn"
              aria-label="Delete task"
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  const [showCoreConcepts, setShowCoreConcepts] = useState(true);

  return (
    <div className="app">
      <h1>React Fundamentals</h1>
      
      <div className="tabs">
        <button 
          className={showCoreConcepts ? 'active' : ''}
          onClick={() => setShowCoreConcepts(true)}
        >
          Core Concepts
        </button>
        <button 
          className={!showCoreConcepts ? 'active' : ''}
          onClick={() => setShowCoreConcepts(false)}
        >
          Task Manager
        </button>
      </div>

      <ErrorBoundary>
        {showCoreConcepts ? <CoreConcepts /> : <TaskList />}
      </ErrorBoundary>
    </div>
  );
}



export default App;
