const {getDistance} = require('../helpers/distance'); 

const calculateDistanceService =  ( arrOfCoordinates ) => {
    let distancesArr = [];
    //for each coordinate return travel distance
    arrOfCoordinates.forEach(element => {
        const distanceInMeters = getDistance(element.coordinates[0],element.coordinates[1])
        distancesArr.push(distanceInMeters);
    });
   
    return distancesArr;
  };
  

module.exports = {
    calculateDistanceService
}