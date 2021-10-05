import React from 'react';
import '../../assets/styles/TodoCounter.css'

const TodoCounter = ({ completedTodos, totalTodos}) => {

  return (
    <h2>Has completado {completedTodos} de {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };
