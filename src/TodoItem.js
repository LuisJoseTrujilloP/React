function TodoItem(props){
    return (
      <div>
      <li>
        <span>{}</span>
        <p>{props.text}</p>
        <span>{}</span>
      </li>      
      </div>
  );
}

export { TodoItem }