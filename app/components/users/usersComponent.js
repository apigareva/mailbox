import usersTemplate from './usersTemplate.html';

let usersComponent =  {
    template: usersTemplate,
    controller: function (usersService) {
        usersService.getList().then(users => {
            this.users = users;
        });

        this.newUser = {};
        this.isAdding = false;
        this.toggleIsAdditing = () => this.isAdding = !this.isAdding;

        this.addUser = () => {
            this.toggleIsAdditing();
            usersService.post(this.newUser)
            .then(res => this.users.push(res));
            this.newUser = {};
        };

        this.update = user => {
            return usersService.one(user._id).patch(user)
                .then(res => this.users.splice(index, 1, res));
        };

        this.remove = (id, index) => usersService.one(id).remove()
            .then(() => this.users.splice(index, 1));

        this.name = 'users';
    }
};

export default usersComponent;

