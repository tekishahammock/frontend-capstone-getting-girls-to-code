angular.module("app")
  .factory("UserFactory", () => {
    return {
      initialPlayerPost: (playerID, playerName, themeColor) => {
        return firebase.database().ref("/users").update(
          {[playerID]:{
            username: playerName,
            fav_color: themeColor,
            exercises: ""
          }
        });
      },

      completedExercisePut: (playerID, question, answer) => {
        return firebase.database().ref(`/users/${playerID}/exercises`).update(
          {[question]: answer}
        );
      },

      playerInfoGet: (playerID, loginCtrl) => {
        firebase.database().ref(`/users/${playerID}`).once("value", (snapshot) => {
          // using a callback instead of promise because firebase doesn't like promises
          loginCtrl.userInfo(snapshot.val());
        });
      }
    };
  });
