const menu = {
    menuElement: document.querySelector("#menu"),
    hiScoreElement: document.querySelector("#hi-score"),

    show: function() {
        this.hiScoreElement.innerText = getHiScore();
        this.menuElement.style.display = "block";
    },

    hide: function() {
        this.menuElement.style.display = "none";
    }
}