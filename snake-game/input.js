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
