import angular from 'angular';
import users from './users/users';
import mails from './mails/mails';
import main from './main/main'

export default angular.module('app.components', [
    main.name, mails.name, users.name
]);