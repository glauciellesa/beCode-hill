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

const reduceDataWeather = (data) => {
  console.log(data);
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
        console.log("i", dataWeather[i].weather[0]);
        icon = dataWeather[i].weather[0].icon;
        weatherDescription = dataWeather[i].weather[0].main;
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
  console.log({ newData }, { dataWeather });
  return newData;
};

const getWeatherData = (location) => {
  const apiKey = "b73209fdcdbea6b6ada4ed11b21e9494";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      reduceDataWeather(data);
    });
};

const cityInput = document.querySelector("#city_input");

document.querySelector("button").addEventListener("click", () => {
  console.log("btn clicked");
  getWeatherData(cityInput.value);
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
