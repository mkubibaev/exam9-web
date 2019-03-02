import React, {Component} from 'react';
import {connect} from "react-redux";
import ContactFrom from "../../components/ContactForm/ContactFrom";
import {addContact, fetchContact, updateContact} from "../../store/actions/contactActions";
import Loader from "../../components/UI/Loader/Loader";




class AddEditContact extends Component {

    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         contact: {
    //             name: '',
    //             phone: '',
    //             email: '',
    //             photo: '',
    //         },
    //         isEditPage: false
    //     };
    //
    //
    //     if(props.match.params.id) {
    //         props.fetchContact(props.match.params.id).then(() => {
    //             this.state.contact = props.editingContact;
    //             this.state.isEditPage = true;
    //         });
    //     }
    // }

    state = {
        contact: {
            name: '',
            phone: '',
            email: '',
            photo: '',
        },
        isEditPage: false
    };

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.fetchContact(this.props.match.params.id).then(
                () => {
                    this.setState({contact: this.props.editingContact, isEditPage: true});
                }
            )
        }
    }

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

            if (this.state.isEditPage) {
                this.props.updateContact(newContact, this.props.match.params.id, this.props.history);
            } else {
                this.props.addContact(newContact, this.props.history);
            }

        } else {
            alert('Please, fill all inputs!')
        }
    };

    render() {
        return this.props.loading
            ? <Loader/>
            : <div className="container">
                <h3 className="mb-4">{this.state.isEditPage ? 'Edit contact' : 'Add new contact'}</h3>

                <ContactFrom
                    {...this.state.contact}
                    changed={this.valueChanged}
                    submitted={this.submitHandler}
                />
            </div>
    }
}

const mapStateToProps = state => ({
    editingContact: state.editingContact,
    loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
    addContact: (contact, history) => dispatch(addContact(contact, history)),
    fetchContact: id => dispatch(fetchContact(id)),
    updateContact: (contact, id, history) => dispatch(updateContact(contact, id, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEditContact);
