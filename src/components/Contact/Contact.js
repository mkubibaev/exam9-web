import React from 'react';
import './Contact.css';

const Contact = props => {
    return (
        <div onClick={props.clicked} className="contact">
            <div className="contact-img">
                <img src={props.photo} alt={props.name}/>
            </div>
            <div className="contact-text">
                <span className="contact-name">{props.name}</span>
                {props.email && <span>email: <strong>{props.email}</strong></span>}
                {props.phone && <span>phone: <strong>{props.phone}</strong></span>}
            </div>

        </div>
    );
};

export default Contact;
