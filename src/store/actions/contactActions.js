import {
    FETCH_CONTACTS_FAILURE,
    FETCH_CONTACTS_REQUEST,
    FETCH_CONTACTS_SUCCESS,
    SELECT_CONTACT,
    UNSELECT_CONTACT
} from "./actionTypes";
import axios from '../../axios-contacts';


export const fetchContactsRequest = () => ({type: FETCH_CONTACTS_REQUEST});
export const fetchContactsSuccess = contacts => ({type: FETCH_CONTACTS_SUCCESS, contacts});
export const fetchContactsFailure = error => ({type: FETCH_CONTACTS_FAILURE, error});

export const fetchContacts = () => {
    return dispatch => {
        dispatch(fetchContactsRequest());

        axios.get('contacts.json').then(response => {
            dispatch(fetchContactsSuccess(response.data));
        }, error => {
            dispatch(fetchContactsFailure(error));
        });
    }
};

export const addContact = (contact, history) => {
    return dispatch => {
        axios.post('contacts.json', contact).then(
            () => {history.push('/');},
            error => dispatch(() => console.log(error))
        );
    }
};

export const selectContact = id => ({type: SELECT_CONTACT, id});
export const unselectContact = () => ({type: UNSELECT_CONTACT});

export const removeContact = id => {
    return async dispatch => {
        axios.delete(`contacts/${id}.json`).then(() => {
            dispatch(unselectContact());
            dispatch(fetchContacts());
        }, error => {
            console.log(error); //todo
        });

    }
};
