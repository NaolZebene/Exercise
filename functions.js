module.exports = {

    transpose: function (matrix) {
        console.log(matrix)
    },

    mapFunction: function (array) {
        var seats = [];
        for (var i = 0; i < array.length; i++)
            seats.push(Array(array[i][0]).fill().map(() => Array(array[i][1]).fill("Middle")));

        for (var i = 0; i < seats.length; i++) {
            for (var j = 0; j < seats[i].length; j++) {
                seats[i][j][0] = "Aisle";
                seats[i][j][seats[i][j].length - 1] = "Aisle";
            }
        }

        for (var i = 0; i < seats[0].length; i++)
            seats[0][i][0] = "Window";
        for (var i = 0; i < seats[seats.length - 1].length; i++)
            seats[seats.length - 1][i][(seats[seats.length - 1][i].length) - 1] = "Window";

        return seats;
    },

    mapNumbers: function (val, counter, seats, colSize, rowSize) {
        for (var i = 0; i < colSize; i++) {
            for (var j = 0; j < rowSize; j++) {
                if (seats[j] == null || seats[j][i] == null)
                    continue;
                for (k = 0; k < seats[j][i].length; k++) {
                    if (seats[j] != null && seats[j][i] != null && seats[j][i][k] === val) {
                        seats[j][i][k] = counter;
                        counter++;
                    }
                }
            }

        }
        return { seats: seats, counter: counter };
    }
}