(function (window) {
  'use strict';

  /* Q&A object-array */
  var questionBank = [
    { QobjectIndexer: 0, question: "Who is the writer of Lord of the Rings and founding father of the Middle-Earth Saga?", answer: "J.R.R. Tolkien" },
    { QobjectIndexer: 1, question: "Frodo and Bilbo are...", answer: "hobbits" },
    { QobjectIndexer: 2, question: "What is Strider's real name?", answer: "Aragorn" },
    { QobjectIndexer: 3, question: "What is the name of Boromir's brother?", answer: "Faramir" }
  ]

  /* incorrect-guesses object-array */
  var wrongChoices = [
    ["Christopher Tolkien", "George R.R. Martin", "C.S. Lewis"],
    ["dwarves", "elves", "gnomes"],
    ["Legolas", "Boromir", "Thorin"],
    ["Denethor", "Thrain", "Eorl"]
  ]

  /* randomize-choices */
  function randomizeChoices(array) {
    for (var r = array.length - 1; r >= 0; r--) {
      var randomIndex = Math.floor(Math.random() * r + 1);
      var itemAtIndex = array[randomIndex];
      array[randomIndex] = array[r];
      array[r] = itemAtIndex;
    }
    return array;
  }

/* question formBuilder */
function questionnaire(questionAnswerArray, choicesArray) {
  for (var i = 0; i < 4; i++) {
    choicesArray[i].push(questionAnswerArray[i].answer);
    $('#questionBox').append("<br><p id=" + "question" + i + ">" + questionAnswerArray[i].question + "</p>");
    choicesArray[i] = randomizeChoices(choicesArray[i]);
    console.log(choicesArray[i]);
    for (var c = 0; c < choicesArray[i].length; c++) {
      console.log(choicesArray[i][c]);
      $('#questionBox').append("<input type=" + "radio" + " name=" + "question" + i + " value=" + "\"" + choicesArray[i][c] + "\"" + " id=" + "question" + i + "> " + choicesArray[i][c] + "</input><br>");
    }
  }
}
questionnaire(questionBank, wrongChoices);

})(window);
