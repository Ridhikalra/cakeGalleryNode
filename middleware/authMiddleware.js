const jwt = require('jsonwebtoken');

const requireAuth = (req,res,next) =>{

    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, '')
        if(err){
            console.log(err.message);
            res.redirect('/category')
        } 
        else {
            console.log(decodedToken);
            next();
        }
    }
    else{
        res.redirect('/category');
    }
}
module.esports = {requireAuth};