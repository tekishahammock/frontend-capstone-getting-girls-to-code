// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyA-KRJZXXdapGFuiKPFp8sk0RUH7xOlFmc",
  authDomain: "getting-girls-to-code.firebaseapp.com",
  databaseURL: "https://getting-girls-to-code.firebaseio.com",
  storageBucket: "getting-girls-to-code.appspot.com"
});

angular.module("app", ["ngRoute"])
  .config(($routeProvider) => {
    $routeProvider
      .when("/", {
        templateUrl: "app/auth/auth.html"
      })
      .when("/login", {
        controller: "LoginCtrl",
        templateUrl: "app/auth/auth.html"
      })
      .when("/register", {
        controller: "RegisterCtrl",
        templateUrl: "app/auth/auth.html"
      })
      .when("/logout", {
        controller: "LogoutCtrl",
        templateUrl: "app/auth/logout.html"
      })
      .when("/player-creation", {
        controller: "UserSetupCtrl",
        templateUrl: "app/user/user-setup.html"
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
