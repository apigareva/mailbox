import usersTemplate from './usersTemplate.html';

let usersComponent =  {
    template: usersTemplate,
    controller: function (usersService) {
        usersService.getUsers().then(users => {
            this.users = users;
        });

        this.newUser = {};
        this.isAdding = false;
        this.toggleIsAdditing = () => this.isAdding = !this.isAdding;

        this.addUser = () => {
            this.toggleIsAdditing();
            usersService.addUser(this.newUser)
                .then(res => this.users.push(res.data));
            this.newUser = {};
        };

        this.update = (index, id, values) => usersService.updateUser(id, values)
            .then(res => this.users.splice(index, 1, res.data));

        this.remove = (id, index) => usersService.removeUser(id)
            .then(() => this.users.splice(index, 1));

        this.name = 'users';
    }
};

export default usersComponent;

