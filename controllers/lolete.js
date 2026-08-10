let lol = (req, res) => {
    console.log(req.query);
    res.send("works");
};

export default lol;