import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_FAILURE,
    FETCH_CONTACTS_SUCCESS,
    FETCH_CONTACT_SUCCESS,
    SELECT_CONTACT,
    UNSELECT_CONTACT,
} from "./actionTypes";
import axios from '../../axios-contacts';


export const fetchDataRequest = () => ({type: FETCH_DATA_REQUEST});
export const fetchDataFailure = error => ({type: FETCH_DATA_FAILURE, error});

export const fetchContactsSuccess = contacts => ({type: FETCH_CONTACTS_SUCCESS, contacts});

export const fetchContacts = () => {
    return dispatch => {
        dispatch(fetchDataRequest());

        axios.get('contacts.json').then(response => {
            dispatch(fetchContactsSuccess(response.data));
        }, error => {
            dispatch(fetchDataFailure(error));
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
    return dispatch => {
        axios.delete(`contacts/${id}.json`).then(() => {
            dispatch(unselectContact());
            dispatch(fetchContacts());
        }, error => {
            console.log(error); //todo
        });

    }
};

export const fetchContactSuccess = contact => ({type: FETCH_CONTACT_SUCCESS, contact});

export const fetchContact = id => {
    return dispatch => {
        dispatch(fetchDataRequest());

        return axios.get(`contacts/${id}.json`).then(response => {
            dispatch(fetchContactSuccess(response.data));
        }, error => {
            dispatch(fetchDataFailure(error));
        });
    }
};

export const updateContact = (contact, id, history) => {
    return dispatch => {
        axios.put(`contacts/${id}.json`, contact).then(() => {
            dispatch(fetchContacts());
            history.push('/');
        }, error => {
            console.log(error); //todo
        })
    }
};

