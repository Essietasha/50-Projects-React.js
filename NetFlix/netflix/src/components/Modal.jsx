import React from 'react';
import classes from './Modal.module.css';

const Modal = ({ onConfirm, onCancel }) => {
  
  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <p>Are you sure you want to remove this movie from My List?</p>
        <button className={classes.button} onClick={onConfirm}>Yes</button>
        <button className={classes.button} onClick={onCancel}>No</button>
      </div>
    </div>
  );
};

export default Modal;