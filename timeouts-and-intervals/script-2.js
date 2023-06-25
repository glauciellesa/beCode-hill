/* Write a function that displays every second that has passed
 on the page since it was opened. The display should be refreshed every second. 
 If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have 
 passed" (for 120 seconds and more), etc. */

const displayTime = () => {
  const divTime = document.getElementById("time");
  let minute = 0;
  let countSecond = 0;

  setInterval(() => {
    if (countSecond < 5) {
      divTime.textContent = `${minute}  ${
        minute < 2 ? "minute" : "minutes"
      } and ${countSecond} ${
        countSecond < 2 ? "second" : "seconds"
      } has passed since you open this page`;
      countSecond++;
    } else {
      minute++;
      console.log(time);
      countSecond = 0;
    }
  }, 1000);
};

displayTime();
