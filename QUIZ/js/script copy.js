const DB_QUIZ = quiz;
// console.log(DB_QUIZ);
// SETUP QUESTION
function startQuiz() {
  document.getElementById("opening_window").style.display = "none";
  document.getElementById("quiz_window").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function (event) {
  setupQuestion();
});

let currentIndex = 0;
let savedIndex = [];
let savedQuestion = [];
let correctsAnswer = [];
let savedAnswer = [];
let totalScore = 0;

function setupQuestion() {
  const i = (document.getElementById("questionNumber").innerText =
    currentIndex + 1);
  const q = (document.getElementById("questionText").innerText =
    DB_QUIZ[currentIndex]["question"]);
  const a = (document.getElementById("answerText").innerText =
    DB_QUIZ[currentIndex]["answer"].toLowerCase());

  savedIndex.push(i);
  savedQuestion.push(q);
  correctsAnswer.push(a);

  // console.log(savedIndex);
  // console.log(savedQuestion);
  // console.log(correctsAnswer);
  // console.log(savedAnswer);
}

function cekJawaban() {
  const answer = (document.getElementById("answerText").innerText =
    DB_QUIZ[currentIndex]["answer"].toLowerCase());
  const inputAnswer = document
    .getElementById("inputAnswer")
    .value.toLowerCase();
  const rightAnswerIcon = document.getElementById("rightAnswerIcon");
  const wrongAnswerIcon = document.getElementById("wrongAnswerIcon");

  if (answer === inputAnswer) {
    // document.getElementById("resultText").innerText = "Jawaban Anda Benar";
    rightAnswerIcon.classList.remove("hidden");
    wrongAnswerIcon.classList.add("hidden");
    // console.log("Benar");
    saveAnswer();
  } else {
    // document.getElementById("resultText").innerText = "Jawaban Anda Salah";
    wrongAnswerIcon.classList.remove("hidden");
    rightAnswerIcon.classList.add("hidden");
    // console.log("Salah");
  }
  // console.log(answer);
  // console.log(inputAnswer);
}
function nextQuestion() {
  currentIndex++;
  saveAnswer();
  if (currentIndex > DB_QUIZ.length - 1) stopQuiz();
  resetState();
  setupQuestion();
}

function resetState() {
  const inputAnswer = (document.getElementById("inputAnswer").value = "");
  const rightAnswerIcon = document
    .getElementById("rightAnswerIcon")
    .classList.add("hidden");
  const wrongAnswerIcon = document
    .getElementById("wrongAnswerIcon")
    .classList.add("hidden");
  // if (inputAnswer != null) inputAnswer = false;
}

function stopQuiz() {
  checkScore();
  // alert("Selesai! Score Anda : " + total_score);
  document.getElementById("quiz_window").style.display = "none";
  document.getElementById("closing_window").style.display = "block";
  document.getElementById("scoreText").innerText =
    "Kamu benar..." + totalScore + " dari " + savedAnswer.length;
  return;
}

function saveAnswer() {
  const inputAnswer = document
    .getElementById("inputAnswer")
    .value.toLowerCase();
  if (inputAnswer != null) {
    savedAnswer.push(inputAnswer);
    // console.log(savedAnswer);
  } else {
    // default answer = A
    savedAnswer.push();
  }
}

function checkScore() {
  for (i = 0; i < savedAnswer.length; i++) {
    if (savedAnswer[i] == correctsAnswer[i]) totalScore += 1;
  }
  // console.log(savedAnswer.length);
}

function reveal() {
  document.getElementById("closing_window").style.display = "none";
  document.getElementById("revealModal").classList.remove("hidden");
  const array = [];

  for (let i = 0; i < savedQuestion.length; i++) {
    array.push([i, savedQuestion[i], correctsAnswer[i], savedAnswer[i]]);
    const questionModal = document.createElement("h3");
    const answerModalRight = document.createElement("h4");
    const answerModalYours = document.createElement("h4");

    const nodeQuestionModal = document.createTextNode(
      array[i][0] + `.` + array[i][1]
    );
    const nodeAnswerModalRight = document.createTextNode(array[i][2]);
    const nodeAnswerModalYours = document.createTextNode(array[i][2]);

    const element = document.getElementById("modal");
    questionModal.appendChild(nodeQuestionModal);
    answerModalRight.appendChild(nodeAnswerModalRight);
    answerModalYours.appendChild(nodeAnswerModalYours);
    element.appendChild(questionModal);
    element.appendChild(answerModalRight);
    element.appendChild(answerModalYours);
    // element.appendChild(questionModal + answerModalRight + answerModalYours);
    // function tampil() {
    //   // document.getElementById("questionModal").innerText =
    //   //   array[i][0] + `.` + array[i][1];
    //   // document.getElementById("answerModalRight").innerText = array[i][2];
    //   // document.getElementById("answerModalYours").innerText = array[i][3];
    //   document.getElementById("modal").innerHTML = `
    //   <h3 id="questionModal">${array[i][0] + `.` + array[i][1]}</h3>
    //       <h4 id="answerModalRight">${array[i][2]}</h4>
    //       <h4 id="answerModalYours">${array[i][3]}</h4>`;
    // }
    // console.log(nodeAnswerModalRight);
    // console.log(answerModalRight);
    console.log(element);
  }
  console.log(array[0]);
}

function closeModal() {
  document.getElementById("revealModal").classList.add("hidden");
  document.getElementById("closing_window").style.display = "block";
  document.getElementById("scoreText").innerText =
    "Kamu benar..." + totalScore + " dari " + savedAnswer.length;
}

function mainPage() {
  window.location = "index.php";
}
