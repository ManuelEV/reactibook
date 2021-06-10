import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { RegisterScreen } from '../../../components/auth/RegisterScreen';

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


const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <RegisterScreen />
        </MemoryRouter>
    </Provider>
);


describe('Test in <RegisterScreen/>', () => {


    beforeEach(() => {
        store = mockStore(initState);
        jest.clearAllMocks();
    });
    

    test('snapshot should match', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('it should return the error correctly', () => {

        const initState = {
            auth: {},
            ui: {
                loading: false,
                msgError: 'El email no es válido'
            }
        };
        
        const store = mockStore(initState);
        
        
        const wrapper = mount( 
            <Provider store={ store }>
                <MemoryRouter>
                    <RegisterScreen /> 
                </MemoryRouter>
            </Provider>
        );
        
        expect( wrapper.find('.text-red-500').exists()  ).toBe(true);
        expect( wrapper.find('.text-red-500').text().trim()  ).toBe( initState.ui.msgError );

    })
    

})
