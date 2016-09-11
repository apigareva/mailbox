import mainTemplate from './mainTemplate.html';

let mainComponent = {
    template: mainTemplate,
    controller: function($state) {
        this.currentNavItem = $state.current.name;

        this.redirect = url => {
            $state.go(url);
            this.currentNavItem = url;
        };
        this.name = 'main';
    }
};

export default mainComponent;