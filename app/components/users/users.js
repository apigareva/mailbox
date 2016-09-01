import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-material/angular-material.css';
import angularMaterial from 'angular-material';
import usersService from './usersService';
import userComponent from './userComponent';
import usersComponent from './usersComponent';

export default angular.module('users', [uiRouter, angularMaterial])
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/users');
        $stateProvider
            .state('users', {
                url: "/users",
                template: "<users-component></users-component>"
            })
    })
    .service('usersService', usersService)
    .component('usersComponent', usersComponent)
    .component('userComponent', userComponent);

