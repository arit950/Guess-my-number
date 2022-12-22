"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highScore = 0;

console.log(number);
document.querySelector(".btn").addEventListener("click", function () {
  const firstName = Number(document.querySelector(".number1").value);
  console.log(firstName);
  //when input is empty
  if (!firstName) {
    document.querySelector("#show").textContent = "Please enter anything 🤨";
  }
  //when input matches the guess
  else if (firstName === number) {
    document.querySelector(".num").textContent = number;
    document.querySelector("#guess").textContent = "WINNER 🤑";
    document.querySelector("#show").textContent = "Congratulation😎";
    document.querySelector(".score").textContent = `🍄Score:${score}`;
    //highScore = document.querySelector(".high").textContent = `🐉High Score:${score}`;
    document.querySelector("body").style.backgroundColor = "blue";
    document.querySelector(".number1").style.backgroundColor = "blue";
  }
  //when input is higher than number
  else if (firstName > number) {
    document.querySelector(
      "#show"
    ).textContent = `Number entered is greater 😒 `;
    score--;
    document.querySelector(".score").textContent = `🍄Score:${score}`;
    if (score <= 0) {
      document.querySelector(".score").textContent = "GAME OVER 🤣";
    }
  }
  //when input is lower than number
  else if (firstName < number) {
    document.querySelector("#show").textContent =
      "Number entered is smaller 🤦‍♂️";
    score--;
    document.querySelector(".score").textContent = `🍄Score:${score}`;
    if (score <= 0) {
      document.querySelector(".score").textContent = "GAME OVER 🤣";
    }
  }
});

//AGAIN BUTTON
document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  document.querySelector("#guess").textContent = "GUESS MY NUMBER";
  document.querySelector(".num").textContent = "?";
  document.querySelector("#show").textContent = "Start Guessing";
  document.querySelector(".score").textContent = `🍄Score:5`;
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".number1").style.backgroundColor = "black";
  if (score > highScore) {
    document.querySelector(".high").textContent = `🐉High Score:${score}`;
  }

  score = 5;
});
