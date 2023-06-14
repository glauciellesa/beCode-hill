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
  /* 
  a = l[1][4]; */

  const main = document.querySelector("main");
  const createMaze = (level) => {
    main.classList = "myMain";
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
        }
        if (element[i] === "S") {
          const player = document.createElement("div");
          divContent.append(player);
          player.classList = "childrenContent player";
          player.setAttribute("id", "player");
          let sizeSquare = 20;
          let paddingMymain = 5;
          let gapMymain = 2;
          let gapContent = 3.5;
          if (i < 2) {
            player.style.left = `${
              (sizeSquare + paddingMymain + gapMymain) * i
            }px`;
            player.style.top = `${sizeSquare + paddingMymain + gapMymain}px`;
          } else {
            player.style.left = `${(sizeSquare + gapContent) * i}px`;
            player.style.top = `${(sizeSquare + gapContent) * i}px`;
          }
        }
      }
    });
  };

  const keyPress = (e) => {
    const divPlayer = document.getElementsByClassName("player")[0];
    const playerSize = 22;
    if (e.key === "ArrowUp") {
      console.log("up");
      divPlayer.style.top = upDown + "px";
      upDown -= playerSize;
      console.log(upDown);
    } else if (e.key === "ArrowDown") {
      console.log("down");
      divPlayer.style.top = upDown + "px";
      upDown += playerSize;
      console.log(upDown);
    } else if (e.key == "ArrowRight") {
      console.log("Right");
      divPlayer.style.left = rightLeft + "px";
      rightLeft += playerSize;
      console.log(rightLeft);
    } else if (e.key == "ArrowLeft") {
      console.log("Left");
      divPlayer.style.left = rightLeft + "px";
      rightLeft -= playerSize;
      console.log(rightLeft);
    }
  };

  document.addEventListener("keydown", keyPress);
  createMaze(LEVEL_1);
  const divPlayer = document.getElementById("player");
  const left = divPlayer.style.left.replace("px", ""); //'70.5px'
  const top = divPlayer.style.top.replace("px", ""); //'70.5px'
  let upDown = Number(top);
  let rightLeft = Number(left);
});
