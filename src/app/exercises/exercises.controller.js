angular.module("app")
  .controller("ExercisesCtrl", function($scope, $rootScope, $timeout, $routeParams, ExercisesFactory, UserFactory, AuthFactory, NavFactory, $location){
    ExercisesFactory.getExercises().then(data => {
      const currentQuestion = parseInt(($routeParams.question).replace("q", "")) - 1;
      $scope.exercisesAll = data;
      $scope.exercise = $scope.exercisesAll[currentQuestion];
      $scope.exercise.next = parseInt(($routeParams.question).replace("q", "")) + 1;
      $timeout();
    });
    const answerList = document.getElementsByClassName("answers");
    $scope.firstSection = true;
    $scope.secondSection = false;
    $scope.lastSection = false;

    UserFactory.setLastExercise(AuthFactory.getUser(), $location.$$path);
    $rootScope.route = $location.$$path;

    // Toggles selected class on Multiple Choice
    $scope.userSelectedAnswer = () => {
      for (let i = 0; i < answerList.length; i++) {
        if (answerList.item(i).classList.contains("selected")) {
          answerList.item(i).classList.remove("selected");
        }
      }
      $scope.selectedAnswer = event.target;
      $scope.selectedAnswer.classList.add("selected");
    };

    // // Evaluates user input for correct answer
    $scope.evaluateMultipleChoice = () => {
      if ($scope.selectedAnswer.value === "true") {
        $scope.correct = true;
        $scope.incorrect = false;
        UserFactory.completedExercisePut(AuthFactory.getUser(), $routeParams.question, $scope.selectedAnswer.innerHTML);
      } else if ($scope.selectedAnswer.value === "false") {
        $scope.incorrect = true;
        $scope.correct = false;
      } else {
        return;
      }
    };

    // // Evaluates user input for correct answer
    $scope.evaluateFillBlank = () => {
      if (parseInt($scope.userInput) === $scope.exercise.answer) {
        $scope.correct = true;
        $scope.incorrect = false;
        UserFactory.completedExercisePut(AuthFactory.getUser(), $routeParams.question, $scope.userInput);
      } else {
        $scope.incorrect = true;
        $scope.correct = false;
      }
    };

    // // Pulls user input to affect project appearance
    $scope.evaluateUserPreference = () => {
      UserFactory.completedExercisePut(AuthFactory.getUser(), $routeParams.question, $scope.selectedAnswer.innerHTML);
    };

    $scope.next = () => {
      if ($scope.firstSection === true) {
        $scope.firstSection = false;
        $scope.secondSection = true;
        $scope.lastSection = false;
      } else if ($scope.secondSection === true) {
        $scope.firstSection = false;
        $scope.secondSection = false;
        $scope.lastSection = true;
      } else {
        $scope.firstSection = true;
        $scope.secondSection = false;
        $scope.lastSection = false;
      }
    };
  });
