import React from 'react';
import { TodoIcon } from './TodoIcon.js'

const CompleteIcon = ({ completed, onCompleted }) => {
  return (
    <TodoIcon
      type='check'
      color={completed ? '#4caf50' : 'gray'}
      onClick={onCompleted}
    />
  )
}

export { CompleteIcon }
