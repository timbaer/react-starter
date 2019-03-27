import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import createRootReducer from './reducers';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
    return createStore(
        createRootReducer(history),
        preloadedState,
        compose(
            applyMiddleware(
                thunk,
                routerMiddleware(history)
            )
        )
    );
}
