angular.module("app")
  .factory("AuthFactory", () => {
    return {
      register: (email, password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
      },

      login: (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password);
      },

      logout: () => {
        return firebase.auth().signOut();
      },

      getUser: () => {
        return firebase.auth().currentUser.uid;
      }
    };
  });
