import usersTemplate from './usersTemplate.html';

let usersComponent =  {
    template: usersTemplate,
    controller: function($mdDialog, usersService) {
        usersService.getList().then(users => {
            this.users = users;
        });

        this.newUser = {};
        this.isAdding = false;
        this.toggleIsAdditing = () => this.isAdding = !this.isAdding;

        this.showAlert = () => {
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('Error!')
                    .textContent('You should fill required fields.')
                    .ariaLabel('Error alert')
                    .ok('Cancel')
            );
        };

        this.addUser = () => {
            if (!this.newUser.fullName || !this.newUser.email) {
                return this.showAlert();
            }

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

