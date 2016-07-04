angular.module("app")
  .controller("FriendListCtrl", function($scope, $rootScope, $location, UserFactory, AuthFactory, $timeout) {
    $rootScope.route = $location.$$path;

    $scope.backToExercise = () => {
      UserFactory.getLastExercise(AuthFactory.getUser()).then(data => {
        $location.path(data);
        $timeout();
      });
    };
  });
