import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import './TodoItem.css';

function TodoItem(props){
    /*
    function deleteTask(id){
        document.getElementById(id).remove();
    }
    */
    return(
        <li id={props.id} className={`todoItem ${props.completed && 'TodoItem-ready'}`}>
            <span onClick={props.onComplete} className={`${props.completed && 'TodoItem-checket'} circle `}>
            </span>
            <p>{props.text}</p>
            <span onClick={props.onDelete} className={`eliminateItem pointer`}><AiOutlineClose/></span>
        </li>
    );
}

export {TodoItem};


// const defaultTodos = [
//   {
//     text: 'Cut some onions',
//     completed: true,
//   },
//   {
//     text: 'Finish React course',
//     completed: false,
//   },
// ];