function AccountConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.account', {
            url: '/account',
            controller: 'AccountCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'modules/account/account.html',
            title: 'Account',
            activetab: 'account'
        });

};

export default AccountConfig;