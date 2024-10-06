import React from 'react';
import s from './Modal.module.css'

const Modal = ({active, setActive, children}) => {
    return (
        <div className={active ? `${s.modal} ${s.modalActive}` : s.modal} onClick={() => setActive(false)}>
            <div className={active ? `${s.modalContent} ${s.active}` : s.modalContent}
                 onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;