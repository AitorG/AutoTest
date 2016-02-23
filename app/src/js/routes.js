app.config(routes);

function routes($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'templates/dashboard.html'
        })
        .state('tables', {
            url: '/tables',
            templateUrl: 'templates/tables.html'
        });

    $urlRouterProvider.otherwise(function($injector) {
        var $state = $injector.get("$state");
        $state.go("index");
    });
}