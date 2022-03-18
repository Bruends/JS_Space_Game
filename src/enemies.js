// enemy config
const enemy = {
    width: 50,
    height: 50,
    x: 80,
    y: -50,
    speed: 12,
    sprite: null,

    loadSprite(){
        this.sprite = new Image();
        this.sprite.src = "sprites/meteor.png";
        this.sprite.width = this.width;
        this.sprite.height = this.height;
    },

    fall: function () {
        // reset y and x position after reach bottom of the screen
        if (this.y > 590) {
            this.y = -90;
            this.speed = randomBetween(10, 25);
            // variates between 3 diferent x positions
            let nextPosition = randomBetween(1, 3);
            //left
            if(nextPosition == 1) 
                this.x = 20;
            // middle
            if(nextPosition == 2) 
                this.x = 170;
            //right
            if(nextPosition == 3) 
                this.x = 300;
        }

        // fall 
        this.y += this.speed
    },

    draw: function (ctx) {
        this.fall(this.speed);
        // ctx.fillStyle = "#ff0000";
        ctx.beginPath();
        ctx.drawImage(this.sprite, this.x, this.y);
        ctx.fill();
    },

    collision: function (player, game) {
        if(collided(player, this)) {
            // stop game when collide
            game.stop();
        }
    }
}