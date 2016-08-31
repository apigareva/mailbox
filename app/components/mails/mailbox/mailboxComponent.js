import mailboxTemplate from './mailboxTemplate.html';

let mailboxComponent =  {
    template: mailboxTemplate,
    controller: function (mailboxService) {
        mailboxService.getMailbox().then(mailboxes => {
            this.mailboxes = mailboxes;
        });

        this.isAdding = false;
        this.toggleIsAdditing = () => this.isAdding = !this.isAdding;

        this.newMailbox = {title: ''};
        this.addMailbox = () => {
            this.toggleIsAdditing();
            mailboxService.addMailbox(this.newMailbox).then(res => this.mailboxes.push(res.data));
            this.newMailbox = {title: ''};
        };

        this.removeMailbox = (id, index) => mailboxService.removeMailbox(id)
            .then(() => this.mailboxes.splice(index, 1));

        this.name = 'mails';
    }
};

export default mailboxComponent;