import { ExampleRestClient } from '../ExampleRestClient';


function mockedHttpAnswer() {
    const payload = {};
    payload.json = jest.fn(() => [{}]);
    return Promise.resolve(payload);
}

describe('ExampleRestClient', () => {
    let mkJsonPlaceHolderApi;

    let exampleRestClient;

    function givenJsonApiExpectsFetchUser() {
        mkJsonPlaceHolderApi.fetchUsers = jest.fn(mockedHttpAnswer);
    }

    beforeEach(() => {
        mkJsonPlaceHolderApi = {
            fetchUsers: null
        };

        exampleRestClient = new ExampleRestClient(mkJsonPlaceHolderApi);
    });

    test('should call JsonPlaceholderApi on getRandomUser', async () => {
        givenJsonApiExpectsFetchUser();

        await exampleRestClient.getRandomUser();
        expect(mkJsonPlaceHolderApi.fetchUsers)
            .toHaveBeenCalledTimes(1);
    });
});
