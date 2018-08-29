function Enemy(x, y) {
	// Set Enemy initial location
	this.x = x;
	this.y = y + 55;
	// Set Enemy speed
    this.horz = 101;
    this.vert = 83;
	this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position
Enemy.prototype.update = function(dt) {
	// Update Enemy location
    if (this.x < this.horz * 6) {
    	this.x += 200 * dt;
    } else {
    	this.x = -101;
    }
    // Handle collision with Player
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.reset = function(x, y) {
	this.x = x;
	this.y = y + 55;
};


function Player() {
	this.sprite = "images/char-horn-girl.png";
    this.horz = 101;
    this.vert = 83;
    this.startX = this.horz * 2;
    this.startY = (this.vert * 4) + 55;
    this.x = this.startX;
    this.y = this.startY;
    this.victory = false;
};
	
Player.prototype.update = function(dt) {
    // Update player location
    if (this.y === -28) {
       	this.victory = true;
    }
    // Handles collision with enemy
    for (enemy of allEnemies) {
      	if (this.y === enemy.y && (enemy.x + enemy.horz/2 > this.x && enemy.x < this.x + this.horz/2)) {
       		this.x = player.startX;
       		this.y = player.startY;
       	}
    }
};

Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(input) {
	// Handles player movement
	switch(input) {
		case 'left':
		if (this.x > 0) {
			this.x -= this.horz;
		}
		break;
		case 'up':
		if (this.y > 0) {
			this.y -= this.vert;
		}
		break;
		case 'right':
		if (this.x < this.horz * 4) {
			this.x += this.horz;
		}
		break;
		case 'down':
		if (this.y < this.vert * 4) {
			this.y += this.vert;
		}
		break;
	}
};

Player.prototype.reset = function() {
	this.x = player.startX;
    this.y = player.startY; 
};

// Creating player and enemies
const enemyOne = new Enemy(-101, 0);
const enemyTwo = new Enemy((-101*2), 0);
const enemyThree = new Enemy((-101*2), 83); 
const enemyFour = new Enemy((-101*4), 83);
const enemyFive = new Enemy((-101*6), 83);
const enemySix = new Enemy((-101*1.5), 166);
const enemySeven = new Enemy((-101*3.5), 166);

const allEnemies = [enemyOne, enemyTwo, enemyThree, enemyFour, enemyFive, enemySix, enemySeven];

const player = new Player();


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});