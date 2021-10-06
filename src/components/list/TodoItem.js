import React from 'react';
import '../../assets/styles/TodoItem.css'
import { CompleteIcon } from './icons/CompleteIcon.js'
import { DeleteIcon } from './icons/DeleteIcon.js'

const TodoItem = (props) => {

  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <p
        className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
      >
        {props.text}
      </p>
      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };
