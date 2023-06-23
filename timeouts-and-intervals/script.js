/* Write a function that mimics the behaviour of a typewriter.

Using setInterval display the word prout one character at a 
time (one letter per second). Once the word is written on the screen clear the interval. */

const display = (word) => {
  const inputDiv = document.getElementById("input");
  for (let i = 0; i < word.length; i++) {
    inputDiv.innerHTML += word[i];
    console.log(word[i]);
  }
};

window.addEventListener("DOMContentLoaded", () => {
  const word = "prout";
  display(word);
  setTimeout(display(word), 1000);
  console.log("DOM fully loaded and parsed");
});
