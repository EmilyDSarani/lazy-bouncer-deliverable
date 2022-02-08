module.exports = async (req, res, next) => {
  // TODO: Check req.user to ensure the user's email is 'admin'
  const admin = 'admin';
  const userEmail = req.user.email;
  try{
    if (admin === userEmail){
      next();
    } else {
      throw new Error('User is not Admin');
    }
   
  } catch (error){
    error.message = 'You do not have access to view this page';
    error.status = 403;
    next(error);
  }
};
