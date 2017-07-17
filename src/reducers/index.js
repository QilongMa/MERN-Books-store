import {combineReducers} from 'redux';
import {booksReducers} from './booksReducer';
import {cartReducers} from './cartReducers';

export default combineReducers({
    books: booksReducers,
    cart: cartReducers
})