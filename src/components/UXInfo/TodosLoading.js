import React from 'react';
import '../../assets/styles/TodosLoading.css'

const TodosLoading = ({ error }) => {
  return (
    <div className="LoadingTodo-container">
      <span className="Loading-completeIcon"></span>
      <p className="LoadingTodo-text">Cargando TODOs...</p>
      <span className="LoadingTodo-deleteIcon"></span>
    </div>
  )
}

export { TodosLoading }
