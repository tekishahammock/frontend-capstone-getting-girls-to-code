angular.module("app")
  .controller("ExercisesCtrl", function($scope, $routeParams, ExercisesFactory){
    const currentQuestion = parseInt(($routeParams.question).replace("q", "")) - 1;
    $scope.exercise = ExercisesFactory.all()[currentQuestion];
    $scope.exercise.next = "";
    const answerList = document.getElementsByClassName("answers");

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

    // Evaluates user input for correct answer
    $scope.evaluateMultipleChoice = () => {
      if ($scope.selectedAnswer.value === "true") {
        $scope.correct = true;
        $scope.incorrect = false;
      } else if ($scope.selectedAnswer.value === "false") {
        $scope.incorrect = true;
        $scope.correct = false;
      } else {
        return;
      }
    };

    // Evaluates user input for correct answer
    $scope.evaluateFillBlank = () => {
      if (parseInt($scope.userInput) === $scope.exercise.answer) {
        $scope.correct = true;
        $scope.incorrect = false;
      } else {
        $scope.incorrect = true;
        $scope.correct = false;
      }
    };

    // Pulls user input to affect project appearance
    $scope.evaluateUserPreference = () => {
      console.log($scope.selectedAnswer.value);
    };

    // Moves to the next question in the exercise list
    $scope.nextExercise = () => {
      console.log("Next question!");
    };
  });
