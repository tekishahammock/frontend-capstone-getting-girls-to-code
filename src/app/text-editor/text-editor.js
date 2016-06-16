angular.module("app", ["ngRoute"])
  .config(($routeProvider) => (
    $routeProvider
      .when("/_text-editor", {
        templateUrl: "app/text-editor/_text-editor.html"
      })
  ))
  .controller("textEditor", function($scope){
    const editor = this;

    $scope.cursorFind = function() {
      const cursor = document.getElementById("text-editor").selectionStart;
      const splitText = $scope.textInput.split("");
      splitText.splice(cursor, 0, "|");
      const textWithCursor = splitText.join("");
      $scope.textOutput = textWithCursor;
    };
  });
