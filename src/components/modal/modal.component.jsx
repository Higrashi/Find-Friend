import React from 'react';

import './modal.styles.css';

const Modal = ({active, src, onClose}) => {

    return (
        <div>
        { active ?
          <div className='modal-window'>
            <button className="modal-close-btn" onClick={onClose}>&times;</button>
            {/* <div className="modal-img-box">

            </div> */}
            <img src={src} alt="cat" className='modal-image'/>
        </div>  : null
        }
        
        </div>
    )
}

export default Modal;