const router = require('express').Router();

//web app routes
router.get('/', (req, res) => {
    res.send('Hello World!')
});

module.exports = router;