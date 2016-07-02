angular.module("app")
  .controller("LoginCtrl", function($scope, $timeout, $location, AuthFactory, UserFactory) {
    $scope.login = true;

    $scope.loginUser = () => {
      AuthFactory.login($scope.user.email, $scope.user.password)
        .then((user) => {
          UserFactory.playerInfoGet(user.uid, $scope);
          $timeout();
        }).catch(alert);
      $scope.userInfo = (snapshot) => {
        if (snapshot === null) {
          // location pathing is currently requiring a second click
          $location.path("/player-creation");
        } else if (snapshot.exercises === undefined) {
          // location pathing is currently requiring a second click
          $location.path("/exercises/q1");
        } else {
          const exercisesArray = Object.keys(snapshot.exercises);
          const lastExercise = exercisesArray[(exercisesArray.length) - 1];
          const nextExerciseNum = parseInt(lastExercise.replace("q", "")) + 1;
          const nextExercise = `q${nextExerciseNum}`;
          // location pathing is currently requiring a second click
          $location.path(`/exercises/${nextExercise}`);
        }
      };
    };
  });
