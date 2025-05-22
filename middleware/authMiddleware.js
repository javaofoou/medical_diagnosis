import jwt from "jsonwebtoken";
import {User} from "../models/User.js";

export const requireAuth = (req,res,next) =>{
    const token = req.cookies.jwt;
    //check jwt exist & is verified
    if(token) {
        jwt.verify(token,"diagnosis0101",(err,decodedToken)=>{
         if(err){
            res.redirect('login');
         }
         else{
            next();
         }
        });
    }
    else{
        res.redirect('login');
    }
}

//check current user
export const checkUser = (req,res,next) =>{
    const token = req.cookies.jwt;
    if(token){
       jwt.verify(token,"diagnosis0101",async(err,decodedToken)=>{
         if(err){
            res.locals.user = null;
            next();
         }
         else{
            let user = await User.findById(decodedToken.id);
            res.locals.user = user;
            next();
         }
        });
    }
    else{
       res.locals.user = null;
       next();
    }
}