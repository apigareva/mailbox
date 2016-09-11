import mailboxTemplate from './mailboxTemplate.html';

let mailboxComponent =  {
    template: mailboxTemplate,
    controller: function ($state, mailboxService) {
        mailboxService.getList().then(mailboxes => {
            this.mailboxes = mailboxes;
        });

        this.redirect = (url, param) => $state.go(url, param);

        this.name = 'mails';
    }
};

export default mailboxComponent;