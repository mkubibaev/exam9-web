import React from 'react';
import './Contact.css';

const Contact = props => {
    return (
        <div className="contact">
            <div className="contact-img">
                <img src={props.photo} alt={props.name}/>
            </div>
            <span className="contact-name">{props.name}</span>
        </div>
    );
};

export default Contact;
