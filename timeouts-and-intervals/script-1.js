/* Write a function that mimics the behaviour of a typewriter.

Using setInterval display the word prout one character at a 
time (one letter per second). Once the word is written on the screen clear the interval. */

function displayWord(char) {
  const div = document.getElementById("input");
  div.textContent += char;
}

window.addEventListener("DOMContentLoaded", () => {
  const word = "prout";
  let i = 0;
  const refreshInterval = setInterval(() => {
    if (i < word.length) {
      displayWord(word[i]);
      i++;
    } else {
      clearInterval(refreshInterval);
    }
  }, 1000);
});
