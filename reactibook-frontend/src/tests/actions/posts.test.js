import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { types } from "../../types/types";
import { addNewPost, refreshPost, startNewPost } from '../../actions/posts';

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

const store = mockStore({
    auth: {
        uid: 'testUid',
        name: 'testName'
    },
    posts: {
        currentFileUrl: '',
        posts: [],
    }
});

describe('Tests in posts actions', () => {


    test('startNewPost() should create a new post', async() => {

        console.log('Current environment: ', process.env.NODE_ENV);
        
        // this creates a new post in the production database, a test environment is required 

        // await store.dispatch(startNewPost('post content', 'public'));

    });

    test('the addNewPost action should return the correct object', () => {
        
        const newPost = {
            author: {id: 'uid', name: 'name'},
            content: 'content',
            visibility: 'public',
            date: new Date().getTime(),
            fileUrl: '',
        };

        const addNewPostAction = addNewPost(newPost);

        expect(addNewPostAction).toEqual({
            type: types.postsAddNew,
            payload: {
                ...newPost
            }
        });

    });
    
    test('the refreshPost action should return the correct object', () => {
        
        const post = {
            author: {id: 'uid', name: 'name'},
            content: 'content',
            visibility: 'public',
            date: new Date().getTime(),
            fileUrl: '',
        };

        const addNewPostAction = refreshPost(post);

        expect(addNewPostAction).toEqual({
            type: types.postsUpdated,
            payload: post,
        });

    });

})