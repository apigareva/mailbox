import angular from 'angular';
import uiRouter from 'angular-ui-router';
import restangular from 'restangular';
import 'angular-material/angular-material.css';
import angularMaterial from 'angular-material';
import usersService from '../../services/usersService';
import userComponent from './userComponent';
import usersComponent from './usersComponent';

export default angular.module('users', [uiRouter, angularMaterial, restangular])
    .config(($stateProvider, RestangularProvider, $mdThemingProvider) => {
        RestangularProvider.setBaseUrl("http://test-api.javascript.ru/v1/apigareva");

        $mdThemingProvider.theme('default')
            .primaryPalette('indigo', {
                'default': '400',
                'hue-1': '100',
                'hue-2': '600',
                'hue-3': 'A100'
            })
            .accentPalette('blue-grey', {
                'default': '400'
            });

        $stateProvider
            .state('users', {
                url: "/users",
                template: "<users-component></users-component>"
            })
            .state('user', {
                url: "/user/:userId",
                template: "<user-component user='user'></user-component>",
                resolve: {
                    users: usersService => usersService.getList()
                },
                controller: ($scope, $stateParams, users) => {
                    $scope.user = users.find(user => user._id === $stateParams.userId);
                }
            })
    })
    .factory('usersService', usersService)
    .component('usersComponent', usersComponent)
    .component('userComponent', userComponent);