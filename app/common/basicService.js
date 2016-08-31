const API = "http://test-api.javascript.ru/v1/apigareva";

export default class basicService {

    constructor($http) {
        this.$http = $http;
    }

    get(collection) {
        return this.$http.get(`${API}/${collection}`)
            .then(res => {
                return res.data;
            });
    };

    add(collection, values) {
        return this.$http.post(`${API}/${collection}`, values);
    };

    update(collection, id, values) {
        return this.$http.patch(`${API}/${collection}/${id}`, values);
    };

    remove(collection, id) {
        return this.$http.delete(`${API}/${collection}/${id}`);
    };
};
