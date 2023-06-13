/* Modify the script.js to create a new <section> with a random background-color
 for each learner in your group. This section should contain a paragraph with the 
 name of the learner. Those sections should be appended in the <article>
 */

const addSection = (child) => {
  const article = document.querySelector("article");
  article.appendChild(child);
};

/* 
clean is not necessary somehow when we append again the same 
array in a diferren order it takes out the old node and replace it 
for new ones.
 we cannot append
 multiple times because in the DOM, being a tree 
 of nodes, one node can have only one parent, it
  cannot have multiple parents. 
const cleanArticle = () => {
  const article = document.querySelector("article");
  article.replaceChildren();
}; */

const createSection = (students) => {
  students.forEach((student) => {
    const newSection = document.createElement("section");
    const newParagraph = newSection.appendChild(document.createElement("p"));
    const newContent = document.createTextNode(student);
    newParagraph.appendChild(newContent);
    addSection(newSection);
  });
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

const shuffleArray = (allSections) => {
  /* as allSections is a nodeElement we need to convert it to array */
  let array = Array.from(allSections);
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  /* We need to cleen the children of the element before add the  */
  /*   cleanArticle(); */
  addNewItem(array);
};

const addNewItem = (items) => {
  items.forEach((item) => {
    addSection(item);
  });
};

addEventListener("DOMContentLoaded", () => {
  const students = ["Glaucielle", "Pedro", "Maria", "Rafael"];
  createSection(students);

  const allSections = document.querySelectorAll("section");

  giveBackgroundColor(allSections);
  changeFontColor(allSections);
  shuffleArray(allSections);
});
