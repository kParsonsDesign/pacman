// window.onload = () => {
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
const borderLeftWidth = Number(pacBoundary.style.borderLeftWidth.split('px')[0]);
const borderRightWidth = Number(pacBoundary.style.borderRightWidth.split('px')[0]);
const borderBottomWidth = Number(pacBoundary.style.borderBottomWidth.split('px')[0]);
const borderTopWidth = Number(pacBoundary.style.borderTopWidth.split('px')[0]);
const bordersWidth = borderLeftWidth + borderRightWidth;
const bordersHeight = borderTopWidth + borderBottomWidth;

let pacBoundaryClient;
let boundWidth;
let boundHeight;
let boundLeft;
let boundRight;
let boundTop;
let boundBottom;
function getBoundaries() {
  pacBoundaryClient = pacBoundary.getBoundingClientRect();
  boundWidth = Math.floor(pacBoundaryClient.width) - bordersWidth;
  boundHeight = Math.floor(pacBoundaryClient.height) - bordersHeight;
  boundLeft = Math.ceil(pacBoundaryClient.left) + borderLeftWidth;
  boundRight = Math.floor(pacBoundaryClient.right) - borderRightWidth;
  boundTop = Math.ceil(pacBoundaryClient.top) + borderTopWidth;
  boundBottom = Math.floor(pacBoundaryClient.bottom) - borderBottomWidth;
}
window.onload = getBoundaries;
window.addEventListener('resize', getBoundaries);

// Movement
let direction = 0;
let focus = 0; // allows for open or closed PacMan mouth
let moving;


/**
 *
 * Reverse direction at boundaries
 *
 */
function checkBounds(direction) {
  // moving right and hit right edge
  if (
    pos.right > boundRight - 20
    && direction === 0
  ) {
    direction = 1;
  }

  // moving left and hit left edge
  if (
    pos.left <= boundLeft
    && direction === 1
  ) {
    direction = 0;
  }

  // moving down and hit bottom edge
  if (
    pos.bottom > pacBoundaryClient.bottom - borderBottomWidth - 20
    && direction === 2
  ) {
    direction = 3;
  }

  // moving up and hit top edge
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
  pacMan.src = imgArray[focus];
  direction = checkBounds(direction);
  const styleLeftPos = pos.x - boundLeft;
  const styleTopPos = pos.y - boundTop;

  // move right
  if (direction === 0) {
    pos.x += 20;
    pacMan.style.left = styleLeftPos + 'px';
    pacMan.style.transform = 'scaleX(1)';
  }

  // move left
  if (direction === 1) {
    pos.x -= 20;
    pacMan.style.left = styleLeftPos + 'px';
    pacMan.style.transform = 'scaleX(-1)';
  }

  // move down
  if (direction === 2) {
    pos.y += 20;
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
 * Mobile Handler
 *
 */
if (pacBoundaryClient.bottom > window.innerHeight - 5) {
  let tempHeight = window.innerHeight - pacBoundaryClient.top - 10;
  pacBoundary.style.height = tempHeight + 'px';
}

/*
function swipeEvent(e) {
  // eslint-disable-next-line default-case
  switch (e) {
    case 'swipeRight':
      direction = 0;
      break;
    case 'swipeLeft':
      direction = 1;
      break;
    case 'swipeDown':
      direction = 2;
      break;
    case 'swipeUp':
      direction = 3;
      break;
  }
}

// handle mobile swipes
if ('ontouchstart' in document.documentElement) {
  $('#pacBoundary').on('swiperight', swipeEvent('swipeRight'));
  $('#pacBoundary').on('swipeleft', swipeEvent('swipeLeft'));
  $('#pacBoundary').on('swipedown', swipeEvent('swipeDown'));
  $('#pacBoundary').on('swipeup', swipeEvent('swipeUp'));
}*/

/**
 *
 * Div Resizer
 *
 */

//  }
