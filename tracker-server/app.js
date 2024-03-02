const express = require('express')
require('dotenv')

const app = express()

const mongoConnect = require('./util/database').mongoConnect;

app.use('/',(req,res)=>{
    res.status(200).json({message:'Everything works fine on the server side'})
})

mongoConnect(() => {
    app.listen(process.env.PORT||3000,()=>{
        console.log('listening to http://localhost:3000/')
    })
});
