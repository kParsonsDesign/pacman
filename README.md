# PacMan
> A "PacMan" style project in JavaScript developed from Week 4 MIT Full Stack Development Certificate Program

## Description
This project is an extended development based on a simple assignment to move "PacMan" horizontally across the screen and back again. I have added a number of my own improvements including vertical movement, my own image, and user controls.

### Original Project Goals:
The original project goal was to move a "PacMan" figure horizontally across the screen and have it turn around when it hit the edge.
- Change the image src from "open" to "closed" and back on each itteration
- Move the image horizontally from left to right a set amount on each itteration
- Detect window edges and reverse direction
- Change the images to left facing versions when moving left
- Start and stop movement by clicking the PacMan image

### Refactoring:
I am attempting to make this more like a PacMan game.
- Created my own svg image file(s) in Adobe Illustrator
- Use CSS properties to rotate and reverse the images as needed
  - This allows me to use only 2 images ("open" and "closed") for movement in all 4 directions
  - The original project used 4 separate png images to move PacMan in a horizontal direction only (moving right open and closed mouth, and moving left open and closed mouth).
- Start / Stop movement by space bar and button click
- Change direction by keyboard arrows and on-screen arrows
- Added vertical movement and boundary detection
- Added a Boundary box so PacMan stays inside the box and does not move to the edges of the screen
- Boundary edge redetection on window resize

## To Run
This project can be viewed live at [kParsonsDesign.github.io/pacman/](kParsonsDesign.github.io/pacman/).

<!--### Support-->

## Roadmap
Future improvements include:
- Dot eating
- HTML Canvas
- Maze maps
- Score keeping
- Better mobile device handling

## Disclaimer
This is a personal project based on a copyrighted or trademarked work. It is intended for educational and entertainment purposes only. I make no profit from this project and it is not available for resale by any other entity.

## License
[Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](https://github.com/kParsonsDesign/pacman/blob/main/LICENSE)

This is a human-readable summary of (and not a substitute for) the license:

### You are free to:

**Share** -- copy and redistribute the material in any medium or format

**Adapt** -- remix, transform, and build upon the material

### Under the following terms:

**Attribution** -- You must give *appropriate credit*, provide a link to the license, and *indicate if changes were made*. You may do so in any reasonable manner, but not in any way that suggests the lecensor endorses you or your use.

**NonCommercial** -- You may **not** use the material for *commercial purposes*.

**ShareAlike** -- If you remix, transform, or build upon the material, you must distribute your contributions under the *same license* as the original.

**No additional restrictions** -- You may not apply legal terms or *technological measures* that legally restrict others from doing anything the license permits.

### Notices:

You do not have to comply with the license for elements of the material in the public domain or where your use is permitted by an applicable *exception or limitation*.

No warranties are given. The license may not give you all of the permissions necessary for your intended use. For example, other rights such as *publicity, privacy, or moral rights* may limit how you use the material.
