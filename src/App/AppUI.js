import React from 'react';
import '../styles/App.css'
import { TodoContext } from './../provider/index.js'
import { TodoCounter } from '../components/TodoCounter'
import { TodoSearch } from '../components/TodoSearch'
import { TodoList } from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import { CreateTodoButton } from '../components/CreateTodoButton'
import { Modal } from './../components/modal.js'
import { TodoForm } from '../components/TodoForm';
import { TodosError } from '../components/TodosError'
import { TodosLoading } from '../components/TodosLoading'
import { EmptyTodos } from '../components/EmptyTodos'

const AppUI = () => {
  const {
      error,
      loading,
      searchedTodos,
      toggleTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    } = React.useContext(TodoContext)

  return (
    <React.Fragment>
      <TodoCounter/>

      <TodoSearch/>

      <TodoList>
        {error && <TodosError error={error} />}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}

        {searchedTodos.map( todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onCompleted={() => toggleTodo(todo.text)}
            onDeleted={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  )
}

export { AppUI }
