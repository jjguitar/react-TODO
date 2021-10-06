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
          placeholder="Busca tus TODOs"
          value={searchValue}
          onChange={onSearchValueChange}
        /> :
        loading ? <h2>Organiza tus tareas con TODO-Machine</h2> : <h2>Aún no tienes TODOs...</h2>
      }
    </React.Fragment>
  );
}

export { TodoSearch };
