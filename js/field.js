var field = (function () {
    var Field = function (playerName, color) {
        this.playerName = playerName;
        this.color = color;
        this.xCoord = 0;
        this.yCoord = 0;
        this.blockedState = false;
        this.moves = 0;
        this.selected = false;
        this.checkAbleMove = function() {}
    };

    Field.prototype.getCoordinates = function () {
        return {
            x: this.xCoord,
            y: this.yCoord
        }
    }

    Field.prototype.move = function (x, y) {
        if(this.checkAbleMove()) {
            this.xCoord = x;
            this.yCoord = y;
        } else {
            this.blockedState = true;
        }
        return this.blockedState;
    }

    Field.prototype.setSelect = function() {
        this.selected = !this.selected;
    }
})();