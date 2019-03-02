import {
    FETCH_CONTACTS_FAILURE,
    FETCH_CONTACTS_REQUEST,
    FETCH_CONTACTS_SUCCESS,
    SELECT_CONTACT, UNSELECT_CONTACT
} from "../actions/actionTypes";

const initialState = {
    contacts: {},
    selectedContactId: null,
    error: null,
    loading: true
};

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CONTACTS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case FETCH_CONTACTS_SUCCESS:
            return {
                ...state,
                contacts: action.contacts,
                loading: false,
            };

        case FETCH_CONTACTS_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            };

        case SELECT_CONTACT:
            return {
                ...state,
                selectedContactId: action.id
            };

        case UNSELECT_CONTACT:
            return {
                ...state,
                selectedContactId: null
            };

        default:
            return state;
    }
};

export default productReducer;
