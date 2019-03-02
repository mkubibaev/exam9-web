import React from 'react';
import {NavLink} from "react-router-dom";

const ContactFrom = props => {

        return (
            <form onSubmit={props.submitted}>
                <div className="row">
                    <div className="form-group col-12 col-md-6">
                        <label>Name:</label>
                        <input type="text"
                               className="form-control"
                               name="name"
                               value={props.name}
                               onChange={props.changed}
                        />
                    </div>
                    <div className="form-group col-12 col-md-6">
                        <label>Phone:</label>
                        <input type="text"
                               className="form-control"
                               name="phone"
                               value={props.phone}
                               onChange={props.changed}
                        />
                    </div>
                    <div className="col-12 col-md-6 mb-4">
                        <div className="form-group">
                            <label>Photo:</label>
                            <input type="text"
                                   className="form-control"
                                   name="photo"
                                   value={props.photo}
                                   onChange={props.changed}
                            />
                        </div>
                        <div className="photo-preview">
                            <span>Photo preview:</span>
                            <img src="" alt=""/>
                        </div>

                    </div>
                    <div className="form-group col-12 col-md-6">
                        <label>Email:</label>
                        <input type="email"
                               className="form-control"
                               name="email"
                               value={props.email}
                               onChange={props.changed}
                        />
                    </div>
                </div>
                <div className="text-right">
                    <NavLink to="/" className="btn btn-light mr-2">Back to contacts</NavLink>
                    <button type="submit" className="btn btn-success">Save</button>
                </div>
            </form>
        );

};

export default ContactFrom;
