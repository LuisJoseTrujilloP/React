import React from 'react';
import './TodoSearch.css'

function TodoSearch({search, setSearch, state, setState}){
    
     // To work with the search we cant just change it as we would with any variable, we need to use a function to work with it
    // Changer function
    // the reason why  we would do this is to tell react the we need to re render the component to change it, 

    return(
            <input 
            className='TodoSearch' 
            placeholder="Search Todo"
            value={search}
            onChange={(event) => {
                setSearch(event.target.value)
            
            }}
            
            >

            </input>
    )
}
export { TodoSearch };


