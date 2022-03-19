function collided(obj1, obj2) {
    // check collision between 2 objects
    if (obj1.x < obj2.x + obj2.width && obj1.x + obj1.width > obj2.x &&
        obj1.y < obj2.y + obj2.height && obj1.y + obj1.height > obj2.y){
            return true
        }
}

function randomBetween(min, max){
   return Math.floor(Math.random() * (max - min + 1) + min);
}

function setHiScore(score) {
    localStorage.setItem("hiScore", score);
}

function getHiScore() {
    return localStorage.getItem("hiScore") || 0;
}