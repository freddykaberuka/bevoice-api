import models from '../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();

export function signUp(req,res){
    models.User.findOne({where:{email:req.body.email}}).then(result =>{
        if(result){
            res.status(409).json({
                message:"Email exist"
            })
        }else{
    bcrypt.hash(req.body.password,10, (err,hash)=>{
        if(err){
            res.status(500).json({
                message:"something went wrong"
            })
        }else{

    const user = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        password : hash
    };
    models.User.create(user).then(result=>{
        res.status(201).json({
            message:'user created successfull'
        })
        }).catch(error =>{
            res.status(500).json({
                message:'something went wrong'
            })
        })
        }
    })
            
        }
    }).catch(error =>{
            res.status(500).json({
                message:'something went wrong'
            })
        })
}

//login
function logIn(req,res){
    models.User.findOne({where:{email:req.body.email}}).then(user=>{
        if(user === null){
            res.status(401).json({
                message:"Auth Failed"
            })
        }else{
            bcrypt.compare(req.body.password, user.password, (error,result)=>{
                if(error){
                    res.status(401).json({
                        message:"Auth Failed"
                    })
                }if(result){
                    const token = jwt.sign({
                        email:user.email,
                        userId:user.id 
                    },process.env.JWT_SECRET,(err,result)=>{
                        if(err){
                            res.status(401).json({
                                message:"unAuthorized"
                            })
                        }if(result){

                    res.status(200).json({
                        message:"User Authorized",
                        token:token
                    })
                }
            })
                        }
                    });
        }
        }
    ).catch(error=>{
        res.status(500).json({
            message:"something went wrong"
        })
    })
}
module.exports = {
    signUp: signUp,
    logIn:logIn
} 