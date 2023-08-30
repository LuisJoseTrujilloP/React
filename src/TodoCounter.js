import  './TodoCounter.css'
function TodoCounter({completed, total}) {
    return (
        <h2>
            Completaste {completed} de {total} TODOs
        </h2>
    );
}

export { TodoCounter };


// THERE ARE 2 WAYS TO WORK WITH PROPS, we can do it as usual passing props to a component and call them using props.prop'sname
// however, we can automatically destructure the props using { and the name of the props separated by comas }

