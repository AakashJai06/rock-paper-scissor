let Score = JSON.parse(localStorage.getItem("Score")) || {
  computerScore: 0,
  playerScore: 0,
  tie: 0,
};
function playGame(playerMove) {
  const move = ["Rock", "Paper", "Scissor"];
  const randomNumber = Math.floor(Math.random() * 3);
  const computerMove = move[randomNumber];
  let result = "";
  if (playerMove === computerMove) {
    result = "Tie";
    Score.tie++;
  } else if (
    (playerMove === "Rock" && computerMove === "Scissor") ||
    (playerMove === "Paper" && computerMove === "Rock") ||
    (playerMove === "Scissor" && computerMove === "Paper")
  ) {
    result = "Player Won";
    Score.playerScore++;
  } else {
    result = "Computer Won";
    Score.computerScore++;
  }
  document.querySelector(
    ".js-status"
  ).innerHTML = `You <img src="images/${playerMove}.png" class="icon" /><img src="images/${computerMove}.png" class="icon" /> Computer`;

  localStorage.setItem("Score", JSON.stringify(Score));
  document.querySelector(
    ".js-score"
  ).innerHTML = `Player Score : ${Score.playerScore}  Computer Score : ${Score.computerScore}  Tie : ${Score.tie}`;
}
function display() {
  alert(
    `Player Score : ${Score.playerScore}  Computer Score : ${Score.computerScore}  Tie : ${Score.tie}`
  );
}
function resetScore() {
  Score.computerScore = 0;
  Score.playerScore = 0;
  Score.tie = 0;
  document.querySelector(".js-status").innerHTML = "Score Reseted";
  document.querySelector(
    ".js-score"
  ).innerHTML = `Player Score : ${Score.playerScore}  Computer Score : ${Score.computerScore}  Tie : ${Score.tie}`;
}