angular.module("app")
  .controller("UserSetupCtrl", function($scope, $timeout, AuthFactory, $location) {
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
      firebase.database().ref("/users").update(
        {[AuthFactory.getUser()]:{
          username: $scope.user.name,
          fav_color: $scope.selectedAnswer.value
        }
      })
      .then(() => {
        $location.path("/exercises/q1");
        $timeout();
      });
    };
  });
