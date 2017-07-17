// Get a book
export function getBooks(book) {
    return {
        type:"GET_BOOK"
    }
}

export function postBooks(book) {
    return {
        type:"POST_BOOK",
        payload:book
    }
}

export function deleteBooks(id) {
    return {
        type:"DELETE_BOOK",
        payload:id
    }
}

export function updateBooks(book) {
    return {
        type:"UPDATE_BOOK",
        payload:book
    }
}