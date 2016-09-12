import newLetterTemplate from './newLetterTemplate.html';

let newLetterComponent = {
    bindings: {
        mailbox: "<",
        users: "<"
    },
    template: newLetterTemplate,
    controller: function($state, $mdDialog, lettersService) {
        this.newLetter = {};

        this.redirect = (url, param) => $state.go(url, param);

        this.querySearch = searchText => {
            return this.users.filter(user => user.email.indexOf(searchText) > -1);
        };

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

        this.send = () => {
            if (!this.newLetter.to || !this.newLetter.subject || !this.newLetter.body) {
                return this.showAlert();
            }

            lettersService.post(Object.assign({}, this.newLetter, {mailbox: this.mailbox}));
            this.newLetter = {};
            this.redirect('mailboxes.letters', {mailboxId: this.mailbox});
        };

        this.name = 'newLetter';
    }
};

export default newLetterComponent;