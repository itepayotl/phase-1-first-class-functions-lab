const returnFirstTwoDrivers = function (arrayDrivers) {
    let drivers = [...arrayDrivers.slice(0,2)];
    return drivers
} 
const returnLastTwoDrivers= function (arrayDriver) {
    let drivers = [...arrayDriver.slice(2,4)];
    return drivers
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(value) {
    return function( ride = 5){
    return ride * value;
}
}
const fareDoubler = function(ride) {
    return createFareMultiplier (2)(ride);
}
const fareTripler = function(ride) {
    return createFareMultiplier(3)(ride)
}
function selectDifferentDrivers(driversArray, fn) {
    return fn(driversArray)
}