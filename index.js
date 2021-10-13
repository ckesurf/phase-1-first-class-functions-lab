// Code your solution in this file!
// returnFirstTwoDrivers() — Declare the variable returnFirstTwoDrivers with const and assign an anonymous function to it. The assigned function should accept an array of drivers as an argument and return the first two drivers in the array.

const returnFirstTwoDrivers = function(drivers) {
    // return first two drivers
    // drivers = ['Chris', 'Bob', 'Freddy', 'Claudia']
    return [drivers[0], drivers[1]]
};

// returnLastTwoDrivers() — Declare a variable with const that is assigned an anonymous function. The assigned function should accept an array of drivers as an argument and return the last two drivers in the array.

const returnLastTwoDrivers = (drivers) => {
    // return [drivers[2], drivers[3]]
    // ['Sally', 'Bob', 'Freddy', 'Claudia']
    // last one: drivers[drivers.length - 1]
    // second to last one: drivers[drivers.length - 2]
    return [drivers[drivers.length - 2], drivers[drivers.length - 1]]
}

const selectDifferentDrivers = (drivers, returnLastTwoDrivers) => {
    return returnLastTwoDrivers(drivers)
}