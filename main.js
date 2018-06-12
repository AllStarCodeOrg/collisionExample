const enemy = []; // using array to keep track of x and y of circle
const enemySize = 80; // diameter of enemy

const bullet = []; // using array to keep track of x and y of circle
const bulletSize = 10; // diameter of bullet
const bulletSpeed = 1; // how many units to move bullet each time it moves

/////////////
// DRAWING //
/////////////
function setup(){
    createCanvas(400,400);
    
    enemy[0] = width/2; // enemy x
    enemy[1] = 50; // enemy y
    
    bullet[0] = width/2; // bullet x
    bullet[1] = height; // bullet y (starts at bottom)
}

function draw(){
    background(42);
    drawEnemy();
    drawBullet();
}

function drawEnemy(){
    const x = enemy[0];
    const y = enemy[1];

    fill("blue");
    ellipse(x,y,enemySize);
}

function drawBullet(){
    const x = bullet[0];
    const y = bullet[1];

    fill("red");
    ellipse(x,y,bulletSize);
    
    moveBullet();
}

////////////////////////
// MOVING & COLLISION //
////////////////////////
function moveBullet(){
    const collision = checkForCollision();
    if(collision){
        // code for when collision occurs
        console.log("Collision has occured!");
        // in this case, I'll just reset bullet back to start
        bullet[1] = height;
    }else{
        // no collision
        bullet[1] -= bulletSpeed; // moving bullet
    }
}

function checkForCollision(){
    const enemyX  = enemy[0];
    const enemyY  = enemy[1];
    const bulletX = bullet[0];
    const bulletY = bullet[1];

    // absolute distance between two coordinates
    const distance = dist(enemyX,enemyY,bulletX,bulletY);

    // radius is half diameter
    const enemyRadius  = enemySize/2;
    const bulletRadius = bulletSize/2;

    return distance <= (enemyRadius + bulletRadius);
}