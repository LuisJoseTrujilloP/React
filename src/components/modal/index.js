import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal')


function Modal({ children }) {
  return ReactDOM.createPortal(
      <div className='Modal'>
      </div>
      );
}


export { Modal }