/*  Must haves
In the home page the user can enter the city of his/her choice
 (think of the right HTML elements here)
On clicking the SUBMIT button or pressing ENTER the application 
will display the weather for the next 5 days
The application must be responsive and mobile friendly
    /* let tempMin = data[i].main.temp_min;
    let tempMax = data[i].main.temp_max;
    let dayDate = new Date(data[i].dt_txt).getDate();
    console.log({ tempMax });
    console.log({ tempMin });
    console.log({ dayDate }); 
*/

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

const createTextNode = (text) => document.createTextNode(text);

const displayWeatherCard = (weatherWeek) => {
  const weatherInfo = document.querySelector(".weather-inf");
  weatherWeek.forEach((element) => {
    const containerDiv = createElement("div", { class: "container-weather" }, [
      createElement("div", { class: "day-weather" }, [
        createTextNode(element.weekDay),
      ]),
      createElement("img", {
        src: "imgIcon",
        src: `http://openweathermap.org/img/w/${element.icon}.png`,
      }),
      createElement("div", { class: "max-weather" }, [
        createTextNode(`Max: ${Math.round(element.maxTemperature)}˚`),
      ]),
      createElement("div", { class: "min-weather" }, [
        createTextNode(`Min: ${Math.round(element.minTemperature)}˚`),
      ]),
      createElement("div", { class: "description-weather" }, [
        createTextNode(element.weatherInfo),
      ]),
    ]);
    weatherInfo.append(containerDiv);
  });
};

const reduceDataWeather = (data) => {
  const dataWeather = data.list;
  const date = new Date().getDate();
  let today = date;
  const newData = [];
  let tempMin = Number.MAX_VALUE;
  let tempMax = Number.MIN_VALUE;
  let icon;
  let weatherDescription;

  for (let i = 0; i < dataWeather.length; i++) {
    let dayApi = new Date(dataWeather[i].dt_txt).getDate();
    let weekDay = new Date(dataWeather[i].dt_txt).toLocaleDateString("en", {
      weekday: "long",
    });
    if (today == dayApi) {
      if (tempMax < dataWeather[i].main.temp_max) {
        icon = dataWeather[i].weather[0].icon;
        weatherDescription = dataWeather[i].weather[0].description;
        tempMax = dataWeather[i].main.temp_max;
      }
      if (tempMin > dataWeather[i].main.temp_min) {
        tempMin = dataWeather[i].main.temp_min;
      }
    } else {
      newData.push({
        weekDay: weekDay,
        icon: icon,
        weatherInfo: weatherDescription,
        minTemperature: tempMin,
        maxTemperature: tempMax,
      });
      tempMin = Number.MAX_VALUE;
      tempMax = Number.MIN_VALUE;
      today = dayApi;
    }
  }

  displayWeatherCard(newData);
};

const displayCurrentWeather = (data) => {
  console.log(data);
  const icon = data.list[0].weather[0].icon;

  const currentCity = createElement("div", { class: "currente-city" }, [
    createTextNode(`${data.city.name} - ${data.city.country}`),
  ]);
  const currentTemperature = createElement(
    "div",
    { class: "current-info-temp" },
    [
      createElement("div", { class: "temperature" }, [
        createTextNode(`${Math.floor(data.list[0].main.temp)}˚`),
      ]) /* ,
      createElement("div", { class: "description" }, [
        createTextNode(data.list[0].weather[0].description),
      ]) */,
      createElement("img", {
        src: `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`,
      }),
    ]
  );
  const currentTempMoreInfo = createElement(
    "div",
    { class: "current-more-info" },
    [
      createElement("div", { class: "humidity" }, [
        createTextNode(`Humidity: ${data.list[0].main.humidity}%`),
      ]),
      createElement("div", { class: "wind" }, [
        createTextNode(`Wind: ${data.list[0].wind.speed} k/h`),
      ]),
    ]
  );

  document.querySelector(".current-weather-info").append(currentTemperature);
  document.querySelector(".current-weather-info").append(currentTempMoreInfo);
  document.querySelector(".current-city").append(currentCity);
};

const getWeatherData = (location) => {
  const apiKey = "b73209fdcdbea6b6ada4ed11b21e9494";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log({ data });
      reduceDataWeather(data);
      displayCurrentWeather(data);
    });
};

const displayImage = (imgLink) => {
  /*   divWeather = document.querySelector(".img-city");
   */ divWeather = document.querySelector(".current-weather");
  divWeather.style.backgroundImage = `url("${imgLink}")`;
  divWeather.style.backgroundPosition = "center";
  divWeather.style.backgroundSize = "cover";
  divWeather.style.backgroundRepeat = "no-repeat";

  /*  let cityImg = createElement("img", {
    class: "city-img",
    src: imgLink,
  });
  divWeather.innerHTML = "";
  divWeather.append(cityImg); */
};

const runImgArray = (data) => {
  console.log(data);
  let i = 0;
  displayImage(data[i].urls.regular);
  i++;
  setInterval(() => {
    if (i < data.length) {
      console.log(data[i].urls.regular);
      displayImage(data[i].urls.regular);
    } else {
      i = 0;
    }
    i++;
  }, 1000);
};

const getImageData = (location) => {
  const apiKey = "s7a3o6Wi4qd5MlZ5tlSEqqVN1Vx91LrcDevXZ0GuJCE";
  const url = `https://api.unsplash.com/search/photos?query=${location}&client_id=${apiKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      runImgArray(data.results);
    });
};

const cityInput = document.querySelector("#city_input");
const searchInfo = document.querySelector(".search-info");
const container = document.querySelector(".container");
container.style.display = "none";
document.querySelector("button").addEventListener("click", () => {
  console.log("btn clicked");
  searchInfo.style.display = "none";
  container.style.display = "inline-block";
  getWeatherData(cityInput.value);
  getImageData(cityInput.value);
});

/* Add keydown event listener to document rather than button */
/* document.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    console.log("Enter key is pressed");
    getWeatherData();
  } else {
    alert("Press enter or click in the button");
  }
}); */
