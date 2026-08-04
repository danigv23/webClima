import express from "express";

const router = express.Router();

router.get('/lolazo', function (req, res) {
    res.send('hello mariconazo');
});

module.exports = router;