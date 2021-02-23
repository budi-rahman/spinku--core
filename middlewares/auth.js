const {cekToken} = require('../helpers/jwt')
const{Merchant, Outlet, MerchantOutlet, TerminalOutlet, UserOutlet, Terminal, User} = require('../models/index')

function authenticate(req, res, next) {
    //cek token
    try{
        let decoded = cekToken(req.headers.access_token)
        //console.log(decoded)
        User.findOne({where : { email: decoded.email}})
        .then(find => {
           if(!find){
            res.status(401).json({message: 'Please login first'})
        } else {
            //data user
            req.user = find
            next()
        } 
        })  
        .catch(err =>{
            res.status(500).json({message: err.message})
        }) 
    } catch(err){
        res.status(400).json({ message: err.message})
    }
}

function authorize(req, res, next){
    Outlet.findOne({ where: { id: req.params.id}})
    .then(outlet => {
        if(!outlet || outlet.user_id !== req.outlet.id){
            res.status(401).json({ message: 'not yours'})
        } else {
            next()
        }
    })
    .catch(err => {
        res.status(500).json({message : err.message})
    })
}

module.exports = {
    authenticate,
    authorize
}