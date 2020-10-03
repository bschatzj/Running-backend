
const jwt = require("jsonwebtoken");
const secrets = process.env.JWT_SECRET
const router = require('express-promise-router')()

module.exports = router


router.get('/', async (req, res) => {
    const token = req.headers.authorization;

    console.log(secrets)
    if (token) {
        jwt.verify(token, secrets, (err, decodedToken) => {
            if (err) {
                console.log(err)
                res.status(401).json({ message: "Invalid Token" });
            } else {
                req.decodedToken = decodedToken;
                res.status(200).json(decodedToken)
            }
        });
    } else {
        res.status(401).json({ message: "Did not recieve token" });
    }



})