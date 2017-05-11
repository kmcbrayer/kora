const userInfo = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_USER_NAME':
            return Object.assign({}, state, {
                name: action.name
            });
        case 'UPDATE_USER_EMAIL':
            return Object.assign({}, state, {
                email: action.email
            });
        default:
            return state
    }
};

export default userInfo;
