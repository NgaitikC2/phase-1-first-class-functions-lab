function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  function createFareMultiplier(multiplier) {
    return function (value) {
      return value * multiplier;
    };
  }
  
  function fareDoubler(fare) {
    return fare * 2;
  }
  
  function fareTripler(fare) {
    return fare * 3;
  }
  
  function selectDifferentDrivers(drivers, func) {
    return func(drivers);
  }
  

//   index.js
//   returnFirstTwoDrivers()
//     ✓ should return a new array containing the first two drivers from the passed-in array
//   returnLastTwoDrivers()
//     ✓ should return an array of the last two drivers
//   selectingDrivers
//     ✓ has the `returnFirstTwoDrivers` function to as its first element
//     ✓ has the `returnLastTwoDrivers` function to as its last element
//     ✓ allows us to invoke either function from the array
//   createFareMultiplier()
//     ✓ returns a function
//     ✓ should multiply a given value using the created multiplier
//   fareDoubler()
//     ✓ is a function
//     ✓ doubles fares
//   fareTripler()
//     ✓ is a function
//     ✓ triples fares
//   selectDifferentDrivers(arrayOfDrivers, function)
//     ✓ returns the first two drivers when passed returnFirstTwoDrivers() as the second argument
//     ✓ returns the last two drivers when passed returnLastTwoDrivers() as the second argument

