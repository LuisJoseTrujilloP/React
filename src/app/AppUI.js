import React from 'react';
import './App.css';
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoItem } from '../components/TodoItem/TodoItem';
import { TodoLoading } from '../components/TodoLoading/TodoLoading';
import { EmptyTodos } from '../components/EmptyTodos/EmptyTodos';
import { TodoContext } from '../Context';

function AppUI(){

	const { 
		loading,
		error,
		onComplete,
		onDelete,
		searchTodos,    
	} = React.useContext(TodoContext)

	return(

		<div className='container'>
		<TodoSearch  />
		<TodoCounter  />
		<TodoList>
				{loading && <TodoLoading />}
				{error &&<p>Error!!</p>}
				{(searchTodos.length === 0 && !loading) && <EmptyTodos />}

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
	)
}

export { AppUI }