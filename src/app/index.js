import React from 'react';
import { AppUI } from './AppUI'
import { TodoProvider } from '../Context';



function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>

  );
}

export default App;



// CREATING, FIRST COMPONENT 

const defaultTodos = [
  {
    text: 'Cut some onions',
    completed: true,
  },
  {
    text: 'Finish React course',
    completed: false,
  },
  {
    text: 'Finished class #10',
    completed: true,
  },
  {
    text: 'Make coffee',
    completed: false,
  },
];

const list = JSON.stringify(defaultTodos)
localStorage.setItem("TODOS_V1", list)

// const todosString = JSON.stringify(defaultTodos)
// localStorage.setItem("TODOS_V1", defaultTodos);

// in case I want to send , not a div containing all the elment insinde of the app but all the elements without breaking the rule of react
// that keeps you from sending more than one element per return in any component we can use React.
