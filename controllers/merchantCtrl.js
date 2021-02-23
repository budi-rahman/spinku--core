const{Merchant, Outlet, MerchantOutlet, TerminalOutlet, UserOutlet, Terminal, User} = require('../models/index')

class merchantController {
    static getMerchant(req, res){
        Merchant.findAll()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: 'internal server error'})
        })
    }

    static createMerchant(req, res){
        const objMerch = {
            merchantCode: req.body.merchantCode,
            name: req.body.name,
            location: req.body.location
        }
        Merchant.create(objMerch)
        .then(dataMerch => {
            res.status(201).json({
                id: dataMerch.id, 
                merchantCode: dataMerch.merchantCode,
                name: dataMerch.name,
                location: dataMerch.location
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'internal server error'})
        })
    }

    static editMerchant(req, res){
        const id = req.params.id

        Merchant.findAll({
            where: {id:id}
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({message: 'internal server error'})
        })
    }

    static async updateMerchant(req, res, next){
        let {merchantCode, name, location } = req.body

        const updateMerch = {
            merchantCode,
            name,
            location
        }
        try{
            let result = await Merchant.update(updateMerch, {
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

    static deleteMerchant(req, res){
        Merchant.destroy({where: {id: req.params.id}})
        .then(result => {
            console.log(result, '>>>>>>>>>>>>>>>>>result')
            if(result == 1){
                res.status(200).json({message: 'Merchant has been deleted'})
            } else {
                res.status(404).json({message: 'Merchant not found'})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'internal server error'})
        })
    }
}

module.exports = merchantController