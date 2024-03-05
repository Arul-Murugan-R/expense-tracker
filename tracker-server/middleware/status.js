const jwt = require('jsonwebtoken')
module.exports = (req,res,next)=>{
    const authHeader = req.get('Authorization')
    console.log(authHeader,'auth')
    if(!authHeader){
        const err = new Error('Not Authorized')
        err.statusCode = 401
        throw err
    }
    const token = authHeader.split(' ')[1]
    let jwtVerification
    try{
    jwtVerification = jwt.verify(token,process.env.SECRET)
    }catch(err){
        err.statusCode = 500
        throw err
    }
    if(!jwtVerification){
        const err = new Error('Not Authorized')
        err.statusCode = 401
        throw err
    }
    req.userId = jwtVerification._id
    next()
}