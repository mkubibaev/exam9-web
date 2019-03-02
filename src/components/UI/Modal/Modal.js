import React from 'react';
import {NavLink} from "react-router-dom";
import Contact from "../../Contact/Contact";

const Modal = props => {
    let modal = null;

    if (props.show) {
        modal = (
            <div className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Contact data</h5>
                            <button
                                type="button"
                                className="close"
                                onClick={props.close}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <Contact
                                {...props.contact}
                            />
                        </div>
                        <div className="modal-footer">
                            <NavLink to={`edit/${props.show}`} className="btn btn-warning">Edit</NavLink>
                            <button onClick={props.removed} className="btn btn-danger" type="button">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return modal;
};

export default Modal;
