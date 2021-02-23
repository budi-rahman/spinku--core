const{Merchant, Outlet, MerchantOutlet, TerminalOutlet, UserOutlet, Terminal, User} = require('../models/index')

class userController {
    static getUser(req, res){
        User.findAll()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: 'internal server error'})
        })
    }

    static createUser(req, res){
        const objUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthDate: req.body.birthDate,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }
        User.create(objUser)
        .then(dataUser => {
            res.status(201).json({
                id: dataUser.id, 
                firstName: dataUser.firstName,
                lastName: dataUser.lastName,
                birthDate: dataUser.birthDate,
                phone: dataUser.phone,
                email: dataUser.email,
                role: dataUser.role
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'internal server error'})
        })
    }

    static editUser(req, res){
        const id = req.params.id

        User.findAll({
            where: {id:id}
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: 'internal server error'})
        })
    }

    static async updateUser(req, res, next){
        let {firstName, lastName, birthDate, phone, email, password, role} = req.body

        const updateUser = {
            firstName, lastName, birthDate, phone, email, password, role
        }
        try{
            let result = await User.update(updateUser, {
                where: {
                    id: req.params.id
                },
                returning: true
            })
            if(result[0]){
                res.status(200).send(result[1][0])
            } else {
                next({name: 'Mechant not found'})
            }
        } catch(err){
            next(err)
        }
    }

    static deleteUser(req, res){
        User.destroy({where: {id: req.params.id}})
        .then(result => {
            console.log(result, '>>>>>>>>>>>>>>>>>result')
            if(result == 1){
                res.status(200).json({message: 'User has been deleted'})
            } else {
                res.status(404).json({message: 'User not found'})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'internal server error'})
        })
    }
}

module.exports = userController