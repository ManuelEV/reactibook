import Swal from 'sweetalert2';
import { fileUpload } from '../helpers/fileUpload';
import { loadPosts } from "../helpers/loadPosts";
import { postOptions, putOptions } from '../helpers/requestOptions';
import { types } from "../types/types";


export const startNewPost = (content, visibility) => {
    return async( dispatch, getState ) => {
        const { uid, name } = getState().auth;

        const { currentFileUrl } = getState().posts;

        const newPost = {
            author: {id: uid, name},
            content,
            visibility,
            date: new Date().getTime(),
            fileUrl: currentFileUrl,
        };
        
        const options = postOptions(newPost);

        const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`, options);

        const body = await response.json();

        const newPostId = body.post.id;

        dispatch(addNewPost({id: newPostId, ...newPost}));

    }
}

export const addNewPost = (newPost) => ({
    type: types.postsAddNew,
    payload: {
        ...newPost
    }
})

export const startLoadingPosts = () => {
    return async (dispatch) => {
        const posts = await loadPosts();
        console.log('Loading posts... ', posts)
        dispatch(setPosts(posts));
    }
}

export const setPosts = (posts) => ({

    type: types.postsLoad,
    payload: posts,

})

export const startUpdatingPost = (id, data) => {
    return async(dispatch, getState) => {

        const options = putOptions(data);

        const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/${id}`, options);

        const body = await response.json();

        console.log(body);

        const editedPost = body.post;

       dispatch(refreshPost(editedPost));
        Swal.fire('Saved', 'El post se guardó con éxito', 'success');
    }
}

export const refreshPost = (post) => ({
    type: types.postsUpdated,
    payload: post
});


export const updateCurrentFileUrl = (fileUrl) => ({
    type: types.postsCurrentFileUrl,
    payload: fileUrl
})


export const startUploading = (file) => {
    return async (dispatch, getState) => {

        Swal.fire({
            title: 'Uploading',
            text: 'Please wait',
            allowOutsideClick: false,
            showConfirmButton: false,
        });
        Swal.showLoading();

        const fileUrl = await fileUpload(file);

        dispatch(updateCurrentFileUrl(fileUrl));
        
        Swal.close();

        console.log(fileUrl);

    }
}




export const startDeleting = (id) => {
    return async (dispatch, getState) => {

        const options = {
            method: 'DELETE',
        };

        const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/${id}`, options);

        const body = await response.json();

        console.log(body);

        dispatch(deletePost(id));

    }
}

export const deletePost = (id) => ({
    type: types.postsDelete,
    payload: id,
})


export const postLogout = () => ({
    type: types.postsLogoutCleaning,
})