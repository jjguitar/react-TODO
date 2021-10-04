import React from 'react';
import { TodoIcon } from './TodoIcon.js'

const DeleteIcon = ({ onDelete }) => {
  return (
    <TodoIcon
      type='delete'
      onClick={onDelete}
    />
  )
}

export { DeleteIcon }
