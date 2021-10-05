import React from 'react';
import '../assets/styles/App.css'
import { useTodos } from './useTodos.js'
import { TodoHeader } from '../components/header/TodoHeader.js'
import { TodoCounter } from '../components/header/TodoCounter'
import { TodoSearch } from '../components/header/TodoSearch'
import { TodoList } from '../components/list/TodoList'
import { TodoItem } from '../components/list/TodoItem'
import { CreateTodoButton } from '../components/newTodo/CreateTodoButton'
import { Modal } from '../components/form/modal.js'
import { TodoForm } from '../components/form/TodoForm';
import { TodosError } from '../components/UXInfo/TodosError'
import { TodosLoading } from '../components/UXInfo/TodosLoading'
import { EmptyTodos } from '../components/list/EmptyTodos'

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Tomar cebolla', completed: false },
//   { text: 'Lorar con la cebolla', completed: false },
// ]

function App() {
  const {
    error,
    loading,
    searchedTodos,
    toggleTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos()

  return (
    <React.Fragment>
      <TodoHeader >
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>


      <TodoList>
        {error && <TodosError error={error} />}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}

        {searchedTodos.map( todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm
            setOpenModal={setOpenModal}
            addTodo={addTodo}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export default App;
