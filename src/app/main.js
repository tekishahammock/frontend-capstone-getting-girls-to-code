angular.module("app", ["ngRoute"])
  .config(($routeProvider) => {
    $routeProvider
      .when("/", {
        templateUrl: "app/landing/login.html"
      })
      // .when("/", {
      //   controller:"",
      //   templateUrl: ""
      // })
      // .when("/", {
      //   controller: "",
      //   templateUrl: ""
      // })
      .otherwise("/");
  });
