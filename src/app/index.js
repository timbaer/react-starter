import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from './configureStore';
import App from './components/App';

const store = configureStore();

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);
