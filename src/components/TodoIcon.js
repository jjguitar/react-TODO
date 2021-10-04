import React from 'react';
import './../styles/TodoIcon.css'
import { ReactComponent as CheckSVG } from './../assets/check.svg'
import { ReactComponent as DeleteSVG } from './../assets/close.svg'

const iconTypes = {
  'check': color => (
    <CheckSVG className={"Icon-svg Icon-svg--check"} fill={color}/>
  ),
  'delete': color => (
    <DeleteSVG className={"Icon-svg Icon-svg--delete"} fill={color}/>
  ),
}

const TodoIcon = ({ type, color = 'gray', onclick }) => {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onclick}>
      {iconTypes[type](color)}
    </span>
  )
}

export { TodoIcon }