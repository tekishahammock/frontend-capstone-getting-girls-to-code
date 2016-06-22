angular.module("app")
  .factory("ExercisesFactory", () => {
    const exerciseList = [
      {
        type: "multiple-choice",
        paragraph1: "This is the first paragraph of exercise 1. This explains how to do things.",
        paragraph2: "This is the second paragraph of exercise 1. It elaborates on paragraph 1.",
        question: "What is 1 + 1?",
        answer: {
          1: false,
          2: true,
          3: false,
          4: false
        }
      },
      {
        type: "fill-blank",
        paragraph1: "This is the first paragraph of exercise 2. It's a little lame.",
        paragraph2: "This is the second paragraph of exercise 2. Less lame, me thinks.",
        question: "Now what is 1 + 1?",
        answer: 2
      },
      {
        type: "no-wrong-answer",
        paragraph1: "This is the only paragraph of of exercise 3. Intro to CSS?",
        question: "What's your favorite color?",
        options: {
          black: "black",
          purple: "purple",
          blue: "blue",
          green: "green",
          yellow: "yellow",
          orange: "orange",
          red: "red",
          pink: "pink"
        }
      },
      {
        type: "last-question",
        paragraph1: "You answered all of the questions! Huzzah!"
      }
    ];

    return {
      all () {
        return exerciseList;
      }
    };
  });
