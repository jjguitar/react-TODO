import React from 'react';

const TodoCounter = ({ completedTodos, totalTodos}) => {

  const thereTodos = () => {
    return (totalTodos === 0)
  }
  return (
    <React.Fragment>
      {!thereTodos() ?
        <h2>Has completado {completedTodos} de {totalTodos} tareas</h2>
        :
        <h2>Agrega lo que necesites, organiza tus tareas</h2>}
    </React.Fragment>
  )
}

export { TodoCounter };
