// May no longer be needed
angular.module("app")
  .factory("NavFactory", () => {
    let navScope;

    return {
      setNavScope: (scope) => {
        navScope = scope;
      },

      highlightPage: (route) => {
        for (let i = 0; i < navScope.navList.length; i++) {
          if (navScope.navList.item(i).classList.contains("currentPage")) {
            navScope.navList.item(i).classList.remove("currentPage");
          }
        }
        for (let i = 0; i < navScope.navList.length; i++) {
          if ((navScope.navList.item(i).href).replace("#", "") === route) {
            navScope.navList.item(i).classList.add("currentPage");
          }
        }
        return navScope.navList;
      }
    };
  });
