angular.module("app")
  .controller("LoginCtrl", function($scope, $timeout, $location, AuthFactory) {
    $scope.login = true;

    $scope.loginUser = () => {
      AuthFactory.login($scope.user.email, $scope.user.password)
        .then(() => {
        // needs to path to last question user was on
          $location.path("/exercises/q1");
          $timeout();
        }).catch(alert);
    };
  });
