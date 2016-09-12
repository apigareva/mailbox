import angular from 'angular';
import uiRouter from 'angular-ui-router';
import restangular from 'restangular';
import 'angular-material/angular-material.css';
import angularMaterial from 'angular-material';
import usersService from '../../services/usersService';
import mailboxService from '../../services/mailboxService';
import mailboxComponent from './mailbox/mailboxComponent';
import lettersService from '../../services/lettersService';
import lettersComponent from './letters/lettersComponent';
import letterComponent from './letter/letterComponent';
import newLetterComponent from './newLetter/newLetterComponent';

export default angular.module('main.mails', [uiRouter, angularMaterial, restangular])
    .config(($stateProvider, RestangularProvider) => {
        RestangularProvider.setBaseUrl("https://test-api.javascript.ru/v1/apigareva");

        $stateProvider
            .state("mailboxes", {
                url: "/mailboxes",
                template: `<mailbox-component></mailbox-component>`
            })
            .state("mailboxes.newLetter", {
                url: "/newLetter",
                template: `<new-letter-component mailbox="mailbox" users="users"></new-letter-component>`,
                resolve: {
                    mailboxes: mailboxService => mailboxService.getList(),
                    users: usersService => usersService.getList()
                },
                controller: function($scope, mailboxes, users) {
                    $scope.mailbox = mailboxes.find(mailbox => mailbox.title === 'Outbox')._id;
                    $scope.users = users;
                }
            })
            .state("mailboxes.letters", {
                url: "/:mailboxId/letters",
                template: `<letters-component mailbox-id="mailboxId" users="users"></letters-component>`,
                resolve: {
                    users: usersService => usersService.getList()
                },
                controller: function($scope, $stateParams, users) {
                    $scope.mailboxId = $stateParams.mailboxId;
                    $scope.users = users;
                }
            })
            .state("mailboxes.letter", {
                url: "/letter/:letterId",
                template: `<letter-component letter="letter" user="user" remove="remove"></letter-component>`,
                resolve: {
                    letters: lettersService => lettersService.getList(),
                    users: usersService => usersService.getList()
                },
                controller: function($scope, $stateParams, lettersService, letters, users) {
                    $scope.letter = letters.find(letter => letter._id === $stateParams.letterId);
                    $scope.user = users.find(user => user.email === $scope.letter.to) || {};
                }
            });


    })
    .service('usersService', usersService)
    .service('mailboxService', mailboxService)
    .component('mailboxComponent', mailboxComponent)
    .service('lettersService', lettersService)
    .component('lettersComponent', lettersComponent)
    .component('letterComponent', letterComponent)
    .component('newLetterComponent', newLetterComponent);
