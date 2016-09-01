import basicService from 'common/basicService';
const collection = "mailboxes";

let mailboxService = function($http) {
    this.basicService = new basicService($http);
    this.getMailbox = () => {
        return this.basicService.get(collection)
    };
};

export default mailboxService;