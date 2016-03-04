(function(){

	app.controller('DashboardController', dashboardController);
	dashboardController.$inject = ['$scope', '$state'];

	function dashboardController($scope, $state) {
		$scope.doTest = function(id) {
			$state.go('master.test', {idTest: id});
		};
	}
	
})();