import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'


const modalRoot = document.getElementById('modal')



function Modal({ children }) {

  return ReactDOM.createPortal(
    
    <div className='Modal-background'>
      {children}
    </div>
    ,
    modalRoot
  );
}


export { Modal }