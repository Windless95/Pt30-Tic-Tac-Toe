/* eslint-disable */
import "./style.css";

// model or store = data that needs to be share among my front end (no need for local variables)
// let board = [null, "times", null, null, null, "circle", null, null, null];
let board = [null, null, null, null, null, null, null, null, null];
let currentPlayer = "times";

// life-cycle
window.onload = render;

function render() {
  document.querySelector(".board").innerHTML = board
    .map(elm => drawGrid(elm))
    .join("");

  document.querySelectorAll(".grid").forEach((node, index) =>
    node.addEventListener("click", function() {
      play(index);
    })
  );
}

// action fucntion
function play(index) {
  board[index] = currentPlayer;

  if (currentPlayer === "times") {
    currentPlayer = "circle";
  } else {
    currentPlayer = "times";
  }
  // currentPlayer = (currentPlayer === "times") ? "circle" : "times";

  render();
}

// rendering function
function drawGrid(symbol = "times") {
  return `<div class="grid">
  <i class="fas fa-${symbol}"></i>
</div>`;
}
