angular.module("app")
  .factory("ExercisesFactory", () => {
    return {
      getExercises: () => {
        return firebase.database().ref("/exercises").once("value")
          .then(snapshot => snapshot.val());
      }
    };
  });
