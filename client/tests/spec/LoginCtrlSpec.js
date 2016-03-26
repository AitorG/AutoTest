describe('LoginCtrlSpec', function() {
  beforeEach(module('AutoTest'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  var $scope, controller;

  it('Should return true when user = Aitor and password = lobo', function() {
    $scope = {};
    controller = $controller('LoginController', {$scope: $scope});
    var login = $scope.doLogin("Aitor", "lobo");
    expect(login).toEqual(true);
  });

});
