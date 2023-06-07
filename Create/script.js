/* Modify the script.js to create a new <section> with a random background-color
 for each learner in your group. This section should contain a paragraph with the 
 name of the learner. Those sections should be appended in the <article>
 */

const addSection = (child) => {
  const article = document.querySelector("article");
  article.appendChild(child);
};

const createSection = (name) => {
  const newSection = document.createElement("section");
  const newParagraph = newSection.appendChild(document.createElement("p"));
  const newContent = document.createTextNode(name);
  newParagraph.appendChild(newContent);
  addSection(newSection);
};

const giveBackgroundColor = (allSections) => {
  allSections.forEach((section) => {
    section.style.backgroundColor =
      "hsl(" + Math.random() * 360 + ", 100%, 50%)";
  });
};

/* If the background is dark the text should be white, if the background is light the text should be black */

const convertBgColorToHex = (colorRGB) => {
  let hex;
  if (colorRGB.indexOf("#") > -1) {
    //for IE
    hex = colorRGB;
  } else {
    let rgb = colorRGB.match(/\d+/g);
    hex =
      "#" +
      ("0" + parseInt(rgb[0], 10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2);
  }

  /* checkIslightOrDark(hex); */
  return hex;
};

function checkIslightOrDark(color) {
  const hex = color.replace("#", "");
  const c_r = parseInt(hex.substring(0, 0 + 2), 16);
  const c_g = parseInt(hex.substring(2, 2 + 2), 16);
  const c_b = parseInt(hex.substring(4, 4 + 2), 16);
  const brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;

  if (brightness > 155) {
    return "light";
  } else {
    return "dark";
  }
}

const changeFontColor = (allSections) => {
  allSections.forEach((section) => {
    const mySectObjBgColor = window.getComputedStyle(section).backgroundColor;
    const hex = convertBgColorToHex(mySectObjBgColor);
    const background = checkIslightOrDark(hex);
    if (background == "light") {
      section.style.color = "black";
    } else {
      section.style.color = "white";
    }
  });
};

/* Find a way so that everytime you load the page the order of the elements changes! */

const changeElementsOrder = (allSections) => {
  console.log(Array.from(allSections).map((e) => e.textContent));
  let array = ["maria", "jose", "joao"];
  /*   let reverseArray = array.reverse();
  console.log(reverseArray.map((e) => e.textContent));
  reverseArray.forEach((item) => addSection(item)); */
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const addNewItem = () => {};

addEventListener("DOMContentLoaded", () => {
  createSection("Glaucielle");
  createSection("Antoine");
  createSection("Dannyel");

  const allSections = document.querySelectorAll("section");

  giveBackgroundColor(allSections);
  changeFontColor(allSections);
  changeElementsOrder(allSections);
});
