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

const createRadomHole = () => {
  const randomHole = Math.floor(Math.random() * 11);
  const toString = randomHole.toString();
  const hole = document.getElementById(toString);
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
  let randomTime = Math.floor(Math.random() * 400) + 900;
  const refPlayTime = setTimeout(() => {
    if (timer.second > 0) {
      createRadomHole();
      changeSpeedMole(timer);
    } else {
      clearInterval(refPlayTime);
    }
  }, randomTime);
};

const updateTimer = (time) => {
  const timeLeftDiv = document.getElementById("infoTime");
  timeLeftDiv.textContent = time.second;
  const refInterval = setInterval(() => {
    if (time.second > 0) {
      time.second--;
    } else {
      alert("Game over!!!");
      clearInterval(refInterval);
    }
    timeLeftDiv.textContent = time.second;
  }, 1000);
};

const scoreClick = (controls) => {
  console.log("click", controls);
  return (e) => {
    const hole = e.target;
    if (hole.classList.contains("happyMole")) {
      hole.classList.remove("happyMole");
      controls.score += 1;
    } else if (!hole.classList.contains("happyMole")) {
      hole.classList.remove("sadMole");
      controls.score -= 1;
    }
    updateScore(controls);
  };
};

const updateScore = (controls) => {
  console.log("update", controls);
  if (controls.score > 0) {
    const scoreDiv = document.getElementById("infoScore");
    scoreDiv.textContent = controls.score;
  } else {
    alert("You lost :(");
    location.reload();
  }
};

const startGame = (controls, e) => {
  if (e) {
    e.target.style.display = "none";
  }
  changeSpeedMole(controls);
  updateTimer(controls);
};

window.addEventListener("DOMContentLoaded", () => {
  const moleDiv = document.getElementById("mole");
  const table = [
    [".", ".", ".", "."],
    [".", ".", ".", "."],
    [".", ".", ".", "."],
  ];
  createHole(table, moleDiv);
  const startBtn = document.getElementById("startEnd");
  let controls = { second: 30, score: 0 };

  // estudar sobre objeto referencia
  startBtn.addEventListener("click", (evt) => {
    startGame(controls, evt);
  });
  moleDiv.addEventListener("mousedown", scoreClick(controls));
});
