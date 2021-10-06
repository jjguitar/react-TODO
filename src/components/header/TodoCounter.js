import React from 'react';
import '../../assets/styles/TodoCounter.css'

const TodoCounter = ({ completedTodos, totalTodos}) => {

  const thereTodos = () => {
    return (totalTodos === 0)
  }
  return (
    <React.Fragment>
      <h1>TODO-Machine</h1>
      {!thereTodos() ?
        <h2>Has completado {completedTodos} de {totalTodos} TODOs</h2>
        :
        null}
    </React.Fragment>
  )
}

export { TodoCounter };
