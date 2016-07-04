angular.module("app")
  .controller("NavCtrl", function($scope, $rootScope) {
    const navList = document.getElementsByClassName("nav-link");

    // Assigns "selected" class to navbar options when on matching page
    $rootScope.$watch("route", () => {
      console.log($rootScope.route);
      for (let i = 0; i < navList.length; i++) {
        if (navList.item(i).classList.contains("currentPage")) {
          navList.item(i).classList.remove("currentPage");
        }
      }
      for (let i = 0; i < navList.length; i++) {
        if (navList.item(i).id === $rootScope.route) {
          navList.item(i).classList.add("currentPage");
        }
      }
    });
  });
