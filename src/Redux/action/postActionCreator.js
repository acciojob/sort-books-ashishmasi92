import { POST_REQUEST_FAILED, POST_REQUEST_FULFILLED, POST_REQUEST_PENDING,SET_SORT } from "./actionType";



const post_request_pending = () => {

    return {
        type: POST_REQUEST_PENDING
    }
}

const post_request_fulfilled = (data) => {

    return {
        type: POST_REQUEST_FULFILLED,
        payload: data
    }
}


const post_request_failed = (error) => {

    return {
        type: POST_REQUEST_FAILED,
        payload: error
    }
}


export const set_sort=(sorting="title",typ="acs")=>{

    return {
        type:SET_SORT,
        payload:{
            sortTitle:sorting,
            sortOrder:typ
        }
    }
}






function postData(){

    return (dispatch)=>{
        dispatch(post_request_pending)
        
            fetch("https://api.nytimes.com/svc/books/v3/lists/2024-12-01/hardcover-fiction.json?api-key=NBt6OJLGf6cXxs5iwd19OHvN0PmbLfnI")
            .then((res)=>{
                return res.json()
            })
            .then(data=>{
                dispatch(post_request_fulfilled(data))

            })
            .catch((error)=>{
                dispatch(post_request_failed(error.message))
            })

           
    }
}



export default postData