/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".board").innerHTML = board
    .map(elm => drawGrid(elm))
    .join("");
};

let board = [null, null, null, null, null, null, null, null, null];
function drawGrid(symbol = "times") {
  return `<div class= "grid">
  <i class="fas fa-${symbol}"></i>
  </div>
  `;
}
