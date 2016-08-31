import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mailboxService from './mailbox/mailboxService';
import mailboxComponent from './mailbox/mailboxComponent';
import lettersService from './letters/lettersService';
import lettersComponent from './letters/lettersComponent';
import letterComponent from './letters/letterComponent';

export default angular.module('mails', [uiRouter])
    .config($stateProvider => {
        $stateProvider
            .state("mailboxes", {
                url: "/mailboxes",
                template: `mailbox!! <mailbox-component></mailbox-component>`
            });
        $stateProvider
            .state("mailboxes.letters", {
                url: "/:mailboxId/letters",
                template: `letters!! <letters-component mailbox-id="mailboxId"></letters-component>`,
                controller: function($scope, $stateParams) {
                    $scope.mailboxId = $stateParams.mailboxId;
                }
            });
    })
    .service('mailboxService', mailboxService)
    .component('mailboxComponent', mailboxComponent)
    .service('lettersService', lettersService)
    .component('lettersComponent', lettersComponent)
    .component('letterComponent', letterComponent);
