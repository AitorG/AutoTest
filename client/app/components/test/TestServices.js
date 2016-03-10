(function(){

	app.service('TestServices', testServices);
	testServices.$inject = ['$http', '$q'];
	function testServices($http, $q){

		this.getTestById = function(idTest){
			var deferred = $q.defer();
			var url = "app/components/test/text" + idTest + ".json";

			$http.get(url)
				.success(deferred.resolve)
				.error(deferred.reject);

			return deferred.promise;
		};
		
	}

})();