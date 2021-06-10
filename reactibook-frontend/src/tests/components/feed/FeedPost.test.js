import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { FeedPost } from '../../../components/feed/FeedPost';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {uid: 'id', name: 'test'},
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

const post = {
    id: 'id',
    author: {id: 'id', name: 'name'},
    content: 'content',
    date: 10000000,
    fileUrl: '',
};

const wrapper = mount( 
    <Provider store={ store }>
        <FeedPost { ...post }  /> 
    </Provider>
)


describe('Tests in <FeedPost/> component', () => {
    

    test('snapshot should match', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('the textarea to edit the post should not exist', () => {

        expect(wrapper.find('textarea').exists()).toBe(false);

    });

    test('if the id of the user matches the author of the post, you should be able to edit and delete', () => {

        const postSpans = wrapper.find('span');

        expect(postSpans.at(0).text()).toBe('Editar');

        expect(postSpans.at(1).text()).toBe('Eliminar');

    });

})
