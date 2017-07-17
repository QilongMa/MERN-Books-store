export function booksReducers (state={
    books:
    [{
        _id:1,
        title:'Math',
        description:'this is a math book',
        price: 13.33
    },
        {
            _id:2,
            title:'Culture',
            description:'this is a culture book',
            price: 22.55
        }
    ]}, action) {
    switch (action.type){
        case "GET_BOOK":
            return {...state, books:[...state.books]};
            break;
        case "POST_BOOK":
            return {books:[...state.books, ...action.payload]};
            break;
        case "DELETE_BOOK":
            // create current copy array of books
            const currentBookToDelete = [...state.books];
            const indexToDelete = currentBookToDelete.findIndex(
                function (book) {
                    return book._id == action.payload;
                }
            );
            // use slice to remove the book at the index
            return {books:[...currentBookToDelete.slice(0,indexToDelete),
                ...currentBookToDelete.slice(indexToDelete+1)]};
            break;
        case "UPDATE_BOOK":
            // create current copy array of books
            const currentBookToUpdate = [...state.books];
            const indexToUpdate = currentBookToUpdate.findIndex(
                function (book) {
                    return book._id === action.payload._id;
                }
            );
            const newBookToUpdate = {
                ...currentBookToUpdate[indexToUpdate],
                title: action.payload.title
            };
            console.log('what book to update', newBookToUpdate);
            // use slice to remove the book at the index
            return {books:[...currentBookToUpdate.slice(0,indexToUpdate), newBookToUpdate,
                ...currentBookToUpdate.slice(indexToUpdate+1)]};
            break;
        default: return state;

    }
};