/* Exercise 2
Make a new page with a text input and a button. When the button is clicked, a 
fetch query is sent to the agify API with the name entered in the input. When 
the request is finished display the result in a new div on the page. Keep the the 
past requests on the page by creating a new div each time you make an API call.

Extra steps
Also add a <select> field with a few countries in it, to narrow down the search to a
 specific country. You'll have to look in agify documentation to know more about that.
Store the previous results in a localStorage so you don't have to fetch them again!
Using the promise syntax? Try to use async/await instead! */

const displayData = (name, age, country) => {
  const divDisplay = document.querySelector(".ageContent");
  const newParagraph = document.createElement("p");
  newParagraph.textContent = `The name ${name} from ${country} has ${age} year old`;
  divDisplay.append(newParagraph);
};

const getData = (name, countryId, cb) => {
  fetch(`https://api.agify.io?name=${name}&country_id=${countryId}`)
    .then((response) => response.json())
    .then((data) => {
      cb(name, data.age, countryId);
    });
};

const getSelectedCountry = () => {
  const selectElement = document.querySelector("#countries");
  let output = selectElement.options[selectElement.selectedIndex].value;
  return output;
};

window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("button");
  // Retrieve the object from storage
  let retrievedObject = JSON.parse(localStorage.getItem("data") ?? "[]");
  console.log("retrievedObject: ", retrievedObject);
  retrievedObject.forEach((element) => {
    console.log(element);
    displayData(element.name, element.age, element.countryId);
  });
  btn.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const country = getSelectedCountry();
    getData(name, country, (name, age, countryId) => {
      const localData = JSON.parse(localStorage.getItem("data") ?? "[]");
      localData.push({ name, age, country_id: countryId });
      localStorage.setItem("data", JSON.stringify(localData));
      localData.forEach((element) => {
        console.log(element);
        displayData(element.name, element.age, element.countryId);
      });
    });
  });
});
