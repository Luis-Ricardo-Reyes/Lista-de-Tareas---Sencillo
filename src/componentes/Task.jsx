import React, { useState } from 'react';

function Task({ task, onDelete, onToggleComplete, onUpdateTaskText }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleToggleComplete = () => {
    onToggleComplete(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleEditComplete = () => {
    setIsEditing(false);
    onUpdateTaskText(task.id, editedText);
  };

  return (
    <div className={`task roundBorder ${task.done ? 'done' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={handleInputChange}
          onBlur={handleEditComplete}
          autoFocus // Esto hace que el campo de entrada reciba automáticamente el foco cuando se renderiza
        />
      ) : (
        <div onClick={handleToggleComplete}>{task.text}</div>
      )}
      <div>
        <button onClick={handleDelete}>Eliminar</button>
        <button onClick={handleEdit}>Editar</button>
      </div>
    </div>
  );
}

export default Task;
