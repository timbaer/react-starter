import 'whatwg-fetch';

export default class JsonPlaceHolderApi {
    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com/';
    }

    fetchUsers() {
        const options = {};
        const headers = [];

        return fetch(new Request(`${this.baseUrl}users`,
            {
                ...options,
                headers
            }));
    }
}
