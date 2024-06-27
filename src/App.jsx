import React, { useState } from 'react';
import './index.css';
import Task from './componentes/Task';
import Header from './componentes/Header';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');

  const handleInputChange = (event) => {
    setNewTaskText(event.target.value);
  };

  const handleAddTask = () => {
    if (newTaskText.trim() === '') return;
    const newTask = { id: Date.now(), text: newTaskText, done: false };
    setTasks([...tasks, newTask]);
    setNewTaskText('');
  };

  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleUpdateTaskText = (taskId, newText) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  const renderOrderedTasks = () => {
    return tasks.map((task) => (
      <Task
        key={task.id}
        task={task}
        onDelete={handleDelete}
        onToggleComplete={handleToggleComplete}
        onUpdateTaskText={handleUpdateTaskText}
      />
    ));
  };

  return (
    <div>
      <h1 className="title">LISTA DE TAREAS</h1>
      {/* Contenido de la lista de tareas */}
      <div className="list roundBorder">
        <div className="date">
          {/* Contenido de fecha */}
        </div>
        <form onSubmit={(e) => { e.preventDefault(); handleAddTask(); }}>
          <input
            type="text"
            name="taskText"
            autoComplete="off"
            placeholder="Nueva tarea"
            className="roundBorder"
            value={newTaskText}
            onChange={handleInputChange}
          />
          <button type="submit" className="addTaskButton">+</button>
        </form>
        <div id="tasksContainer">
          {renderOrderedTasks()}
        </div>
      </div>
    </div>
  );
}

export default App;
