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

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300, 610, 50, 25, "red");
    createPlatform(435, 580, 80, 70, "blue") 
    createPlatform(600, 530, 110, 50, "yellow")
    createPlatform(860, 500, 120, 120, "green")
    createPlatform(1100, 400 , 180, 180, "black")
    // TODO 3 - Create Collectables
    createCollectable("max", 300, 150, 0.9, 0.5);
    createCollectable("grace", 450, 200, 0.6, 0.3)
    createCollectable("kennedi", 610, 250, 0.2, 0.4 )
    
    // TODO 4 - Create Cannons
    createCannon("right", 500, 2000);
    createCannon("left", 550, 3000)
    createCannon("top", 650, 1000)
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
