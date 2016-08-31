import letterTemplate from './letterTemplate.html';

let userComponent = {
    bindings: {
        letter: "<",
        remove: "&"
    },
    template: letterTemplate,
    controller: function (lettersService) {
        this.isEditing = false;
        this.updateLetters = values => {
            this.toggleIsEditing();
            lettersService.updateLetters(values);
        };
        this.toggleIsEditing = () => this.isEditing = !this.isEditing;
    }
};

export default userComponent;