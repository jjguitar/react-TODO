import React from 'react';
import { TodoContext } from '../provider';
import './../styles/TodoForm.css'

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = React.useState('')
  const [warningValue, setWarningValue] = React.useState(false)
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext)

  const onCancel = () => {
    setOpenModal(false)
  }

  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (newTodoValue.length >= 1) {
      addTodo(newTodoValue)
      setOpenModal(false)
      setWarningValue(false)
    } else {
      setWarningValue(true)
    }
  }
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo To Do</label>
      {warningValue && (
        <label>No has escrito nada!</label>
      )}
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder='Escribe una nueva tarea'
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button-cancel"
        >
          Cancelar
        </button>
        <button
          type='submit'
          className="TodoForm-button TodoForm-button-add"
        >
          Añadir
        </button>
      </div>
    </form>
  )
}

export { TodoForm }