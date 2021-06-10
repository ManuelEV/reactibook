import { postsReducer } from "../../reducers/postsReducer";
import { types } from "../../types/types"



describe('Tests in the postsReducer', () => {

    test('postsAddNew should add a new post', () => {

        const newPost = {
            author: {id: 'uid', name: 'name'},
            content: 'content',
            visibility: 'public',
            date: 10000000,
            fileUrl: '',
        };
        
        const initialState = {
            posts: [],
            currentFileUrl: ''
        }

        const action = {
            type: types.postsAddNew,
            payload: {
                ...newPost,
            }
        }

        const state = postsReducer(initialState, action);

        expect(state).toEqual({
            posts: [
              {
                ...newPost,
              }
            ],
            currentFileUrl: ''
          });

    });

    test('postsUpdated should return an array with the updated post', () => {

        const initialPost = {
            author: {id: 'uid', name: 'name'},
            content: 'content',
            visibility: 'public',
            date: 10000000,
            fileUrl: '',
        };
        
        const initialState = {
            posts: [initialPost],
            currentFileUrl: ''
        }

        const updatedPost = {
            author: {id: 'uid', name: 'name'},
            content: 'new content',
            visibility: 'public',
            date: 10000000,
            fileUrl: '',
        };

        const action = {
            type: types.postsUpdated,
            payload: {
                updatedPost,
            }
        }

        const state = postsReducer(initialState, action);

        expect(state).toEqual({
            posts: [
              {
                updatedPost,
              }
            ],
            currentFileUrl: ''
          });

    });
    

})
