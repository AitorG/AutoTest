app.config(routes);

function routes($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('master', {
			abstract: true,
			url: '/master',
			templateUrl: 'app/shared/global/master.html',
			controller: 'MasterCtrl'
		})
		.state('login', {
			url: '/url',
			templateUrl: 'app/components/login/login.html',
			controller: 'LoginController',
			params: {
				title: "Login"
			}
		})
		.state('master.dashboard', {
			url: '/dashboard',
			templateUrl: 'app/components/dashboard/dashboard.html',
			controller: 'DashboardController',
			params: {
				title: "Dashboard"
			}
		})
		.state('master.tests', {
			url: '/tests',
			templateUrl: 'app/components/tests/tests.html',
			controller: 'TestController',
			params: {
				title: "Tests"
			}
		});

	$urlRouterProvider.otherwise(function($injector) {
		var $state = $injector.get("$state");
		$state.go("master.dashboard"); //set login when ready
	});
}