function TodoCounter(props) {
    return (
        <h2>
            Completaste {props.completed} de {props.total} TODOs
        </h2>
    );
}

export { TodoCounter };
