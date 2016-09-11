import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-material/angular-material.css';
import angularMaterial from 'angular-material';
import mainComponent from './mainComponent';

export default angular.module('main', [uiRouter, angularMaterial])
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/mailboxes');
        $stateProvider
            .state('main', {
                url: "/",
                template: "<main-component></main-component>"
            })
    })
    .component('mainComponent', mainComponent)

