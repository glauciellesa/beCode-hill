import { data } from "./data.js";
console.log("te");
console.log(data);

const createElement = (element, attributes, children) => {
  const e = document.createElement(element);
  if (attributes != null) {
    for (const [key, value] of Object.entries(attributes)) {
      e.setAttribute(key, value);
    }
  }
  if (children != null) {
    for (const child of children) {
      e.appendChild(child);
    }
  }
  return e;
};

const createTextNode = (text) => {
  return document.createTextNode(text);
};

const createWeatherCard = (weatherWeek) => {
  const weatherInfo = document.querySelector(".weather-inf");
  weatherWeek.forEach((element) => {
    const containerDiv = createElement("div", { class: "container-weather" }, [
      createElement("div", { class: "day-weather" }, [
        createTextNode(element.weekDay),
      ]),
      createElement("img", {
        src: `http://openweathermap.org/img/w/${element.icon}.png`,
      }),
      createElement("div", { class: "max-weather" }, [
        createTextNode(`Max: ${element.maxTemperature}`),
      ]),
      createElement("div", { class: "min-weather" }, [
        createTextNode(`Min: ${element.minTemperature}`),
      ]),
      createElement("div", { class: "description-weather" }, [
        createTextNode(element.weatherInfo),
      ]),
    ]);
    weatherInfo.append(containerDiv);
  });
};

createWeatherCard(data);
