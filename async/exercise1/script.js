const createRules = (rule) => {
  const parentLi = document.querySelector(".showRules");
  const list = document.createElement("li");
  list.textContent = rule;
  parentLi.append(list);
};

window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("button");
  btn.addEventListener("click", loadRules);
  console.log(btn);
});

const loadRules = () => {
  fetch("becode.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        createRules(element);
      });
    })
    .catch(function (error) {
      // There was an error
      console.warn({ error });
    });
};
