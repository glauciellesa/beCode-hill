const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

const clickOnSquare = (e) => {
  const clickedColor = e.target.classList[1];
  if (clickedColor === "green") {
    createDivDisplay("green");
  } else if (clickedColor === "violet") {
    createDivDisplay("violet");
  } else if (clickedColor === "orange") {
    createDivDisplay("orange");
  }
  createLog(clickedColor);
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}

/* Not an Array
An HTMLCollection is not an Array!
An HTMLCollection may look like an array, but it is not.
You can loop through an HTMLCollection and refer to its elements with an index.
The elements in a collection can be accessed by index (starts at 0).
But you cannot use Array methods like push(), pop(), or join() on an HTMLCollection. */

/* Everytime the user clicks on one of the action squares
Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above 
(.displayedsquare-wrapper) */

const createDivDisplay = (color) => {
  const sectionParent = document.getElementsByClassName(
    "displayedsquare-wrapper"
  )[0];
  /*   const sectionParent = document.querySelector("section");
   */
  const newDiv = document.createElement("div");
  newDiv.classList.add("displayedsquare", color);
  sectionParent.append(newDiv);
};

/*Create a new <li> in the log below to state when the action was done */

const createLog = (selectedColor) => {
  const ul = document.querySelector("ul");
  const elem = document.createElement("li");
  elem.innerHTML = `[${getElapsedTime()}] Created a new ${selectedColor} square`;
  ul.appendChild(elem);
};

/* Add an event listener on the document <body>, listening for the keypress event. (hint: 
  have a look at this)*/

const body = document.querySelector("body");

const deleteSquare = () => {
  document.querySelector(".displayedsquare-wrapper").remove();
};

const deleteLogItems = () => {
  const items = document.querySelectorAll("li");
  let i = 0;
  while (i < items.length) {
    items.forEach((item) => item.remove());
    i++;
  }
};

/* When the spacebar is hit randomly change the background color of the whole page
Log when the spacebar is used the same way you used for the generated squares. */
const giveBackgroundColor = () => {
  return "hsl(" + Math.random() * 360 + ", 100%, 50%)";
};

const pressKey = (e) => {
  const key = e.key;
  if (key == " ") {
    console.log("space");
    body.style.backgroundColor = giveBackgroundColor();
    /* When the l key is pressed the log gets deleted (erases the generated <li>s).
 Mind you: using a delete in a for loop might cause issues (as the amount of items to loop 
  over changes), so a while loop might be a good choice instead. */
  } else if (key == "l") {
    deleteLogItems();
    /* When the s key is pressed the squares get deleted (erases the generated squares) */
  } else if (key == "s") {
    deleteSquare();
  }
};

body.addEventListener("keypress", pressKey);

/* 
Create a system so that when a user clicks on a generated square an alert pops-up with the 
color of that square */
const clickGeneratedSquare = (e) => {
  const clickedColor = e.target.classList[1];
  alert(clickedColor);
};

const generatedSquare = document.querySelector(".displayedsquare-wrapper");
generatedSquare.addEventListener("click", clickGeneratedSquare);
