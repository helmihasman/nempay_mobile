function TransactionsConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.transactions', {
            url: '/transactions-board',
            controller: 'TransactionsCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'modules/transactions/transactions.html',
            title: 'Transactions',
            activetab: 'transactions'

        });

};

export default TransactionsConfig;