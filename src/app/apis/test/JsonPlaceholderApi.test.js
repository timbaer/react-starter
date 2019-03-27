import 'whatwg-fetch';
import JsonPlaceholderApi from '../JsonPlaceholderApi';

function givenFetchReturnsForUrl(response) {
    fetch.mockResponse(JSON.stringify(response), { status: 200 });
}

describe('JsonPlaceholderApi', () => {
    let jsonPlaceHolderApi;

    beforeEach(() => {
        jsonPlaceHolderApi = new JsonPlaceholderApi();
    });

    test('should call fetch on getRandomUser', async () => {
        givenFetchReturnsForUrl([{
            id: '1',
            name: 'Hans Wurst'
        }]);

        const response = await jsonPlaceHolderApi.fetchUsers();

        const users = JSON.parse(response.body);

        expect(users)
            .toHaveLength(1);

        expect(users[0].id)
            .toEqual('1');
    });
});
