// PacMan controls

let pos = 0;
const pacArray = ['./SVG/PacMan-open.svg', './SVG/PacMan-closed.svg'];
let direction = 0; // 0 is false
let focus = 0; // allows for open or closed PacMan mouth
let moving = false;
const img = document.getElementById('PacMan');

function checkPageBounds(direction, imgWidth) {
  let boundMax = window.innerWidth;

  if (pos + imgWidth >= boundMax || pos < 0) {
    if (direction === 0) {
      direction = 1;
    } else {
      direction = 0;
    }
  }
  return direction;
}

function run() {
  const imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth);
  img.src = pacArray[focus];
  if (direction) {
    pos -= 20;
    img.style.left = pos + 'px';
    img.style.transform = 'scaleX(-1)';
  } else {
    pos += 20;
    img.style.left = pos + 'px';
    img.style.transform = 'scaleX(1)';
  }
  // Use setTimeout to call Run every 200 millesecs
  if (moving) {
    let pacManTimer = setTimeout(run, 200);
    //console.log(pacManTimer);
  }
}

// eslint-disable-next-line no-unused-vars
function toggle() {
  // button
  const pacButton = document.getElementById('pacButton');
  const pacButtonText = ['Start PacMan', 'Stop PacMan'];
  if (pacButton.textContent === pacButtonText[0]) {
    pacButton.textContent = pacButtonText[1];
  } else {
    pacButton.textContent = pacButtonText[0];
  }

  // movement
  if (moving === false) {
    moving = true;
    run();
  } else {
    moving = false;
  }
}
