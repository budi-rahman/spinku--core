const{Merchant, Outlet, MerchantOutlet, TerminalOutlet, UserOutlet, Terminal, User} = require('../models/index')

class outletController {
    static getOutlet(req, res){
        Outlet.findAll()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: 'internal server error'})
        })
    }

    static createOutlet(req, res){
        const objOutlet = {
            outletName: req.body.outletName,
            address: req.body.address,
            outletCode: req.body.outletCode,
        }
        Outlet.create(objOutlet)
        .then(dataOutlet => {
            res.status(201).json({
                id: dataOutlet.id, 
                outletName: dataOutlet.outletName,
                address: dataOutlet.address,
                outletCode: dataOutlet.outletCode
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'internal server error'})
        })
    }

    static editOutlet(req, res){
        const id = req.params.id

        Outlet.findAll({
            where: {id:id}
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: 'internal server error'})
        })
    }

    static async updateOutlet(req, res, next){
        let {outletName, address, outletCode } = req.body

        const updateOutl = {
            outletName,
            address,
            outletCode
        }
        try{
            let result = await Outlet.update(updateOutl, {
                where: {
                    id: req.params.id
                },
                returning: true
            })
            if(result[0]){
                res.status(200).send(result[1][0])
            } else {
                next({name: 'Outlet not found'})
            }
        } catch(err){
            next(err)
        }
    }

    static deleteOutlet(req, res){
        Outlet.destroy({where: {id: req.params.id}})
        .then(result => {
            console.log(result, '>>>>>>>>>>>>>>>>>result')
            if(result == 1){
                res.status(200).json({message: 'Outlet has been deleted'})
            } else {
                res.status(404).json({message: 'Outlet not found'})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'internal server error'})
        })
    }
}

module.exports = outletController