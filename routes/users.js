const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('Users page');
});

router.get('/id', (req, res) => {
	res.send(`user id`);
});

module.exports = router;
