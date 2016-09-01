import userTemplate from './userTemplate.html';

let userComponent = {
    bindings: {
        user: "<",
        update: "&",
        remove: "&"
    },
    template: userTemplate,
    controller: function () {
        this.isEditing = false;
        this.handleUpdate = () => {
            this.toggleIsEditing();

            const values = {fullName: this.fullName, email: this.email, address: this.address};
            this.update({id: user._id, values: values});
        };
        this.toggleIsEditing = () => this.isEditing = !this.isEditing;
    }
};

export default userComponent;