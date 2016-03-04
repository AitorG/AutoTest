(function(){
	
	app.controller('LoginController', loginController);
	loginController.$inject = ['$scope', '$state'];

	function loginController($scope, $state){
		 $scope.checkLogin = function(){
		 	$state.go('master.dashboard');
		 };
	}

})();