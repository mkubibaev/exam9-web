import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchContacts} from "../../store/actions/contactActions";
import Contact from "../../components/Contact/Contact";
import Loader from "../../components/UI/Loader/Loader";

class Contacts extends Component {

    componentDidMount() {
        this.props.fetchContacts()
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
                <div className="row">
                    {Object.keys(this.props.contacts).map(id => (
                        <div key={id} className="col-12 col-lg-4">
                            <Contact
                                {...this.props.contacts[id]}
                            />
                        </div>
                    ))}
                </div>
            </div>
    }
}

const mapStateToProps = state => ({
    contacts: state.contacts,
    error: state.error,
    loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(fetchContacts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
