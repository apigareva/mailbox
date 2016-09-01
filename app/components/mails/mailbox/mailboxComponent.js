import mailboxTemplate from './mailboxTemplate.html';

let mailboxComponent =  {
    template: mailboxTemplate,
    controller: function (mailboxService) {
        mailboxService.getMailbox().then(mailboxes => {
            this.mailboxes = mailboxes;
        });

        this.name = 'mails';
    }
};

export default mailboxComponent;