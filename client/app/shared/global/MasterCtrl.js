(function(){
    app.controller('MasterCtrl', masterCtrl);
    masterCtrl.$inject = ['$scope', '$cookieStore', '$state']
    function masterCtrl($scope, $cookieStore, $state) {
        var mobileView = 992;
        $scope.getWidth = function() {
            return window.innerWidth;
        };

        $scope.$watch($scope.getWidth, function(newValue, oldValue) {
            if (newValue >= mobileView) {
                if (angular.isDefined($cookieStore.get('toggle'))) {
                    $scope.toggle = ! $cookieStore.get('toggle') ? false : true;
                } else {
                    $scope.toggle = true;
                }
            } else {
                $scope.toggle = false;
            }
        });
        
        var listener = function(){
            $scope.title = $state.params.title;  
        };

        $scope.$on('$stateChangeSuccess', listener);
        
        $scope.toggleSidebar = function() {
            $scope.toggle = !$scope.toggle;
            $cookieStore.put('toggle', $scope.toggle);
        };

        $scope.notifications = [
            {
                id: 1,
                comment: "notification!"
            },
            {
                id: 1,
                comment: "another one"
            }
        ];

        window.onresize = function() {
            $scope.$apply();
        };
    }
})();