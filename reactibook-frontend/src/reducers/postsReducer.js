import { types } from "../types/types";

const initialState = {
    posts: [],
    currentFileUrl: ''
}

export const postsReducer = (state = initialState, action) => {


    switch (action.type) {
        
        case types.postsAddNew:
            return {
                ...state,
                currentFileUrl: '',
                posts: [action.payload, ...state.posts],
            }

        case types.postsLoad:
            return {
                ...state,
                posts: [ ...action.payload ],
            }

        case types.postsCurrentFileUrl:
            return {
                ...state,
                currentFileUrl: action.payload
            }

        case types.postsUpdated:
            return {
                ...state,
                posts: state.posts.map(post => 
                    post.id === action.payload.id
                    ? action.payload
                    : post
                )
            }
        
        case types.postsDelete:
            return {
                ...state,
                active: {},
                posts: state.posts.filter(post => post.id !== action.payload),
            }

        case types.postsLogoutCleaning:
            return {
                ...state,
                currentFileUrl: '',
                posts: [],
            }

        default:
            return state;
    }


};