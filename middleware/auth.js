require('dotenv').config()
const jwt = require('jsonwebtoken')

function auth(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    // if (!authHeader) {
    //     let err = new Error('You are not authenticated!');
    //     res.setHeader('WWW-Authenticate', 'Basic');
    //     err.status = 401;
    //     return next(err)
    // }

    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      console.log(err)
      if (err) return res.sendStatus(403)
      req.user = user
      next()
    })
  }

  
module.exports=auth;
