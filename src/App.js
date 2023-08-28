import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCount
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

function TodoCount(props) {
    return (
        <h2>
            Completaste {props.completed} de {props.total} TODOs
        </h2>
    );
}
function TodoSearch(){
  return(
  <div>
    
  </div>
  )
}

export default App;
