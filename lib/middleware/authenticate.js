const jwt = require('jsonwebtoken');
//create an env file

module.exports = async (req, res, next) => {
  //DONE
  try{
  //session cookie
  //this is saying "get the cookies from this specific session"
    const cookie = req.cookies[process.env.COOKIE_NAME];
  
    //verify the jwt
    //this is ssaying "verify the JWT_SECRET and the cookie we are expecting to see"
    const payload = jwt.verify(cookie, process.env.JWT_SECRET);
    //assign paylod to req.user
    req.user = payload;

    next();
  } catch (error){
    error.message = 'You must be signed in to continue';
    error.status = 401;
    next(error);
  }
};
