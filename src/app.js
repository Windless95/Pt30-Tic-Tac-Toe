/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".board").innerHTML = new Array(9)
    .fill(null)
    .map(elm => drawGrid("times"))
    .join("");
};

function drawGrid(symbol = "times") {
  return `<div class= "grid">
  <i class="fas fa-${symbol}"></i>
  </div>
  `;
}
