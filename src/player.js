// player config
const player = {
    width: 50,
    height: 50,
    x: 170,
    y: 470,
    sprite: null,    
    pos: 2,

    loadSprite(){
        this.sprite = new Image();
        this.sprite.src = "sprites/player.png";
        this.sprite.width = this.width;
        this.sprite.height = this.height;
    },

    draw: function (ctx) {
        // ctx.fillStyle = "#00ff00";        
        ctx.drawImage(this.sprite, this.x, this.y);        
    },

    // change the player
    // between 3 different positions on screen
    changePos: function(newPos) {
        // left
        if(newPos == 1) {
            this.pos = 1;
            this.x = 20;
        }

        // middle
        if(newPos == 2) {
            this.pos = 2;
            this.x = 170;
        }

        // right
        if(newPos == 3) {
            this.pos = 3;
            this.x = 300;
        }
    },

    setControlls: function() {
        // controls
        document.addEventListener('keydown', (event) => {            
            if (event.key == 'ArrowRight' || event.key == 'd' || event.key == 'D') {
                if(this.pos != 3)
                    this.changePos(this.pos + 1);
            }
            if (event.key == 'ArrowLeft' || event.key == 'a' || event.key == 'A') {
                if(this.pos != 1)
                    this.changePos(this.pos - 1);
            }
        });    
    }
}