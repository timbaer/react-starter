import { newRandomUserRequestedAction, newRandomUserSuccessAction } from '../../actions/loadRandomStuffActions';
import userReducer, { initialState } from '../usersReducer';

describe('UserReducer', () => {
    test('returns initial state if no state provided', () => {
        expect(userReducer(undefined, {}))
            .toEqual(initialState);
    });

    test('should handle randomUserRequestedAction', () => {
        const newState = userReducer(initialState, newRandomUserRequestedAction());

        expect(newState.user)
            .toBeNull();
    });

    test('should handle randomUserSuccessAction', () => {
        const newState = userReducer(initialState, newRandomUserSuccessAction({
            id: 'test1',
            name: 'test1'
        }));

        expect(newState.user.name)
            .toEqual('test1');
    });
});

