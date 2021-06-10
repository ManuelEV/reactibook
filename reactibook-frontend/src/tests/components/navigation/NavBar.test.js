import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';
import { startLogout } from '../../../actions/auth';
import { NavBar } from '../../../components/navigation/NavBar';

jest.mock('../../../actions/auth', () => ({
    startLogout: jest.fn(),
}));


const middlewares = [thunk];

const mockStore = configureStore(middlewares);

const initState = {
    auth: {uid: 'test', name: 'test'},
    ui: {
        loading: false,
        msgError: null,
        loginErrors: {
            emailMsg: '',
            passwordMsg: '',
        },
    },
    posts: {
        posts: [],
        currentFileUrl: ''
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();


const wrapper = mount(
    <Provider store={store}>
        <NavBar />
    </Provider>
);


describe('Tests in <NavBar/> component', () => {
    

    test('snapshot should match', () => {
        expect(wrapper).toMatchSnapshot();
    });


    test('startLogout should be called', () => {
        
        wrapper.find('button').prop('onClick')();

        expect( startLogout ).toHaveBeenCalled()

    })

})
