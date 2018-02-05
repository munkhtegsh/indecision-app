import React from 'react';
import Modal from 'react-modal';

export const Modals = (props) => (
    <Modal isOpen={!!props.selectOption} contentLabel={"Selected Option"} closeTimeoutMS={200} className="modal">
        <h3 className="modal__title"> Selected Option </h3>
        {props.selectOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleSelectOption}>Okay</button>
    </Modal>
)

