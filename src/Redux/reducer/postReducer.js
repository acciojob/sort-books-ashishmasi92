
import { sort } from "css-loader/dist/utils";
import { POST_REQUEST_FAILED, POST_REQUEST_FULFILLED, POST_REQUEST_PENDING,SET_SORT } from "../action/actionType";


let initialState = {
    loading: false,
    data: [],
    error: "",
    sortBy :"title",
    order:"asc"
}


const postReducer = (state = initialState, action) => {

    if (action.type == POST_REQUEST_PENDING) {
        return {
            ...state,
            loading: true,
            data: [],
            error: ""
        }
    }
    else if (action.type == POST_REQUEST_FULFILLED) {
        return {
            ...state,
            data: action.payload,
            loading: false
        }

    }
    else if (action.type == POST_REQUEST_FAILED) {
        return {
            ...state,
            error: action.payload,
            loading: false
        }
    }
    else if(action.type==SET_SORT){
        return {
            ...state,
            sortBy:action.payload.sortTitle,
            order:action.payload.sortOrder
        }
    }
    else {
        return state
    }
}


export default postReducer