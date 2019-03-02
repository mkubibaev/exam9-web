import React, {Component} from 'react';
import {connect} from "react-redux";
import ContactFrom from "../../components/ContactForm/ContactFrom";
import {addContact} from "../../store/actions/contactActions";

class AddEditContact extends Component {
    state = {
        contact: {
            name: '',
            phone: '',
            email: '',
            photo: '',
        },
        isEditPage: false

    };

    valueChanged = event => {
        const {name, value} = event.target;
        const contact = this.state.contact;

        contact[name] = value;

        this.setState({contact});
    };

    submitHandler = event => {
        event.preventDefault();
        const newContact = {...this.state.contact};

        if (newContact.name !== '' && newContact.phone !== '' &&
            newContact.email !== '' && newContact.photo !== '') {

            this.props.addContact(newContact,this.props.history);
        } else {
            alert('Please, fill all inputs!')
        }
    };

    render() {
        return (
            <ContactFrom
                {...this.state.contact}
                changed={this.valueChanged}
                submitted={this.submitHandler}
            />
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addContact: (contact, history) => dispatch(addContact(contact, history)),
});

export default connect(null, mapDispatchToProps)(AddEditContact);
