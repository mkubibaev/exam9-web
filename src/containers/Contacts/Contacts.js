import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchContacts, removeContact, selectContact, unselectContact} from "../../store/actions/contactActions";
import Contact from "../../components/Contact/Contact";
import Loader from "../../components/UI/Loader/Loader";
import Modal from "../../components/UI/Modal/Modal";

class Contacts extends Component {

    componentDidMount() {
        this.props.fetchContacts()
    }

    componentWillUnmount() {
        this.props.unselectContact();
    }

    render() {
        if (this.props.error) {
            return (
                <div className="alert alert-danger">
                    {this.props.error.message /* будет ли там ключ message ) */ }
                </div>
            )
        }

        return this.props.loading
            ? <Loader/>
            : <div className="container">
                <Modal
                    show={this.props.selectedContactId}
                    close={this.props.unselectContact}
                    contact={this.props.contacts[this.props.selectedContactId]}
                    removed={() => this.props.removeContact(this.props.selectedContactId)}
                />
                <div className="row">
                    {Object.keys(this.props.contacts).map(id => (
                        <div key={id} className="col-12 col-lg-4">
                            <Contact
                                name={this.props.contacts[id].name}
                                photo={this.props.contacts[id].photo}
                                clicked={() => this.props.selectContact(id)}
                            />
                        </div>
                    ))}
                </div>
            </div>
    }
}

const mapStateToProps = state => ({
    contacts: state.contacts,
    selectedContactId: state.selectedContactId,
    error: state.error,
    loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(fetchContacts()),
    selectContact: id => dispatch(selectContact(id)),
    unselectContact: () => dispatch(unselectContact()),
    removeContact: id => dispatch(removeContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
