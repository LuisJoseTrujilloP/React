import React from 'react';
import { useLocalStorage } from './useLocalStorage';


const TodoContext = React.createContext();

function TodoProvider({ children }){
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

    
        return(
            <TodoContext.Provider value={{
                loading,
                error,
                completedTodo,
                totalTods,
                search,
                setSearch,
                searchTodos,
                onComplete,
                onDelete
            }}>
                {children}
            </TodoContext.Provider>
    )
}




export { TodoContext, TodoProvider  }