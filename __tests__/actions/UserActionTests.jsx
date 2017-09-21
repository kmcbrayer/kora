import * as userActions from '../../src/actions/UserActions.jsx';

describe('UserActions', () => {
    it('updateUserName should update the user name', () => {
        const text = 'new name';
        const expectedAction = {
            type: 'UPDATE_USER_NAME',
            name: text
        };
        expect(userActions.updateUserName(text)).toEqual(expectedAction)
    })

    it('updateUserEmail should update user email', () => {
        const email = 'newEmail@expapp.com';
        const expectedAction = {
            type: 'UPDATE_USER_EMAIL',
            email: email
        };
        expect(userActions.updateUserEmail(email)).toEqual(expectedAction)
    })
});
