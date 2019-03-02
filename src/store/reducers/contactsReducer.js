import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_FAILURE,
    FETCH_CONTACTS_SUCCESS,
    SELECT_CONTACT, UNSELECT_CONTACT, FETCH_CONTACT_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    contacts: {},
    selectedContactId: null,
    editingContact: null,
    error: null,
    loading: true
};

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case FETCH_DATA_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false,
            };

        case FETCH_CONTACTS_SUCCESS:
            return {
                ...state,
                contacts: action.contacts,
                loading: false,
            };

        case SELECT_CONTACT:
            return {
                ...state,
                selectedContactId: action.id,
            };

        case UNSELECT_CONTACT:
            return {
                ...state,
                selectedContactId: null,
            };

        case FETCH_CONTACT_SUCCESS:
            return {
                ...state,
                editingContact: action.contact,
                loading: false,
            };

        default:
            return state;
    }
};

export default productReducer;
