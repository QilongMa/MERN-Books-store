import reducer from './reducers/index';
import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';
import {render} from 'react-dom';
import BooksList from './components/pages/booksList';
import Cart from './components/pages/cart';
import BooksForm from './components/pages/booksForm';
import Main from './main';
import thunk from 'redux-thunk';


// Step 1 create the store
const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducer, middleware);

const Routes = (
    <Provider store={store} >
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={BooksList}/>
                <Route path="/admin" component={BooksForm} />
                <Route path="/cart" component={Cart} />
            </Route>
        </Router>
    </Provider>
)

render(
    Routes, document.getElementById('app')
);
