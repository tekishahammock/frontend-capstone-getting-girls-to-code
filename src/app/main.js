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
      .when("/settings", {
        controller: "SettingsCtrl",
        templateUrl: "app/user/settings.html"
      })
      .when("/exercises", {
        controller:"ExercisesCtrl",
        templateUrl: "app/exercises/exercises.html"
      })
      .when("/exercises/:question", {
        controller: "ExercisesCtrl",
        templateUrl: "app/exercises/exercises.html"
      })
      .when("/exercise-list", {
        controller: "ExerciseListCtrl",
        templateUrl: "app/exercises/exercise-list.html"
      })
      .when("/friend-list", {
        controller: "FriendListCtrl",
        templateUrl: "app/user/friend-list.html"
      })
      .otherwise("/");
  });
