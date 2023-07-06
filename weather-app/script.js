/*  Must haves
In the home page the user can enter the city of his/her choice
 (think of the right HTML elements here)
On clicking the SUBMIT button or pressing ENTER the application 
will display the weather for the next 5 days
The application must be responsive and mobile friendly
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
        createTextNode(element.weekDayLong),
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
  let temp;

  for (let i = 0; i < dataWeather.length; i++) {
    let dayApi = new Date(dataWeather[i].dt_txt).getDate();
    let weekDayLong = new Date(dataWeather[i].dt_txt).toLocaleDateString("en", {
      weekday: "long",
    });
    let weekDayShort = new Date(dataWeather[i].dt_txt).toLocaleDateString(
      "en",
      {
        weekday: "short",
      }
    );
    if (today == dayApi) {
      if (tempMax < dataWeather[i].main.temp_max) {
        temp = Math.round(dataWeather[i].main.temp);
        icon = dataWeather[i].weather[0].icon;
        weatherDescription = dataWeather[i].weather[0].description;
        tempMax = dataWeather[i].main.temp_max;
      }
      if (tempMin > dataWeather[i].main.temp_min) {
        tempMin = dataWeather[i].main.temp_min;
      }
    } else {
      newData.push({
        weekDayShort: weekDayShort,
        weekDayLong: weekDayLong,
        icon: icon,
        weatherInfo: weatherDescription,
        minTemperature: tempMin,
        maxTemperature: tempMax,
        temp,
      });
      tempMin = Number.MAX_VALUE;
      tempMax = Number.MIN_VALUE;
      today = dayApi;
    }
  }
  displayWeatherCard(newData);
  createChart(newData);
};

const diplayTodayDate = () => {
  let month = new Date().toLocaleDateString("en", {
    month: "long",
  });
  let day = new Date().getDate();
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  console.log({ month }, { day });
  let divCurrentData = document.querySelector(".current-data");
  divCurrentData.textContent = `${month} ${day} ${hour}:${minutes}`;
};

const displayCurrentWeather = (data) => {
  const currentCity = createElement("div", { class: "currente-city" }, [
    createTextNode(`${data.city.name} - ${data.city.country}`),
  ]);
  const currentTemperature = createElement(
    "div",
    { class: "current-info-temp" },
    [
      createElement("div", { class: "temperature" }, [
        createTextNode(`${Math.round(data.list[0].main.temp)}˚`),
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
  diplayTodayDate();
};

const getWeatherData = (location) => {
  const apiKey = "b73209fdcdbea6b6ada4ed11b21e9494";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
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
  let i = 0;
  displayImage(data[i].urls.regular);
  i++;
  setInterval(() => {
    if (i < data.length) {
      displayImage(data[i].urls.regular);
    } else {
      i = 0;
    }
    i++;
  }, 2000);
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
  let city = cityInput.value;
  if (city) {
    searchInfo.style.display = "none";
    container.style.display = "inline-block";
    getWeatherData(cityInput.value);
    getImageData(cityInput.value);
  } else {
    alert("Type a city name");
  }
});

/* Add keydown event listener to document rather than button */

cityInput.addEventListener("keyup", function (e) {
  if (e.code === "Enter") {
    searchInfo.style.display = "none";
    container.style.display = "inline-block";
    getWeatherData(e.target.value);
    getImageData(e.target.value);
  }
});

const createChart = (data) => {
  console.log({ data });

  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: data.map((e) => e.weekDayShort),
      datasets: [
        {
          label: "# of Votes",
          data: data.map((e) => {
            return e.temp;
          }),
          borderWidth: 1,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: false, // Hide legend
      },
      scales: {
        y: {
          display: true, // Hide Y axis labels
        },
        x: {
          display: true, // Hide X axis labels
        },
      },
    },
  });
};
