import {FETCH_CONTACTS_FAILURE, FETCH_CONTACTS_REQUEST, FETCH_CONTACTS_SUCCESS} from "./actionTypes";
import axios from '../../axios-contacts';


export const fetchContactsRequest = () => ({type: FETCH_CONTACTS_REQUEST});
export const fetchContactsSuccess = contacts => ({type: FETCH_CONTACTS_SUCCESS, contacts});
export const fetchContactsFailure = error => ({type: FETCH_CONTACTS_FAILURE, error});

export const fetchContacts = () => {
    return dispatch => {
        dispatch(fetchContactsRequest());

        return axios.get('contacts.json').then(response => {
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
