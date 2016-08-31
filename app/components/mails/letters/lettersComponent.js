import lettersTemplate from './lettersTemplate.html';

let lettersComponent =  {
    bindings: {
        mailboxId: "<"
    },
    template: lettersTemplate,
    controller: function (lettersService) {
        lettersService.getLetters().then(letters => {
            this.letters = letters.filter(letter => letter.mailbox === this.mailboxId);
        });

        this.isAdding = false;
        this.toggleIsAdditing = () => this.isAdding = !this.isAdding;
        this.newLetter = {};
        this.addLetter = () => {
            this.toggleIsAdditing();
            lettersService.addLetter(this.newLetter).then(res => this.letters.push(res.data));
            this.newLetter = {};
        };

        this.name = 'letters';
    }
};

export default lettersComponent;