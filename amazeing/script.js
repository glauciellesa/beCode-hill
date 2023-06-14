const setPlayer = (divContent, i, countColumns) => {
  const player = document.createElement("div");
  divContent.append(player);
  player.classList = "childrenContent player";
  player.setAttribute("id", "player");

  let sizeSquare = 20;
  let paddingMymain = 5;
  let gapMymain = 2;
  let gapContent = 3;
  if (i < 2) {
    player.style.left = `${(sizeSquare + paddingMymain + gapMymain) * i}px`;
    player.style.top = `${
      (sizeSquare + paddingMymain + gapMymain) * countColumns
    }px`;
  } else {
    player.style.left = `${(sizeSquare + gapContent) * i}px`;
    player.style.top = `${
      (sizeSquare + gapMymain + paddingMymain) * countColumns
    }px`;
  }
};

const createMaze = (level) => {
  const main = document.querySelector("main");
  main.classList = "myMain";
  let countRow = 0;
  let playerPositon = {
    column: 0,
    row: 0,
  };
  let treasurePositon = {
    column: 0,
    row: 0,
  };
  level.forEach((element) => {
    const divContent = document.createElement("div");
    divContent.classList = "content";
    main.append(divContent);
    for (let i = 0; i < element.length; i++) {
      const children = document.createElement("div");
      children.classList = "";
      divContent.append(children);
      if (element[i] === "*") {
        children.classList = "childrenContent walls";
      } else if (element[i] === "." || element[i] === "S") {
        children.classList = "childrenContent paths";
      } else if (element[i] === "T") {
        children.classList = "childrenContent treasure";
        treasurePositon.column = i;
        treasurePositon.row = countRow;
      }
      if (element[i] === "S") {
        setPlayer(divContent, i, countRow);
        playerPositon.column = i;
        playerPositon.row = countRow;
      }
    }
    countRow++;
  });
  return { playerPositon, treasurePositon };
};

const checkBeforMove = (board, playerAndTesourePosition, direction) => {
  console.log({ playerAndTesourePosition });
  const divPlayer = document.getElementsByClassName("player")[0];
  let column = playerAndTesourePosition.playerPositon.column;
  let row = playerAndTesourePosition.playerPositon.row;

  if (direction == "ArrowUp") {
    row--;
    if (board[row][column] == "*") {
      divPlayer.classList = "childrenContent player shake";
      return false;
    } else {
      divPlayer.classList = "childrenContent player ";
      return true;
    }
  } else if (direction == "ArrowDown") {
    row++;
    if (board[row][column] == "*") {
      divPlayer.classList = "childrenContent player shake";
      return false;
    } else {
      divPlayer.classList = "childrenContent player ";
      return true;
    }
  } else if (direction == "ArrowRight") {
    column++;
    if (board[row][column] == "*") {
      divPlayer.classList = "childrenContent player shake";
      return false;
    } else {
      divPlayer.classList = "childrenContent player ";
      return true;
    }
  } else if (direction == "ArrowLeft") {
    column--;
    if (board[row][column] == "*") {
      divPlayer.classList = "childrenContent player shake";
      return false;
    } else {
      divPlayer.classList = "childrenContent player ";
      return true;
    }
  }
};

const movePlayer = (direction, board, playerAndTesourePosition) => {
  const divPlayer = document.getElementById("player");
  const left = divPlayer.style.left.replace("px", "");
  const top = divPlayer.style.top.replace("px", "");
  let upDown = Number(top);
  let rightLeft = Number(left);

  const playerDimention = 22;
  let canMove = checkBeforMove(board, playerAndTesourePosition, direction);
  if (!canMove) {
    return;
  }
  if (direction == "ArrowUp") {
    upDown -= playerDimention;
    divPlayer.style.top = upDown + "px";
    playerAndTesourePosition.playerPositon.row -= 1;
  } else if (direction == "ArrowDown") {
    upDown += playerDimention;
    divPlayer.style.top = upDown + "px";
    playerAndTesourePosition.playerPositon.row += 1;
  } else if (direction == "ArrowRight") {
    rightLeft += playerDimention;
    divPlayer.style.left = rightLeft + "px";
    playerAndTesourePosition.playerPositon.column += 1;
  } else if (direction == "ArrowLeft") {
    rightLeft -= playerDimention;
    divPlayer.style.left = rightLeft + "px";
    playerAndTesourePosition.playerPositon.column -= 1;
  }
};

addEventListener("DOMContentLoaded", () => {
  const LEVEL_1 = [
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", ".", "*"],
    ["*", "S", ".", ".", ".", ".", ".", "*", "*", ".", "*", ".", "T"],
    ["*", "*", "*", "*", "*", ".", ".", ".", ".", ".", "*", ".", "*"],
    ["*", "*", "*", "*", "*", ".", "*", "*", "*", ".", "*", ".", "*"],
    ["*", "*", "*", "*", "*", ".", "*", "*", "*", "*", "*", ".", "*"],
    ["*", "*", "*", "*", "*", ".", "*", "*", "*", "*", "*", ".", "*"],
    ["*", "*", "*", "*", "*", ".", ".", ".", ".", ".", ".", ".", "*"],
    ["*", "*", "*", "*", "*", ".", "*", "*", "*", "*", "*", "*", "*"],
    ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*", "*", "*"],
    ["*", ".", "*", "*", "*", "*", "*", "*", ".", ".", ".", "*", "*"],
    ["*", ".", ".", ".", ".", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ];

  const LEVEL_2 = [
    [
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
    ],
    [
      "*",
      ".",
      ".",
      "S",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      "*",
    ],
    [
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      ".",
      "*",
    ],
    [
      "*",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      "*",
    ],
    [
      "*",
      ".",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
    ],
    [
      "*",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      "T",
    ],
    [
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
    ],
  ];

  const LEVEL_3 = [
    ["*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "S", "*", "*", "*"],
    ["*", "*", "*", "*", ".", "*", "*", "*"],
    ["*", "*", "*", "*", ".", "*", "*", "*"],
    ["*", "*", "*", "*", ".", "*", "*", "*"],
    ["*", ".", ".", ".", ".", ".", ".", "*"],
    ["*", ".", "*", "*", "*", "*", ".", "*"],
    ["*", ".", ".", "*", "*", "*", ".", "*"],
    ["*", ".", ".", "*", "*", "*", ".", "*"],
    ["*", "*", ".", "*", "*", "*", "*", "*"],
    ["*", "T", ".", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*"],
  ];

  let gameLevel = LEVEL_1;
  let playerAndTesourePosition = createMaze(gameLevel);

  document.addEventListener("keydown", (e) => {
    let direction = e.key;
    movePlayer(direction, gameLevel, playerAndTesourePosition);
  });
});
