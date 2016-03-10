(function(){

	app.controller('TestController', testController);
	testController.$inject = ['$scope', 'test'];

	function testController($scope, test){
		$scope.test = test;
		$scope.currentQuestion = 0;
		$scope.question = test[0];
		$scope.reply = null;
		$scope.replys = [];

		$scope.sendAnswer = function(reply){
			$scope.replys.push(reply);
			console.log($scope.replys);
			$scope.nextQuestion();
		};

		$scope.nextQuestion = function(){
			$scope.currentQuestion++;
			$scope.reply = null;
			if ($scope.currentQuestion < $scope.test.length){
				$scope.question = test[$scope.currentQuestion];
			} else {
				console.log("End of questions");
			}
		};


	}
	
})();