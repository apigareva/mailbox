import lettersTemplate from './lettersTemplate.html';

let lettersComponent = {
    bindings: {
        mailboxId: "<",
        users: "<"
    },
    template: lettersTemplate,
    controller: function ($state, lettersService) {
        lettersService.getList().then(letters => {
            this.letters = letters.filter(letter => letter.mailbox === this.mailboxId);
        });

        this.getAvatar = (email) => {
            const user = this.users.find(user => user.email === email) || {};
            if (!!user.avatarUrl) return user.avatarUrl;
            else return require('../../../img/default-avatar.png')
        };

        this.redirect = (url, param) => $state.go(url, param);

        this.name = 'letters';
    }
};
export default lettersComponent;