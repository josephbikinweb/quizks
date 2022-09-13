
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QUIZ KITAB SUCI</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
      <div id="opening_window">
        <div class="optionButton">
          <a href="index.php">Part 1</a>
          <a href="index1.php">Part 2</a>
          <a href="index2.php">Part 3</a>
          <a href="index3.php">Part 4</a>
          <a href="index4.php">Part 5</a>
          <a href="index5.php">Part 6</a>
          <a href="index6.php">Part 7</a>
          <a href="index7.php">Part 8</a>
          <a href="index8.php">Part 9</a>
          <a href="index9.php">Part 10</a>
        </div>
        <h1>Selamat Datang Di Quiz Kitab Suci Part 7</h1>
        <button onclick="startQuiz()">Mulai Quiz</button>
      </div>
      <div id="quiz_window" class="hidden">
        <p id="questionNumber"></p>
        <h1 id="questionText"></h1>
        <h4 id="answerText" class="hidden"></h4>
        <br />
        <form action="">
          <label for="inputAnswer" class="labelInputAnswer"> Jawaban Anda : </label>
          <input id="inputAnswer" type="text" id="inputAnswer"></input>
          <img src="images/correct.png" class="iconAnswer hidden " id="rightAnswerIcon">
          <img src="images/cross.png" class="iconAnswer hidden " id="wrongAnswerIcon">
        </form>
        <h4 id="resultText" >
          
        </h4>
        <br>
        <button onclick="cekJawaban()">Cek Jawaban</button>
        <button onclick="nextQuestion()" class="nextButton">Next</button>
        <br />
      </div>

      <div id="closing_window" class="hidden">
        <h1>Selesai</h1>
        <h2 id="scoreText"></h2>
        <button onclick="reveal()">Lihat Jawaban</button>
        <button onclick="mainPage()" class="nextButton">Ulangi Quiz</button>
      </div>

      <div id="revealModal" class="hidden" >
        <div id="modal">
        </div>
        <button onclick="closeModal()" class="closeModalButton"><span>x</span></button>
      </div>
    
    <script src="js/Q13-14.js"></script>
    <!-- <script src="all.js"></script> -->
    <script src="js/script.js"></script>
    
</body>
</html>