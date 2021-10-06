import React from 'react';
import '../../assets/styles/TodoHeader.css'
import avatar from '../../assets/img/avatar.png'

const TodoHeader = ({ children }) => {
  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }
  return(
    <header>
      <div className="avatar">
        <img src={avatar} alt='avatar'/>
      </div>
      <div className="InfoHeader">
        <h1>TODO-Machine</h1>
        {children}
      </div>
      <div className="change">
        <span className="toogle-text" id="texto-toogle"></span>
        <label
          className="theme-switch"
          htmlFor="checkbox"
          onChange={switchTheme}
        >
            <input type="checkbox" id="checkbox" />
            <span className="slider round"></span>
        </label>
      </div>
    </header>
  )
}

export { TodoHeader }
