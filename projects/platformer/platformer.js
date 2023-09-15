$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    createPlatform(375, 675, 150, 15);
    createPlatform(575, 600, 100, 15);
    createPlatform(375, 525, 100, 15);
    createPlatform(575, 450, 100, 15);
    createPlatform(375, 375, 100, 15);
    createPlatform(775, 375, 100, 15);
    createPlatform(975, 300, 100, 15);
    createPlatform(825, 600, 100, 15);
    createPlatform(20, 720, 100, 15);
    createPlatform(1300, 20, 15, 15);
    createPlatform(1300, 60, 15, 75);
    createPlatform(1250, 20, 15, 115);
    createPlatform(1200, 60, 60, 15);
    createPlatform(1200, 20, 15, 115);
    createPlatform(575, 275, 100, 15);
    createPlatform(565, 190, 15, 100);
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

createCollectable("database", 375, 100, 1 ,0);
createCollectable("database", 825, 500, 1, 0);
createCollectable("database", 975, 100, 1, 0);
createCollectable("database", 590, 50, 1, 0);


    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

createCannon("right", 600, 3000);
createCannon("top", 450, 1500);
createCannon("right", 800, 1);
createCannon("top", 750, 1900);
createCannon("bottom", -50, 1);
createCannon("left", -50, 1);
createCannon("top", 1450, 1);
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
