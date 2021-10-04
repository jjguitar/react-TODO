import React from 'react';
import { useLocalStorage } from './../storage/index.js'

const TodoContext = React.createContext()

const TodoProvider = (props) => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false)

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []

  if(!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchedText = searchValue.toLowerCase()

      return todoText.includes(searchedText)
    })
  }

  const findIndex = (text) => {
    return todos.findIndex(todo => todo.text === text)
  }

  const toggleTodo = (text) => {

    const newTodos = [...todos]
    newTodos[findIndex(text)].completed = !newTodos[findIndex(text)].completed
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {

    const newTodos = [...todos]
    newTodos.splice(findIndex(text), 1)
    saveTodos(newTodos)
  }

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      text,
      completed: false,
    })
    saveTodos(newTodos)
  }
  return (
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      searchValue,
      totalTodos,
      searchedTodos,
      setSearchValue,
      toggleTodo,
      addTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }

