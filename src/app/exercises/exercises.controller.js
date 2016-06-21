angular.module("app")
  .controller("ExercisesCtrl", function($scope, $routeParams, ExercisesFactory){
    const currentQuestion = parseInt(($routeParams.question).replace("q", "")) - 1;
    $scope.exercise = ExercisesFactory.all()[currentQuestion];

    // Later rename to signify change to next question
    $scope.evaluateAnswer = () => {
      console.log("Next question!");
    };
  });


// find the banana
// var array = [{name: 'apple'}, {name: 'banana'}, {name: 'carrot'}]
// for (var i = 0; i < array.length); i++) {
//   if (array[i].name = 'banana') {
//       return array[i]
//   }
// }
// {name: 'banana'}
