import angular from 'angular';
import uiRouter from 'angular-ui-router';
import components from './components/components';

angular.module('myApp', [
    uiRouter,
    components.name
]);