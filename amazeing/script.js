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

  const main = document.querySelector("main");
  const createMaze = (level) => {
    main.classList = "myMain";
    level.forEach((element) => {
      const divContent = document.createElement("div");
      divContent.classList = "content";
      main.append(divContent);
      element.forEach((childrenElem) => {
        const children = document.createElement("div");
        children.classList = "";
        divContent.append(children);
        if (childrenElem === "*") {
          children.classList = "childrenContent walls";
        } else if (childrenElem === ".") {
          children.classList = "childrenContent paths";
        } else if (childrenElem === "S") {
          children.classList = "childrenContent player";
        } else if (childrenElem === "T") {
          children.classList = "childrenContent treasure";
        }
      });
    });
  };

  let upDown = 20;
  let rightLeft = 20;

  const keyPress = (e) => {
    console.log(e.key);
    const divPlayer = document.getElementsByClassName("player")[0];

    if (e.key === "ArrowUp") {
      console.log("up");
      divPlayer.style.top = upDown + "px";
      upDown -= 22;
      console.log(upDown);
    } else if (e.key === "ArrowDown") {
      console.log("down");
      divPlayer.style.top = upDown + "px";
      upDown += 22;
      console.log(upDown);
    } else if (e.key == "ArrowRight") {
      console.log("Right");
      divPlayer.style.left = rightLeft + "px";
      rightLeft += 22;
      console.log(rightLeft);
    } else if (e.key == "ArrowLeft") {
      console.log("Left");
      divPlayer.style.left = rightLeft + "px";
      rightLeft -= 22;
      console.log(rightLeft);
    }
  };

  createMaze(LEVEL_1);
  document.addEventListener("keydown", keyPress);
});
