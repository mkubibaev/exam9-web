import axios from '../../axios-contacts';

export const addContact = (contact, history) => {
    return dispatch => {
        axios.post('contacts.json', contact).then(
            () => {history.push('/');},
            error => dispatch(() => console.log(error))
        );
    }
};
