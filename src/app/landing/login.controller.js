angular.module("app")
  .controller("LoginCtrl", function($scope, AuthFactory) {
    $scope.login = true;

    $scope.loginUser = () => {
      AuthFactory.login($scope.user.email, $scope.user.password)
        .then(() => {
        // needs to path to last question user was on
          $location.path("/");
          $timeout();
        }).catch(alert);
    };
  });
