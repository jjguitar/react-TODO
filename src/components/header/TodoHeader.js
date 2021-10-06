import React from 'react';
import '../../assets/styles/TodoHeader.css'

const TodoHeader = ({ children }) => {
  return(
    <header>
      <div className="avatar"></div>
      <div className="InfoHeader">
        <h1>TODO-Machine</h1>
        {children}
      </div>
    </header>
  )
}

export { TodoHeader }
