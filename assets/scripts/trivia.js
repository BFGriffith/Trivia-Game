(function (window) {
  'use strict';
var time, counter, currentTime;

/* stores tally-counts into array */
var tallyCount = [rightAnswers, wrongAnswers, unanswered];
var rightAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;

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

/* time-converter based on class example */
function timeConverter(t) {
  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes === 0) {
    minutes = "00";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return minutes + ":" + seconds;
}

//timer for questionBox
$(document).ready(function() {
  setTimeout(function() {
    alert('Welcome to the Shire, traveler. Concerning hobbits, to gain entry you must test your knowledge of Middle Earth. Once you clear this message, your Riddles in the Dark will begin! All we have to decide is what to do with the time that is given us.');
  }, 1000);
  time = 60;
  $("#timerDisplay").html("00:00");

  function clockView() {
    time--;
    currentTime = timeConverter(time);
    $("#timerDisplay").html(currentTime);
    // console.log(time);

    if (time == 0) {
      for (var z = 0; z < questionBank.length; z++) {
        if ($('#question' + z + ':checked').val() == questionBank[z].answer) {
          rightAnswers++;
        } else if ($('#question' + z + ':checked').val() == undefined) {
          unanswered++;
        } else {
          wrongAnswers++;
        }
      }
      $('#questionBox').empty();
      $('#questionBox').append("<h2>Behold the fate of Middle Earth before you vanish into the West!</h2>");
      $('#questionBox').append("<p>You got " + rightAnswers + " answers right!</p>");
      $('#questionBox').append("<p>You got " + wrongAnswers + " answers wrong.</p>");
      $('#questionBox').append("<p>There are " + unanswered + " unanswered questions remaining.</p>");
      time = undefined;
      $("#timerDisplay").html(currentTime);
    }
  }
  counter = setInterval(clockView, 1000);
})

console.log(rightAnswers);
console.log(wrongAnswers);
console.log(unanswered);

})(window);
