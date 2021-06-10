import { login, logout } from "../../actions/auth";
import { types } from "../../types/types";


describe('Tests in auth actions', () => {

    test('the login and logout actions should return the correct values', () => {
        
        
        const uid = 'testUid';

        const name = 'testUser';

        const loginAction = login(uid, name);

        expect(loginAction).toEqual({
            type: types.login,
            payload: { uid, displayName: name }
        });

        const logoutAction = logout();

        expect(logoutAction).toEqual({ type: types.logout });

    });


})
