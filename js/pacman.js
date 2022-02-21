// PacMan controls

/**
 *
 * Globals
 *
 */
// PacMan
const pacMan = document.getElementById('PacMan');
const imgArray = ['./SVG/PacMan-open.svg', './SVG/PacMan-closed.svg'];
const imgClass = pacMan.classList;
const directionArray = ['right', 'left', 'down', 'up'];
let pos = pacMan.getBoundingClientRect();

// Boundary
const pacBoundary = document.getElementById('pacBoundary');
const pacBoundaryClient = pacBoundary.getBoundingClientRect();
const borderLeftWidth = Number(pacBoundary.style.borderLeftWidth.split('px')[0]);
const borderRightWidth = Number(pacBoundary.style.borderRightWidth.split('px')[0]);
const borderBottomWidth = Number(pacBoundary.style.borderBottomWidth.split('px')[0]);
const borderTopWidth = Number(pacBoundary.style.borderTopWidth.split('px')[0]);
const bordersWidth = borderLeftWidth + borderRightWidth;
const bordersHeight = borderTopWidth + borderBottomWidth;
const boundWidth = Math.floor(pacBoundaryClient.width) - bordersWidth;
const boundHeight = Math.floor(pacBoundaryClient.height) - bordersHeight;
const boundLeft = Math.ceil(pacBoundaryClient.left) + borderLeftWidth;
const boundRight = Math.floor(pacBoundaryClient.right) - borderRightWidth;
const boundTop = Math.ceil(pacBoundaryClient.top) + borderTopWidth;
const boundBottom = Math.floor(pacBoundaryClient.bottom) - borderBottomWidth;

// let direction = 'right';
let direction = 0;
let focus = 0; // allows for open or closed PacMan mouth
let moving;
console.log(pacBoundary.offsetWidth);
console.log(pacBoundaryClient);
console.log('Div inner width: ');
console.log(boundWidth);
console.log('pos: ');
console.log(pos);

/**
 *
 * Boundaries
 *
 */
function checkBounds(direction) {
  // moving right, hit right edge
  if (
    pos.right > pacBoundaryClient.right - borderRightWidth - 20
    && direction === 0
  ) {
    direction = 1;
  }

  // moving left, hit left edge
  if (
    pos.left <= pacBoundaryClient.left + borderLeftWidth
    && direction === 1
  ) {
    direction = 0;
  }

  // moving down, hit bottom edge
  if (
    pos.bottom > pacBoundaryClient.bottom - borderBottomWidth - 20
    && direction === 2
  ) {
    direction = 3;
  }

  // moving up, hit top edge
  if (
    pos.top <= pacBoundaryClient.top + borderTopWidth
    && direction === 3
  ) {
    direction = 2;
  }

  return direction;
}

/**
 *
 * Run controller
 *
 */
function run() {
  focus = (focus + 1) % 2;
  direction = checkBounds(direction);
  pacMan.src = imgArray[focus];
  const styleLeftPos = pos.x - boundLeft;
  const styleTopPos = pos.y - boundTop;

  // move right
  if (direction === 0) {
    pos.x += 20;
    //styleLeftPos = pos.x - boundLeft;
    pacMan.style.left = styleLeftPos + 'px';
    pacMan.style.transform = 'scaleX(1)';
  }

  // move left
  if (direction === 1) {
    pos.x -= 20;
    //styleLeftPos = pos.x - boundLeft;
    pacMan.style.left = styleLeftPos + 'px';
    pacMan.style.transform = 'scaleX(-1)';
  }

  // move down
  if (direction === 2) {
    pos.y += 20;
    //styleTopPos = pos.y - boundTop;
    pacMan.style.top = styleTopPos + 'px';
    pacMan.style.transform = 'rotate(90deg)';
  }

  // move up
  if (direction === 3) {
    pos.y -= 20;
    pacMan.style.top = styleTopPos + 'px';
    pacMan.style.transform = 'rotate(-90deg)';
  }
}

/**
 *
 * User input for movement
 *
 */
function toggle() {
  if (!moving) {
    moving = setInterval(run, 200);
    pacButton.textContent = 'Stop PacMan';
  } else {
    clearInterval(moving);
    moving = null;
    pacButton.textContent = 'Start PacMan';
  }
}

function keyPress(e) {
  // eslint-disable-next-line default-case
  switch (e.key) {
    case 'ArrowRight':
      direction = 0;
      break;
    case 'ArrowLeft':
      direction = 1;
      break;
    case 'ArrowDown':
      direction = 2;
      break;
    case 'ArrowUp':
      direction = 3;
      break;
    case ' ':
      toggle();
  }
}

document.getElementById('pacButton').addEventListener('click', toggle);
pacMan.addEventListener('click', toggle);
document.addEventListener('keydown', keyPress);

/**
 *
 * Div Resizer
 *
 */
