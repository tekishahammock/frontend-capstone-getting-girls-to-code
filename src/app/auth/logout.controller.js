angular.module("app")
  .controller("LogoutCtrl", function($scope, $timeout, AuthFactory) {
    AuthFactory.logout().then(console.log("successful logout")).catch(alert);
  });
