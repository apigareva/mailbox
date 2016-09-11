import letterTemplate from './letterTemplate.html';

let userComponent = {
    bindings: {
        letter: "<",
        user: "<"
    },
    template: letterTemplate,
    controller: function($state, lettersService) {
        this.avatarUrl = this.user.avatarUrl || require('../../../img/default-avatar.png');

        this.redirect = (url, param) => {
            $state.go(url, param);
        }

        this.openUserCard = () => {
            if (!!this.user.email) this.redirect('user', {userId: this.user._id});
        };

        this.remove = () => {
            lettersService.one(this.letter._id).remove();
            $state.go('mailboxes.letters', {mailboxId: this.letter.mailbox});
        };

        this.name = 'letter';
    }
};

export default userComponent;