import React from 'react';
import '../../../assets/styles/TodoIcon.css'
import { ReactComponent as CheckSVG } from '../../../assets/img/check.svg'
import { ReactComponent as DeleteSVG } from '../../../assets/img/close.svg'

const iconTypes = {
  'check': color => (
    <CheckSVG className={"Icon-svg Icon-svg--check"} fill={color}/>
  ),
  'delete': color => (
    <DeleteSVG className={"Icon-svg Icon-svg--delete"} fill={color}/>
  ),
}

const TodoIcon = ({ type, color = 'gray', onClick }) => {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  )
}

export { TodoIcon }