import Axios from 'axios';


// Get a book
export function getBooks(book) {
    return function (dispatch) {
        Axios.get('/api/books')
            .then(function (response) {
                console.log('you successfully get books', response)
                dispatch({type:"GET_BOOK", payload:response.data})
            })
            .catch(function (err) {
                console.log('you failed to get books')

                dispatch({type:"GET_BOOKS_REJECTEED", payload:err})
            })
    }
}

export function postBooks(book) {
    return function (dispatch) {
        Axios.post("/api/books", book)
            .then(function (response) {
                dispatch({type:"POST_BOOK", payload:response.data})
            })
            .catch(function (err) {
                dispatch({type:"POST_BOOK_REJECTED", payload:"there was an error while posting a new book"})
            })
    }
}

export function deleteBooks(id) {
    return function (dispatch) {
        Axios.delete("/api/books/" + id)
            .then(function (response) {
                dispatch({type:"DELETE_BOOK", payload:id})
            })
            .catch(function (err) {
                dispatch({type:"DELETE_BOOK_REJECTED", payload:err})
            })
    }
}

export function updateBooks(book) {
    return {
        type:"UPDATE_BOOK",
        payload:book
    }
}