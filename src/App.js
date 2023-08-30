import React from 'react';
import './App.css';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';



const defaultTodos = [
  {
    text: 'Cut some onions',
    completed: true,
  },
  {
    text: 'Finished intrudution to React course',
    completed: false,
  },
  {
    text: 'Finished class #10',
    completed: false,
  },
  {
    text: 'Make coffee',
    completed: false,
  },
];


// in case I want to send , not a div containing all the elment insinde of the app but all the elements without breaking the rule of react
// that keeps you from sending more than one element per return in any component we can use React.
function App() {
  const [state, setState] = React.useState(defaultTodos);
  const [search, setSearch] = React.useState('');


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
          {defaultTodos.map(todo => (
            <TodoItem 
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>
        <CreateTodoButton/>
      </div>
  );
}


// CREATING, FIRST COMPONENT 

export default App;
