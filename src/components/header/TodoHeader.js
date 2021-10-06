import React from 'react';
import '../../assets/styles/TodoHeader.css'

const TodoHeader = ({ children }) => {
  return(
    <header>
      {children}
    </header>
  )
}

export { TodoHeader }
