const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  // TODO: Check req.user to ensure the user's email is 'admin'
  try{
    //session cookie
    //this is saying "get the cookies from this specific session"
    const userEmail = req.cookies.email;
    //verify the jwt
    //this is ssaying "verify the email and admin email'
    const payload = jwt.verify(userEmail, 'admin');
    //assign paylod to req.user
    req.user = payload;
  
    next();
  } catch (error){
    error.message = 'You do not have access to view this page';
    error.status = 403;
    next(error);
  }
};
