// enemy config
const meteor = {
    width: 50,
    height: 50,
    x: 170,
    y: -50,
    speed: 5,
    maxSpeed: 12,
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
            this.speed = randomBetween(this.maxSpeed - 5, this.maxSpeed);
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
        ctx.drawImage(this.sprite, this.x, this.y);        
    },

    collision: function (player, game) {
        if(collided(player, this)) {
            // stop game when collide
            game.stop();
        }
    }
}