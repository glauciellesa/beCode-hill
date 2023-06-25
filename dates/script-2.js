/* Exercise 2
Using timestamps, find how many days have passed since the 
date of your birth. Feeling old, yet?

Write a function to find how many days have passed since 
any point in time (after 1970).

 */

/* 1 day = 24h
1hora = 60 min
1 minuto = 60 segundo
*/

const checkQntDaysSince = (date) => {
  let pastTime = new Date(date);
  const atualTime = new Date();
  let elapsed = atualTime - pastTime;
  let toDay = Math.floor(elapsed / 1000 / 86400);
  return toDay;
};

console.log(`${checkQntDaysSince("1990-02-07")} days have passed since the 
date of your birth.`);

console.log(`${checkQntDaysSince("1970-01-02")} days have passed since 
any point in time (after 1970)`);
