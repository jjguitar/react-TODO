import React from 'react';

const TodoCounter = ({ completedTodos, totalTodos}) => {

  const thereTodos = () => {
    return (totalTodos === 0)
  }
  return (
    <React.Fragment>
      {!thereTodos() ?
        <h2>Has completado {completedTodos} de {totalTodos} TODOs</h2>
        :
        <h2>Agrega lo que necesites</h2>}
    </React.Fragment>
  )
}

export { TodoCounter };
