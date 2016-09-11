import userTemplate from './userTemplate.html';

let userComponent = {
    bindings: {
        user: "<"
    },
    template: userTemplate,
    controller: function($state, usersService) {

        this.birthdate = this.user.birthdate ? new Date(this.user.birthdate) : '';
        this.avatarUrl = this.user.avatarUrl || require('../../img/default-avatar.png');

        this.isEditing = false;
        this.toggleIsEditing = () => this.isEditing = !this.isEditing;

        this.update = () => {
            this.toggleIsEditing();
            this.user.birthdate = this.birthdate || "";
            usersService.one(this.user._id).patch(this.user);
        };

        this.remove = () => {
            usersService.one(this.user._id).remove();
            $state.go('users');
        }

    }
};

export default userComponent;