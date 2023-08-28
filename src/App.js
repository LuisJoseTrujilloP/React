import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList'


function App() {
  return (
    <div className="App">
      <TodoCounter
        completed={13}
        total={19}
      />
      <TodoSearch/>
      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>
      <CreateTodoButton/>
    </div>
  );
}


// CREATING, FIRST COMPONENT 
function TodoItem(){
    return (
      <div>
      <li>
        <span>V</span>
        <p>Llorar con la llorona</p>
        <span>X</span>
      </li>      
      </div>
  );
}

export default App;
