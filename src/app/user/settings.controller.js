angular.module("app")
  .controller("SettingsCtrl", function($scope, $rootScope, $location, UserFactory, AuthFactory, $timeout) {
    $scope.playerEditing = true;

    const answerList = document.getElementsByClassName("answers");

    $rootScope.route = $location.$$path;

    $scope.userSelectedAnswer = () => {
      UserFactory.userSelected(answerList, $scope);
    };

    $scope.playerSettings = () => {
      UserFactory.updatePlayer(AuthFactory.getUser(), $scope.selectedAnswer.value);
    };

    $scope.backToExercise = () => {
      UserFactory.getLastExercise(AuthFactory.getUser()).then(data => {
        $location.path(data);
        $timeout();
      });
    };
  });
