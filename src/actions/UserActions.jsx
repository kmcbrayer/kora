export function updateUserName(name) {
    return {
        type: 'UPDATE_USER_NAME',
        name
    }
}

export function updateUserEmail(email) {
    return {
        type: 'UPDATE_USER_EMAIL',
        email
    }
}
