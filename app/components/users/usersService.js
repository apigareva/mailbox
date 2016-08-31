import basicService from 'common/basicService';
const collection = "users";

let usersService = function($http) {
    this.basicService = new basicService($http);
    this.getUsers = () => {
        return this.basicService.get(collection);
    };
    this.addUser = values => {
        return this.basicService.add(collection, values);
    };
    this.updateUser = (id, values) => {
        return this.basicService.update(collection, id, values);
    };
    this.removeUser = id => {
        return this.basicService.remove(collection, id);
    }
};

export default usersService;