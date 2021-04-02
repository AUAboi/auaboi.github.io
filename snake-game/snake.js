import { inputDirection } from "./input.js";

//snake speed
export const SPEED = 1;

let addedSnakeBody = 0;

//snakes postition
//every object in this array represents coordinates of one snake-block on the canvas
const snake = [
  {
    x: 11,
    y: 11,
  },
];

export function updateSnake() {
  pushIncreasedBody();
  const direction = inputDirection();
  // move everything in position of parent element
  for (let i = snake.length - 2; i >= 0; i--) {
    snake[i + 1] = { ...snake[i] };
  }

  snake[0].x += direction.x;
  snake[0].y += direction.y;
}

export function renderSnake(canvas) {
  snake.forEach((block) => {
    const snakeDiv = document.createElement("div");
    snakeDiv.style.gridRowStart = block.y;
    snakeDiv.style.gridColumnStart = block.x;
    snakeDiv.classList.add("snake");
    snakeDiv.classList.add("snake-color");
    canvas.appendChild(snakeDiv);
  });
}

export function isSnakeOnSquare(coord, { ignoreHead = false } = {}) {
  return snake.some((snakeBody, index) => {
    if (ignoreHead && index === 0) return false;
    return snakeBody.x === coord.x && snakeBody.y === coord.y;
  });
}

function pushIncreasedBody() {
  for (let i = 0; i < addedSnakeBody; i++) {
    snake.push({ ...snake[snake.length - 1] });
  }
  addedSnakeBody = 0;
}

export function increaseBody() {
  addedSnakeBody += 1;
}

export function snakeHead() {
  return snake[0];
}

export function snakeCollision() {
  return isSnakeOnSquare(snake[0], { ignoreHead: true });
}
