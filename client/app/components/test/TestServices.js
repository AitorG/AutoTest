(function(){

	app.service('TestServices', testServices);
	testServices.$inject = ['$http', '$q'];
	function testServices($http, $q){
		this.getTestById = function(idTest){
			return "Test of " + idTest;
		}
	}

})();