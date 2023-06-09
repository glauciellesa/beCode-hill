/* Use childNodes to list all the children from the <ul> */
/* const displayChildre = (li) => {
  return li.childNodes;
}; */

/* 
Write a for loop to iterate over every child. In this loop: */

const loopList = (list) => {
  const uList = document.querySelector("ul");
  const arraylist = Array.from(list);

  for (let i = 0; i < arraylist.length; i++) {
    /* Use a condition in the loop to only iterate over element nodes (see: nodeTypes. Use child.nodeType === 1) */
    if (arraylist[i].nodeType === 1) {
      const childContent = arraylist[i].innerHTML;
      /* Find the element that contains Fast and Furious.  */
      if (childContent === "Fast and Furious") {
        /* If it's not the first element move it to the top of the list */
        if (i !== 0) {
          const temp = arraylist[0];
          arraylist[0] = arraylist[i];
          arraylist[i] = temp;
        } else {
          return "é primeiro";
        }
        /*  Since Fast and Furious is the most important franchise ever, add a class .important to the element */
        arraylist[i].className = "important";
      }
    }
  }
  arraylist.forEach((element) => uList.appendChild(element));
};

/* Add an eventListener on every item of the list. If the item is clicked an alert() pops up to display the name of clicked element */
const displayAlert = (e) => {
  const list = e.target.innerHTML;
  alert(list);
  /* Add a special condition to the previous function if the clicked item is Fast and Furious the alert() should display The most important
  franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.*/
  if (list === "Fast and Furious") {
    alert(
      " The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."
    );
  }
};

/* (*) Remove duplicates using removeChild (duplicates are items with the exact same textContent, isEqualNode might be useful). */
const removeDuplicates = () => {
  const arraylist = Array.from(list);
};

/*  
(*) Add an eventListener on the document body, listening for keyup. When pressing the r key of the keyboard the list should get sorted in
 a random order, however Fast and Furious should remain the first element (most important franchise ever, remember?)
(*) Modify the previous function so that when you press the letter d of your keyboard, the Fast and Furious element gets cloned
Create a new <div> before the list, using createElement and insertBefore
Using createElement, create a <select> tag into the previously created <div>, with two <option>s in it: "important franchises" and "normal franchises"
Add an eventListener to the <select>, on change, if the option "important franchise" is chosen, only display items of the list that have the class 
.important. (hint: you can toggle visibility using element.style.visibility = 'hidden') */

addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector("ul").childNodes;
  loopList(list);
  for (let element of list) {
    element.addEventListener("click", displayAlert);
  }
  removeDuplicates(list);
});
