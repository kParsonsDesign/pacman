// PacMan controls

/**
 *
 * Globals
 *
 */
const imgArray = ['./SVG/PacMan-open.svg', './SVG/PacMan-closed.svg'];
const directionArray = ['right', 'left', 'up', 'down'];
let pos = 0;
let direction = 'right';
let xDirection = 0;
let focus = 0; // allows for open or closed PacMan mouth
let moving;
const pacMan = document.getElementById('PacMan');
const imgClass = pacMan.classList;
console.log(imgClass);

/**
 *
 * Boundaries
 *
 */
function checkPageBounds(xDirection, imgWidth) {
  let boundMax = window.innerWidth;

  if (pos + imgWidth >= boundMax || pos < 0) {
    if (xDirection === 0) {
      xDirection = 1;
    } else {
      xDirection = 0;
    }
  }
  return xDirection;
}

// try adding a switch case for each direction individually to handle boundaries

/**
 *
 * Run controller
 *
 */
function run() {
  const imgWidth = pacMan.width;
  focus = (focus + 1) % 2;
  xDirection = checkPageBounds(xDirection, imgWidth);
  pacMan.src = imgArray[focus];
  if (xDirection) {
    pos -= 20;
    pacMan.style.left = pos + 'px';
    pacMan.style.transform = 'scaleX(-1)';
    // pacMan.style.webkitTransform = 'scaleX(-1)';
  } else {
    pos += 20;
    pacMan.style.left = pos + 'px';
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
