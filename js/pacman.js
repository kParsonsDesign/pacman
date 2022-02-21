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
const bordersWidth = borderLeftWidth + borderRightWidth;
const boundWidth = Math.floor(pacBoundary.getBoundingClientRect().width) - bordersWidth;

let direction = 'right';
let xDirection = 0;
let focus = 0; // allows for open or closed PacMan mouth
let moving;
console.log(pacBoundary.offsetWidth);
console.log(pacBoundary.getBoundingClientRect());
console.log('Div inner width: ');
console.log(boundWidth);
console.log('pos: ');
console.log(pos);

/**
 *
 * Boundaries
 *
 */
function checkBounds(xDirection, imgWidth) {
  if (
    pos.right >= pacBoundary.getBoundingClientRect().right - borderRightWidth
    && xDirection === 0
  ) {
    xDirection = 1;
  }

  if (
    pos.left <= pacBoundary.getBoundingClientRect().left + borderLeftWidth
    && xDirection === 1
  ) {
    xDirection = 0;
  }

  return xDirection;
}

/**
 *
 * Run controller
 *
 */
function run() {
  const imgWidth = pacMan.width;
  focus = (focus + 1) % 2;
  xDirection = checkBounds(xDirection, imgWidth);
  pacMan.src = imgArray[focus];
  if (xDirection) {
    pos.x -= 20;
    pacMan.style.left = pos.x + 'px';
    pacMan.style.transform = 'scaleX(-1)';
    // pacMan.style.webkitTransform = 'scaleX(-1)';
  } else {
    pos.x += 20;
    pacMan.style.left = pos.x + 'px';
    pacMan.style.transform = 'scaleX(1)';
    // pacMan.style.webkitTransform = 'scaleX(1)';
  }
}

/**
 *
 * Start & Stop Movement
 *
 */
const pacButton = document.getElementById('pacButton');

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

pacButton.addEventListener('click', toggle);
pacMan.addEventListener('click', toggle);
