import React from "react";
import './styles.css'
import { TodoContext } from '../../Context';


function TodoForm() {

  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false)
    if (event.target.value !== '') {
      addTodo(newTodoValue)
    }
  }

  const onCancel = () => {
    setOpenModal(false)
  }
  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }
    return (
      <form onSubmit={onSubmit}>
        <label>Create a new Todo</label>
        <textarea
          placeholder="Cut some onions"
          value={newTodoValue}
          onChange={onChange}
        />
        <div className="TodoForm-buttonContainer">
          
          <button
            className='TodoForm-button--cancel'
            onClick={onCancel}
          >Cancel</button>
          
          <button
            className='TodoForm-button--add'
          >Add</button>
        </div>
            
      </form>
    );
}

export { TodoForm }