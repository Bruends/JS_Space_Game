const levels = {
    // clone the meteor object to spawn more than 1
    meteors: [
        {...meteor},
        {...meteor}
    ],

    spawEnemies: function(ctx, score) {
        // one meteor
        if(score < 50) {            
            this.drawMeteor (ctx, 10);
            //bg config
            background.speed = 5;
        }

        // two meteors
        if(score >= 50) {            
            this.drawMeteor (ctx, 17);

            //bg config
            background.speed = 10;
        }

        // faster        
        if(score >= 70) {            
            this.drawMeteor (ctx, 23);

            //bg config
            background.speed = 20;
        }
    },

    drawMeteor: function (ctx, maxSpeed) {
        this.meteors[0].maxSpeed = maxSpeed;
        this.meteors[0].draw(ctx);
        this.meteors[0].collision(player, game)
        
        this.meteors[1].maxSpeed = maxSpeed;
        this.meteors[1].draw(ctx);
        this.meteors[1].collision(player, game);
        
    }
}