export const SEND_CONTACT = 'SEND_CONTACT';
export const SEND_CONTACT_SUCCESS = 'SEND_CONTACT_SUCCESS';
export const SEND_CONTACT_FAIL = 'SEND_CONTACT_FAIL';

// anonymous arrow functions are used instead
export function sendContact() {
    return { type: SEND_CONTACT }
}

export function sendContactSuccess() {
    return { type: SEND_CONTACT_SUCCESS }
}

export function sendContactFail() {
    return { type: SEND_CONTACT_FAIL }
}

export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_MESSAGE = 'CHANGE_MESSAGE';

// anonymous arrow functions are used instead
export function changeName(name) {
    return { type: CHANGE_NAME, name }
}

export function changeEmail(email) {
    return { type: CHANGE_EMAIL, email }
}

export function changeMessage(message) {
    return { type: CHANGE_MESSAGE, message }
}