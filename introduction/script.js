/* Edit the script.js to
Display the document title in the console
Change the document title to Modifying the DOM
 */

let tagTitle = document.getElementById("title");
console.log(tagTitle);
tagTitle.innerText = "Modifying the DOM";

/* 
Change the background color of the body to hot pink (#FF69B4). If that worked, try with a random color as an extra challenge.
 (tip: You can use the rgb() notation and 3 random-generated numbers between 0 and 255).

The number of colors that exist from black to white as per rgb values are 16777216. This can be calculated simply by 
using permutation&combination formula [result = m to the power of n => 16 to power of 6 => 16777216] */

let randomColor = Math.floor(Math.random() * 16777215).toString(16);
let body = (document.body.style.backgroundColor = "#" + randomColor);

/* Using the children method and a for ... of  loop, display every children elements of the second child element of your document
 (display all children elements of the <body>) */

let secondChild = document.body.children;
console.log({ secondChild });
for (const bodyChildren of secondChild) {
  console.log({ iterator });
}
