angular.module("app")
  .factory("UserFactory", () => {
    return {
      initialPlayerPost: (playerID, playerName, themeColor) => {
        return firebase.database().ref("/users").update(
          {[playerID]:{
            username: playerName,
            fav_color: themeColor
          }
        });
      },

      updatePlayer: (playerID, themeColor) => {
        return firebase.database().ref(`/users/${playerID}`).update(
          {fav_color: themeColor}
        );
      },

      setLastExercise: (playerID, exercise) => {
        return firebase.database().ref(`/users/${playerID}`).update(
          {last_exercise: exercise}
        );
      },

      getLastExercise: (playerID) => {
        return firebase.database().ref(`/users/${playerID}/last_exercise`).once("value")
          .then(snapshot => snapshot.val());
      },


      completedExercisePut: (playerID, question) => {
        return firebase.database().ref(`/users/${playerID}`).update(
          {exercises: {[question]: "done"}}
        );
      },

      playerInfoGet: (playerID, loginCtrl) => {
        firebase.database().ref(`/users/${playerID}`).once("value", (snapshot) => {
          // using a callback instead of promise because firebase doesn't like promises
          loginCtrl.userInfo(snapshot.val());
        });
      },

      userSelected: (answerList, userScope) => {
        for (let i = 0; i < answerList.length; i++) {
          if (answerList.item(i).classList.contains("selected")) {
            answerList.item(i).classList.remove("selected");
          }
        }
        userScope.selectedAnswer = event.target;
        userScope.selectedAnswer.classList.add("selected");
      }
    };
  });
