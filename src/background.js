const background = {
    y: -400,
    speed: 15,
    sprite: null,

    loadSprite: function () {
        this.sprite = new Image();
        this.sprite.src = "sprites/bg.png";
    },

    draw: function(ctx) {
        if(this.y > -40 )
            this.y = -550;

        this.y += this.speed;
        // console.log(this.y)
        // draw bg
        ctx.beginPath();
        ctx.drawImage(this.sprite, 0, this.y);
        ctx.fill();
    }
}