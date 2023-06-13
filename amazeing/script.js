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

  /* const LEVEL_2 = [
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
 */

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

  const keyPress = (e) => {
    const divPlayer = document.getElementsByClassName("player");
    if (e.key == "ArrowUp") {
      console.log("up");
      divPlayer.style.left = 10 + "px";
    }
    if (e.keyCode == "ArrowDown") {
      console.log("dow");
      divPlayer.style.left = 50 + "px";
    }
    if (e.keyCode == "ArrowRight") {
      console.log("Right");
      divPlayer.style.left = 100 + "px";
    }
    if (e.keyCode == "ArrowLeft") {
      console.log("Left");
      divPlayer.style.left = 150 + "px";
    }
  };

  createMaze(LEVEL_1);
  document.addEventListener("keydown", keyPress);
});
