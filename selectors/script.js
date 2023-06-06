/* Add a title attribute to every element that has the important class, stating This is an important item. 
Tip: adding a title attribute to an element is different from changing the title of a document.
 */

let addTitle = document.getElementsByClassName("important");
for (const iterator of addTitle) {
  iterator.title = "This is an important item";
}

/* Select all the img tags and loop through them. If they have no important class, turn their
 display property to none */

let selectImg = document.querySelectorAll("img");

for (const image of selectImg) {
  if (!image.classList.contains("important")) {
    image.style.display = "none";
  }
}

/*  Loop through all the paragraphs and display their content in the 
 console. If the paragraph has a class, display its classname as well
 */

let allParagraphs = document.querySelectorAll("p");
for (const paragraph of allParagraphs) {
  console.log(paragraph.innerText, paragraph.classList);
}
/* Give each of the paragraph a random text color (different for each one) UNLESS it has a class
 then leave it as it is.  */

let allParagraphsNoClass = document.querySelectorAll("p:not([class])");
console.log({ allParagraphsNoClass });

allParagraphsNoClass.forEach((paragraph) => {
  paragraph.style.color =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});

/* let colors = ["green", "red", "blue"];

allParagraphsNoClass[0].style.color = "green";
allParagraphsNoClass[1].style.color = "red";
allParagraphsNoClass[2].style.color = "blue"; */
