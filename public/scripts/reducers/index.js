import {combineReducers} from 'redux'
import { SEND_CONTACT, SEND_CONTACT_SUCCESS, SEND_CONTACT_FAIL,
         CHANGE_NAME, CHANGE_EMAIL, CHANGE_MESSAGE } from '../actions'

function contactFormEvents(state = { isFetching: false, status: null }, action) {
    switch(action.type) {
        case SEND_CONTACT:
            return Object.assign({}, state, { isFetching: true });
        case SEND_CONTACT_FAIL:
            return Object.assign({}, state, { isFetching: false, status: 'error' });
        case SEND_CONTACT_SUCCESS:
            return Object.assign({}, state, { isFetching: false, status: 'success' });
        default:
            return state;
    }
}

const initialFormFieldsState = {
    name: '',
    email: '',
    message: ''
};

function contactFormFieldsEvents(state = initialFormFieldsState, action) {
    switch (action.type) {
        case CHANGE_NAME:
            return Object.assign({}, state, {name: action.name});
        case CHANGE_EMAIL:
            return Object.assign({}, state, {email: action.email});
        case CHANGE_MESSAGE:
            return Object.assign({}, state, {message: action.message});
        default:
            return state;
    }
}


export default combineReducers({
    contactFormEvents,
    contactFormFieldsEvents
})

