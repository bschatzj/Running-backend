const JWT_SECRET = process.env.JWT_SECRET

const jwt = require('jsonwebtoken')

authenticate = async (req, res, next) => {
  const token = req.headers.authorization


  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Invalid Token" });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "Did not recieve token" });
  }
}

const generateToken = user => {
  console.log("secret", JWT_SECRET)

  const payload = {
    ...user,
  }
  const options = {
    expiresIn: '1d',
  }
  return jwt.sign(payload, JWT_SECRET, options)
}

module.exports = { authenticate, generateToken }
