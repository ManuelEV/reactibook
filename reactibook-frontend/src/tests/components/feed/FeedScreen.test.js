import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import { FeedScreen } from '../../../components/feed/FeedScreen';
import { posts } from '../../data/posts';

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
        posts: posts,
        currentFileUrl: ''
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount( 
    <Provider store={ store }>
        <FeedScreen /> 
    </Provider>
)

describe('Tests in <FeedScreen/>', () => {
    
    test('snapshot should match', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('the number of posts should match', () => {
        
        const postsCount = wrapper.find('FeedPost').length;

        expect(postsCount).toBe(posts.length);

    })
    

})

