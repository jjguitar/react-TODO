import React from 'react';
import { useLocalStorage } from './useLocalStorage.js'
import { idGenerator } from '../utils/KeyGenerator.js'

const useTodos = () => {
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

  const findIndex = (id) => {
    return todos.findIndex(todo => todo.id === id)
  }

  const toggleTodo = (id) => {

    const newTodos = [...todos]
    newTodos[findIndex(id)].completed = !newTodos[findIndex(id)].completed
    saveTodos(newTodos)
  }

  const deleteTodo = (id) => {

    const newTodos = [...todos]
    newTodos.splice(findIndex(id), 1)
    saveTodos(newTodos)
  }

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      id: idGenerator(),
      text,
      completed: false,
    })
    saveTodos(newTodos)
  }
  return (
    {
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
    }
  )
}

export { useTodos }

