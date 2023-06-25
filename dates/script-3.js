/* Exercise 3
Using timestamps, find the exact time and date we 
will be in 80000 hours.

Write a function to display the time and date for
 any amount of hours given in the future. Create a 
 number input for the hours and listen for keyup events, 
 dynamically display the date in the number of hours given 
 by the input.

 */

/* 1 day = 24h
1hora = 60 min
1 minuto = 60 segundo
*/

const checkQntDaysFuture = (hour) => {
  let toMilisecond = hour * 3600 * 1000;
  let atualTime = new Date().getTime();
  let future = atualTime + toMilisecond;

  const date = new Date(future);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  console.log(formattedDate);
};

checkQntDaysFuture(24);
checkQntDaysFuture(48);
checkQntDaysFuture(80000);
