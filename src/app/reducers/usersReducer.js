import { RANDOM_USER_REQUESTED, RANDOM_USER_SUCCEEDED } from '../actions/loadRandomStuffActions';

export const initialState = {
    user: null
};

const userReducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
    case RANDOM_USER_SUCCEEDED:
        newState.user = action.user;
        break;
    case RANDOM_USER_REQUESTED:
    default:
        newState.user = null;
        break;
    }

    return newState;
};

export default userReducer;
