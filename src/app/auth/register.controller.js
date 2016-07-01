angular.module("app")
  .controller("RegisterCtrl", function($scope, $timeout, AuthFactory, $location) {
    $scope.register = true;

    $scope.registerUser = () => {
      AuthFactory.register($scope.user.email, $scope.user.password)
        .then(() => {
          const newUserId = AuthFactory.getUser();
          firebase.database().ref("/users").update(
            {[newUserId]:{
              username: ""
            }
          });
        })
        .then(() => {
          $location.path("/player-creation");
          $timeout();
        }).catch(alert);
    };
  });
