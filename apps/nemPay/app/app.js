import angular from 'angular';
import $ from 'jquery';

// Import our app config files
import constants from './config/app.constants';
import appConfig from './config/app.config';
import appRun from './config/app.run';

// Import Angular modules
import 'angular-ui-router';
import 'angular-animate';
import 'angular-sanitize';
import 'ng-toast';
import 'ngstorage';
import 'angular-translate';
import 'angular-chart.js';

// Testing
import 'angular-mocks';

// Import our templates file (generated by Gulp)
import './app.templates';

// Import our app functionallity

import './components/';
import './filters/';
import './layout/';
import './services/';

// Import our app modules
import './modules/languages';
import './modules/loadWallet';
import './modules/balance';
import './modules/transactions';
import './modules/transfer';
import './modules/transferConfirm';
import './modules/account';
import './modules/register';

// Create and bootstrap application
const requires = [
    'ui.router',
    'templates',
    'app.layout',
    'ionic-material', 
    'ionMdInput',
    'app.components',
    'app.filters',
    'ngCordova',
    'app.services',
    'ngAnimate',
    'ngSanitize',
    'ngToast',
    'ngStorage',
    'chart.js',
    'pascalprecht.translate',
    'app.lang',

    /* CUSTOM */
    'app.loadWallet',
    'app.balance',
    'app.transactions',
    'app.transfer',
    'app.account',
    'app.transferConfirm',
    'app.register'

];

window.$ = window.jQuery = $;

// Load twitter bootstrap with require or jQuery is not defined
require('bootstrap');

// Mount on window
window.app = angular.module('app', requires);

angular.module('app').constant('AppConstants', constants);
angular.module('app').config(appConfig);
angular.module('app').run(appRun);

angular.bootstrap(document, ['app'], {
    strictDi: true
});
