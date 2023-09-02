import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton';
import { TodoCounter } from '../components/TodoCounter/TodoCounter';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoItem } from '../components/TodoItem/TodoItem';
import './App.css';


function AppUI({
    loading,
    error,
    completedTodo,
    totalTods,
    search,
    setSearch,
    searchTodos,
    onComplete,
    onDelete
}){
    return(
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
            {loading && <p>Loading...</p>}
            {error &&<p>Error!!</p>}
            {(searchTodos.length === 0 && !loading) && <p>Create your first todo</p>}

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