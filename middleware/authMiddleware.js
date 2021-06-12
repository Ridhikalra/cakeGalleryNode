const jwt = require ('jsonwebtoken');

const requireAuth = (req,res,next) =>{
  const token =req.cookies.jwt;
  if (token){
    jwt.verify(token,'the secret key',(err, decodedToken)=>{
      if(err){
        console.log(err.message);
        res.redirect('/category')
      }
      else{
        console.log(decodedToken);
        next();
      }
    })
  }
  else{
    res.redirect('/category');
  }
}
module.exports ={requireAuth}