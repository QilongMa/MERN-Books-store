import reducer from './reducers/index';
import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import BooksList from './components/pages/booksList';

import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';



// Step 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducer, middleware);

render(
    <Provider store={store} >
        <BooksList/>
    </Provider>, document.getElementById('app')
);

// Step 2 create and dispatch actions
// store.dispatch(postBooks(
//         )
// );