import './App.css';

function App() {
  return (
    <div className="App">
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>

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
