import React from 'react';
import './App.css';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';




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

// const todosString = JSON.stringify(defaultTodos)
// localStorage.setItem("TODOS-1", defaultTodos);

// in case I want to send , not a div containing all the elment insinde of the app but all the elements without breaking the rule of react
// that keeps you from sending more than one element per return in any component we can use React.
function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;
  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))

    setState(newTodos)
  } 

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

    const [state, setState] = React.useState(parsedTodos);
    const [search, setSearch] = React.useState('');

    const searchTodos = state.filter((todo) => {
    const searchText = search.toLowerCase();
    const todoText = todo.text.toLowerCase();
    return todoText.includes(searchText);
  });
  
  const onComplete = (text) => {
    const todoIndex = state.findIndex((todo) => todo.text === text);
    const newTodos = [...state];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  const onDelete = (text) => {
    const newTodos = state.filter((todo) => todo.text !== text);
    saveTodos(newTodos);
  };


  const completedTodo = state.filter(todo => !!todo.completed).length
  const totalTods = state.length;
  return (
    
      <div className='container'>
        
        <TodoSearch
        search={search}
        setSearch={setSearch}
        />
        <TodoCounter
          completed={completedTodo}
          total={totalTods}
        />
        <TodoList>
          {searchTodos.map(todo => (
            <TodoItem 
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => {onComplete(todo.text)}}
              onDelete={() => {onDelete(todo.text)}}
            />
          ))}
        </TodoList>
        <CreateTodoButton/>
      </div>
  );
}




// CREATING, FIRST COMPONENT 

export default App;
