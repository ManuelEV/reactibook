import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";



describe('Tests in the authReducer file', () => {

    test('should be able to login', () => {

        const initState = {};

        const action = {
            type: types.login,
            payload: {
                uid: 'testuid',
                displayName: 'Juanito'
            }
        };

        const state = authReducer(initState, action);

        expect(state).toEqual({
            uid: 'testuid',
            name: 'Juanito'
        });

    });

    test('should be able to logout', () => {

        const initState = {
            uid: 'testuid',
            name: 'Juanito'
        };

        const action = {
            type: types.logout,
        };

        const state = authReducer(initState, action);

        expect(state).toEqual({});

    });

    test('if the action type does not match, it should return the initial state', () => {

        const initState = {
            uid: 'testuid',
            name: 'Juanito'
        };

        const action = {
            type: 'some random type',
        };

        const state = authReducer(initState, action);

        expect(state).toEqual(initState);

    });
    

})
