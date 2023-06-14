/* As always you should NOT edit the index.html, modify the script.js file :

Add a keyup listener on the first input field, so that once you type a letter in this field, 
it goes into the <span id="display-firstname">. The content of the field and the span should 
always remain the same.*/
const updateValue = (e) => {
  const log = document.getElementById("display-firstname");
  log.textContent = e.target.value;
};

/*
Add a keyup listener on the second input (the number input), so that if the age is below 18 the 
content of the section 
a-hard-truth remains hidden, otherwise show them this hard to swallow fact. */

const checkAge = (e) => {
  const sectionVisibility = document.getElementById("a-hard-truth");
  const age = e.target.value;
  if (age > 18) {
    sectionVisibility.style.visibility = "visible";
  }
};

/*   Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the 
    field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not
     match.*/

const checkPassword = (e) => {
  const password = e.target;
  const inputLength = password.value.length;
  console.log(inputLength);
  if (inputLength < 6) {
    password.style.borderColor = "red";
  } else {
    password.style.borderColor = "black";
  }
};

const confirmPassword = (e) => {
  const pwdConfirm = e.target;
  const password = document.getElementById("pwd").value;
  if (password !== pwdConfirm.value) {
    pwdConfirm.style.borderColor = "red";
  } else {
    pwdConfirm.style.borderColor = "black";
  }
};
/* 
Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say
 that the dark mode is just turning the background black and the text white. 
 */

const toggleTheme = (e) => {
  const theme = e.target.value;
  const body = document.querySelector("body");
  body.style.backgroundColor = "white";

  if (theme === "light") {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }
};

addEventListener("DOMContentLoaded", () => {
  const inputName = document.getElementById("firstname");
  inputName.addEventListener("keyup", updateValue);

  const inputAge = document.getElementById("age");
  inputAge.addEventListener("keyup", checkAge);

  const inputPassword = document.getElementById("pwd");
  inputPassword.addEventListener("keyup", checkPassword);

  const inputPasswordConfirm = document.getElementById("pwd-confirm");
  inputPasswordConfirm.addEventListener("blur", confirmPassword);

  const select = document.getElementById("toggle-darkmode");
  select.addEventListener("change", toggleTheme);
});
