import React from 'react';
import './styles.css'





function TodoSearch({ search, setSearch }){
    
     // To work with the search we cant just change it as we would with any variable, we need to use a function to work with it
    // Changer function
    // the reason why  we would do this is to tell react the we need to re render the component to change it, 

    return(
    
        <label className="search">
                
            <input 
            placeholder='Search todos'
            className='TodoSearch' 
            value={search}
            onChange={(event) => {
                setSearch(event.target.value)
            
            }}
			>

            </input>
        </label>
    )
}
export { TodoSearch };


