function randomRangeNumber(minNumber, maxNumber){
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
}
randomRangeNumber(1, 9);

//Only change code below this line.
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}



console.log(randomRange(5,15));

module.exports = randomRangeNumber;
