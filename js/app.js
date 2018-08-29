                                                 // Enemies our player must avoid
function Enemy(x, y) {
    // Variables applied to each of our instances go here
		this.x = x;
		this.y = y + 55;// Set Enemy initial location
    	this.horz = 101;
    	this.vert = 83;// Set Enemy speed

    // The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
	this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	
	// Update Enemy location
    if (this.x < this.horz * 6) {
    	this.x += 200 * dt;
    } else {
    	this.x = -101;
    }
    // Handle collision with Player
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
function Player() {
		this.sprite = "images/char-horn-girl.png";
        this.horz = 101;
        this.vert = 83;
        this.startX = this.horz * 2;
        this.startY = (this.vert * 5) - 20;
        this.x = this.startX;
        this.y = this.startY;        
};
	
	Player.prototype.update = function(dt) {
        // Update player location
        // Handle collision with enemy
    };

	Player.prototype.render = function() {
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	};

	Player.prototype.handleInput = function(input) {
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
        // Move player according to allowed key input
    };

const enemyOne = new Enemy(-101, 0);
const enemyTwo = new Enemy((-101*2.5), 0);
const enemyThree = new Enemy((-101*2), 83); 
const enemyFour = new Enemy((-101*4), 83);
const enemyFive = new Enemy((-101*6), 83);
const enemySix = new Enemy((-101*1.5), 166);
const enemySeven = new Enemy((-101*3.5), 166);
// Now instantiate your objects.

const allEnemies = [enemyOne, enemyTwo, enemyThree, enemyFour, enemyFive, enemySix, enemySeven]; // Place all enemy objects in an array called allEnemies

const player = new Player();// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
