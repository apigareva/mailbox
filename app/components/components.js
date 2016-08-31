import angular from 'angular';
import users from './users/users';
import mails from './mails/mails';

export default angular.module('app.components', [
    users.name, mails.name
]);