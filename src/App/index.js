import React from 'react';
import { AppUI } from './AppUI.js'
import { TodoProvider } from './../provider/index.js'

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Tomar cebolla', completed: false },
//   { text: 'Lorar con la cebolla', completed: false },
// ]

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
