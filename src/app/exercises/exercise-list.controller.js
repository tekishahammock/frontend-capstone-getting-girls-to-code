angular.module("app")
  .controller("ExerciseListCtrl", function($scope, $rootScope, NavFactory, $location, UserFactory, AuthFactory, $timeout) {
    $rootScope.route = $location.$$path;

    $scope.backToExercise = () => {
      UserFactory.getLastExercise(AuthFactory.getUser()).then(data => {
        $location.path(data);
        $timeout();
      });
    };
  });
