import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ApiClient from '../../apis/ExampleRestClient';

import { initialState } from '../../reducers/usersReducer';
import {
    loadRandonUser,
    RANDOM_USER_REQUESTED,
    RANDOM_USER_SUCCEEDED
} from '../loadRandomStuffActions';


const middlewares = [thunk];
const storeFactory = configureMockStore(middlewares);

describe('RandomStuffActions', () => {
    let store;
    const expectedUserResponse = { name: 'test1' };

    beforeEach(() => {
        store = storeFactory({ user: initialState });
    });

    test('loadRandonUser should call endpoint and emit start and success actions', () => {
        ApiClient.getRandomUser = jest.fn(() => Promise.resolve(expectedUserResponse));

        const expectedActions = [
            { type: RANDOM_USER_REQUESTED },
            {
                type: RANDOM_USER_SUCCEEDED,
                user: expectedUserResponse
            }];

        return store.dispatch(loadRandonUser())
            .then(() => {
                expect(store.getActions())
                    .toEqual(expectedActions);
            });
    });

    test('loadRandonUser should emit start and success action with empty user when api call fails', () => {
        ApiClient.getRandomUser = jest.fn(() => Promise.reject());

        const expectedActions = [
            { type: RANDOM_USER_REQUESTED },
            {
                type: RANDOM_USER_SUCCEEDED,
                user: null
            }];

        return store.dispatch(loadRandonUser())
            .then(() => {
                expect(store.getActions())
                    .toEqual(expectedActions);
            });
    });
});
