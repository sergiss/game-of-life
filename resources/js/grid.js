function Grid(cols, rows) {

    this.cols = cols;
    this.rows = rows;
    this.data = [];

    this.getIndex = function(index) {
        return this.data[index];
    }

    this.get = function(x, y) {
        let index = x * this.rows + y;
        return this.getIndex(index);
    }

    this.setIndex = function(index, value) {
        this.data[index] = value;
    }

    this.set = function(x, y, value) {
        let index = x * this.rows + y;
        this.setIndex(index, value);
    }

    this.getRows = function() {
        return this.rows;
    }

    this.getCols = function() {
        return this.cols;
    }

}