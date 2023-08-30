import React from 'react';
import './TodoSearch.css'

function TodoSearch(){
    
    const [state, setState] = React.useState('');
     // To work with the state we cant just change it as we would with any variable, we need to use a function to work with it
    // Changer function

    return(
            <input 
            className='TodoSearch' 
            placeholder="Search Todo"
            value={state}
            onChange={(event) => {
                setState(event.target.value)
            }}
            >

            </input>
    )
}
export { TodoSearch };


