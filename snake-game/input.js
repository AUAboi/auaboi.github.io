const canvas = document.querySelector("#canvas");
var hammertime = new Hammer(canvas);
hammertime.get("swipe").set({
  direction: Hammer.DIRECTION_ALL,
});

let input = {
  x: 0,
  y: 0,
};

let lastInput = {
  x: 0,
  y: 0,
};

export function inputDirection() {
  lastInput = input;
  return input;
}

hammertime.on("pan", function (ev) {
  console.log(ev);
});

//Setting inputs
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" && lastInput.y === 0) {
    input = {
      x: 0,
      y: -1,
    };
  } else if (e.key === "ArrowDown" && lastInput.y === 0) {
    input = {
      x: 0,
      y: 1,
    };
  } else if (e.key === "ArrowLeft" && lastInput.x === 0) {
    input = {
      x: -1,
      y: 0,
    };
  } else if (e.key === "ArrowRight" && lastInput.x === 0) {
    input = {
      x: 1,
      y: 0,
    };
  }
});

hammertime.on("swipe", (e) => {
  if (e.swipe === "swipeup" && lastInput.y === 0) {
    input = {
      x: 0,
      y: -1,
    };
  } else if (e.key === "swipedown" && lastInput.y === 0) {
    input = {
      x: 0,
      y: 1,
    };
  } else if (e.key === "swipeleft" && lastInput.x === 0) {
    input = {
      x: -1,
      y: 0,
    };
  } else if (e.key === "swiperight" && lastInput.x === 0) {
    input = {
      x: 1,
      y: 0,
    };
  }
});
