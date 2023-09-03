const BOARD_WIDTH = 3;
const WIN_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// let boardState = generateEmptyBoardState();
let currentPlayer = 1;
let numMovesDone = 0;
const gameHeading = document.getElementById("game-heading");
const gameSquares = document.querySelectorAll(".game-square");
const restartButton = document.getElementById("restart-button");

gameSquares.forEach((gameSquare, i) => {
  gameSquare.addEventListener("click", () => {
    if (!gameSquare.classList.contains("clicked")) {
      const row = Math.floor(i / BOARD_WIDTH);
      const col = i % BOARD_WIDTH;
      makeMove(gameSquare, row, col);
    }
  });
});

restartButton.addEventListener("click", restartGame);

function makeMove(gameSquare, row, col) {
  gameSquare.textContent = currentPlayer === 1 ? "X" : "O";
  gameSquare.disabled = true;
  numMovesDone++;
  boardState[row][col] = currentPlayer;

  // if (didPlayerWin(currentPlayer)) {
  if (didPlayerWin()) {
    gameHeading.textContent = `Player ${currentPlayer}'s Won!`;
    endGame();
  } else if (numMovesDone >= BOARD_WIDTH * BOARD_WIDTH) {
    gameHeading.textContent = `Tie Game!`;
    endGame();
  } else {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    setCurrentPlayerHeader();
  }
}

function setCurrentPlayerHeader() {
  gameHeading.textContent = `Player ${currentPlayer} Turn`;
}

function didPlayerWin() {
  // function didPlayerWin(currentPlayer) {
  // const rows = [0, 1, 2];
  // const cols = [0, 1, 2];

  // const wonHorizontal = rows.some((row) => {
  //   return (
  //     boardState[row][0] === currentPlayer &&
  //     boardState[row][1] === currentPlayer &&
  //     boardState[row][2] === currentPlayer
  //   );
  // });

  // const wonVertical = cols.some((col) => {
  //   return (
  //     boardState[0][col] === currentPlayer &&
  //     boardState[1][col] === currentPlayer &&
  //     boardState[2][col] === currentPlayer
  //   );
  // });

  // const wonTopLeftToBottomRight =
  //   boardState[0][0] === currentPlayer &&
  //   boardState[1][1] === currentPlayer &&
  //   boardState[2][2] === currentPlayer;

  // const wonTopRighttoBottomLeft =
  //   boardState[0][2] === currentPlayer &&
  //   boardState[1][1] === currentPlayer &&
  //   boardState[2][0] === currentPlayer;

  // return (
  //   wonHorizontal ||
  //   wonVertical ||
  //   wonTopLeftToBottomRight ||
  //   wonTopRighttoBottomLeft
  // );

  const releventText = currentPlayer === 1 ? "X" : "O";
  return WIN_CONDITIONS.some((condition) => {
    return condition.every((gameSquarePosition) => {
      return gameSquares[gameSquarePosition].textContent === releventText;
    });
  });
}

function endGame() {
  restartButton.style.display = "block";
  gameSquares.forEach((gameSquare) => {
    gameSquare.disabled = true;
  });
}

function restartGame() {
  // boardState = generateEmptyBoardState();
  currentPlayer = 1;
  numMovesDone = 0;
  setCurrentPlayerHeader();
  gameSquares.forEach((gameSquare) => {
    gameSquare.textContent = "";
    gameSquare.disabled = false;
  });
  restartButton.style.display = "none";
}

// function generateEmptyBoardState() {
//   return new Array(BOARD_WIDTH).fill().map(() => new Array(BOARD_WIDTH).fill());
// }
