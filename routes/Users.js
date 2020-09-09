const express= require("express")
const users = express.Router()
const cors= require('cors')
const jwt = require('jsonwebtoken')
const bcrypt= require('bcrypt')

const User= require("../model/User")
const e = require("cors")
users.use(cors())

process.env.SECRET_KEY= 'secret'

users.post('/register', (req, res) => {
    const today =new Date()
    const userdata= {
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        u_email: req.body.u_email,
        u_password: req.body.u_password,
        date: today
    }

    User.findOne({
        where: {
            u_email: req.body.u_email  
        }
    })
    .then(tap_users => {
        if(!tap_users){
            bcrypt.hash(req.body.u_password, 10, (err, hash) => {
                userdata.u_password= hash
                User.create(userdata)
                .then(tap_users =>{
                    res.json({status: tap_users.u_email + ' Registered'})
                })
                .catch(err =>{
                    res.json('error: ' +err)
                })
            })
        }
        else{
            res.json({error: 'user already exists'})
        }
    })
    .catch(err =>{
        res.send('error: ' +err)
    })
})


users.post('/login', (req, res) => {
    User.findOne({
        where:{
            u_email: req.body.u_email
        } 
    })
    .then(tap_users =>{
        if(tap_users)
        {
            if(bcrypt.compareSync(req.body.u_password, tap_users.u_password)){
                let token = jwt.sign(tap_users.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1400
                })
                res.send(token)
            }
        }else{
            res.status(400).json({error: 'User Does not exit'})
        }
    })
    .catch(err =>{
        res.status(400).json({ error: err })
    })
})




users.get('/user_profile_list', (req, res) => {
    User.findAll({
        where:{
            flag: 1
        } 
    })
    .then(tap_users =>{
        if(tap_users)
        {
            return res.json({
                data:tap_users
            })
        }else{
            res.status(400).json({error: 'User Does not exit'})
        }
    })
    .catch(err =>{
        res.status(400).json({ error: err })
    })
})

module.exports = users