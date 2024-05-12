import React from 'react'
import './MOdalWindow.scss';
import CloseButton from './CloseButton';


function ModalWindow({children}) {
  return (
    <>
        <div className="modal-wrapper" aria-modal="true"
            role="dialog" tabIndex="-1">
            <div className="inner">
            <CloseButton />
            {children}
            </div>
        </div>
    </>

  )
}

export default ModalWindow