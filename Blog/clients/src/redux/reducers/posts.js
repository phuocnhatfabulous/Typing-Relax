import { INIT_STATE } from "../../constant";
import { getPosts } from "../actions";

export default function postsReducers(state = INIT_STATE.posts, action){
    switch(action.type){
        case getPosts.getPostsRequest():
            break;
        default:
            return state;
    }
}