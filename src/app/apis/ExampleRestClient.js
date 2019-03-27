import JsonPlaceHolderApi from './JsonPlaceholderApi';

export class ExampleRestClient {
    constructor(api) {
        this.api = api;
    }

    getRandomUser() {
        return this.api.fetchUsers()
            .then(response => response.json())
            .then(json => json[Math.floor(Math.random() * (json.length + 1))]);
    }
}

export default new ExampleRestClient(new JsonPlaceHolderApi());
