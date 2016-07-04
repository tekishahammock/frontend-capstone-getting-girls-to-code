angular.module("app")
  .controller("UserSetupCtrl", function($scope, $timeout, AuthFactory, UserFactory, $location) {
    const answerList = document.getElementsByClassName("answers");

    $scope.userSelectedAnswer = () => {
      UserFactory.userSelected(answerList, $scope);
    };

    $scope.createPlayer = () => {
      UserFactory.initialPlayerPost(AuthFactory.getUser(), $scope.user.name, $scope.selectedAnswer.value)
      .then(() => {
        $location.path("/exercises/q1");
        $timeout();
      });
    };
  });
