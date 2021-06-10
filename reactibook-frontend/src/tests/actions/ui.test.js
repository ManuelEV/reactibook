import { finishLoading, removeError, setError, setLoginError, startLoading } from "../../actions/ui";
import { types } from "../../types/types";


describe('Tests in ui actions', () => {

    test('all actions should work', () => {
        
        const action = setError('My error');

        expect(action).toEqual({
            type: types.uiSetError,
            payload: 'My error'
        });

        const removeErrorAction = removeError();

        const startLoadingAction = startLoading();

        const finishLoadingAction = finishLoading();

        expect(removeErrorAction).toEqual({
            type: types.uiRemoveError,
        });

        expect(startLoadingAction).toEqual({
            type: types.uiStartLoading,
        });

        expect(finishLoadingAction).toEqual({
            type: types.uiFinishLoading,
        });

        const loginErrors = {
            emailMsg: 'Email msg error',
            passwordMsg: 'Password msg error',
        };

        const setLoginErrorAction = setLoginError(loginErrors);

        expect(setLoginErrorAction).toEqual({
            type: types.uiSetLoginError,
            payload: loginErrors,
        });

    });


})
