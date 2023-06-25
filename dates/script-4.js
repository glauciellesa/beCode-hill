/* The date should be of today, in your timezone. Refresh the display
 every seconds (hint), so the time stays exact even when the page stays 
 open for a long time

When clicking on the hours, toggle the display in 12-hours format or 
back to 24-hours format. */

const getDate = () => {
  let date = new Date();
  const day = date.toLocaleString("default", { day: "numeric" });
  const month = date.toLocaleString("default", { month: "short" });
  const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
  const hour = date.getHours();
  document.querySelector(".weekday").textContent = weekday;
  document.querySelector(".day").textContent = day;
  document.querySelector(".month").textContent = month;
  document.querySelector(".year").textContent = date.getFullYear();
  document.querySelector(".hour").textContent = hour;
  document.querySelector(".minute").textContent = date.getMinutes();
  document.querySelector(".second").textContent = date.getSeconds();
  document.querySelector("#am-pm").textContent = hour <= 12 ? "am" : "pm";
};

getDate();

const countSecond = () => {
  let second = new Date().getSeconds();
  let divSecond = document.querySelector(".second");
  let counter = second;

  setInterval(() => {
    if (counter < 60) {
      divSecond.textContent = second;
      second++;
      counter++;
    } else {
      counter = 0;
      second = 0;
    }
  }, 1000);
};

countSecond();

const convertHourFormat = () => {
  const divHour = document.querySelector(".hour");
  const hourContent = divHour.textContent;

  let hours = new Date().getHours();
  if (hours < 13) {
    divHour.textContent = hours;
  } else {
    if (hourContent > 13) {
      hours = hours % 12;
      divHour.textContent = hours;
    } else {
      hours = (hours % 12) + 12;
      divHour.textContent = hours;
    }
  }
};

document.querySelector(".hour").addEventListener("click", convertHourFormat);
