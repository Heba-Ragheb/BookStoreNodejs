const jwt = require('jsonwebtoken')
module.exports = (req,res,next)=>{
    try {
        const fulltoken = req.headers.authorization
        const token = fulltoken?.split(' ')[1]
        
         if(!token) return res.status(403).send("Access Denied")
         const decodedToken = jwt.verify(token , 'shhhhhh')
        req.user =decodedToken
        next()

    } catch (error) {
        console.log("error" ,err)
        res.status(400).send("invalid token")
    }
}