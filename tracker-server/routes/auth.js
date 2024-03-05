const route = require('express').Router();
const jwt = require('jsonwebtoken')

const {body,validationResult} = require('express-validator')
const bcrypt = require('bcrypt')

const User = require('../models/user');
const Transaction = require('../models/transaction');

route.post('/verify',async (req, res, next) => {
    const token = req.body.token;
	try {
		const verificationResult = jwt.verify(token, process.env.SECRET);
		const user = await User.findById(verificationResult._id);
        const transactions = await Transaction.findAll(verificationResult._id)
        // console.log(transactions)
		return res.status(200).json({
			message: "Authentic user",
			 user: {
                _id:user._id.toString(),
                name:user.name,
                email:user.email,
                savings:user.savings,
                monthlyIncome:user.monthlyIncome,
                budget:user.budget
            },
            transactions
		});
	} catch (error) {
		res.status(401).json({
			message: "Unauthorized user",
			error: error,
		});
	}
})
route.post('/login',
[
    body('email').not().isEmpty().withMessage('Requires Email').custom((val,{req})=>{
        return User.findOne({email:val})
        .then((result)=>{
            if(!result){
                return Promise.reject('User Does Not Exist')
            }
        })
    }),
    body('password').not().isEmpty().withMessage('Password is Empty'),
],
(req, res,next)=>{
    console.log(req.body)
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const error = new Error('Validation Error! '+errors.array()[0].msg)
        error.cons = errors.array()
        error.statusCode = 422
        throw error
    }
    User.findOne({email:req.body.email})
    .then((result)=>{
        bcrypt.compare(req.body.password, result.password)
        .then(async (bool)=>{
            if(!bool){
                const error = new Error('Incorrect Password')
                error.statusCode = 401
                throw error
            }
            console.log(result,'login')
            const transactions = await Transaction.findAll(result._id.toString())
            const userData = {
                _id:result._id.toString(),
                name:result.name,
                email:result.email,
                savings:result.savings,
                monthlyIncome:result.monthlyIncome,
                budget:result.budget
            }
            const token = jwt.sign({
                user:userData,
                _id:result._id.toString(),
            },process.env.SECRET,{expiresIn:'7d'})
            res.status(200).json({message:'Logined Successfully',token:token,user:userData,transactions})

        })
        .catch(err=>{
            console.log(err)
            if(!err.statusCode){
                err.statusCode = 500
            }
            next(err)
        })
    })
    .catch(err=>{
        console.log(err)
        if(!err.statusCode){
            err.statusCode = 422
        }
        next(err)
    })
})

route.use('/login',(req, res,next)=>{
    res.status(200).json({message:'Working Good'})
})

route.post('/signup',
[
    body('email').not().isEmpty().withMessage('Requires Email').custom((val,{req})=>{
        return User.findOne({email:val})
        .then((result)=>{
            console.log(result)
            if(result){
                return Promise.reject('User Already Exist')
            }
        })
    }),
    body('name').not().isEmpty().withMessage('Requires Name'),
    body('password').not().isEmpty().withMessage('Password is Empty'),
    body('cpassword').not().isEmpty().withMessage('Confirm Password is Empty')
    
],
(req, res,next)=>{
    console.log(req.body,'test')
    const errors = validationResult(req)
    
    if(!errors.isEmpty()){
        const error = new Error('Validation Error! '+errors.array()[0].msg)
        error.cons = errors.array()
        error.statusCode = 422
        throw error
    }
        if(req.body.password != req.body.cpassword){
            const error = new Error('Both Password Should Be Same')
            error.statusCode = 401
            throw error
        }
        bcrypt.hash(req.body.password,12)
        .then((hash)=>{
            const name = req.body.name
            const email = req.body.email
            const password = hash
            const savings = 0
            const budget = {
                travel : 15,
                education:15,
                entertainment:15,
                healthCare:15,
                food:15,
                shopping:15,
                others:10,
            }
            const monthlyIncome = 0
            const user = new User(name,email,password,savings,budget,monthlyIncome)
        user.save()
        // })
        .then((result)=>{
            res.status(201).json({message:'User Signed Up Successfully',userId:result._id})
        })
    })
    .catch(err=>{
        console.log(err)
        if(!err.statusCode){
            err.statusCode = 422
        }
        next(err)
    })
    
})




module.exports = route