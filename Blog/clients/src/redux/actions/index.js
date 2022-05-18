import { createActions } from 'redux-actions';

export const getPosts = createActions({
    getPostsRequest: undefined,
    getPostSuccess: (payload) => payload,
    getPostFailure: (err) => err,
})