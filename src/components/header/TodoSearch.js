import React from 'react';
import '../../assets/styles/TodoSearch.css'

const TodoSearch = ({ loading, totalTodos, searchValue, setSearchValue }) => {

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <React.Fragment>
      {(totalTodos > 0) ?
        <input
          className="TodoSearch"
          placeholder="Busca tus tareas"
          value={searchValue}
          onChange={onSearchValueChange}
        /> :
        loading ? <h2 className="TodoSearch-loading">Organiza tus tareas con TODO-Machine</h2> : <h2>Aún no tienes tareas...</h2>
      }
    </React.Fragment>
  );
}

export { TodoSearch };
