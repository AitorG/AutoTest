(() => {

	app.controller('ProfileController', profileController);
	profileController.$inject = ['$scope'];

	function profileController($scope){
		$scope.changeDates = false;

		$scope.showChangeDates = function() {
			$scope.changeDates == false ? $scope.changeDates = true : $scope.changeDates = false;
		};

		$scope.saveProfileChanges = function(user) {
			console.log(user);
		}
	}

})();