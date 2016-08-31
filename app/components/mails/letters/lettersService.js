import basicService from 'common/basicService';
const collection = "letters";

let lettersService = function($http) {
    this.basicService = new basicService($http);
    this.getLetters = () => {
        return this.basicService.get(collection);
    };
    this.addLetter = values => {
        return this.basicService.add(collection, values);
    };
    this.updateLetter = values => {
        return this.basicService.update(collection, id, values);
    };
    this.removeLetter = id => {
        return this.basicService.remove(collection, id);
    }
};

export default lettersService;