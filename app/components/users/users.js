import angular from 'angular';
import uiRouter from 'angular-ui-router';

import usersService from './usersService';
import userComponent from './userComponent';
import usersComponent from './usersComponent';

// Material design css
import 'angular-material/angular-material.css';
// Materail Design lib
import angularMaterial from 'angular-material';

export default angular.module('users', [uiRouter, angularMaterial])
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise("/users");
        $stateProvider
            .state('users', {
                url: "/users",
                template: "<div>USERS!!</div> <br> <users-component></users-component> <br>"
            })
    })
    .service('usersService', usersService)
    .component('usersComponent', usersComponent)
    .component('userComponent', userComponent);

