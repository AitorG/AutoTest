(() => {

	app.controller('LoginController', loginController);
	loginController.$inject = ['$scope', '$state'];

	function loginController($scope, $state){
		$scope.user = "";
		$scope.password = "";
		$scope.checkLogin = function(){
			$state.go('master.dashboard');
		};

		$scope.doLogin = function(user, password){
		 	if (user == "Aitor" && password == "lobo") {
		 		return true;
		 	}
		 	else return false;
		};
	}

})();