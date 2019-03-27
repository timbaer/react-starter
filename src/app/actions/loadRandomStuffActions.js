import ApiClient from '../apis/ExampleRestClient';

export const RANDOM_USER_REQUESTED = 'RANDOM_USER_REQUESTED';
export const newRandomUserRequestedAction = () => ({
    type: RANDOM_USER_REQUESTED
});

export const RANDOM_USER_SUCCEEDED = 'RANDOM_USER_SUCCEEDED';
export const newRandomUserSuccessAction = user => ({
    type: RANDOM_USER_SUCCEEDED,
    user
});

export function loadRandonUser() {
    return (dispatch) => {
        dispatch(newRandomUserRequestedAction());

        return ApiClient.getRandomUser()
            .then((resp) => {
                console.log(resp);
                dispatch(newRandomUserSuccessAction(resp));
            })
            .catch((ex) => {
                dispatch(newRandomUserSuccessAction(null));
                console.warn('Requesting user failed: ', ex);
            });
    };
}
