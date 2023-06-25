/* Exercise 1
Find the timezones of :

Anchorage (USA)
Reykjavik (Iceland)
Saint-Petersburg (Russia)
And display the date and time of these cities along with the time and date of Brussels. */

const getCityTime = (time) => {
  let data = new Date().toLocaleString("en-US", {
    timeZone: time,
  });
  return data;
};

console.log(`Brussels: ${getCityTime("Europe/Brussels")} `);
console.log(`Anchorage: ${getCityTime("America/Anchorage")} `);
console.log(`Reykjavik: ${getCityTime("Atlantic/Reykjavik")}`);
console.log(`Saint-Petersburg: ${getCityTime("Europe/Moscow")}`);
