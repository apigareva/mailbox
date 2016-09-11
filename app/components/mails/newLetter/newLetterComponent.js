import newLetterTemplate from './newLetterTemplate.html';

let newLetterComponent = {
    bindings: {
        mailbox: "<",
        users: "<"
    },
    template: newLetterTemplate,
    controller: function($state, lettersService) {
        this.newLetter = {};

        this.redirect = (url, param) => $state.go(url, param);

        this.querySearch = searchText => {
            return this.users.filter(user => user.email.indexOf(searchText) > -1);
        };

        this.send = () => {
            lettersService.post(Object.assign({}, this.newLetter, {mailbox: this.mailbox}));
            this.newLetter = {};
            this.redirect('mailboxes.letters', {mailboxId: this.mailbox});
        };

        this.name = 'newLetter';
    }
};

export default newLetterComponent;