angular.module("app", ["ngRoute"])
  .config(($routeProvider) => {
    $routeProvider
      .when("/", {
        templateUrl: "app/landing/login.html"
      })
      .when("/exercises", {
        controller:"ExercisesCtrl",
        templateUrl: "app/exercises/exercises.html"
      })
      .when("/exercises/:question", {
        controller: "ExercisesCtrl",
        templateUrl: "app/exercises/exercises.html"
      })
      .otherwise("/");
  });
