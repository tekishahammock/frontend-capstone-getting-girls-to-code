angular.module("app")
  .controller("LogoutCtrl", function($scope) {

    $scope.initiateLogout = () => {
      AuthFactory.logout();
    };
  });
