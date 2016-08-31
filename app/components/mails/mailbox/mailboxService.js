import basicService from 'common/basicService';
const collection = "mailboxes";

let mailboxService = function($http) {
    this.basicService = new basicService($http);
    this.getMailbox = () => {
        return this.basicService.get(collection)
    };
    this.addMailbox = values => {
        return this.basicService.add(collection, values);
    };
    this.updateMailbox = (id, values) => {
        return this.basicService.update(collection, id, values);
    };
    this.removeMailbox = id => {
        return this.basicService.remove(collection, id);
    }
};

export default mailboxService;