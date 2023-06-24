const createHole = (mole, moleDiv) => {
  let i = 0;
  mole.forEach((moleLine) => {
    const line = document.createElement("div");
    moleDiv.appendChild(line).classList = "squareLine";
    moleLine.forEach((moleColunm) => {
      const column = document.createElement("div");
      column.setAttribute("id", i);
      line.appendChild(column).classList = "squareColumn";
      i++;
    });
  });
};

const selectRadomHole = () => {
  const randomHole = Math.floor(Math.random() * 11);
  const toString = randomHole.toString();
  const hole = document.getElementById(toString);
  console.log({ hole }, toString);
  const previousHole = document.querySelector("[data-hole=true]");
  console.log();
  if (previousHole) {
    previousHole.removeAttribute("data-hole");
    previousHole.classList = "squareColumn";
  }
  if (toString % 2 == 0) {
    hole.classList.add("happyMole");
    hole.setAttribute("data-hole", true);
  } else {
    hole.classList.add("sadMole");
    hole.setAttribute("data-hole", true);
  }
};

const changeSpeedMole = (timer) => {
  let randomTime = Math.floor(Math.random() * 400) + 500;
  const refPlayTime = setTimeout(() => {
    if (timer.value > 0) {
      selectRadomHole();
      changeSpeedMole(timer);
    } else {
      clearInterval(refPlayTime);
    }
  }, randomTime);
};

const updateTimer = (time) => {
  const timeLeftDiv = document.getElementById("infoTime");
  timeLeftDiv.textContent = time.value;
  const refInterval = setInterval(() => {
    if (time.value > 0) {
      time.value--;
    } else {
      alert("Game over!!!");
      clearInterval(refInterval);
    }
    timeLeftDiv.textContent = time.value;
  }, 1000);
};

const scoreClick = (score) => {
  return (e) => {
    const hole = e.target;
    if (hole.classList.contains("happyMole")) {
      hole.classList.remove("happyMole");
      score += 1;
    } else if (!hole.classList.contains("happyMole")) {
      hole.classList.remove("sadMole");
      score -= 1;
    }
    updateScore(score);
  };
};

const updateScore = (score) => {
  if (score > 0) {
    const scoreDiv = document.getElementById("infoScore");
    scoreDiv.textContent = score;
  } else {
    alert("You lost :(");
  }
};

window.addEventListener("DOMContentLoaded", () => {
  const moleDiv = document.getElementById("mole");
  const mole = [
    [".", ".", ".", "."],
    [".", ".", ".", "."],
    [".", ".", ".", "."],
  ];
  createHole(mole, moleDiv);

  const startGame = document.getElementById("startEnd");
  let timer = { value: 30 }; //estudar sobre objeto referencia
  startGame.addEventListener("click", () => {
    startEnd.style.display = "none";
    changeSpeedMole(timer);
    moleDiv.addEventListener("mousedown", scoreClick(0));
    updateTimer(timer);
  });
});