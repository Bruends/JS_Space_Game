// enemy config
const enemy = {
    width: 50,
    height: 50,
    x: 80,
    y: -50,
    speed: 12,

    fall: function () {
        if (this.y > 590) {
            this.y = -90;
            this.speed = randomBetween(10, 20);
            this.x = randomBetween(canvas.width, this.width - 10);
        }

        this.y += this.speed
    },

    draw: function (ctx) {
        this.fall(this.speed);
        ctx.fillStyle = "#ff0000";
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
    },

    collision: function (player, game) {
        if(collided(player, this)) {
            // stop game when collide
            game.stop();
        }
    }
}