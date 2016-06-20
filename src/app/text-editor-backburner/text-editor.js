// angular.module("app", ["ngRoute"])
//   .config(($routeProvider) => (
//     $routeProvider
//       .when("/_text-editor", {
//         templateUrl: "app/text-editor/_text-editor.html"
//       })
//   ))
//   .controller("textEditor", function($scope){
//     const editor = this;
//     const cursor = document.getElementById("text-editor");

//     $scope.tabOverride = (e) => {
//       if(e.keyCode === 9) {
//         e.preventDefault();
//         const cursorLocation = cursor.selectionStart;
//         const splitText = $scope.textInput.split("");
//         console.log(splitText, cursorLocation);
//         // const tabTextarea = splitText.splice(cursorLocation, 0, " ", " ");
//         // $scope.textInput = tabTextarea;

//         const tabTextMirror = (splitText.splice(cursorLocation, 0, " ", " ", "|")).join("");
//         $scope.textOutput = tabTextMirror;
//       }
//     };

//     $scope.cursorFind = () => {
//       const cursorLocation = cursor.selectionStart;
//       const splitText = $scope.textInput.split("");
//       splitText.splice(cursorLocation, 0, "|");
//       const textWithCursor = splitText.join("");
//       $scope.textOutput = textWithCursor;
//     };
//   });


// // $("textarea").keydown(function(e) {
// //     if(e.keyCode === 9) { // tab was pressed
// //         // get caret position/selection
// //         var start = this.selectionStart;
// //         var end = this.selectionEnd;

// //         var $this = $(this);
// //         var value = $this.val();

// //         // set textarea value to: text before caret + tab + text after caret
// //         $this.val(value.substring(0, start)
// //                     + "\t"
// //                     + value.substring(end));

// //         // put caret at right position again (add one for the tab)
// //         this.selectionStart = this.selectionEnd = start + 1;

// //         // prevent the focus lose
// //         e.preventDefault();
// //     }
// // });
