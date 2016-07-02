angular.module("app")
  .controller("UserSetupCtrl", function($scope, $timeout, AuthFactory, UserFactory, $location) {
    const answerList = document.getElementsByClassName("answers");

    $scope.userSelectedAnswer = () => {
      for (let i = 0; i < answerList.length; i++) {
        if (answerList.item(i).classList.contains("selected")) {
          answerList.item(i).classList.remove("selected");
        }
      }
      $scope.selectedAnswer = event.target;
      $scope.selectedAnswer.classList.add("selected");
    };

    $scope.createPlayer = () => {
      UserFactory.initialPlayerPost(AuthFactory.getUser(), $scope.user.name, $scope.selectedAnswer.value)
      .then(() => {
        $location.path("/exercises/q1");
        $timeout();
      });
    };
  });
