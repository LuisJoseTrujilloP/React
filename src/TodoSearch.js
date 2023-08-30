import './TodoSearch.css'

function TodoSearch(){
    return(
            <input 
            className='TodoSearch' 
            placeholder="Search Todo"
            onChange={(event) => {
                console.log(event.target, event.target.value)
            }}
            >

            </input>
    )
}
export { TodoSearch };


