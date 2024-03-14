const express = require('express')
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express()

const mongoConnect = require('./util/database').mongoConnect;

const authRoute = require('./routes/auth')
const transactionRoute = require('./routes/transaction');
const status = require('./middleware/status');
const User = require('./models/user');

app.use(bodyParser.json());
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    next()
})

app.use('/auth',authRoute)
app.use('/transaction',transactionRoute)
app.post('/setbudget',status,async (req,res,next)=>{
    try{
        const {budget} = req.body
        const user = await User.findById(req.userId)
        if(!user){
            throw new Error("User does not exists")
        }
        console.log(user)
        user.id = user._id
        delete user._id
        user.budget = budget
        console.log(user)
        const {name,email,password,savings,monthlyIncome,id} = user
        const updatedUser = new User(name,email,password,savings,budget,monthlyIncome,id)
        await updatedUser.save()
        res.status(201).json({
            message:'Budget Updated Successfully!!', budget
        })
        
    }catch(err){
        console.log(err)
        if(!err.statusCode){
            err.statusCode = 422
        }
        next(err)
    }
})

app.use('/',(req,res)=>{
    res.status(200).json({message:'Everything works fine on the server side'})
})

app.use((err, req, res, next) => {
    console.error(err)
    res.status(err.statusCode || 500).json({
        message : err.message
    })
})

app.use((req, res, next) => {
    res.status(404).json({ pageTitle: 'Page Not Found', path: '/404' });
});

mongoConnect(() => {
    app.listen(process.env.PORT||3000,()=>{
        console.log('listening to http://localhost:3000/')
    })
});
