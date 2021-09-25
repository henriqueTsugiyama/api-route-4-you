const {calculateDistanceService} = require('../services/routeCalculationService')

const distanceCalculationController = async (req, res) => {
    if (!req.body) {
        return res.status(422).send('Missing input data!');
    }
    try {
       const { body } = req;
        const response = calculateDistanceService(body)

        return res.status(200).send(response);
    } catch (error) {
        return res.status(500).send(error);
    }
} 

module.exports = {
    distanceCalculationController
}