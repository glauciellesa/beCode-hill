/* Modify the script.js, do not create any new nodes!

Select the last child of the <ol> tag and put it at the beginning of the list
*/
const changeElementPosition = (allElemets) => {
  let arrayElements = Array.from(allElemets);
  console.log({ arrayElements });
  arrayElements.forEach((li) => console.log("oriLi", li.innerText));

  let temp = arrayElements[0];
  arrayElements[0] = arrayElements[arrayElements.length - 1];
  arrayElements[arrayElements.length - 1] = temp;

  arrayElements.forEach((li) => console.log("list", li.innerText));
  return arrayElements;
};

const addToOl = (allLists) => {
  const ol = document.querySelector("ol");
  allLists.forEach((li) => {
    ol.appendChild(li);
  });
};

/* Move the <h2> of the third section in the second one and vice-versa*/
const changeHeader = (allLists) => {
  const allH2 = Array.from(allLists);
  allH2.forEach((li) => console.log("h2", li.innerText));
  for (let i = 0; i < allH2.length; i++) {
    const temp = allH2[1];
    allH2[1] = allH2[allH2.length - 1];
    allH2[allH2.length - 1] = temp;
  }
  allH2.forEach((li) => console.log("h2Muda", li.innerText));
  return allH2;
};

const addToSection = (allH2) => {
  console.log({ allH2 });
  const sections = section.querySelectorAll("section");
  sections.forEach((section) => {
    allH2.forEach((h2) => {
      section.append(h2);
    });
  });
};

/* Delete the last section from the DOM, we don't need it anyways  */

addEventListener("DOMContentLoaded", () => {
  const allListsNode = document.querySelectorAll("li");
  const changedList = changeElementPosition(allListsNode);
  addToOl(changedList);
  const allHeaderNode = document.querySelectorAll("h2");
  console.log({ allHeaderNode });
  const changedHeader = changeHeader(allHeaderNode);
  addToSection(changedHeader);
});
