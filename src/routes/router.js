const { distanceCalculationController } = require('../controllers/routeCalculationController');

const router = require('express').Router();

//web app routes
router.get('/', (req, res) => {
    res.send('Routes calculations are supposed to appear here')
});
//calculation endpoint 
router.post('/calculation', distanceCalculationController)

module.exports = router;