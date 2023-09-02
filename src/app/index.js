import React from 'react';
import { AppUI } from './AppUI'
import { useLocalStorage } from './useLocalStorage';



function App() {

  const {item: state, saveItem, loading, error} = useLocalStorage("TODOS_V1", []);
  const [search, setSearch] = React.useState('');
  
  const searchTodos = state.filter((todo) => {
    const searchText = search.toLowerCase();
    const todoText = todo.text.toLowerCase();
    return todoText.includes(searchText);
  });
  
  const onComplete = (text) => {
    const todoIndex = state.findIndex((todo) => todo.text === text);
    const newItem = [...state];
    newItem[todoIndex].completed = !newItem[todoIndex].completed;
    saveItem(newItem);
  };
  const onDelete = (text) => {
    const newItem = state.filter((todo) => todo.text !== text);
    saveItem(newItem);
  };

  const completedTodo = state.filter(todo => !!todo.completed).length
  const totalTods = state.length;
  
  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodo={completedTodo}
      totalTods={totalTods}
      search={search}
      setSearch={setSearch}
      searchTodos={searchTodos}
      onComplete={onComplete}
      onDelete= {onDelete}
    />
  );
}

export default App;



// CREATING, FIRST COMPONENT 

// const defaultTodos = [
//   {
//     text: 'Cut some onions',
//     completed: true,
//   },
//   {
//     text: 'Finish React course',
//     completed: false,
//   },
//   {
//     text: 'Finished class #10',
//     completed: true,
//   },
//   {
//     text: 'Make coffee',
//     completed: false,
//   },
// ];

// const list = JSON.stringify(defaultTodos)
// localStorage.setItem("TODOS-1", list)

// const todosString = JSON.stringify(defaultTodos)
// localStorage.setItem("TODOS-1", defaultTodos);

// in case I want to send , not a div containing all the elment insinde of the app but all the elements without breaking the rule of react
// that keeps you from sending more than one element per return in any component we can use React.
