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
			title: "Login"
		})
		.state('master.dashboard', {
			url: '/dashboard',
			templateUrl: 'app/components/dashboard/dashboard.html',
			controller: 'DashboardController',
			title: "Dashboard"
		})
		.state('master.tests', {
			url: '/tests',
			templateUrl: 'app/components/tests/tests.html',
			controller: 'TestsController',
			title: "Tests"
		})
		.state('master.test', {
			url: '/test/:idTest',
			templateUrl: 'app/components/test/test.html',
			controller: 'TestController',
			title: 'Test',
			resolve:{
				test: ['TestServices', '$stateParams', function(TestServices, $stateParams){
					return TestServices.getTestById($stateParams.idTest);
				}]
			}
		});

	$urlRouterProvider.otherwise(function($injector) {
		var $state = $injector.get("$state");
		$state.go("login"); 
	});
}