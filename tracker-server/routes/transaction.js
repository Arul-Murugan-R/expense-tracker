const route = require('express').Router()
const {body,validationResult} = require('express-validator')
const status = require('../middleware/status')

const Transaction = require('../models/transaction')
const User = require('../models/user')

// purpose,category,dateOfTransaction,amount,description,id, userId

route.use('/all',status,(req,res,next)=>{
    try{
        Transaction.fetchAll(req.userId)
        .then((result)=>{
            res.status(200).json({message:'The resultant transaction',transactions:result})
        })
    }catch(err){
        console.log(err)
        if(!err.statusCode){
            err.statusCode = 422
        }
        next(err)
    }
})

route.post('/remove',status,async(req,res,next)=>{
    try{
        console.log(req.body,req.userId)
    const transaction = await Transaction.deleteById({userId:req.userId,prodId:req.body.id.toString()})
    console.log('remove',transaction)
    res.status(201).json({message:'Transaction is removed successfully'})
    }catch(err){
        console.log(err)
        if(!err.statusCode){
            err.statusCode = 422
        }
        next(err)
    }
})

route.post('/add-expense',status,[
    body('purpose').not().isEmpty().withMessage('Requires purpose'),
    body('category').not().isEmpty().withMessage('Requires Category'),
    body('amount').not().isEmpty().withMessage('Requires Amount')
    // .custom((val,{req})=>{
    //     console.log(req.userId,'test')
    //     return User.findById(req.userId.toString())
    //     .then((result)=>{
    //         console.log(result)
    //         if(result.savings < val){
    //             return Promise.reject('Your expense is greater than your savings')
    //         }
    //     })
    // })
    ,
    body('dateOfTransaction').not().isEmpty().withMessage('Requires Date of Expense')
    // .custom((val,{req})=>{
    //     console.log(val)
    //     if(new Date(val) > new Date()){
    //         return Promise.reject('The transaction for future cannot be recorded')
    //     }
    //     return
    // })
    ,

    
],async (req,res,next)=>{
    try{
        // console.log(req.body)
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            const error = new Error('Validation Error! '+errors.array()[0].msg)
            error.cons = errors.array()
            error.statusCode = 422
            throw error
        }
        const {purpose,category,dateOfTransaction,amount,description,id} = req.body
        // userId for input is missing as of now
        let transaction
        if(!id)
        transaction = new Transaction(purpose,category,dateOfTransaction,amount,description,null,req.userId)
        else
        transaction = new Transaction(purpose,category,dateOfTransaction,amount,description,id,req.userId)
        await transaction.save()
        return res.status(201).json({message:'Expense is added successfully',transaction})
    }catch(err){
        // console.log(err)
        if(!err.statusCode){
            err.statusCode = 422
        }
        next(err)
    }
})


route.post('/add-income',status,[
    body('purpose').not().isEmpty().withMessage('Requires purpose'),
    body('amount').trim().not().isEmpty().withMessage('Requires Amount')
    // .custom((val,{req})=>{
    //     console.log(req.userId,'test')
    //     return User.findById(req.userId.toString())
    //     .then((result)=>{
    //         console.log(result)
    //         if(result.savings < val){
    //             return Promise.reject('Your expense is greater than your savings')
    //         }
    //     })
    // })
    ,
    body('dateOfTransaction').not().isEmpty().withMessage('Requires Date of Income')
    // .custom((val,{req})=>{
    //     console.log(val)
    //     if(new Date(val) > new Date()){
    //         return Promise.reject('The transaction for future cannot be recorded')
    //     }
    // })
    ,
],async (req,res,next)=>{
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            const error = new Error('Validation Error! '+errors.array()[0].msg)
            error.cons = errors.array()
            error.statusCode = 422
            throw error
        }
        console.log(req.body)
        const {purpose,dateOfTransaction,amount,description,id} = req.body
        const category = 'salary'
        // userId for input is missing as of now
        let transaction
        if(!id)
        transaction = new Transaction(purpose,category,dateOfTransaction,amount,description,null,req.userId)
        else
        transaction = new Transaction(purpose,category,dateOfTransaction,amount,description,id,req.userId)
        await transaction.save()
        return res.status(201).json({message:'Income Details is added successfully',transaction})
    }catch(err){
        console.log(err)
        if(!err.statusCode){
            err.statusCode = 422
        }
        next(err)
    }
})


module.exports = route
