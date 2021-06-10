import { types } from '../../types/types';

describe('Pruebas en el archivo types.js', () => {

    test('The file types.js should match the expected content', () => {

        const expectedContent = {

            login: '[Auth] login',
            logout: '[Auth] logout',

            uiSetError: '[UI] Set Error',
            uiRemoveError: '[UI] Remove Error',

            uiStartLoading: '[UI] Start Loading',
            uiFinishLoading: '[UI] Finish Loading',

            postsAddNew: '[Posts] New post',
            postsActive: '[Posts] Set active post',
            postsLoad: '[Posts] Load posts',
            postsUpdated: '[Posts] Updated post',
            postsFileUrl: '[Posts] Updated image url',
            postsDelete: '[Posts] Delete post',
            postsLogoutCleaning: '[Posts] Logout Cleaning',
            postsCurrentFileUrl: '[Posts] Current File Url',

            uiSetLoginError: '[UI] Set Login Error',
            uiRemoveLoginError: '[UI] Remove Login Error',
        
        }

        expect(types).toEqual(expectedContent);

    });

})