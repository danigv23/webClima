import express from "express";

const router = express.Router();

router.get('/lolazo', function (req, res) {
    res.send('hello mariconazo');
});

export default router;
