const{Merchant, Outlet, MerchantOutlet, TerminalOutlet, UserOutlet, Terminal, User} = require('../models/index')

class terminalController {
    static getTerminal(req, res){
        Terminal.findAll()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: 'internal server error'})
        })
    }

    static createTerminal(req, res){
        const objTerminal = {
            imei: req.body.imei,
            phone: req.body.phone,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            terminalCode: req.body.terminalCode
        }
        Terminal.create(objTerminal)
        .then(dataTerminal => {
            res.status(201).json({
                id: dataTerminal.id, 
                imei: dataTerminal.imei,
                phone: dataTerminal.phone,
                username: dataTerminal.username,
                email: dataTerminal.email,
                terminalCode: dataTerminal.terminalCode
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'internal server error'})
        })
    }

    static editTerminal(req, res){
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

    static async updateTerminal(req, res, next){
        let {imei, phone, username, email, password, terminalCode} = req.body

        const updateTerminal = {
            imei, phone, username, email, password, terminalCode
        }
        try{
            let result = await Terminal.update(updateTerminal, {
                where: {
                    id: req.params.id
                },
                returning: true
            })
            if(result[0]){
                res.status(200).send(result[1][0])
            } else {
                next({name: 'Terminal not found'})
            }
        } catch(err){
            next(err)
        }
    }

    static deleteTerminal(req, res){
        Terminal.destroy({where: {id: req.params.id}})
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

module.exports = terminalController