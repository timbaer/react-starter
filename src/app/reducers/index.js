import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import userReducer from './usersReducer';

const rootReducer = {
    userStore: userReducer
};

export default history => combineReducers({
    ...rootReducer,
    router: connectRouter(history)
});
