let userScore = 0;
let cpuScore = 0;
let tieCount = 0;

const playGame = (userChoice) => {
  const options = ["rock", "paper", "scissors"];
  const computerChoice = options[Math.floor(Math.random() * 3)];

  const statusElement = document.getElementById("status");
  const resultDetailElement = document.getElementById("result-detail");

  let result = "";

  if (userChoice === computerChoice) {
    result = "TIE";
    if (result === "TIE") {
      tieCount++;
      console.log("tieCount ==== ", tieCount);
    }
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "WIN";
    userScore++;
  } else {
    result = "LOSS";
    cpuScore++;
  }

  console.log("result = ", result);

  statusElement.innerText = `You chose ${userChoice} | CPU chose ${computerChoice}`;

  if (result === "WIN") {
    resultDetailElement.innerText = "You WIN!";
    resultDetailElement.style.color = "#22C55E";
  } else if (result === "LOSS") {
    resultDetailElement.innerText = "CPU WIN!";
    resultDetailElement.style.color = "#EF4444";
  } else {
    if (tieCount > 3) {
      Swal.fire({
        title: "'Game Over!'",
        text: "Do you want to play again?",
        icon: "question",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes, play again!",
      }).then((result) => {
        if (result.isConfirmed) {
          resetUI();
        }
      });
    } else {
      resultDetailElement.innerText = `IT'S Warning!, ${tieCount}`;
      resultDetailElement.style.color = "#F59E0B";
    }
  }

  document.getElementById("user-score").innerText = userScore;
  document.getElementById("cpu-score").innerText = cpuScore;
};

const resetUI = () => {
  document.getElementById("status").innerText = "Waiting for your move...";
  document.getElementById("result-detail").innerText = "";

  userScore = 0;
  cpuScore = 0;

  document.getElementById("user-score").innerText = userScore;
  document.getElementById("cpu-score").innerText = cpuScore;
};
