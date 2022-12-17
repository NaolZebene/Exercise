
const { mapFunction, mapNumbers, transpose } = require('./functions');

function Main(data) {
    var rowSize = Math.max.apply(Math, data.map(e => e[0]));
    var colSize = Math.max.apply(Math, data.map(e => e[1]));


    // console.log(rowSize);
    // console.log(colSize)

    var mappedSeat = mapFunction(data);
    console.log(mappedSeat)

    var all_data = {};
    all_data = mapNumbers("Aisle", 1, mappedSeat, colSize, rowSize);
    all_data = mapNumbers("Window", all_data.counter, all_data.seats, colSize, rowSize);
    all_data = mapNumbers("Middle", all_data.counter, all_data.seats, colSize, rowSize);


    // console.log(all_data)
    seats = all_data.seats;
    console.log(seats);
}

Main([[2, 3], [3, 4], [3, 2], [4, 3]]);






































