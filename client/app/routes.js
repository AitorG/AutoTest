app.config(routes);

function routes($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'app/components/dashboard/dashboard.html'
        })
        .state('tables', {
            url: '/tables',
            templateUrl: 'app/components/tables/tables.html'
        });

    $urlRouterProvider.otherwise(function($injector) {
        var $state = $injector.get("$state");
        $state.go("index");
    });
}