import {FETCH_CONTACTS_FAILURE, FETCH_CONTACTS_REQUEST, FETCH_CONTACTS_SUCCESS} from "../actions/actionTypes";

const initialState = {
    contacts: {},
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

        default:
            return state;
    }
};

export default productReducer;
