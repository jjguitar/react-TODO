import React from 'react';
import './../styles/TodoItem.css'
import { CompleteIcon } from './CompleteIcon.js'
import { DeleteIcon } from './DeleteIcon.js'

const TodoItem = (props) => {

  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        onCompleted={props.onCompleted}
      />
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <DeleteIcon
        onDeleted={props.onDeleted}
      />
    </li>
  );
}

export { TodoItem };
