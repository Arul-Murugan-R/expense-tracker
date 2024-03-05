const express = require('express')
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express()

const mongoConnect = require('./util/database').mongoConnect;

const authRoute = require('./routes/auth')
const transactionRoute = require('./routes/transaction')

app.use(bodyParser.json());
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    next()
})

app.use('/auth',authRoute)
app.use('/transaction',transactionRoute)

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
