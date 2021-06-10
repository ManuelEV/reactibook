import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { LoginScreen } from '../../../components/auth/LoginScreen';
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';

jest.mock('../../../actions/auth', () => ({
    startGoogleLogin: jest.fn(),
    startLoginEmailPassword: jest.fn()
}))

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null,
        loginErrors: {
            emailMsg: '',
            passwordMsg: '',
        },
    },
};

let store = mockStore(initState);

store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <LoginScreen />
        </MemoryRouter>
    </Provider>
);

describe('Tests in <LoginScreen />', () => {

    beforeEach(() => {
        store = mockStore(initState);
        jest.clearAllMocks();
    });
    
    
    test('snapshot should match', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should run startGoogleLogin action', () => {
        
        // find by class and simulate click

        wrapper.find('.w-full .cursor-pointer').prop('onClick')();

        expect(startGoogleLogin).toHaveBeenCalled();

    });

    test('It shouldnt run the startLoginEmailPassword action if the inputs dont exist', () => {
        
        // find form and simulate onSubmit

        wrapper.find('form').prop('onSubmit')({preventDefault(){}});

        // we expect isValid is false (no params)

        expect(startLoginEmailPassword).not.toHaveBeenCalled();

    });
    

})

