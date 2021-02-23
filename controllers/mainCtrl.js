const{Merchant, Outlet, MerchantOutlet, TerminalOutlet, UserOutlet, Terminal, User} = require('../models/index')
const {comparePassword} = require('../helpers/bcrypt')

class mainController{

    static async login(req, res){
        try {
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if (!user){
                return res.status(401).json({
                    message: 'invalid email / password'
                })
            }   
            const match = comparePassword(password, user.password)
            if(match){
                req.session.userRole = user.role
                req.session.userId = user.id
                console.log(req.session.userId, 'admin is online')
                return res.status(200).json({role: user.role})
            } else {
                return res.status(401).json({
                    message: 'invalid email/password'
                })
            }
            //return res.status(200).json(user)
        } catch(err){
            console.log(err)
            return res.status(401).json(err)
        }
    }
}

module.exports = mainController